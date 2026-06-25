Schema Name: New step Output 3_Schema
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 2: ID_แจ้งปัญหาระหว่างวัน

| Property | Value |
|---|---|
| Column name | ID_แจ้งปัญหาระหว่างวัน |
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

## Column 3: กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา

| Property | Value |
|---|---|
| Column name | กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา |
| Visible? | ALWAYS |
| Type | Yes/No |
| Type Qualifier | {"YesLabel":"","NoLabel":"","Valid_If":"=OR(\n  ISBLANK([กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา]),\n  NOT([กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา])\n)","Error_Message_If_Invalid":null,"Show_If":"=AND(\n  ISNOTBLANK([รูป1]),\n  NOT([กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา])\n)","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 4: ข้อมูลการแจ้งปัญหา

| Property | Value |
|---|---|
| Column name | ข้อมูลการแจ้งปัญหา |
| Visible? | ALWAYS |
| Type | Enum |
| Type Qualifier | {"EnumValues":["สินค้าชำรุด ตอนขึ้นงาน แจ้งคลังตรวจสอบแล้ว ทางคลังไม่เซ็นรับทราบให้ แจ้งเพื่อทราบครับ","ถังน้ำมัน 200 ลิตร สินค้ามีน้ำหนักเกินกลัวจะเสียหายตอนจัดส่ง สอบถามลูกค้าแล้วไม่มีรถตักสินค้าให้ครับ  ","ติดต่อลูกค้าไม่ได้ ปิดเครื่อง","ลูกค้าไม่รับสาย ติดต่อ 3 ครั้งแล้ว","ร้านปิด","เบอร์โทรผิด ขอเบอร์ติดต่อลูกค้าใหม่ครับ","เข้าหน้างานไม่ถูกครับ  ขอโลเคชั่นพร้อมเบอร์โทรติดต่อด้วยครับ","ที่อยู่หน้าเอกสารกับที่อยู่หน้ากล่องไม่ตรงกัน ให้จัดส่งที่ใหนครับ","ที่อยู่ผิด ","สินค้าเสียหาย / ชำรุด","ลูกค้าไม่สะดวกรับสินค้า","จัดส่งสินค้าไม่ทัน","ไม่มีในจุดส่งงานวันนี้ ไม่สามารถเข้ารับงานคืนให้ได้","ปัญหาอื่นๆๆ *ใส่ปัญหาในหมายเหตุ*"],"AllowOtherValues":false,"AutoCompleteOtherValues":false,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":""} |
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

## Column 5: รูป1

| Property | Value |
|---|---|
| Column name | รูป1 |
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

## Column 6: รูป2

| Property | Value |
|---|---|
| Column name | รูป2 |
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

## Column 7: รูป3

| Property | Value |
|---|---|
| Column name | รูป3 |
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

## Column 8: หมายเหตุ

| Property | Value |
|---|---|
| Column name | หมายเหตุ |
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

## Column 9: วันที่+เวลา

| Property | Value |
|---|---|
| Column name | วันที่+เวลา |
| Visible? | ALWAYS |
| Type | DateTime |
| Type Qualifier | {"MinValue":null,"MaxValue":null,"UseLongDateFormat":false,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
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

## Column 10: ชื่อ - นามสกุล

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

## Column 11: ทะเบียนรถ

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

## Column 12: รหัสผู้รับเหมา

| Property | Value |
|---|---|
| Column name | รหัสผู้รับเหมา |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 13: ชื่อผู้รับเหมา

| Property | Value |
|---|---|
| Column name | ชื่อผู้รับเหมา |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 14: Shipment No

| Property | Value |
|---|---|
| Column name | Shipment No |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=IF(USERROLE() = \"ADMIN\",\n  (SM_Today_User[Shipment No] + \n   SELECT(ข้อมูลงานRT[Shipment (รับคืน)], [วันที่เข้ารับ] = TODAY())),\n  IF([ข้อมูลการแจ้งปัญหา] = \"ไม่มีในจุดส่งงานวันนี้ ไม่สามารถเข้ารับงานคืนให้ได้\",\n    SELECT(ข้อมูลงานRT[Shipment (รับคืน)], \n      AND([Email พนักงาน] = USEREMAIL(), [วันที่เข้ารับ] = TODAY())\n    ),\n    SM_Today_User[Shipment No]\n  )\n)","Error_Message_If_Invalid":null,"Show_If":"","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 15: Invoice No

| Property | Value |
|---|---|
| Column name | Invoice No |
| Visible? | ALWAYS |
| Type | EnumList |
| Type Qualifier | {"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"=UNIQUE(\n  IF(USERROLE() = \"ADMIN\",\n    SELECT(ตารางงานประจำวัน[Invoice No], [Shipment No] = [_THISROW].[Shipment No]) +\n    SELECT(ข้อมูลงานRT[เลขที่เอกสารรับคืน], [Shipment (รับคืน)] = [_THISROW].[Shipment No]),\n    IF([ข้อมูลการแจ้งปัญหา] = \"ไม่มีในจุดส่งงานวันนี้ ไม่สามารถเข้ารับงานคืนให้ได้\",\n      SELECT(ข้อมูลงานRT[เลขที่เอกสารรับคืน],\n        AND(\n          [Shipment (รับคืน)] = [_THISROW].[Shipment No],\n          [Email พนักงาน] = USEREMAIL(),\n          [วันที่เข้ารับ] = TODAY()\n        )\n      ),\n      SELECT(SM_Today_User[Invoice No], \n        AND(\n          [Shipment No] = [_THISROW].[Shipment No],\n          [DeliveryStatus] &lt;&gt; \"จัดส่งเรียบร้อย\",\n          NOT(IN([Invoice No], SELECT(แจ้งปัญหาระหว่างวัน[Invoice No], [Shipment No] = [_THISROW].[Shipment No])))\n        )\n      )\n    )\n  ) \n  + [_THISROW].[Invoice No]\n) - LIST(\"\")","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":""} |
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

## Column 16: รหัสลูกค้า

| Property | Value |
|---|---|
| Column name | รหัสลูกค้า |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 17: ชื่อปลายทาง

| Property | Value |
|---|---|
| Column name | ชื่อปลายทาง |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 18: ใส่ข้อมูลการแจ้งปัญหา เพื่อนับจุดส่งงาน

| Property | Value |
|---|---|
| Column name | ใส่ข้อมูลการแจ้งปัญหา เพื่อนับจุดส่งงาน |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 19: เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง

| Property | Value |
|---|---|
| Column name | เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง |
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

## Column 20: อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG

| Property | Value |
|---|---|
| Column name | อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG |
| Visible? | ALWAYS |
| Type | Yes/No |
| Type Qualifier | {"YesLabel":"","NoLabel":"","Valid_If":"=OR(\n  ISBLANK([อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG]),\n  NOT([อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG])\n)","Error_Message_If_Invalid":"","Show_If":"=AND(\n        ISNOTBLANK([ใส่ข้อมูลการแจ้งปัญหา เพื่อนับจุดส่งงาน]),\n        ISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง]),\n        NOT([อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG])\n)","Required_If":null,"Editable_If":"","Reset_If":null,"Suggested_Values":null} |
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

## Column 21: Lat/Long

| Property | Value |
|---|---|
| Column name | Lat/Long |
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

## Column 22: LatLong_ตรวจสอบ

| Property | Value |
|---|---|
| Column name | LatLong_ตรวจสอบ |
| Visible? | ALWAYS |
| Type | LatLong |
| Type Qualifier | {"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":"","Error_Message_If_Invalid":"","Show_If":"","Required_If":null,"Editable_If":null,"Reset_If":"=ISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง])","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =ISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง]) |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 23: Email พนักงาน

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

## Column 24: เดือน

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

## Column 25: SM_Link

| Property | Value |
|---|---|
| Column name | SM_Link |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"ตารางงานประจำวัน","ReferencedRootTableName":"ตารางงานประจำวัน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_งานประจำวัน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 26: RT_Link

| Property | Value |
|---|---|
| Column name | RT_Link |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"ข้อมูลงานRT","ReferencedRootTableName":"ข้อมูลงานRT","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_RT","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 27: SCGนครหลวงJWDภูมิภาค_ID

| Property | Value |
|---|---|
| Column name | SCGนครหลวงJWDภูมิภาค_ID |
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

## Column 28: ID_พนักงาน

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

## Column 29: LINK_Image_แจ้งปัญหา

| Property | Value |
|---|---|
| Column name | LINK_Image_แจ้งปัญหา |
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

