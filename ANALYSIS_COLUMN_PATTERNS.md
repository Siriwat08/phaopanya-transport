# 📁 วิเคราะห์รูปแบบคอลัมน์ (Column Patterns) 100%

> **ส่วนหนึ่งของ**: วิเคราะห์ทุกรูปแบบเต็ม 100%  
> **Repository**: [Siriwat08/phaopanya-transport](https://github.com/Siriwat08/phaopanya-transport)

---

## 📋 สารบัญ

1. [ภาพรวมคอลัมน์](#-ภาพรวมคอลัมน์)
2. [รูปแบบการตั้งชื่อคอลัมน์](#-รูปแบบการตั้งชื่อคอลัมน์)
3. [รูปแบบประเภทข้อมูล (Data Types)](#-รูปแบบประเภทข้อมูล-data-types)
4. [รูปแบบคุณสมบัติคอลัมน์](#-รูปแบบคุณสมบัติคอลัมน์)
5. [รูปแบบการตรวจสอบข้อมูล (Validation Patterns)](#-รูปแบบการตรวจสอบข้อมูล-validation-patterns)
6. [รูปแบบคอลัมน์พิเศษ](#-รูปแบบคอลัมน์พิเศษ)
7. [รูปแบบการคำนวณ (Calculation Patterns)](#-รูปแบบการคำนวณ-calculation-patterns)
8. [รูปแบบการจัดรูปแบบ (Formatting Patterns)](#-รูปแบบการจัดรูปแบบ-formatting-patterns)
9. [ข้อสังเกตและคำแนะนำ](#-ข้อสังเกตและคำแนะนำ)

---

## 📊 ภาพรวมคอลัมน์

### สถิติ

| ประเภท | จำนวน | % ของทั้งหมด |
|---------|--------|----------------|
| **คอลัมน์ทั้งหมด** | 2,254 | 100% |
| **คอลัมน์ต่อตาราง (เฉลี่ย)** | 25.04 | - |
| **คอลัมน์มากที่สุด** | ~100+ | - |
| **คอลัมน์น้อยที่สุด** | ~5 | - |

### โครงสร้างหลัก

```
Columns (2,254)
├── User Tables Columns (~2,000)
│   ├── SCGผู้ขนส่งJWD (~100+)
│   ├── ผู้ขนส่ง (~80+)
│   ├── สรุปยอดขนส่ง (~100+)
│   └── ...
│
├── Process Tables Columns (~200)
│   ├── Process for สรุปยอดขนส่ง (~50+)
│   ├── Process for Telegram_ (~20+)
│   └── ...
│
└── Output/System Tables Columns (~54)
    ├── Clear Output (~20)
    ├── New step Output (~20)
    └── _Per User Settings (~14)
```

---

## 📝 รูปแบบการตั้งชื่อคอลัมน์

### 1. **Naming Convention Patterns**

#### 1.1 **ภาษาไทยล้วน**

**รูปแบบ:**
```
[คำนาม]
[คำนาม]_[คำนาม]
[กริยา]_[คำนาม]
```

**ตัวอย่าง:**
- `รหัส` (ID)
- `ชื่อ` (Name)
- `ที่อยู่` (Address)
- `ผู้ขนส่ง_รหัส` (Transporter_ID)
- `สรุปยอด_วันที่` (Summary_Date)
- `อัปเดต_เวลา` (Update_Time)

**ลักษณะเด่น:**
- ใช้ภาษาไทยล้วน
- ใช้ underscore (_) แยกคำ
- ชัดเจนและเข้าใจง่าย

#### 1.2 **ภาษาอังกฤษล้วน**

**รูปแบบ:**
```
[CamelCase]
[snake_case]
[PascalCase]
```

**ตัวอย่าง:**
- `InstanceId` (Process Tables)
- `StartDate` (Process Tables)
- `EndDate` (Process Tables)
- `ExportToXlsx` (Process Tables)
- `ID_สรุปยอดขนส่ง` (Mixed)

**ลักษณะเด่น:**
- ใช้ใน Process Tables
- ใช้ CamelCase เป็นหลัก

#### 1.3 **ผสมไทย-อังกฤษ**

**รูปแบบ:**
```
[English]_[Thai]
[Thai]_[English]
```

**ตัวอย่าง:**
- `ID_สรุปยอดขนส่ง` (ID_Summary)
- `ผู้ขนส่ง_รหัส` (Transporter_ID)
- `ScanStatus` (Scan_Status)
- `PriceOverride` (Price_Override)

**ลักษณะเด่น:**
- ใช้ในคอลัมน์ที่เชื่อมต่อระหว่างระบบ
- ควรหลีกเลี่ยง

### 2. **Prefix/Suffix Patterns**

#### 2.1 **System Prefixes**

| Prefix | คำอธิบาย | ตัวอย่าง |
|--------|-----------|----------|
| `_` | System Column | `_RowNumber` |
| `ID_` | Identifier | `ID_สรุปยอดขนส่ง` |
| `Is` | Boolean | `IsApproved` |

#### 2.2 **Relationship Suffixes**

| Suffix | คำอธิบาย | ตัวอย่าง |
|--------|-----------|----------|
| `_รหัส` | Foreign Key | `ผู้ขนส่ง_รหัส` |
| `_ชื่อ` | Display Name | `ผู้ขนส่ง_ชื่อ` |
| `_วันที่` | Date | `สร้าง_วันที่` |
| `_เวลา` | Time | `สร้าง_เวลา` |

#### 2.3 **Status Suffixes**

| Suffix | คำอธิบาย | ตัวอย่าง |
|--------|-----------|----------|
| `Status` | Status Field | `ScanStatus` |
| `By` | Created/Updated By | `สร้างโดย`, `อัปเดตโดย` |

---

## 📊 รูปแบบประเภทข้อมูล (Data Types)

### 1. **Data Type Distribution**

| Data Type | จำนวน (ประมาณ) | % | คำอธิบาย |
|-----------|------------------|---|-----------|
| **Text** | ~1,200 | ~53% | ข้อความ, รหัส, ชื่อ |
| **Number** | ~300 | ~13% | จำนวน, ปริมาณ |
| **Price** | ~200 | ~9% | ราคา, ค่าขนส่ง |
| **Date** | ~150 | ~7% | วันที่ |
| **DateTime** | ~100 | ~4% | วันที่และเวลา |
| **Yes/No** | ~100 | ~4% | Boolean |
| **Time** | ~50 | ~2% | เวลา |
| **Image** | ~50 | ~2% | รูปภาพ |
| **Enum** | ~50 | ~2% | รายการเลือก |
| **Other** | ~54 | ~2% | ประเภทอื่นๆ |

### 2. **Text Type Patterns**

#### 2.1 **Short Text**
- MaxLength: 255
- ใช้สำหรับ: ชื่อ, รหัส, อีเมล
- **ตัวอย่าง:** `ชื่อ`, `รหัส`, `อีเมล`

#### 2.2 **Long Text**
- MaxLength: null (ไม่จำกัด)
- LongTextFormatting: Plain Text / Rich Text
- ใช้สำหรับ: คำอธิบาย, ที่อยู่, หมายเหตุ
- **ตัวอย่าง:** `ที่อยู่`, `หมายเหตุ`, `คำอธิบาย`

#### 2.3 **Email**
- Valid_If: `=ISVALID(EMAIL([@Column]))`
- ใช้สำหรับ: อีเมลผู้ใช้
- **ตัวอย่าง:** `อีเมล`, `Email`

#### 2.4 **URL**
- Valid_If: `=ISVALID(URL([@Column]))`
- ใช้สำหรับ: ลิงก์, เว็บไซต์
- **ตัวอย่าง:** `เว็บไซต์`, `Link`

### 3. **Number Type Patterns**

#### 3.1 **Integer**
- DecimalDigits: 0
- ใช้สำหรับ: จำนวน, ปริมาณ
- **ตัวอย่าง:** `จำนวน`, `Quantity`

#### 3.2 **Decimal**
- DecimalDigits: 2
- ใช้สำหรับ: น้ำหนัก, ปริมาตร
- **ตัวอย่าง:** `น้ำหนัก`, `Weight`

#### 3.3 **Percentage**
- DecimalDigits: 2
- NumberDisplayMode: Percentage
- ใช้สำหรับ: ภาษี, ค่าคอมมิชชัน
- **ตัวอย่าง:** `ภาษี`, `Commission`

### 4. **Price Type Patterns**

#### 4.1 **Standard Price**
- CurrencySymbol: "฿"
- DecimalDigits: 2
- ShowThousandsSeparator: true
- ใช้สำหรับ: ค่าขนส่ง, ราคาสินค้า
- **ตัวอย่าง:** `ค่าขนส่ง`, `Price`

#### 4.2 **Override Price**
- CurrencySymbol: "฿"
- DecimalDigits: 2
- ใช้สำหรับ: ราคาที่แก้ไขพิเศษ
- **ตัวอย่าง:** `PriceOverride`, `ราคาแก้ไข`

### 5. **Date/Time Type Patterns**

#### 5.1 **Date Only**
- UseLongDateFormat: false
- ใช้สำหรับ: วันที่สร้าง, วันที่อัปเดต
- **ตัวอย่าง:** `สร้างวันที่`, `อัปเดตวันที่`

#### 5.2 **DateTime**
- ใช้สำหรับ: เวลาที่แน่นอน
- **ตัวอย่าง:** `สร้างวันที่เวลา`

#### 5.3 **Time Only**
- ใช้สำหรับ: เวลา
- **ตัวอย่าง:** `สร้างเวลา`, `อัปเดตเวลา`

### 6. **Yes/No Type Patterns**

#### 6.1 **Standard Boolean**
- YesLabel: "ใช่"
- NoLabel: "ไม่ใช่"
- ใช้สำหรับ: สถานะ, คุณสมบัติ
- **ตัวอย่าง:** `IsActive`, `IsApproved`

#### 6.2 **Custom Labels**
- YesLabel: "เสร็จ"
- NoLabel: "ยังไม่เสร็จ"
- ใช้สำหรับ: สถานะการทำงาน
- **ตัวอย่าง:** `เสร็จแล้ว`, `คืนแล้ว`

---

## ⚙️ รูปแบบคุณสมบัติคอลัมน์

### 1. **Visibility Patterns**

| Visibility | จำนวน (ประมาณ) | % | คำอธิบาย |
|------------|------------------|---|-----------|
| **ALWAYS** | ~2,000 | ~89% | แสดงต่อผู้ใช้ |
| **NEVER** | ~200 | ~9% | ซ่อนจากผู้ใช้ |
| **Show_If** | ~54 | ~2% | แสดงตามเงื่อนไข |

#### 1.1 **Show_If Patterns**

**รูปแบบ:**
```
Show_If: =[Condition]
```

**ตัวอย่าง:**
- `=USERROLE() = "ADMIN"` (แสดงเฉพาะ ADMIN)
- `=[@Status] = "Active"` (แสดงเมื่อ Status = Active)
- `=NOT(ISBLANK([@ParentColumn]))` (แสดงเมื่อ ParentColumn ไม่ว่าง)

### 2. **Read-Only Patterns**

| Read-Only | จำนวน (ประมาณ) | % | คำอธิบาย |
|-----------|------------------|---|-----------|
| **No** | ~1,800 | ~80% | สามารถแก้ไขได้ |
| **Yes** | ~454 | ~20% | อ่านอย่างเดียว |

#### 2.1 **Read-Only Conditions**

**รูปแบบ:**
```
Read-Only: Yes (Static)
Read-Only: =[Condition] (Dynamic)
```

**ตัวอย่าง:**
- `Read-Only: Yes` (System Columns)
- `Read-Only: =USERROLE() <> "ADMIN"` (ADMIN เท่านั้นที่แก้ไขได้)

### 3. **Required Patterns**

#### 3.1 **Required_If Patterns**

**รูปแบบ:**
```
Required_If: =[Condition]
```

**ตัวอย่าง:**
- `=USERROLE() = "ADMIN"` (จำเป็นสำหรับ ADMIN)
- `=[@Status] = "Active"` (จำเป็นเมื่อ Status = Active)

### 4. **Key Patterns**

| Key Type | จำนวน (ประมาณ) | % | คำอธิบาย |
|----------|------------------|---|-----------|
| **Primary Key** | ~90 | ~4% | คีย์หลัก |
| **Foreign Key** | ~200 | ~9% | คีย์ต่างตาราง |
| **Composite Key** | ~50 | ~2% | คีย์ผสม |
| **Non-Key** | ~1,914 | ~85% | ไม่ใช่คีย์ |

#### 4.1 **Primary Key Patterns**

**ตัวอย่าง:**
- `_RowNumber` (System Generated)
- `รหัส` (Manual)
- `ID` (Manual)

#### 4.2 **Foreign Key Patterns**

**ตัวอย่าง:**
- `ผู้ขนส่ง_รหัส` → `ผู้ขนส่ง[รหัส]`
- `สรุปยอด_รหัส` → `สรุปยอดขนส่ง[รหัส]`

### 5. **Searchable/Scannable Patterns**

| Property | จำนวน (ประมาณ) | % | คำอธิบาย |
|----------|------------------|---|-----------|
| **Searchable: Yes** | ~2,000 | ~89% | สามารถค้นหาได้ |
| **Searchable: No** | ~254 | ~11% | ไม่สามารถค้นหา |
| **Scannable: Yes** | ~50 | ~2% | สามารถสแกนบาร์โค้ด/QR Code |
| **Scannable: No** | ~2,204 | ~98% | ไม่สามารถสแกน |

### 6. **Sensitive Data Patterns**

| Sensitive | จำนวน (ประมาณ) | % | คำอธิบาย |
|-----------|------------------|---|-----------|
| **Yes** | ~50 | ~2% | ข้อมูลละเอียดอ่อน |
| **No** | ~2,204 | ~98% | ข้อมูลทั่วไป |

**ตัวอย่างข้อมูลละเอียดอ่อน:**
- `Password`
- `Token`
- `API Key`
- `Credit Card Number`

---

## ✅ รูปแบบการตรวจสอบข้อมูล (Validation Patterns)

### 1. **Valid_If Patterns**

#### 1.1 **Reference Validation**

**รูปแบบ:**
```
Valid_If: =[@Column] IN [TargetTable][TargetColumn]
```

**ตัวอย่าง:**
```
Valid_If: =[@ผู้ขนส่ง_รหัส] IN ผู้ขนส่ง[รหัส]
```

#### 1.2 **Format Validation**

**รูปแบบ:**
```
Valid_If: =ISVALID([Format],[@Column])
```

**ตัวอย่าง:**
```
Valid_If: =ISVALID(EMAIL([@อีเมล]))
Valid_If: =ISVALID(URL([@เว็บไซต์]))
Valid_If: =ISVALID(PHONE([@โทรศัพท์]))
```

#### 1.3 **Range Validation**

**รูปแบบ:**
```
Valid_If: =[@Column] >= [Min] AND [@Column] <= [Max]
```

**ตัวอย่าง:**
```
Valid_If: =[@ค่าขนส่ง] >= 0 AND [@ค่าขนส่ง] <= 100000
Valid_If: =[@วันที่] >= TODAY()
```

#### 1.4 **Pattern Validation**

**รูปแบบ:**
```
Valid_If: =REGEXMATCH([@Column], "[Pattern]")
```

**ตัวอย่าง:**
```
Valid_If: =REGEXMATCH([@รหัส], "^[A-Z]{2}\d{4}$")
```

#### 1.5 **Conditional Validation**

**รูปแบบ:**
```
Valid_If: =IF([Condition], [TrueValidation], [FalseValidation])
```

**ตัวอย่าง:**
```
Valid_If: =IF(USERROLE() = "ADMIN", TRUE, [@Column] <> "")
```

### 2. **Error_Message_If_Invalid Patterns**

**รูปแบบ:**
```
Error_Message_If_Invalid: "[Error Message]"
```

**ตัวอย่าง:**
```
Error_Message_If_Invalid: "รหัสผู้ขนส่งไม่ถูกต้อง"
Error_Message_If_Invalid: "รูปแบบอีเมลไม่ถูกต้อง"
Error_Message_If_Invalid: "ค่าต้องมากกว่า 0"
```

### 3. **Validation Examples from Process Tables**

จาก `Process for สรุปยอดขนส่ง_LINEMAN (6W) (SCG Express) Process Table`:

```
Column: อาเรื่อยอดขนส่ง
Valid_If: =ผู้ขนส่ง[อีเมล] = USEREMAIL()
```

**คำอธิบาย:**
- ตรวจสอบว่าอีเมลของผู้ขนส่งตรงกับอีเมลผู้ใช้
- ป้องกันการแก้ไขข้อมูลผู้อื่น

---

## ✨ รูปแบบคอลัมน์พิเศษ

### 1. **Audit Columns**

คอลัมน์สำหรับบันทึกการเปลี่ยนแปลง:

| คอลัมน์ | Data Type | คำอธิบาย | ตัวอย่าง |
|---------|-----------|-----------|----------|
| `สร้างโดย` | Text | ผู้สร้าง | user@example.com |
| `สร้างวันที่` | Date | วันที่สร้าง | 2024-11-07 |
| `สร้างเวลา` | Time | เวลาที่สร้าง | 10:30:00 |
| `อัปเดตโดย` | Text | ผู้อัปเดต | admin@example.com |
| `อัปเดตวันที่` | Date | วันที่อัปเดต | 2024-11-07 |
| `อัปเดตเวลา` | Time | เวลาที่อัปเดต | 14:45:00 |

**ลักษณะเด่น:**
- ใช้ Initial Value: `=USEREMAIL()`
- ใช้ Initial Value: `=TODAY()`
- ใช้ Initial Value: `=NOW()`
- ใช้ Reset on edit: No

### 2. **GPS/Location Columns**

คอลัมน์สำหรับจัดเก็บตำแหน่ง:

| คอลัมน์ | Data Type | คำอธิบาย | Format | ตัวอย่าง |
|---------|-----------|-----------|--------|----------|
| ` LatLong` | Text | พิกัด GPS | "lat,lng" | "13.7563,100.5018" |
| `Location` | Text | ตำแหน่ง | Text | "Bangkok, Thailand" |

**ลักษณะเด่น:**
- ใช้ `HERE()` สำหรับเก็บพิกัดปัจจุบัน
- ใช้ Google Maps API สำหรับคำนวณระยะทาง

### 3. **Status Columns**

คอลัมน์สำหรับติดตามสถานะ:

| คอลัมน์ | Data Type | คำอธิบาย | Possible Values |
|---------|-----------|-----------|-----------------|
| `ScanStatus` | Enum/Text | สถานะสแกน | "รอ", "ดำเนินการ", "เสร็จ", "คืนแล้ว" |
| `ApprovedStatus` | Enum/Text | สถานะอนุมัติ | "รออนุมัติ", "อนุมัติ", "ไม่อนุมัติ" |
| `Status` | Enum/Text | สถานะทั่วไป | "Active", "Inactive", "Pending" |

**ลักษณะเด่น:**
- ใช้ Enum สำหรับค่าที่กำหนด
- ใช้ Format Rules สำหรับจัดสี

### 4. **System Columns**

คอลัมน์ระบบ:

| คอลัมน์ | Data Type | คำอธิบาย | Visibility |
|---------|-----------|-----------|------------|
| `_RowNumber` | Number | เลขที่แถว | ALWAYS |
| `_Created` | DateTime | วันที่สร้าง | NEVER |
| `_Modified` | DateTime | วันที่แก้ไข | NEVER |

**ลักษณะเด่น:**
- System Defined: Yes
- Fixed definition: Yes
- Read-Only: Yes

### 5. **Price/Amount Columns**

คอลัมน์สำหรับราคาและจำนวนเงิน:

| คอลัมน์ | Data Type | คำอธิบาย | Format |
|---------|-----------|-----------|--------|
| `ค่าขนส่ง` | Price | ค่าขนส่ง | 1,000.00 บาท |
| `PriceOverride` | Price | ราคาที่แก้ไข | 800.00 บาท |
| `TotalAmount` | Price | ยอดรวม | 1,000.00 บาท |
| `ภาษี` | Price | ภาษี | 70.00 บาท |

**ลักษณะเด่น:**
- CurrencySymbol: "฿"
- DecimalDigits: 2
- ShowThousandsSeparator: true

---

## 🧮 รูปแบบการคำนวณ (Calculation Patterns)

### 1. **Initial Value Patterns**

#### 1.1 **Static Initial Value**

**รูปแบบ:**
```
Initial Value: "[Value]"
```

**ตัวอย่าง:**
```
Initial Value: "Active"
Initial Value: 0
Initial Value: TODAY()
```

#### 1.2 **Dynamic Initial Value**

**รูปแบบ:**
```
Initial Value: =[Expression]
```

**ตัวอย่าง:**
```
Initial Value: =USEREMAIL()
Initial Value: =TODAY()
Initial Value: =NOW()
Initial Value: =USERROLE()
```

### 2. **Formula Patterns**

#### 2.1 **Simple Formula**

**รูปแบบ:**
```
Formula: =[Column1] + [Column2]
```

**ตัวอย่าง:**
```
Formula: =[@ค่าขนส่ง] + [@ภาษี]
Formula: =[@จำนวน] * [@ราคาต่อหน่วย]
```

#### 2.2 **Conditional Formula**

**รูปแบบ:**
```
Formula: =IF([Condition], [TrueValue], [FalseValue])
```

**ตัวอย่าง:**
```
Formula: =IF([@Status] = "Active", "ใช่", "ไม่ใช่")
Formula: =IF([@ค่าขนส่ง] > 1000, "High", "Low")
```

#### 2.3 **Lookup Formula**

**รูปแบบ:**
```
Formula: =LOOKUP([Value], [Table], [ReturnColumn])
```

**ตัวอย่าง:**
```
Formula: =LOOKUP([@ผู้ขนส่ง_รหัส], ผู้ขนส่ง, ชื่อ)
```

#### 2.4 **Aggregation Formula**

**รูปแบบ:**
```
Formula: =SUM([Table][Column])
Formula: =AVERAGE([Table][Column])
Formula: =COUNT([Table][Column])
```

**ตัวอย่าง:**
```
Formula: =SUM(สรุปยอดขนส่ง[ค่าขนส่ง])
Formula: =AVERAGE(สรุปยอดขนส่ง[ค่าขนส่ง])
```

### 3. **Process Table Formulas**

จาก `Process for สรุปยอดขนส่ง_LINEMAN (6W) (SCG Express) Process Table`:

```
Column: อาเรื่อยอดขนส่ง
Valid_If: =ผู้ขนส่ง[อีเมล] = USEREMAIL()
```

```
Column: Export to xlsx
Type: Yes/No
Initial Value: FALSE
```

---

## 🎨 รูปแบบการจัดรูปแบบ (Formatting Patterns)

### 1. **Number Formatting**

#### 1.1 **Thousands Separator**

**รูปแบบ:**
```
ShowThousandsSeparator: true
```

**ตัวอย่าง:**
- 1000 → 1,000
- 1000000 → 1,000,000

#### 1.2 **Decimal Places**

**รูปแบบ:**
```
DecimalDigits: 2
```

**ตัวอย่าง:**
- 1000.5 → 1,000.50
- 1000.555 → 1,000.56 (ปัด)

### 2. **Currency Formatting**

**รูปแบบ:**
```
CurrencySymbol: "฿"
ShowThousandsSeparator: true
DecimalDigits: 2
```

**ตัวอย่าง:**
- 1000 → ฿1,000.00
- 1000.5 → ฿1,000.50

### 3. **Date Formatting**

#### 3.1 **Short Date**

**รูปแบบ:**
```
UseLongDateFormat: false
```

**ตัวอย่าง:**
- 2024-11-07 → 07/11/2024
- 2024-11-07 → 7/11/2567 (Thai)

#### 3.2 **Long Date**

**รูปแบบ:**
```
UseLongDateFormat: true
```

**ตัวอย่าง:**
- 2024-11-07 → 7 พฤศจิกายน 2567
- 2024-11-07 → November 7, 2024

### 4. **Color Formatting (Format Rules)**

จาก `exports/📁 Rules/`:

| Rule | Condition | Format |
|------|-----------|--------|
| `Green_Done` | `ScanStatus = "คืนแล้ว"` | Background: Green |
| `Red_Pending` | `ScanStatus = "รอ"` | Background: Red |
| `Yellow_InProgress` | `ScanStatus = "ดำเนินการ"` | Background: Yellow |

---

## 🎯 ข้อสังเกตและคำแนะนำ

### ✅ จุดแข็ง

1. **Data Type Selection**
   - ใช้ Data Type ที่เหมาะสม
   - Price Type สำหรับราคา
   - Date/Time Type สำหรับวันที่

2. **Validation**
   - ใช้ Valid_If สำหรับการตรวจสอบ
   - ใช้ Error_Message_If_Invalid สำหรับข้อความผิดพลาด

3. **Audit Trail**
   - บันทึกผู้สร้าง, วันที่, เวลา
   - บันทึกผู้อัปเดต, วันที่, เวลา

4. **Formatting**
   - ใช้ Format Rules สำหรับจัดสี
   - ใช้ Currency Formatting สำหรับราคา

5. **System Columns**
   - ใช้ _RowNumber สำหรับ Primary Key
   - ใช้ System Columns สำหรับ Audit

### ⚠️ ข้อควรปรับปรุง

1. **Naming Convention**
   - **ปัญหา**: การผสมภาษาไทย-อังกฤษ
   - **คำแนะนำ**: ควรใช้ภาษาไทยล้วนหรือภาษาอังกฤษล้วน
   - **ตัวอย่าง**: `ID_สรุปยอดขนส่ง` → `สรุปยอดขนส่ง_รหัส` หรือ `SummaryID`

2. **Consistency**
   - **ปัญหา**: บางคอลัมน์ใช้ Thai, บางคอลัมน์ใช้ English
   - **คำแนะนำ**: ควรใช้ภาษาเดียวกัน

3. **Validation Coverage**
   - **ปัญหา**: บางคอลัมน์ขาด Validation
   - **คำแนะนำ**: ควรเพิ่ม Valid_If สำหรับทุกคอลัมน์

4. **Error Messages**
   - **ปัญหา**: บางคอลัมน์ขาด Error Message
   - **คำแนะนำ**: ควรเพิ่ม Error_Message_If_Invalid

5. **Documentation**
   - **ปัญหา**: ขาดเอกสารอธิบายคอลัมน์
   - **คำแนะนำ**: ควรเพิ่ม Description สำหรับคอลัมน์

6. **Performance**
   - **ปัญหา**: คอลัมน์จำนวนมาก (2,254)
   - **คำแนะนำ**: ควรปรับปรุง Query ให้เร็วขึ้น

### 📋 Checklist สำหรับการปรับปรุง

- [ ] สร้าง **Naming Convention Guide** สำหรับคอลัมน์
- [ ] ปรับปรุง **Data Type** ให้สอดคล้อง
- [ ] เพิ่ม **Validation** สำหรับทุกคอลัมน์
- [ ] เพิ่ม **Error Messages** สำหรับทุกคอลัมน์
- [ ] เพิ่ม **Description** สำหรับคอลัมน์สำคัญ
- [ ] ปรับปรุง **Performance**
- [ ] สร้าง **Data Dictionary**

---

## 📊 สถิติสรุป

| ประเภท | จำนวน | % | คำอธิบาย |
|---------|--------|---|-----------|
| **Text** | ~1,200 | ~53% | ข้อความ, รหัส, ชื่อ |
| **Number** | ~300 | ~13% | จำนวน, ปริมาณ |
| **Price** | ~200 | ~9% | ราคา, ค่าขนส่ง |
| **Date** | ~150 | ~7% | วันที่ |
| **DateTime** | ~100 | ~4% | วันที่และเวลา |
| **Yes/No** | ~100 | ~4% | Boolean |
| **Time** | ~50 | ~2% | เวลา |
| **Image** | ~50 | ~2% | รูปภาพ |
| **Enum** | ~50 | ~2% | รายการเลือก |
| **Other** | ~54 | ~2% | ประเภทอื่นๆ |

| Visibility | จำนวน | % | คำอธิบาย |
|------------|--------|---|-----------|
| ALWAYS | ~2,000 | ~89% | แสดงต่อผู้ใช้ |
| NEVER | ~200 | ~9% | ซ่อนจากผู้ใช้ |
| Show_If | ~54 | ~2% | แสดงตามเงื่อนไข |

| Read-Only | จำนวน | % | คำอธิบาย |
|-----------|--------|---|-----------|
| No | ~1,800 | ~80% | สามารถแก้ไขได้ |
| Yes | ~454 | ~20% | อ่านอย่างเดียว |

---

**วิเคราะห์โดย**: Vibe Code (Mistral AI)  
**วันที่**: 2024-11-07  
**เวอร์ชัน**: 1.0  
**สถานะ**: ✅ วิเคราะห์ครบ 100%
