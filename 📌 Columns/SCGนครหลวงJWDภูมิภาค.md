Schema Name: SCGนครหลวงJWDภูมิภาค_Schema
Visible?: ALWAYS

## Column 1: _RowNumber

| Property | Value |
|---|---|
| Column name | _RowNumber |
| Visible? | ALWAYS |
| Description | Number of this row |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 2: head

| Property | Value |
|---|---|
| Column name | head |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 3: ID_SCGนครหลวงJWDภูมิภาค

| Property | Value |
|---|---|
| Column name | ID_SCGนครหลวงJWDภูมิภาค |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | Yes |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =UNIQUEID() |
| System Defined? | No |
| Key | Yes |
| Part of Key? | Yes |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 4: วันที่ส่งสินค้า

| Property | Value |
|---|---|
| Column name | วันที่ส่งสินค้า |
| Visible? | ALWAYS |
| Type | Date |
| Type Qualifier | {"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =TODAY() |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 5: เวลาที่ส่งสินค้า

| Property | Value |
|---|---|
| Column name | เวลาที่ส่งสินค้า |
| Visible? | ALWAYS |
| Type | Time |
| Type Qualifier | {"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =TIMENOW() |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 6: จุดส่งสินค้าปลายทาง

| Property | Value |
|---|---|
| Column name | จุดส่งสินค้าปลายทาง |
| Visible? | ALWAYS |
| Type | LatLong |
| Type Qualifier | {"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":"=AND(\n      ISNOTBLANK([_THIS]),\n      [_THIS] &lt;&gt; \"0.000000, 0.000000\",\n      [_THIS] &lt;&gt; \"0, 0\"\n)","Error_Message_If_Invalid":"=\"ไม่สามารถให้บันทึกข้อมูลได้ ไม่มีสัญญาณ GPS\"","Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =HERE() |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 7: ชื่อ - นามสกุล

| Property | Value |
|---|---|
| Column name | ชื่อ - นามสกุล |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =[ID_พนักงาน].[ชื่อ - นามสกุล] |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 8: ทะเบียนรถ

| Property | Value |
|---|---|
| Column name | ทะเบียนรถ |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =[ID_พนักงาน].[ทะเบียนรถ] |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 9: Shipment No

| Property | Value |
|---|---|
| Column name | Shipment No |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=SORT(\n  UNIQUE(\n    LIST([_THISROW].[Shipment No])\n    + SM_Today_User[Shipment No]\n  )\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":""} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 10: Invoice No

| Property | Value |
|---|---|
| Column name | Invoice No |
| Visible? | ALWAYS |
| Type | EnumList |
| Type Qualifier | {"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"=IF(ISBLANK([Shipment No]),\n  LIST(),\n  UNIQUE(\n    IF(USERROLE() = \"ADMIN\",\n      SELECT(ตารางงานประจำวัน[Invoice No], [Shipment No] = [_THISROW].[Shipment No]),\n      SELECT(SM_Today_User[Invoice No],\n        AND(\n          [Shipment No] = [_THISROW].[Shipment No],\n         \n          NOT(IN([Invoice No], SCGนครหลวงJWDภูมิภาค[Invoice No]))\n        )\n      )\n    )\n      + [_THISROW].[Invoice No]\n  ) - LIST(\"\")\n)","Error_Message_If_Invalid":null,"Show_If":"","Required_If":null,"Editable_If":"=OR(\n  USERROLE() = \"ADMIN\",\n  ISBLANK([_THISROW].[Invoice No])\n)","Reset_If":null,"Suggested_Values":""} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 11: รูปถ่ายบิลส่งสินค้า

| Property | Value |
|---|---|
| Column name | รูปถ่ายบิลส่งสินค้า |
| Visible? | ALWAYS |
| Type | Image |
| Type Qualifier | {"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | Yes |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 12: รหัสลูกค้า

| Property | Value |
|---|---|
| Column name | รหัสลูกค้า |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No]","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No] |
| Initial value | =[SM_Link_SCG].[รหัสลูกค้า] |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 13: ชื่อเจ้าของสินค้า

| Property | Value |
|---|---|
| Column name | ชื่อเจ้าของสินค้า |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No]","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No] |
| Initial value | =[SM_Link_SCG].[ชื่อเจ้าของสินค้า] |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 14: ชื่อปลายทาง

| Property | Value |
|---|---|
| Column name | ชื่อปลายทาง |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No]","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No] |
| Initial value | =[SM_Link_SCG].[ชื่อปลายทาง] |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 15: Email พนักงาน

| Property | Value |
|---|---|
| Column name | Email พนักงาน |
| Visible? | ALWAYS |
| Type | Email |
| Type Qualifier | {"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =USEREMAIL() |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 16: LAT

| Property | Value |
|---|---|
| Column name | LAT |
| Visible? | ALWAYS |
| Type | Decimal |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":6,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =LAT([จุดส่งสินค้าปลายทาง]) |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 17: LONG

| Property | Value |
|---|---|
| Column name | LONG |
| Visible? | ALWAYS |
| Type | Decimal |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":6,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =LONG([จุดส่งสินค้าปลายทาง]) |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 18: ID_Doc_Return

| Property | Value |
|---|---|
| Column name | ID_Doc_Return |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"Doc_Return","ReferencedRootTableName":"Doc_Return","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_Doc_Return","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No]","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No] |
| Initial value | =LOOKUP(<br>  [_THISROW].[รหัสลูกค้า],  <br>  "Doc_Return",  <br>  "รหัสลูกค้า",  <br>  "ID_Doc_Return"<br>) |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 19: คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย

| Property | Value |
|---|---|
| Column name | คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย |
| Visible? | ALWAYS |
| Type | LatLong |
| Type Qualifier | {"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | ="14.165716365156051, 100.62529569032515" |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 20: ที่อยู่ปลายทาง

| Property | Value |
|---|---|
| Column name | ที่อยู่ปลายทาง |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice No])","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No]","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =[_THISROW_BEFORE].[Invoice No] &lt;&gt; [_THISROW].[Invoice No] |
| Initial value | =[SM_Link_SCG].[ที่อยู่ปลายทาง] |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 21: รูปสินค้าตอนส่ง

| Property | Value |
|---|---|
| Column name | รูปสินค้าตอนส่ง |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 22: รูปหน้าร้าน / บ้าน

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน / บ้าน |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 23: หมายเหตุ

| Property | Value |
|---|---|
| Column name | หมายเหตุ |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=AND(\n  ISNOTBLANK([รูปถ่ายบิลส่งสินค้า]),\n  ISNOTBLANK([รูปสินค้าตอนส่ง]),\n  ISNOTBLANK([รูปหน้าร้าน / บ้าน])\n)","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
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
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =IF(<br>  ISBLANK([วันที่ส่งสินค้า]),<br>  "",<br>  CONCATENATE(<br>    YEAR([วันที่ส่งสินค้า]) - IF(YEAR([วันที่ส่งสินค้า]) &gt; 2500, 543, 0), <br>    "-", <br>    TEXT([วันที่ส่งสินค้า], "MM")<br>  )<br>) |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 25: ระยะทางจากคลัง_Km

| Property | Value |
|---|---|
| Column name | ระยะทางจากคลัง_Km |
| Visible? | ALWAYS |
| Type | Decimal |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 26: ชื่อที่อยู่จาก_LatLong

| Property | Value |
|---|---|
| Column name | ชื่อที่อยู่จาก_LatLong |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 27: SM_Link_SCG

| Property | Value |
|---|---|
| Column name | SM_Link_SCG |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"ตารางงานประจำวัน","ReferencedRootTableName":"ตารางงานประจำวัน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_งานประจำวัน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =ANY(SELECT(ตารางงานประจำวัน[ID_งานประจำวัน], AND([Invoice No] = ANY([_THISROW].[Invoice No]), [_ROWNUMBER] = MIN(SELECT(ตารางงานประจำวัน[_ROWNUMBER], [Invoice No] = ANY([_THISROW].[Invoice No])))))) |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 28: ID_พนักงาน

| Property | Value |
|---|---|
| Column name | ID_พนักงาน |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"ข้อมูลพนักงาน","ReferencedRootTableName":"ข้อมูลพนักงาน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_พนักงาน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE()= \"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE()= \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =LOOKUP(USEREMAIL(), "ข้อมูลพนักงาน", "Email พนักงาน", "ID_พนักงาน") |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 29: พิกัดตอนกดบันทึกงาน

| Property | Value |
|---|---|
| Column name | พิกัดตอนกดบันทึกงาน |
| Visible? | ALWAYS |
| Type | LatLong |
| Type Qualifier | {"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"=ISNOTBLANK([หมายเหตุ])","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =ISNOTBLANK([หมายเหตุ]) |
| Initial value | =HERE() |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 30: เวลาเริ่มกรอกงาน

| Property | Value |
|---|---|
| Column name | เวลาเริ่มกรอกงาน |
| Visible? | ALWAYS |
| Type | Time |
| Type Qualifier | {"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =TIMENOW() |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 31: เวลาบันทึกงานสำเร็จ

| Property | Value |
|---|---|
| Column name | เวลาบันทึกงานสำเร็จ |
| Visible? | ALWAYS |
| Type | Time |
| Type Qualifier | {"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"=ISNOTBLANK([หมายเหตุ])","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =ISNOTBLANK([หมายเหตุ]) |
| Initial value | =TIMENOW() |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 32: ระยะขยับจากจุดเริ่มต้น_เมตร

| Property | Value |
|---|---|
| Column name | ระยะขยับจากจุดเริ่มต้น_เมตร |
| Visible? | ALWAYS |
| Type | Decimal |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"","Suggested_Values":null} |
| App formula | =DISTANCE(<br>  [จุดส่งสินค้าปลายทาง],<br>  [พิกัดตอนกดบันทึกงาน]<br>) * 1000 |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 33: ระยะเวลาใช้งาน_นาที

| Property | Value |
|---|---|
| Column name | ระยะเวลาใช้งาน_นาที |
| Visible? | ALWAYS |
| Type | Duration |
| Type Qualifier | {"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =[เวลาบันทึกงานสำเร็จ] - [เวลาที่ส่งสินค้า] |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 34: ความเร็วการเคลื่อนที่_เมตร_นาที

| Property | Value |
|---|---|
| Column name | ความเร็วการเคลื่อนที่_เมตร_นาที |
| Visible? | ALWAYS |
| Type | Decimal |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =IF(<br>    <br>TOTALMINUTES([ระยะเวลาใช้งาน_นาที]) &gt; 0,<br>    [ระยะขยับจากจุดเริ่มต้น_เมตร] / <br>TOTALMINUTES([ระยะเวลาใช้งาน_นาที]),<br>    0<br>) |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 35: ผลการตรวจสอบงานส่ง

| Property | Value |
|---|---|
| Column name | ผลการตรวจสอบงานส่ง |
| Visible? | ALWAYS |
| Type | Enum |
| Type Qualifier | {"EnumValues":["PASS","WARNING","FAIL"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =IFS(<br>  AND([ระยะขยับจากจุดเริ่มต้น_เมตร] &lt;= 40,  TOTALMINUTES([ระยะเวลาใช้งาน_นาที]) &lt;= 10),<br>    "PASS",<br><br>  AND([ระยะขยับจากจุดเริ่มต้น_เมตร] &lt;= 60,  TOTALMINUTES([ระยะเวลาใช้งาน_นาที]) &lt;= 15),<br>    "WARNING",<br><br>  OR([ระยะขยับจากจุดเริ่มต้น_เมตร] &gt; 100, [ความเร็วการเคลื่อนที่_เมตร_นาที]&gt; 60),<br>    "FAIL",<br><br>  TRUE,<br>    "WARNING"<br>) |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 36: เหตุผิดปกติที่ตรวจพบ

| Property | Value |
|---|---|
| Column name | เหตุผิดปกติที่ตรวจพบ |
| Visible? | ALWAYS |
| Type | EnumList |
| Type Qualifier | {"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =UNIQUE(<br>  LIST(<br>    IF([ระยะขยับจากจุดเริ่มต้น_เมตร] &gt; 60, "มีการเคลื่อนที่จากจุดเริ่มต้น", ""),<br>    IF(TOTALMINUTES([ระยะเวลาใช้งาน_นาที]) &gt; 15, "ใช้เวลานานกว่าปกติ", ""),<br>    IF([ความเร็วการเคลื่อนที่_เมตร_นาที] &gt; 60, "ความเร็วผิดปกติ", "")<br>  )<br>) - LIST("") |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 37: เวลาถ่ายรูปหน้าร้าน_หน้าบ้าน

| Property | Value |
|---|---|
| Column name | เวลาถ่ายรูปหน้าร้าน_หน้าบ้าน |
| Visible? | ALWAYS |
| Type | Time |
| Type Qualifier | {"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | Yes |
| Initial value | =IF(<br>  ISNOTBLANK([รูปหน้าร้าน / บ้าน]),<br> TIMENOW(),<br>  [_THIS]<br>) |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 38: เจ้าของสินค้า//ชื่อปลายทาง//Lat_Long//Inv No

| Property | Value |
|---|---|
| Column name | เจ้าของสินค้า//ชื่อปลายทาง//Lat_Long//Inv No |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =CONCATENATE(<br>  IF(ISNOTBLANK([ชื่อเจ้าของสินค้า]), CONCATENATE("ต้นทาง ", [ชื่อเจ้าของสินค้า], "<br>"), ""),<br>  IF(ISNOTBLANK([ชื่อปลายทาง]), CONCATENATE("ปลายทาง ", [ชื่อปลายทาง], "<br>"), ""),<br>  IF(ISNOTBLANK([จุดส่งสินค้าปลายทาง]), CONCATENATE("Lat/Lng ", TEXT([จุดส่งสินค้าปลายทาง]), "<br>"), ""),<br>  IF(ISNOTBLANK([Invoice No]), CONCATENATE("INV. ", INDEX([Invoice No], 1)), "")<br>) |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 39: Document_Return

| Property | Value |
|---|---|
| Column name | Document_Return |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =[ID_Doc_Return].[ข้อความอธิบาย_Document_Return] |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 40: Image_Document_Return

| Property | Value |
|---|---|
| Column name | Image_Document_Return |
| Visible? | ALWAYS |
| Type | List |
| Type Qualifier | {"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"Image_Doc_Return\",\"ReferencedRootTableName\":\"Image_Doc_Return\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"Plain Text\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_Image_Doc_Return\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" , ","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =[ID_Doc_Return].[Related Image_Doc_Returns] |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 41: ที่อยู่ปลายทาง_LatLong_Api

| Property | Value |
|---|---|
| Column name | ที่อยู่ปลายทาง_LatLong_Api |
| Visible? | ALWAYS |
| Type | LatLong |
| Type Qualifier | {"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =LOOKUP([_THISROW].[ชื่อปลายทาง],"ตารางงานประจำวัน","ชื่อปลายทาง","ที่อยู่ปลายทาง_LatLong") |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 42: Related สรุปเบิกส่วนต่างs

| Property | Value |
|---|---|
| Column name | Related สรุปเบิกส่วนต่างs |
| Visible? | ALWAYS |
| Description | สรุปเบิกส่วนต่าง entries that reference this entry in the _ComputedKey_ID_SCGนครหลวงJWDภูมิภาค column |
| Type | List |
| Type Qualifier | {"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"สรุปเบิกส่วนต่าง\",\"ReferencedRootTableName\":\"สรุปเบิกส่วนต่าง\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"Plain Text\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_สรุปเบิกส่วนต่าง\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" , ","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | REF_ROWS("สรุปเบิกส่วนต่าง", "_ComputedKey_ID_SCGนครหลวงJWDภูมิภาค") |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| NFC Scannable | No |
| Sensitive data | No |

## Column 43: Related ทำเบิกส่วนต่างScgวังน้อยs

| Property | Value |
|---|---|
| Column name | Related ทำเบิกส่วนต่างScgวังน้อยs |
| Visible? | ALWAYS |
| Description | ทำเบิกส่วนต่างScgวังน้อย entries that reference this entry in the _ComputedKey_ID_SCGนครหลวงJWDภูมิภาค column |
| Type | List |
| Type Qualifier | {"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"ทำเบิกส่วนต่างScgวังน้อย\",\"ReferencedRootTableName\":\"ทำเบิกส่วนต่างScgวังน้อย\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"Plain Text\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_ทำเบิกส่วนต่างScgวังน้อย\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" , ","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | REF_ROWS("ทำเบิกส่วนต่างScgวังน้อย", "ID_SCGนครหลวงJWDภูมิภาค") |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| NFC Scannable | No |
| Sensitive data | No |

## Column 44: พิกัดตอนกดบันทึก_เปลี่ยนแล้ว

| Property | Value |
|---|---|
| Column name | พิกัดตอนกดบันทึก_เปลี่ยนแล้ว |
| Visible? | ALWAYS |
| Type | Yes/No |
| Type Qualifier | {"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =AND(<br>  ISNOTBLANK([พิกัดตอนกดบันทึกงาน]),<br>  [พิกัดตอนกดบันทึกงาน]<br>    &lt;&gt; [_THISROW_BEFORE].[พิกัดตอนกดบันทึกงาน]<br>) |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

