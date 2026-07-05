# คู่มือ: แก้ปัญหาที่พบบ่อย

## ปัญหา: แอป Deployable? = No

**อาการ**: ใน AppInfo ฟิลด์ `Deployable?` เป็น `No`

**สาเหตุที่เป็นไปได้**:
1. มี expression error ในตาราง
2. มี data source ที่ไม่สามารถเข้าถึงได้
3. มี column ที่ reference ไปตารางที่ถูกลบ

**วิธีตรวจสอบ**:
1. เปิด AppSheet Editor → ดูว่ามี error badge ที่ตารางใด
2. ไปที่ **Manage** → **App Information** → ดู error log
3. ลองสร้าง deployment ใหม่ ระบบจะบอก error

## ปัญหา: Source Path ไม่เอากัน

**อาการ**: บางตารางใช้ `Source Path: เผ่าปัญญา ทรานสปอร์ต` (มีเว้นวรรค)
บางตารางใช้ `Source Path: เผ่าปัญญาทรานสปอร์ต-915154893` (มี ID)

**สาเหตุ**: ตารางถูกสร้างในช่วงเวลาต่างกัน ระบบอาจเปลี่ยน naming convention

**วิธีแก้**: เลือก convention เดียวแล้ว migrate ตารางที่เหลือ
แนะนำให้ใช้ `เผ่าปัญญาทรานสปอร์ต-915154893` (มี ID) เพราะชัดเจนกว่า

## ปัญหา: Process Table ซ้ำซ้อน

**อาการ**: มี 14+ Process Tables ของ "ปริ๊นใบวางบิล" แยกตามลูกค้า

**ผลกระทบ**:
- ยาก maintain เมื่อต้องแก้ logic ที่ใช้ร่วมกัน
- เพิ่มลูกค้าใหม่ต้องสร้าง Process ใหม่ทุกครั้ง

**วิธีแก้ (ระยะยาว)**: รวมเป็น Process เดียวที่รับพารามิเตอร์ `customer_name`
แล้วใช้ `IF/IFS` ใน expression แทนการมีหลาย Process

## ปัญหา: Format Rule มีชื่องาน hard-coded

**อาการ**: Rule "แจ้งเตือนราคาหลังวิ่งงาน" มีชื่องาน 9 ชื่อฝังใน expression

**วิธีแก้**: ย้ายชื่องานไปเป็น flag ในตาราง `ข้อมูลชื่องานต้นทางปลายทาง`
แล้วใช้ `IN([ชื่องาน], SELECT(...))` แทน

## ปัญหา: git push ไม่ผ่าน

**อาการ**: `git push` ขึ้น `permission denied` หรือ `403`

**สาเหตุ**:
1. Token หมดอายุ
2. Token ไม่มีสิทธิ์ `repo`
3. Repo เป็น Private แต่ไม่ได้เพิ่ม SSH key

**วิธีแก้**:
1. สร้าง Personal Access Token ใหม่ที่ GitHub Settings → Developer settings → Tokens
2. ตั้งค่า remote ใหม่: `git remote set-url origin https://<token>@github.com/Siriwat08/phaopanya-transport.git`

## ปัญหา: ไม่แน่ใจว่าจะ commit ไฟล์นี้ได้ไหม

**กฎง่าย ๆ**:
- ถ้าไฟล์มีข้อมูลพนักงานจริง → ❌ ห้าม commit
- ถ้าไฟล์มีราคาจริง → ❌ ห้าม commit
- ถ้าไฟล์มี UUID ที่ไม่เคยมีใน repo → ⚠️ ถามทีม security
- ถ้าไฟล์เป็นเพียง markdown ที่ generate จาก AppSheet → ✅ commit ได้
- ถ้าไฟล์เป็นสคริปต์ .gs → ✅ commit ได้
- ถ้าไม่แน่ใจ → ⚠️ ถามทีมก่อน
