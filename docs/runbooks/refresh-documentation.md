# คู่มือ: รีเฟรช AppSheet Documentation

คู่มือนี้อธิบายวิธี export เอกสารใหม่จาก AppSheet และอัปเดตใน repo

## ขั้นตอน

### 1. ดาวน์โหลด CSV จาก AppSheet

1. เข้า AppSheet Editor ของแอป "เผ่าปัญญา ทรานสปอร์ต"
2. ไปที่เมนู **Manage** → **Integrations**
3. คลิก **App Documentation**
4. ดาวน์โหลดไฟล์ `AppSheet_Documentation.csv`

### 2. ตรวจสอบ CSV ก่อนอัปโหลด

เปิดไฟล์ใน text editor (เช่น VS Code) แล้วตรวจ:
- ✅ ไม่มีข้อมูลพนักงานจริง (บัตรประชาชน, เบอร์โทร)
- ✅ ไม่มีราคาจริงของ transaction
- ✅ มีเพียงชื่อตาราง/คอลัมน์/expression
- ⚠️ ถ้ามี UUID ใหม่ที่ไม่เคยมีใน repo ให้แจ้งทีม security ก่อน

### 3. ทับไฟล์ CSV ใน repo

```bash
# สมมุติว่าดาวน์โหลดไฟล์ไว้ที่ ~/Downloads/
cp ~/Downloads/AppSheet_Documentation.csv data/AppSheet_Documentation.csv

# ตรวจ diff
git diff data/AppSheet_Documentation.csv
```

### 4. รัน Google Apps Script เพื่อ regenerate markdown

1. อัปโหลด CSV ใหม่ไปยัง Google Drive (ทับไฟล์เดิม)
2. เปิด Google Sheets ที่ใช้สคริปต์
3. ไปที่ **Extensions** → **Apps Script**
4. รันเมนู **"📋 AppSheet Importer"** → **"🚀 นำเข้าข้อมูล"**
5. รันเมนู **"📋 AppSheet Importer"** → **"📝 สร้างไฟล์ Markdown (.md) ทุกหมวดหมู่"**
6. รอจนระบบ generate เสร็จ

### 5. ดาวน์โหลด markdown จาก Google Drive

ดาวน์โหลดไฟล์ markdown จากแต่ละโฟลเดอร์ใน Google Drive มาทับใน `exports/`

### 6. ตรวจ diff และ commit

```bash
git status
git diff --stat

# commit
git add data/AppSheet_Documentation.csv exports/
git commit -m "docs(export): refresh AppSheet documentation to v1.004XXX

- Added N new tables
- Updated schema for ...
- No sensitive data added"
```

### 7. push และเปิด PR

```bash
git push origin main
# หรือถ้าใช้ branch:
git checkout -b docs/refresh-export-YYYY-MM
git push -u origin docs/refresh-export-YYYY-MM
# แล้วเปิด PR บน GitHub
```

## การแก้ปัญหา

| ปัญหา | วิธีแก้ |
|---|---|
| CSV ดาวน์โหลดมาแล้วเปิดไม่ได้ | ลองเปิดใน VS Code แทน Excel |
| สคริปต์ Apps Script รันไม่ผ่าน | ตรวจ authorization ใน Apps Script |
| Markdown ไม่ update | ลบไฟล์เก่าใน Drive ก่อนรันสคริปต์ |
| git diff ใหญ่เกินไป | ใช้ `git diff --stat` ดูสรุปก่อน |
