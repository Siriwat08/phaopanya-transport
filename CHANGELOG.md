# Changelog

ไฟล์นี้บันทึกการเปลี่ยนแปลงของ repo และเอกสารระบบ
รูปแบบอ้างอิง [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

## [Unreleased]

### Added
- โครงสร้าง repo ใหม่ตามมาตรฐาน (scripts/, data/, exports/, docs/)
- `.gitignore` สำหรับกันไฟล์ sensitive รั่ว
- `LICENSE` (MIT)
- `CONTRIBUTING.md` กฎการ contribute
- `docs/architecture.md` ภาพรวมสถาปัตยกรรม
- `docs/data-classification.md` การจำแนกข้อมูล
- `docs/runbooks/refresh-documentation.md` คู่มือรีเฟรชเอกสาร
- `docs/runbooks/troubleshooting.md` คู่มือแก้ปัญหา
- Issue templates และ PR template

### Changed
- ย้าย `AppSheetCsvParser_v2.gs` และ `AppSheetMdGenerator.gs` ไป `scripts/`
- ย้าย `AppSheetCsvParser.gs` (เวอร์ชันเก่า) ไป `scripts/legacy/`
- ย้าย `AppSheet_Documentation.csv` ไป `data/`
- ย้ายโฟลเดอร์ markdown ทั้งหมดไป `exports/`
- เขียน `README.md` ใหม่ให้ครอบคลุมโครงสร้าง repo ปัจจุบัน

### Removed
- ไฟล์ root ที่กระจัดกระจาย (ย้ายหมดแล้ว)

## [1.004607] — 2024-XX-XX (AppSheet App Version)

### Initial Documentation Export
- Export ครั้งแรกจาก AppSheet ของแอป "เผ่าปัญญา ทรานสปอร์ต"
- 90 Tables, 2,254 Columns, 114 Views, 212 Actions, 11 Format Rules, 7 Slices
