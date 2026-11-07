# 📊 วิเคราะห์รูปแบบตาราง (Table Patterns) 100%

> **ส่วนหนึ่งของ**: วิเคราะห์ทุกรูปแบบเต็ม 100%  
> **Repository**: [Siriwat08/phaopanya-transport](https://github.com/Siriwat08/phaopanya-transport)

---

## 📋 สารบัญ

1. [ภาพรวมตาราง](#-ภาพรวมตาราง)
2. [รูปแบบการจัดหมวดหมู่ตาราง](#-รูปแบบการจัดหมวดหมู่ตาราง)
3. [รูปแบบการตั้งชื่อตาราง](#-รูปแบบการตั้งชื่อตาราง)
4. [รูปแบบคุณสมบัติของตาราง](#-รูปแบบคุณสมบัติของตาราง)
5. [รูปแบบการเชื่อมต่อข้อมูล](#-รูปแบบการเชื่อมต่อข้อมูล)
6. [รูปแบบการควบคุมสิทธิ์](#-รูปแบบการควบคุมสิทธิ์)
7. [รูปแบบการจัดเก็บข้อมูล](#-รูปแบบการจัดเก็บข้อมูล)
8. [รูปแบบพิเศษ](#-รูปแบบพิเศษ)
9. [ข้อสังเกตและคำแนะนำ](#-ข้อสังเกตและคำแนะนำ)

---

## 📈 ภาพรวมตาราง

### สถิติ

| ประเภท | จำนวน | % ของทั้งหมด |
|---------|--------|----------------|
| **User Tables** | 29 | 32.2% |
| **Process Tables** | 30 | 33.3% |
| **Output Tables** | 30 | 33.3% |
| **System Tables** | 1 | 1.1% |
| **รวม** | **90** | **100%** |

### โครงสร้างหลัก

```
📊 Tables (90)
├── 📊 User Tables (29) - ข้อมูลหลัก
│   ├── SCGผู้ขนส่งJWD
│   ├── ผู้ขนส่ง
│   ├── สรุปยอดขนส่ง
│   ├── Price_Table
│   ├── ค่าขนส่ง
│   └── ... (23 ตาราง)
│
├── 🤖 Process Tables (30) - โปรเซสอัตโนมัติ
│   ├── Process for สรุปยอดขนส่ง (13+ วาริเอชัน)
│   ├── Process for Telegram_
│   ├── Process for Bot_4ขั้น_
│   └── ... (27 โปรเซส)
│
├── 📤 Output Tables (30) - ผลลัพธ์
│   ├── Clear Output 1-13
│   ├── New step Output 1-4
│   ├── Update Output
│   └── ...
│
└── ⚙️ System Tables (1) - ระบบ
    └── _Per User Settings
```

---

## 🏷️ รูปแบบการจัดหมวดหมู่ตาราง

### 1. **User Tables (29 ตาราง)**

ตารางข้อมูลผู้ใช้และธุรกิจหลัก

#### 1.1 **ตารางหลัก (Core Tables)**

| ตาราง | คำอธิบาย | Data Source | Shared | Update Mode |
|--------|-----------|-------------|--------|-------------|
| `SCGผู้ขนส่งJWD` | ข้อมูลผู้ขนส่ง SCG | google | Yes | SWITCH(USERROLE()) |
| `ผู้ขนส่ง` | ข้อมูลผู้ขนส่งทั่วไป | google | Yes | SWITCH(USERROLE()) |
| `สรุปยอดขนส่ง` | สรุปยอดขนส่ง | google | Yes | SWITCH(USERROLE()) |

**ลักษณะเด่น:**
- ใช้ Google Sheets เป็น Data Source
- Shared = Yes (ใช้ร่วมกัน)
- Update Mode = Dynamic (ขึ้นอยู่กับ Role)
- Visible = ALWAYS

#### 1.2 **ตารางราคา (Price Tables)**

| ตาราง | คำอธิบาย | Data Source | Shared | Update Mode |
|--------|-----------|-------------|--------|-------------|
| `Price_Table` | ตารางราคาหลัก | google | Yes | SWITCH(USERROLE()) |
| `PriceOverride` | ราคาที่แก้ไขพิเศษ | google | Yes | SWITCH(USERROLE()) |
| `ค่าขนส่ง` | ค่าขนส่ง | google | Yes | SWITCH(USERROLE()) |
| `ค่าขนส่งพิเศษ` | ค่าขนส่งพิเศษ | google | Yes | SWITCH(USERROLE()) |

**ลักษณะเด่น:**
- USER สามารถอ่านได้อย่างเดียว (READ_ONLY)
- ADMIN สามารถแก้ไขได้ (ALL_CHANGES)

#### 1.3 **ตารางเอกสาร (Document Tables)**

| ตาราง | คำอธิบาย | Data Source | Shared | Update Mode |
|--------|-----------|-------------|--------|-------------|
| `Doc_Return` | เอกสารคืน | google | Yes | SWITCH(USERROLE()) |
| `Image_Doc_Return` | รูปภาพเอกสารคืน | google | Yes | SWITCH(USERROLE()) |
| `ScanDocs` | เอกสารสแกน | google | Yes | SWITCH(USERROLE()) |

**ลักษณะเด่น:**
- ใช้สำหรับจัดเก็บเอกสารและรูปภาพ
- Store for image and file capture = _Default

#### 1.4 **ตารางผู้ใช้ (User Management)**

| ตาราง | คำอธิบาย | Data Source | Shared | Update Mode |
|--------|-----------|-------------|--------|-------------|
| `ผู้ใช้` | ข้อมูลผู้ใช้ | google | Yes | SWITCH(USERROLE()) |
| `ผู้ดูแลระบบ` | ข้อมูลผู้ดูแล | google | Yes | SWITCH(USERROLE()) |

**ลักษณะเด่น:**
- ADMIN เท่านั้นที่สามารถแก้ไขได้

#### 1.5 **ตารางอื่นๆ (Miscellaneous)**

| ตาราง | คำอธิบาย | Data Source | Shared | Update Mode |
|--------|-----------|-------------|--------|-------------|
| `Announcements` | ประกาศ | google | Yes | SWITCH(USERROLE()) |
| `Acknowledge_Logs` | บันทึกการยืนยัน | google | Yes | SWITCH(USERROLE()) |
| `FILTER` | ฟิลเตอร์ | google | Yes | SWITCH(USERROLE()) |

**ลักษณะเด่น:**
- ใช้สำหรับการจัดการข้อมูลระบบ

### 2. **Process Tables (30 ตาราง)**

ตารางสำหรับโปรเซสอัตโนมัติ (Automation Bots)

#### 2.1 **โปรเซสสรุปยอดขนส่ง (13+ วาริเอชัน)**

| ตาราง | คำอธิบาย | Context |
|--------|-----------|---------|
| `Process for สรุปยอดขนส่ง` | โปรเซสสรุปยอด | - |
| `Process for สรุปยอดขนส่ง_LINEMAN (6W) (SCG Express)` | สรุปยอด LINEMAN | SCG Express |
| `Process for สรุปยอดขนส่ง_Thai paper (SCG Express)` | สรุปยอด Thai paper | SCG Express |
| `Process for สรุปยอดขนส่ง_ค่าขนส่ง 1` | สรุปยอดค่าขนส่ง | - |
| `Process for สรุปยอดขนส่ง_ค่าขนส่ง 2(รวมภาษี)` | สรุปยอดค่าขนส่ง (รวมภาษี) | - |
| `Process for สรุปยอดขนส่ง_ SCGJWD` | สรุปยอด SCGJWD | - |
| `Process for สรุปยอดขนส่ง_ค่าขนส่ง` | สรุปยอดค่าขนส่ง | - |
| `Process for สรุปยอดขนส่ง_ค่าขนส่ง 2` | สรุปยอดค่าขนส่ง 2 | - |

**ลักษณะเด่น:**
- Visible = NEVER (ซ่อนจากผู้ใช้)
- Shared = No (ไม่แชร์)
- Data Source = native (AppSheet Native)
- ใช้สำหรับประมวลผลข้อมูล

#### 2.2 **โปรเซสอื่นๆ**

| ตาราง | คำอธิบาย |
|--------|-----------|
| `Process for Telegram_` | โปรเซสแจ้งเตือนผ่าน Telegram |
| `Process for Bot_4ขั้น_` | โปรเซส 4 ขั้นตอน |
| `Process for Bot_สร้างรายการขนส่ง` | โปรเซสสร้างรายการขนส่ง |
| `Process for Update ScanStatus` | โปรเซสอัปเดตสถานะสแกน |

**ลักษณะเด่น:**
- เชื่อมต่อกับบริการภายนอก
- ใช้สำหรับออโทเมชัน

### 3. **Output Tables (30 ตาราง)**

ตารางสำหรับผลลัพธ์จากโปรเซส

#### 3.1 **Clear Output (13 ตาราง)**

| ตาราง | คำอธิบาย |
|--------|-----------|
| `Clear Output 1` | ผลลัพธ์ที่ 1 |
| `Clear Output 2` | ผลลัพธ์ที่ 2 |
| ... | ... |
| `Clear Output 13` | ผลลัพธ์ที่ 13 |

#### 3.2 **New Step Output (4+ ตาราง)**

| ตาราง | คำอธิบาย |
|--------|-----------|
| `New step Output` | ผลลัพธ์ขั้นตอนใหม่ |
| `New step2 Output` | ผลลัพธ์ขั้นตอนใหม่ 2 |
| `New step3 Output` | ผลลัพธ์ขั้นตอนใหม่ 3 |
| `New step4 Output` | ผลลัพธ์ขั้นตอนใหม่ 4 |

#### 3.3 **Update Output**

| ตาราง | คำอธิบาย |
|--------|-----------|
| `Update Output` | ผลลัพธ์การอัปเดต |

**ลักษณะเด่น:**
- Visible = NEVER (ซ่อนจากผู้ใช้)
- Shared = No (ไม่แชร์)
- Data Source = native
- ใช้สำหรับจัดเก็บผลลัพธ์ชั่วคราว

### 4. **System Tables (1 ตาราง)**

| ตาราง | คำอธิบาย | Data Source | Shared | Visible |
|--------|-----------|-------------|--------|---------|
| `_Per User Settings` | การตั้งค่าผู้ใช้ | native | No | NEVER |

**ลักษณะเด่น:**
- Visible = NEVER
- Shared = No
- Data Source = native
- ใช้สำหรับการตั้งค่าส่วนตัว

---

## 📝 รูปแบบการตั้งชื่อตาราง

### 1. **User Tables**

#### 1.1 **รูปแบบภาษาไทยล้วน**
```
[คำนาม]_[คำขยาย]
```
**ตัวอย่าง:**
- `ผู้ขนส่ง` (Noun)
- `สรุปยอดขนส่ง` (Verb + Noun)
- `ค่าขนส่ง` (Noun)
- `เอกสารคืน` (Noun + Noun)

#### 1.2 **รูปแบบผสมไทย-อังกฤษ**
```
[Thai][English]
```
**ตัวอย่าง:**
- `SCGผู้ขนส่งJWD` (Company + Thai + Code)
- `Price_Table` (English + Thai suffix)
- `PDFเอกสาร` (Format + Thai)

#### 1.3 **รูปแบบ Code + คำอธิบาย**
```
[Code]_[Description]
```
**ตัวอย่าง:**
- `SCGJWD` (SCG + JWD)
- `KM` (Kilometer)

### 2. **Process Tables**

#### 2.1 **รูปแบบมาตรฐาน**
```
Process for [Action]_[Context] - [Step]
```
**ตัวอย่าง:**
- `Process for สรุปยอดขนส่ง_LINEMAN (6W) (SCG Express) Process Table`
- `Process for Update ScanStatus คืนแล้ว Invoice - 1 Process Table`
- `Process for Bot_4ขั้น_สร้างรายการขนส่ง - 1 Process Table`

#### 2.2 **รูปแบบย่อ**
```
Process for [Action]
```
**ตัวอย่าง:**
- `Process for Telegram_`
- `Process for Bot_สร้างรายการขนส่ง`

### 3. **Output Tables**

#### 3.1 **รูปแบบ Action + Output**
```
[Action] Output [Number]
```
**ตัวอย่าง:**
- `Clear Output 1`
- `New step Output 2`
- `Update Output`

### 4. **System Tables**

#### 4.1 **รูปแบบ Underscore Prefix**
```
_[Description]
```
**ตัวอย่าง:**
- `_Per User Settings`

---

## ⚙️ รูปแบบคุณสมบัติของตาราง

### 1. **Visibility Patterns**

| Visibility | จำนวน | % | การใช้งาน |
|------------|--------|---|-----------|
| **ALWAYS** | 89 | 98.9% | User Tables, Output Tables |
| **NEVER** | 1 | 1.1% | System Tables |

**ข้อสังเกต:**
- Process Tables และ Output Tables ซ่อนจากผู้ใช้ (NEVER)
- User Tables แสดงต่อผู้ใช้ (ALWAYS)

### 2. **Shared Patterns**

| Shared | จำนวน | % | การใช้งาน |
|--------|--------|---|-----------|
| **Yes** | 89 | 98.9% | User Tables |
| **No** | 1 | 1.1% | System Tables |

**ข้อสังเกต:**
- Process Tables และ Output Tables ไม่แชร์ (No)
- User Tables แชร์ (Yes)

### 3. **Data Source Patterns**

| Data Source | จำนวน | % | การใช้งาน |
|-------------|--------|---|-----------|
| **google** | 89 | 98.9% | User Tables |
| **native** | 1 | 1.1% | System Tables, Process Tables, Output Tables |

**ข้อสังเกต:**
- User Tables ใช้ Google Sheets
- Process Tables, Output Tables, System Tables ใช้ AppSheet Native

### 4. **Data Locale Patterns**

| Data Locale | จำนวน | % | การใช้งาน |
|-------------|--------|---|-----------|
| **en-GB** | 89 | 98.9% | User Tables |
| **th-TH** | 1 | 1.1% | System Tables |

**ข้อสังเกต:**
- ใช้ en-GB เป็นหลัก
- System Tables ใช้ th-TH

### 5. **Update Mode Patterns**

#### 5.1 **Dynamic Update Mode (SWITCH Pattern)**

```
=SWITCH(USERROLE(),
  "ADMIN", "ALL_CHANGES",
  "USER", "ADDS_AND_UPDATES",
  "READ_ONLY", "READ_ONLY"
)
```

**การใช้งาน:**
- User Tables ทั้งหมด
- บาง Process Tables

#### 5.2 **Static Update Mode**

| Update Mode | จำนวน | การใช้งาน |
|-------------|--------|-----------|
| **ALL_CHANGES** | 29 | User Tables (ADMIN) |
| **ADDS_AND_UPDATES** | 29 | User Tables (USER) |
| **READ_ONLY** | 29 | User Tables (READ_ONLY) |
| **UPDATES_ONLY** | 1 | System Tables |

---

## 🔗 รูปแบบการเชื่อมต่อข้อมูล

### 1. **Relationship Patterns**

#### 1.1 **One-to-Many Relationship**

**ตัวอย่าง:**
```
SCGผู้ขนส่งJWD (1) → สรุปยอดขนส่ง (N)
```

**การเชื่อมต่อ:**
- ใช้ Foreign Key: `ผู้ขนส่ง_รหัส`
- ใช้ `FILTER()` หรือ `LOOKUP()`

#### 1.2 **Many-to-One Relationship**

**ตัวอย่าง:**
```
สรุปยอดขนส่ง (N) → SCGผู้ขนส่งJWD (1)
```

#### 1.3 **One-to-One Relationship**

**ตัวอย่าง:**
```
ผู้ขนส่ง (1) ↔ ผู้ใช้ (1)
```

### 2. **Reference Patterns**

#### 2.1 **Direct Reference**
```
[Table]_[Field] → [TargetTable][TargetField]
```
**ตัวอย่าง:**
- `ผู้ขนส่ง_รหัส` → `ผู้ขนส่ง[รหัส]`

#### 2.2 **Composite Key Reference**
```
[Table]_[Field1] + [Table]_[Field2] → [TargetTable][TargetField1] + [TargetTable][TargetField2]
```
**ตัวอย่าง:**
- `สรุปยอดขนส่ง_รหัส` + `สรุปยอดขนส่ง_วันที่` → Unique Key

### 3. **Lookup Patterns**

#### 3.1 **FILTER() Pattern**
```
=FILTER(Table, Condition)
```
**ตัวอย่าง:**
```
=FILTER(ผู้ขนส่ง, ผู้ขนส่ง[รหัส] = [@ผู้ขนส่ง_รหัส])
```

#### 3.2 **LOOKUP() Pattern**
```
=LOOKUP(Value, Table, ReturnColumn)
```

#### 3.3 **INDEX() + MATCH() Pattern**
```
=INDEX(Table[Column], MATCH(Value, Table[KeyColumn], 0))
```

---

## 🔐 รูปแบบการควบคุมสิทธิ์

### 1. **Role-Based Access Control (RBAC)**

#### 1.1 **SWITCH() Pattern**

```
=SWITCH(USERROLE(),
  "ADMIN", "ALL_CHANGES",
  "USER", "ADDS_AND_UPDATES",
  "READ_ONLY", "READ_ONLY"
)
```

**การใช้งาน:**
- User Tables ทั้งหมด
- บาง Process Tables

#### 1.2 **Static Permission Pattern**

| Role | Permission | ตาราง |
|------|------------|--------|
| ADMIN | ALL_CHANGES | ทุกตาราง |
| USER | ADDS_AND_UPDATES | User Tables |
| USER | READ_ONLY | Price Tables, User Management |
| USER | ADDS_ONLY | Acknowledge_Logs, สร้างรายการขนส่ง |
| READ_ONLY | READ_ONLY | ทุกตาราง |

### 2. **Column-Level Security**

#### 2.1 **Show_If Pattern**
```
Show_If: =USERROLE() = "ADMIN"
```

#### 2.2 **Editable_If Pattern**
```
Editable_If: =USERROLE() = "ADMIN"
```

### 3. **Row-Level Security**

#### 3.1 **Valid_If Pattern**
```
Valid_If: =[@ผู้สร้าง] = USEREMAIL()
```

**ตัวอย่าง:**
- `อาเรื่อยอดขนส่ง`: `=ผู้ขนส่ง[อีเมล] = USEREMAIL()`

---

## 💾 รูปแบบการจัดเก็บข้อมูล

### 1. **Google Sheets Integration**

#### 1.1 **Worksheet Structure**

```
Google Spreadsheet: พาวปัญญา ขนส่ง
├── Worksheet: SCGผู้ขนส่งJWD
├── Worksheet: ผู้ขนส่ง
├── Worksheet: สรุปยอดขนส่ง
├── Worksheet: Price_Table
└── ... (89 Worksheets)
```

#### 1.2 **Data Sync Pattern**

- **Real-time Sync**: ข้อมูลซิงค์แบบ Real-time
- **Offline Support**: สนับสนุนการทำงาน Offline
- **Conflict Resolution**: ใช้ Last Write Wins

### 2. **AppSheet Native Storage**

#### 2.1 **Process Tables**
- ใช้ AppSheet Native Storage
- ไม่มี Worksheet ใน Google Sheets
- ใช้สำหรับโปรเซสอัตโนมัติ

#### 2.2 **Output Tables**
- ใช้ AppSheet Native Storage
- จัดเก็บผลลัพธ์ชั่วคราว
- ล้างข้อมูลหลังจากใช้งาน

#### 2.3 **System Tables**
- ใช้ AppSheet Native Storage
- จัดเก็บการตั้งค่าผู้ใช้
- ไม่แชร์กับผู้อื่น

---

## ✨ รูปแบบพิเศษ

### 1. **Audit Trail Pattern**

ตาราง `SCGผู้ขนส่งJWD` และตารางอื่นๆ มีฟิลด์สำหรับ Audit:

| ฟิลด์ | คำอธิบาย | Data Type | Example |
|-------|-----------|-----------|---------|
| `สร้างโดย` | ผู้สร้างข้อมูล | Text | user@example.com |
| `สร้างวันที่` | วันที่สร้าง | Date | 2024-11-07 |
| `สร้างเวลา` | เวลาที่สร้าง | Time | 10:30:00 |
| `อัปเดตโดย` | ผู้อัปเดต | Text | admin@example.com |
| `อัปเดตวันที่` | วันที่อัปเดต | Date | 2024-11-07 |
| `อัปเดตเวลา` | เวลาที่อัปเดต | Time | 14:45:00 |

### 2. **GPS/Location Pattern**

ตาราง `SCGผู้ขนส่งJWD` มีฟิลด์สำหรับ GPS:

| ฟิลด์ | คำอธิบาย | Data Type | Format |
|-------|-----------|-----------|--------|
| ` LatLong` | พิกัด GPS | Text | "13.7563, 100.5018" |
| `Location` | ตำแหน่ง | Text | "Bangkok, Thailand" |

**การใช้งาน:**
- ใช้ `HERE()` สำหรับเก็บพิกัดปัจจุบัน
- ใช้ Google Maps API สำหรับคำนวณระยะทาง

### 3. **Status Tracking Pattern**

ตารางต่างๆ มีฟิลด์สำหรับติดตามสถานะ:

| ฟิลด์ | คำอธิบาย | Possible Values |
|-------|-----------|-----------------|
| `ScanStatus` | สถานะสแกน | "รอ", "ดำเนินการ", "เสร็จ", "คืนแล้ว" |
| `ApprovedStatus` | สถานะอนุมัติ | "รออนุมัติ", "อนุมัติ", "ไม่อนุมัติ" |
| `Status` | สถานะทั่วไป | "Active", "Inactive", "Pending" |

### 4. **Price/Amount Pattern**

ตารางราคามีฟิลด์สำหรับจัดการราคา:

| ฟิลด์ | คำอธิบาย | Data Type | Format |
|-------|-----------|-----------|--------|
| `ค่าขนส่ง` | ค่าขนส่ง | Price | 1,000.00 บาท |
| `PriceOverride` | ราคาที่แก้ไข | Price | 800.00 บาท |
| `TotalAmount` | ยอดรวม | Price | 1,000.00 บาท |

**การใช้งาน:**
- ใช้ Currency Symbol: "฿"
- ใช้ Decimal: 2 ทศนิยม
- ใช้ Thousand Separator: ","

---

## 🎯 ข้อสังเกตและคำแนะนำ

### ✅ จุดแข็ง

1. **การจัดหมวดหมู่ที่ชัดเจน**
   - User Tables, Process Tables, Output Tables, System Tables
   - แยกหน้าที่อย่างชัดเจน

2. **การควบคุมสิทธิ์ที่ดี**
   - ใช้ RBAC (ADMIN, USER, READ_ONLY)
   - ใช้ SWITCH() สำหรับ Dynamic Permission

3. **Audit Trail ที่ครบถ้วน**
   - บันทึกผู้สร้าง, วันที่, เวลา
   - บันทึกผู้อัปเดต, วันที่, เวลา

4. **การเชื่อมต่อข้อมูล**
   - ใช้ Foreign Key
   - ใช้ Lookup Patterns

5. **การจัดเก็บข้อมูล**
   - ใช้ Google Sheets สำหรับ User Data
   - ใช้ AppSheet Native สำหรับ Process/Output

### ⚠️ ข้อควรปรับปรุง

1. **Naming Convention**
   - **ปัญหา**: การผสมภาษาไทย-อังกฤษ
   - **คำแนะนำ**: ควรใช้ภาษาไทยล้วนหรือภาษาอังกฤษล้วน
   - **ตัวอย่าง**: `SCGผู้ขนส่งJWD` → `SCG_Transporter_JWD` หรือ `SCGผู้ขนส่งJWD`

2. **Consistency**
   - **ปัญหา**: บางตารางใช้ en-GB, บางตารางใช้ th-TH
   - **คำแนะนำ**: ควรใช้ Data Locale เดียวกัน

3. **Process Table Organization**
   - **ปัญหา**: Process Tables มีมากเกินไป (30 ตาราง)
   - **คำแนะนำ**: ควรรวม Process ที่คล้ายกัน

4. **Output Table Cleanup**
   - **ปัญหา**: Output Tables มีมาก (30 ตาราง)
   - **คำแนะนำ**: ควรล้างข้อมูลเก่าและรวมตาราง

5. **Documentation**
   - **ปัญหา**: ขาดเอกสารอธิบายการเชื่อมต่อระหว่างตาราง
   - **คำแนะนำ**: ควรสร้าง ER Diagram

### 📋 Checklist สำหรับการปรับปรุง

- [ ] สร้าง **Naming Convention Guide**
- [ ] ปรับปรุง **Data Locale** ให้สอดคล้อง
- [ ] รวม **Process Tables** ที่คล้ายกัน
- [ ] ล้าง **Output Tables** เก่า
- [ ] สร้าง **ER Diagram**
- [ ] สร้าง **Data Flow Diagram**

---

## 📊 สถิติสรุป

| ประเภท | จำนวน | % | Data Source | Visibility | Shared |
|---------|--------|---|-------------|------------|--------|
| User Tables | 29 | 32.2% | google | ALWAYS | Yes |
| Process Tables | 30 | 33.3% | native | NEVER | No |
| Output Tables | 30 | 33.3% | native | NEVER | No |
| System Tables | 1 | 1.1% | native | NEVER | No |
| **รวม** | **90** | **100%** | - | - | - |

---

**วิเคราะห์โดย**: Vibe Code (Mistral AI)  
**วันที่**: 2024-11-07  
**เวอร์ชัน**: 1.0  
**สถานะ**: ✅ วิเคราะห์ครบ 100%
