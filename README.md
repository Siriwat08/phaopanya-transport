# 📊 AppSheet Documentation Parser & Markdown Generator

เครื่องมือ Google Apps Script สำหรับการแปลงไฟล์ **AppSheet Documentation (CSV)** ให้เป็นตารางข้อมูลใน **Google Sheets** แยกหมวดหมู่ และสามารถสร้างไฟล์ **Markdown (.md)** แยกเป็นรายโฟลเดอร์สำหรับทำเอกสารระบบ (System Documentation) บน GitHub หรือ Wiki ได้อย่างสะดวก

---

## 🌟 ฟีเจอร์หลัก (Features)

1. **AppSheet Csv Parser (`AppSheetCsvParser_v2.gs`)**
   - นำเข้าไฟล์ `AppSheet_Documentation.csv` ตรงจาก Google Drive
   - จำแนกข้อมูลโดยอัตโนมัติออกเป็น 8 แผ่นงาน (Tabs) ใน Google Sheets:
     - 📊 **AppInfo**: ข้อมูลภาพรวมของแอปพลิเคชันและสถิติ
     - 📋 **Tables**: รายการตารางทั้งหมด (จำแนกเป็น User Table, Process Table, Output Table, System Table)
     - 🏗️ **Schemas**: รายการโครงสร้างตาราง
     - 📌 **Columns**: รายการคอลัมน์ทั้งหมด (ระบุ Schema พ่อ/แม่ชัดเจน)
     - 👁️ **Views**: รายการหน้าจอ/มุมมอง (UX Views)
     - ⚡ **Actions**: รายการปุ่มการทำงาน
     - 📏 **Rules**: รายการ Format Rules สำหรับจัดรูปแบบหน้าจอ
     - 🔪 **Slices**: รายการ Slice ข้อมูล
   - จัดรูปแบบสีหัวตารางและล็อกคอลัมน์อัตโนมัติเพื่อให้อ่านง่าย

2. **AppSheet Markdown Generator (`AppSheetMdGenerator.gs`)**
   - อ่านไฟล์ CSV ของ AppSheet โดยตรงจาก Google Drive (ป้องกันปัญหาข้อความขนาดใหญ่หรือแท็ก HTML ปนเปื้อน)
   - แปลงข้อมูลแต่ละรายการออกมาเป็นไฟล์ Markdown (.md) แยกตามหมวดหมู่ลงในโฟลเดอร์บน Google Drive อัตโนมัติ เช่น แยกตามรายชื่อตาราง หรือ View
   - ปลอดภัยจากปัญหา Markdown พังด้วยการแปลงตัวอักษรพิเศษ เช่น `|`, `<`, `>`, ขึ้นบรรทัดใหม่ ให้แสดงผลได้ถูกต้องสวยงามในตาราง

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

เมื่อนำรหัสไปรันและทำการส่งออก Markdown โครงสร้างไฟล์ใน Google Drive/โปรเจกต์จะถูกจัดเรียงดังนี้:

```text
├── AppSheetCsvParser_v2.gs     # สคริปต์สำหรับนำเข้าข้อมูล CSV ลง Google Sheets
├── AppSheetMdGenerator.gs      # สคริปต์สำหรับสร้างไฟล์ Markdown (.md) ลงใน Google Drive
├── README.md                   # เอกสารประกอบการใช้งานนี้
└── [โฟลเดอร์ปลายทางบน Drive]
    ├── 📊 AppInfo               # เก็บไฟล์ข้อมูลแอปพลิเคชัน
    ├── 🏗️ Schemas               # เก็บไฟล์ Schema ของตาราง
    ├── 👁️ Views                 # เก็บไฟล์ข้อมูล Views แยกรายหน้าจอ (.md)
    ├── 📋 Tables                # เก็บข้อมูลตารางเดี่ยว (.md)
    ├── 📌 Columns               # เก็บรายละเอียดคอลัมน์แยกรายตาราง (.md)
    ├── 📏 Rules                 # เก็บข้อกำหนดการแสดงผล (Format Rules) (.md)
    └── 🔪 Slices                # เก็บรายละเอียด Slices (.md)
```

---

## 🚀 วิธีการใช้งาน (How to Use)

### 1. การดึงข้อมูลเอกสารจาก AppSheet
1. เข้าไปที่หน้าเว็บผู้พัฒนา **AppSheet** (AppSheet Editor) ของคุณ
2. ไปที่เมนู **Manage** > **Integrations**
3. ค้นหาและคลิกที่ **App Documentation**
4. กดดาวน์โหลดไฟล์เอกสาร จะได้ไฟล์ชื่อ `AppSheet_Documentation.csv`

---

### 2. วิธีใช้งานสคริปต์นำเข้าลง Google Sheets (`AppSheetCsvParser_v2.gs`)
1. อัปโหลดไฟล์ `AppSheet_Documentation.csv` ขึ้นไปเก็บไว้ใน **Google Drive** ของคุณ
2. สร้าง Google Sheets ใหม่ขึ้นมาแผ่นหนึ่ง
3. ไปที่แถบเมนูด้านบน คลิก **Extensions** (ส่วนขยาย) > **Apps Script**
4. ลบโค้ดเริ่มต้นออก แล้วคัดลอกเนื้อหาจากไฟล์ `AppSheetCsvParser_v2.gs` ไปวางแทนที่
5. กดปุ่ม **Save** (บันทึก) แล้วปิดหน้าต่าง Apps Script ไปได้เลย
6. ทำการรีเฟรชหน้า Google Sheets 1 ครั้ง จะมีเมนูใหม่ปรากฏขึ้นมาชื่อ **"📋 AppSheet Importer"**
7. กดคลิกเมนู **"🚀 นำเข้าข้อมูล"**
8. *ในครั้งแรกของการรัน ระบบจะขอให้คุณกดยอมรับสิทธิ์การเข้าถึงไฟล์ (Authorization) ให้ทำตามขั้นตอนจนเสร็จ*
9. รอจนระบบทำงานเสร็จสิ้น คุณจะพบแผ่นงาน (Tabs) จำนวน 8 แผ่นงานถูกสร้างขึ้นพร้อมข้อมูลจัดหมวดหมู่สวยงาม

---

### 3. วิธีใช้งานสคริปต์สร้างไฟล์ Markdown (`AppSheetMdGenerator.gs`)
1. สร้างโฟลเดอร์เปล่าไว้ใน Google Drive สำหรับรับไฟล์ Markdown แยกเป็น 8 โฟลเดอร์ (เช่น AppInfo, Schemas, Columns, Views, Tables, Rules, Slices, Actions)
2. คัดลอก **Folder ID** ของแต่ละโฟลเดอร์มารอไว้ (ดู ID ได้จาก URL หลังเข้าโฟลเดอร์นั้นๆ เช่น `drive.google.com/drive/folders/YOUR_FOLDER_ID`)
3. ดึง **File ID** ของไฟล์ `AppSheet_Documentation.csv` ที่อัปโหลดไว้บน Google Drive
4. ไปที่หน้า Google Sheets เดิม > **Extensions** > **Apps Script**
5. สร้างไฟล์สคริปต์ใหม่ (กดปุ่ม `+` > Script) ตั้งชื่อว่า `AppSheetMdGenerator`
6. นำเนื้อหาจากไฟล์ `AppSheetMdGenerator.gs` ไปวาง
7. แก้ไขส่วนการตั้งค่า (Config) ด้านบนสุดของไฟล์สคริปต์ดังนี้:
   ```javascript
   const CFG_MD = {
     CSV_ID: 'ใส่_FILE_ID_ของ_CSV_ตรงนี้',
     FOLDERS: {
       APPINFO: 'ใส่_FOLDER_ID_ของ_AppInfo_ตรงนี้',
       SCHEMAS: 'ใส่_FOLDER_ID_ของ_Schemas_ตรงนี้',
       ACTIONS: 'ใส่_FOLDER_ID_ของ_Actions_ตรงนี้',
       VIEWS:   'ใส่_FOLDER_ID_ของ_Views_ตรงนี้',
       TABLES:  'ใส่_FOLDER_ID_ของ_Tables_ตรงนี้',
       COLUMNS: 'ใส่_FOLDER_ID_ของ_Columns_ตรงนี้',
       RULES:   'ใส่_FOLDER_ID_ของ_Rules_ตรงนี้',
       SLICES:  'ใส่_FOLDER_ID_ของ_Slices_ตรงนี้',
     },
   };
   ```
8. กดปุ่ม **Save** แล้วรีเฟรชหน้า Google Sheets
9. เลือกเมนู **"📋 AppSheet Importer"** > **"📝 สร้างไฟล์ Markdown (.md) ทุกหมวดหมู่"**
10. ระบบจะทำการดึงข้อมูล แปลง และบันทึกไฟล์ `.md` ลงในโฟลเดอร์ที่คุณระบุไว้โดยอัตโนมัติ

---

## 🛠️ ข้อแนะนำเพิ่มเติม
- หากต้องการอัปเดตข้อมูลเอกสารในอนาคต เพียงแค่ดาวน์โหลดไฟล์ CSV ใหม่จาก AppSheet และนำมาอัปโหลดทับไฟล์เดิมใน Google Drive จากนั้นกดรันเมนูอีกครั้ง
- สคริปต์มีการเคลียร์ไฟล์เก่าที่ซ้ำกันออกโดยอัตโนมัติก่อนเขียนไฟล์ใหม่ จึงมั่นใจได้ว่าจะไม่เกิดไฟล์ซ้ำซ้อนใน Drive
