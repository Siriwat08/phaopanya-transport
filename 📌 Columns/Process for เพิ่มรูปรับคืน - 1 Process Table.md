Schema Name: Process for เพิ่มรูปรับคืน - 1 Process Table_Schema
Visible?: NEVER

## Column 1: Instance Id

| Property | Value |
|---|---|
| Column name | Instance Id |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | Yes |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 2: ID_รับงานคืนได้เงิน200

| Property | Value |
|---|---|
| Column name | ID_รับงานคืนได้เงิน200 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 3: สถานะการเข้ารับสินค้า

| Property | Value |
|---|---|
| Column name | สถานะการเข้ารับสินค้า |
| Visible? | ALWAYS |
| Type | Enum |
| Type Qualifier | {"EnumValues":["(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้","(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้","(ได้เพิ่ม50%) ของค่าเที่ยว","(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด","ทำเบิกค่ายกขึ้นชั้น","เบิกค่าขนส่งตามระยะทาง"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 4: วันที่เข้ารับ

| Property | Value |
|---|---|
| Column name | วันที่เข้ารับ |
| Visible? | ALWAYS |
| Type | Date |
| Type Qualifier | {"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 5: ชื่อ - นามสกุล

| Property | Value |
|---|---|
| Column name | ชื่อ - นามสกุล |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 6: ทะเบียนรถ

| Property | Value |
|---|---|
| Column name | ทะเบียนรถ |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 7: Shipment (หลัก)

| Property | Value |
|---|---|
| Column name | Shipment (หลัก) |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=IF(\n\nUSERROLE()= \"ADMIN\",\n  SELECT(\n    ข้อมูลงานRT[Shipment (หลัก)],\n    TRUE\n  ),\n  SELECT(\n    ข้อมูลงานRT[Shipment (หลัก)],\n    AND(\n      [ชื่อ - นามสกุล] =[_THISROW].[ID_พนักงาน].[ชื่อ - นามสกุล],\n      [วันที่เข้ารับ] = TODAY()\n    )\n  )\n)","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 8: Shipment (รับคืน)

| Property | Value |
|---|---|
| Column name | Shipment (รับคืน) |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 9: เลขที่เอกสารรับคืน

| Property | Value |
|---|---|
| Column name | เลขที่เอกสารรับคืน |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=IF( \nUSERROLE() = \"ADMIN\",\n    SELECT(\n        ข้อมูลงานRT[เลขที่เอกสารรับคืน],\n        IN([Shipment (รับคืน)], LIST([_THISROW].[Shipment (รับคืน)])) \n    ),\n\n    SELECT(\n        ข้อมูลงานRT[เลขที่เอกสารรับคืน],\n        AND(\n            IN([Shipment (รับคืน)], LIST([_THISROW].[Shipment (รับคืน)])),\n            [ชื่อ - นามสกุล] = [_THISROW].[ID_พนักงาน].[ชื่อ - นามสกุล],\n            [วันที่เข้ารับ] = TODAY(),\n            NOT(IN([เลขที่เอกสารรับคืน], SELECT(รับงานคืนได้เงิน200[เลขที่เอกสารรับคืน], TRUE)))\n        )\n    )\n)","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 10: จำนวนสินค้า

| Property | Value |
|---|---|
| Column name | จำนวนสินค้า |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 11: Shipment No

| Property | Value |
|---|---|
| Column name | Shipment No |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=SORT(\n  UNIQUE(\n    LIST([_THISROW].[Shipment No])\n    + SM_Today_User[Shipment No]\n  )\n)","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 12: Invoice No

| Property | Value |
|---|---|
| Column name | Invoice No |
| Visible? | ALWAYS |
| Type | EnumList |
| Type Qualifier | {"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"=IF(ISBLANK([Shipment No]),\n  LIST(),\n  UNIQUE(\n    IF(USERROLE() = \"ADMIN\",\n      SELECT(ตารางงานประจำวัน[Invoice No], [Shipment No] = [_THISROW].[Shipment No]),\n      SELECT(SM_Today_User[Invoice No],\n        AND(\n          [Shipment No] = [_THISROW].[Shipment No],\n         \n          NOT(IN([Invoice No], รับงานคืนได้เงิน200[Invoice No]))\n        )\n      )\n    )\n      + [_THISROW].[Invoice No]\n  ) - LIST(\"\")\n)","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 13: ชื่อเจ้าของสินค้า

| Property | Value |
|---|---|
| Column name | ชื่อเจ้าของสินค้า |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 14: รหัสลูกค้า

| Property | Value |
|---|---|
| Column name | รหัสลูกค้า |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 15: ชื่อลูกค้าที่เข้ารับ

| Property | Value |
|---|---|
| Column name | ชื่อลูกค้าที่เข้ารับ |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 16: รูปสินค้า

| Property | Value |
|---|---|
| Column name | รูปสินค้า |
| Visible? | ALWAYS |
| Type | Image |
| Type Qualifier | {"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 17: รูปบิลรับคืน

| Property | Value |
|---|---|
| Column name | รูปบิลรับคืน |
| Visible? | ALWAYS |
| Type | Image |
| Type Qualifier | {"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 18: หมายเหตุ

| Property | Value |
|---|---|
| Column name | หมายเหตุ |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"ทำเบิกค่ายกขึ้นชั้น\",\"เบิกค่าขนส่งตามระยะทาง\",\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 19: รูปจุดที่ส่งงาน

| Property | Value |
|---|---|
| Column name | รูปจุดที่ส่งงาน |
| Visible? | ALWAYS |
| Type | Image |
| Type Qualifier | {"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า] ,{\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\",\"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 20: Lat / Long

| Property | Value |
|---|---|
| Column name | Lat / Long |
| Visible? | ALWAYS |
| Type | LatLong |
| Type Qualifier | {"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 21: Email พนักงาน

| Property | Value |
|---|---|
| Column name | Email พนักงาน |
| Visible? | ALWAYS |
| Type | Email |
| Type Qualifier | {"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 22: ราคา

| Property | Value |
|---|---|
| Column name | ราคา |
| Visible? | ALWAYS |
| Type | Price |
| Type Qualifier | {"CurrencySymbol":"฿","MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า] ,{\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\",\"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 23: สร้างPDFรับคืน

| Property | Value |
|---|---|
| Column name | สร้างPDFรับคืน |
| Visible? | ALWAYS |
| Type | Yes/No |
| Type Qualifier | {"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE() = \"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 24: TimeChange

| Property | Value |
|---|---|
| Column name | TimeChange |
| Visible? | ALWAYS |
| Type | ChangeCounter |
| Type Qualifier | {"UpdateMode":"Accumulate","ChangeColumns":[],"ChangeValues":[],"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 25: ตรวจสอบก่อนบันทึกข้อมูล

| Property | Value |
|---|---|
| Column name | ตรวจสอบก่อนบันทึกข้อมูล |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":"=[ตรวจสอบก่อนบันทึกข้อมูล] &gt;0","Error_Message_If_Invalid":"=บันทึกข้อมูลไม่สำเร็จ กรุณาติดต่อแอดมินเพื่อตรวจสอบ","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 26: เดือน

| Property | Value |
|---|---|
| Column name | เดือน |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 27: ID_พนักงาน

| Property | Value |
|---|---|
| Column name | ID_พนักงาน |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"ข้อมูลพนักงาน","ReferencedRootTableName":"ข้อมูลพนักงาน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_พนักงาน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE()= \"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 28: LINK_IMAGE

| Property | Value |
|---|---|
| Column name | LINK_IMAGE |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 29: รายชื่อจุดส่งในตารางงานประจำวัน

| Property | Value |
|---|---|
| Column name | รายชื่อจุดส่งในตารางงานประจำวัน |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 30: New step

| Property | Value |
|---|---|
| Column name | New step |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"New step Output","ReferencedRootTableName":null,"ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"Instance Id","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

