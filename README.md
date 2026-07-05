# 🚛 เผ่าปัญญา ทรานสปอร์ต — AppSheet Documentation

> เอกสารระบบ (System Documentation) สำหรับแอป AppSheet ที่ใช้บริหารงานขนส่งสินค้า
> ของบริษัท เผ่าปัญญา ทรานสปอร์ต

[![Status](https://img.shields.io/badge/status-private-red.svg)](https://github.com/Siriwat08/phaopanya-transport)
[![AppSheet](https://img.shields.io/badge/AppSheet-v1.004607-blue.svg)](https://www.appsheet.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📋 เกี่ยวกับโปรเจกต์

Repo นี้เก็บ **เอกสาร Documentation** ที่ export จาก AppSheet ของแอป
"เผ่าปัญญา ทรานสปอร์ต" ในรูปแบบ Markdown เพื่อให้ทีมพัฒนาและทีมดูแลระบบ
สามารถอ่านโครงสร้างแอป ติดตามการเปลี่ยนแปลง และทำ code review ได้สะดวก

> ⚠️ **Repository นี้เป็น Private** เพราะมีโครงสร้างตารางที่เปิดเผย
> รายชื่อลูกค้าและ business logic ของบริษัท

## 📊 สถิติแอป

| รายการ | จำนวน |
|---|---|
| Tables | 90 |
| Columns | 2,254 |
| Views | 114 |
| Actions | 212 |
| Format Rules | 11 |
| Slices | 7 |
| Process Tables (Bot) | 30 |
| App Version | 1.004607 |

## 📁 โครงสร้างโปรเจกต์

```text
phaopanya-transport/
├── .github/                       # GitHub templates & workflows
│   ├── ISSUE_TEMPLATE/            # ฟอร์มรายงานปัญหา
│   └── PULL_REQUEST_TEMPLATE.md   # ฟอร์ม PR
├── .gitignore                     # ไฟล์ที่ไม่ track
├── LICENSE                        # ลิขสิทธิ์ MIT
├── README.md                      # ไฟล์นี้
├── CHANGELOG.md                   # ประวัติการเปลี่ยนแปลง
├── CONTRIBUTING.md                # กฎการ contribute
├── docs/                          # เอกสารโปรเจกต์
│   ├── architecture.md            # ภาพรวมสถาปัตยกรรม
│   ├── data-classification.md     # การจำแนกข้อมูล sensitive
│   └── runbooks/                  # คู่มือปฏิบัติงาน
│       ├── refresh-documentation.md
│       └── troubleshooting.md
├── scripts/                       # Google Apps Script
│   ├── AppSheetCsvParser_v2.gs    # parse CSV → Google Sheets
│   ├── AppSheetMdGenerator.gs     # CSV → Markdown
│   └── legacy/                    # สคริปต์เวอร์ชันเก่า
│       └── AppSheetCsvParser.gs
├── data/                          # ข้อมูลดิบจาก AppSheet
│   └── AppSheet_Documentation.csv # CSV export จาก AppSheet
└── exports/                       # Markdown ที่ generate แล้ว
    ├── 📊 AppInfo/                # ข้อมูลแอประดับสูง
    ├── 🏗️ Schemas/                # โครงสร้างตาราง
    ├── 📋 Tables/                 # รายการตาราง (4 ประเภท)
    ├── 📌 Columns/                # รายละเอียดคอลัมน์ (90 ไฟล์)
    ├── 👁️ Views/                  # หน้าจอ/UX (114 ไฟล์)
    ├── ⚡ Actions/                # ปุ่ม action (29 ไฟล์)
    └── 📏 Rules/                  # Format rules (8 ไฟล์)
```

## 🚀 วิธีการใช้งาน

### 1. รีเฟรชเอกสารจาก AppSheet
ดูคู่มือฉบับเต็มที่ [`docs/runbooks/refresh-documentation.md`](docs/runbooks/refresh-documentation.md)

สรุปสั้น ๆ:
1. ดาวน์โหลด `AppSheet_Documentation.csv` จาก AppSheet Editor → Manage → Integrations → App Documentation
2. อัปโหลดทับไฟล์ที่ `data/AppSheet_Documentation.csv`
3. รัน Google Apps Script `AppSheetCsvParser_v2.gs` และ `AppSheetMdGenerator.gs` เพื่อ regenerate markdown
4. คัดลอกไฟล์ markdown จาก Google Drive มาทับใน `exports/`
5. commit + push พร้อม message ตามรูปแบบใน `CONTRIBUTING.md`

### 2. อ่านเอกสารระบบ
- เริ่มที่ [`docs/architecture.md`](docs/architecture.md) เพื่อเข้าใจภาพรวม
- ดูรายตารางที่ `exports/📋 Tables/`
- ดูรายคอลัมน์ที่ `exports/📌 Columns/`
- ดูหน้าจอที่ `exports/👁️ Views/`

## 🔒 ความปลอดภัย

- ⚠️ Repo นี้เป็น **Private** — ห้ามเปลี่ยนเป็น Public
- ⚠️ ห้าม commit ไฟล์ที่มีข้อมูลพนักงานจริง (บัตรประชาชน, เบอร์โทร)
- ⚠️ ห้าม commit ไฟล์ Google Sheets ที่มีข้อมูลจริง (`.xlsx`, `.gsheet`)
- ✅ ดูการจำแนกข้อมูลได้ที่ [`docs/data-classification.md`](docs/data-classification.md)

หากพบว่ามีข้อมูล sensitive รั่วเข้า repo ให้:
1. ลบไฟล์ออกจาก git history ทันที (`git filter-repo`)
2. แจ้งทีม security
3. rotate App ID / Workspace UUID ที่อาจรั่ว

## 📝 การ contribute

อ่านกฎการ contribute ที่ [`CONTRIBUTING.md`](CONTRIBUTING.md)

สรุปสั้น ๆ:
- ใช้ branch ใหม่ทุกครั้ง (`feat/...`, `fix/...`, `docs/...`)
- commit message ใช้รูปแบบ [Conventional Commits](https://www.conventionalcommits.org/)
- ทุก PR ต้องผ่าน review อย่างน้อย 1 คน

## 📜 License

MIT License — ดูรายละเอียดที่ [`LICENSE`](LICENSE)

## 📞 ติดต่อ

- **Repo Owner**: Siriwat08
- **App Owner**: เผ่าปัญญา ทรานสปอร์ต
- รายงานปัญหา: ใช้ GitHub Issues (สำหรับสมาชิกทีมเท่านั้น)
