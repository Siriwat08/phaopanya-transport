# การ contribute ให้ repo นี้

ขอบคุณที่อยาก contribute!  repo นี้เป็น Private repo สำหรับทีมพัฒนาและทีมดูแลระบบ
ของแอป AppSheet "เผ่าปัญญา ทรานสปอร์ต"  กฎสั้น ๆ มีดังนี้

## 🌿 การใช้ branch

| ประเภท | ชื่อ branch | ตัวอย่าง |
|---|---|---|
| ฟีเจอร์ใหม่ | `feat/...` | `feat/add-cpf-column` |
| แก้บั๊ก | `fix/...` | `fix/typo-in-schema` |
| เอกสาร | `docs/...` | `docs/refresh-export-2026-01` |
| ปรับโครงสร้าง | `refactor/...` | `refactor/move-scripts-folder` |
| งานบ้าน | `chore/...` | `chore/update-gitignore` |

- ทุก branch แตกจาก `main` ล่าสุดเสมอ
- หลัง merge แล้วลบ branch ทิ้ง

## 📝 รูปแบบ Commit Message

ใช้ [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <subject>

<body>
```

### ตัวอย่าง

```bash
docs(export): refresh AppSheet documentation to v1.004607

- Added 2 new process tables
- Updated schema for ข้อมูลการวางบิล
- No sensitive data added
```

```bash
fix(scripts): correct CSV parser handling of multiline expressions

The parser was breaking on expressions containing newlines inside
quoted strings. Now uses proper CSV quote handling.
```

### type ที่ใช้บ่อย

| type | ใช้เมื่อ |
|---|---|
| `feat` | เพิ่มฟีเจอร์ใหม่ |
| `fix` | แก้บั๊ก |
| `docs` | เปลี่ยนเอกสาร (รวมถึง refresh export) |
| `refactor` | ปรับโครงสร้างโดยไม่เปลี่ยนพฤติกรรม |
| `chore` | งานบ้าน เช่น อัปเดต .gitignore |
| `security` | แก้ปัญหาความปลอดภัย |

## 🔒 กฎความปลอดภัย

- ⚠️ **ห้าม commit ข้อมูลพนักงานจริง** — บัตรประชาชน, เบอร์โทร, อีเมล
- ⚠️ **ห้าม commit ไฟล์ Google Sheets ที่มีข้อมูลจริง** — `.xlsx`, `.gsheet`
- ⚠️ **ห้าม commit App ID / Workspace UUID ใหม่** โดยไม่ review
- ✅ ถ้าไม่แน่ใจว่าไฟล์ sensitive หรือไม่ ให้ถามทีม security ก่อน commit
- ✅ หาก commit ผิดไปแล้ว ให้แจ้งทีมทันที (ห้าม force push โดยไม่แจ้ง)

## 📋 การทำ Pull Request

1. สร้าง branch ใหม่จาก `main`
2. ทำงานใน branch นั้น  commit ตามรูปแบบด้านบน
3. push branch แล้วเปิด PR ไปยัง `main`
4. กรอก PR template ให้ครบ
5. รอ review อย่างน้อย 1 คน
6. หลัง approve แล้ว merge ได้ (ใช้ "Squash and merge" เพื่อ history สะอาด)

## 🔄 การ refresh AppSheet_Documentation.csv

ดูคู่มือฉบับเต็มที่ `docs/runbooks/refresh-documentation.md`

สรุปสั้น ๆ:
1. ดาวน์โหลด CSV ใหม่จาก AppSheet
2. ทับไฟล์ที่ `data/AppSheet_Documentation.csv`
3. รันสคริปต์ generate markdown
4. ทับไฟล์ใน `exports/`
5. เปิด PR พร้อม commit message: `docs(export): refresh to vX.XXXXXX`

## 🐛 การรายงานปัญหา

ใช้ GitHub Issues พร้อม template ที่ `.github/ISSUE_TEMPLATE/`
