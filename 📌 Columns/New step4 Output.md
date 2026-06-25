Schema Name: New step4 Output_Schema
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

## Column 2: ID_ทำเบิกส่วนต่างScgวังน้อย

| Property | Value |
|---|---|
| Column name | ID_ทำเบิกส่วนต่างScgวังน้อย |
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

## Column 3: ID_SCGนครหลวงJWDภูมิภาค

| Property | Value |
|---|---|
| Column name | ID_SCGนครหลวงJWDภูมิภาค |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"SCGนครหลวงJWDภูมิภาค","ReferencedRootTableName":"SCGนครหลวงJWDภูมิภาค","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_SCGนครหลวงJWDภูมิภาค","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 4: Shipment No

| Property | Value |
|---|---|
| Column name | Shipment No |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=IF(USERROLE() = \"ADMIN\",\n  SORT(\n    UNIQUE(\n      LIST([_THIS]) + \n      SELECT(\n        SCGนครหลวงJWDภูมิภาค[Shipment No],\n        AND(\n          [วันที่ส่งสินค้า] &gt;= EOMONTH(TODAY(), -2) + 1,\n          NOT(IN([Shipment No], ทำเบิกส่วนต่างScgวังน้อย[Shipment No]))\n        )\n      )\n    )\n  ),\n  SORT(\n    UNIQUE(\n      LIST([_THIS]) + \n      SELECT(\n        SCGนครหลวงJWDภูมิภาค[Shipment No],\n        AND(\n          [Email พนักงาน] = USEREMAIL(),\n          [วันที่ส่งสินค้า] &gt;= TODAY() - 1,\n          NOT(IN([Shipment No], ทำเบิกส่วนต่างScgวังน้อย[Shipment No]))\n        )\n      )\n    )\n  )\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 5: วันที่ส่งสินค้า

| Property | Value |
|---|---|
| Column name | วันที่ส่งสินค้า |
| Visible? | ALWAYS |
| Type | Date |
| Type Qualifier | {"UseLongDateFormat":false,"Valid_If":"=[ตรวจสอบข้อมูล] =1","Error_Message_If_Invalid":"=\"Shipment นี้มีจุดส่งที่ไม่ผ่านการตรวจสอบ กรุณาติดต่อผู้ดูแลระบบ\"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 6: ชื่อ - นามสกุล

| Property | Value |
|---|---|
| Column name | ชื่อ - นามสกุล |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=[ตรวจสอบข้อมูล] =1","Error_Message_If_Invalid":"=\"Shipment นี้มีจุดส่งที่ไม่ผ่านการตรวจสอบ กรุณาติดต่อผู้ดูแลระบบ\"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 7: ต้นทาง

| Property | Value |
|---|---|
| Column name | ต้นทาง |
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

## Column 8: GoogleMapsRoutesAPI

| Property | Value |
|---|---|
| Column name | GoogleMapsRoutesAPI |
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

## Column 9: แสดงแผนที่_GoogleMapsRoutesAPI

| Property | Value |
|---|---|
| Column name | แสดงแผนที่_GoogleMapsRoutesAPI |
| Visible? | ALWAYS |
| Type | Url |
| Type Qualifier | {"LaunchExternal":false,"IsHyperLink":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 10: ระยะทาง_GoogleMapAPI_Km

| Property | Value |
|---|---|
| Column name | ระยะทาง_GoogleMapAPI_Km |
| Visible? | ALWAYS |
| Type | Decimal |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 11: Email พนักงาน

| Property | Value |
|---|---|
| Column name | Email พนักงาน |
| Visible? | ALWAYS |
| Type | Email |
| Type Qualifier | {"Valid_If":"=IF(\n\n  USERROLE() = \"ADMIN\",\n\n  ข้อมูลพนักงาน[Email พนักงาน],\n\n  LIST(USEREMAIL())\n\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
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

## Column 12: Lat/Long_ปลายทาง_01

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_01 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  [Shipment No] = [_THISROW].[Shipment No]\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 13: Lat/Long_ปลายทาง_02

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_02 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_01])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 14: Lat/Long_ปลายทาง_03

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_03 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_02])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 15: Lat/Long_ปลายทาง_04

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_04 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_03])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 16: Lat/Long_ปลายทาง_05

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_05 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_04])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 17: Lat/Long_ปลายทาง_06

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_06 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_05])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 18: Lat/Long_ปลายทาง_07

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_07 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_06])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 19: Lat/Long_ปลายทาง_08

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_08 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_07])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 20: Lat/Long_ปลายทาง_09

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_09 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_08])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 21: Lat/Long_ปลายทาง_10

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_10 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_09])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 22: Lat/Long_ปลายทาง_11

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_11 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_10])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 23: Lat/Long_ปลายทาง_12

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_12 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_11])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 24: Lat/Long_ปลายทาง_13

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_13 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_12])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 25: Lat/Long_ปลายทาง_14

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_14 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_13] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_13])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 26: Lat/Long_ปลายทาง_15

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_15 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_13] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_14] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_14])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 27: Lat/Long_ปลายทาง_16

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_16 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_13] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_14] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_15]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_15])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 28: Lat/Long_ปลายทาง_17

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_17 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_13] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_14] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_15] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_16] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_16])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 29: Lat/Long_ปลายทาง_18

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_18 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_13] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_14] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_15] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_16] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_17] \n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_17])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 30: Lat/Long_ปลายทาง_19

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_19 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_13] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_14] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_15] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_16] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_17] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_18]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_18])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 31: Lat/Long_ปลายทาง_20

| Property | Value |
|---|---|
| Column name | Lat/Long_ปลายทาง_20 |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n  SCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n  AND(\n    [Shipment No] = [_THISROW].[Shipment No],  \n    NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n      [_THISROW].[Lat/Long_ปลายทาง_01] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_02] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_03] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_04] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_05] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_06] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_07] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_08] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_09] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_10] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_11] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_12] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_13] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_14] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_15] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_16] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_17] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_18] &amp; \" , \" &amp; \n      [_THISROW].[Lat/Long_ปลายทาง_19]\n    ), \" , \"))\n  )\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_19])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 32: ชื่องาน

| Property | Value |
|---|---|
| Column name | ชื่องาน |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=[ตรวจสอบข้อมูล] = 1","Error_Message_If_Invalid":"=\"Shipment นี้มีจุดส่งที่ไม่ผ่านการตรวจสอบ กรุณาติดต่อผู้ดูแลระบบ\"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 33: จำนวนจุดส่งก่อนเริ่มงาน

| Property | Value |
|---|---|
| Column name | จำนวนจุดส่งก่อนเริ่มงาน |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 34: จำนวนจุดส่งงานจริง

| Property | Value |
|---|---|
| Column name | จำนวนจุดส่งงานจริง |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 35: ตรวจสอบข้อมูล

| Property | Value |
|---|---|
| Column name | ตรวจสอบข้อมูล |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":"","Error_Message_If_Invalid":"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 36: ราคาในระบบก่อนส่งสินค้า

| Property | Value |
|---|---|
| Column name | ราคาในระบบก่อนส่งสินค้า |
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
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 37: ระยะทางในระบบก่อนส่งสินค้า

| Property | Value |
|---|---|
| Column name | ระยะทางในระบบก่อนส่งสินค้า |
| Visible? | ALWAYS |
| Type | Decimal |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 38: สร้างPDFเบิกส่วนต่าง

| Property | Value |
|---|---|
| Column name | สร้างPDFเบิกส่วนต่าง |
| Visible? | ALWAYS |
| Type | Yes/No |
| Type Qualifier | {"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
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

## Column 39: สถานะ

| Property | Value |
|---|---|
| Column name | สถานะ |
| Visible? | ALWAYS |
| Type | Enum |
| Type Qualifier | {"EnumValues":["รอตรวจสอบ","ผ่านการตรวจสอบ","ไม่ผ่านการตรวจสอบ"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
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

## Column 40: เดือน

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

## Column 41: ID_พนักงาน

| Property | Value |
|---|---|
| Column name | ID_พนักงาน |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"ข้อมูลพนักงาน","ReferencedRootTableName":"ข้อมูลพนักงาน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_พนักงาน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE() = \"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null} |
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

## Column 42: สร้างPDFเบิกตามระยะทาง

| Property | Value |
|---|---|
| Column name | สร้างPDFเบิกตามระยะทาง |
| Visible? | ALWAYS |
| Type | Yes/No |
| Type Qualifier | {"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 43: เรท น้ำมันดีเซล

| Property | Value |
|---|---|
| Column name | เรท น้ำมันดีเซล |
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
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 44: ราคาตามระยะทาง

| Property | Value |
|---|---|
| Column name | ราคาตามระยะทาง |
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
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 45: ราคาจุดเพิ่ม

| Property | Value |
|---|---|
| Column name | ราคาจุดเพิ่ม |
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
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 46: ทะเบียนรถ

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

## Column 47: 01เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 01เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 48: รูปบิลส่งสินค้า_01

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_01 |
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

## Column 49: รูปหน้าร้าน_บ้าน01

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน01 |
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

## Column 50: รูปส่งสินค้า01

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า01 |
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

## Column 51: 02เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 02เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 52: รูปบิลส่งสินค้า_02

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_02 |
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

## Column 53: รูปหน้าร้าน_บ้าน02

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน02 |
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

## Column 54: รูปส่งสินค้า02

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า02 |
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

## Column 55: 03เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 03เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 56: รูปบิลส่งสินค้า_03

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_03 |
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

## Column 57: รูปหน้าร้าน_บ้าน03

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน03 |
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

## Column 58: รูปส่งสินค้า03

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า03 |
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

## Column 59: 04เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 04เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 60: รูปบิลส่งสินค้า_04

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_04 |
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

## Column 61: รูปหน้าร้าน_บ้าน04

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน04 |
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

## Column 62: รูปส่งสินค้า04

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า04 |
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

## Column 63: 05เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 05เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 64: รูปบิลส่งสินค้า_05

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_05 |
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

## Column 65: รูปหน้าร้าน_บ้าน05

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน05 |
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

## Column 66: รูปส่งสินค้า05

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า05 |
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

## Column 67: 06เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 06เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 68: รูปบิลส่งสินค้า_06

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_06 |
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

## Column 69: รูปหน้าร้าน_บ้าน06

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน06 |
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

## Column 70: รูปส่งสินค้า06

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า06 |
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

## Column 71: 07เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 07เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 72: รูปบิลส่งสินค้า_07

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_07 |
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

## Column 73: รูปหน้าร้าน_บ้าน07

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน07 |
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

## Column 74: รูปส่งสินค้า07

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า07 |
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

## Column 75: 08เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 08เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 76: รูปบิลส่งสินค้า_08

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_08 |
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

## Column 77: รูปหน้าร้าน_บ้าน08

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน08 |
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

## Column 78: รูปส่งสินค้า08

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า08 |
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

## Column 79: 09เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 09เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 80: รูปบิลส่งสินค้า_09

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_09 |
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

## Column 81: รูปหน้าร้าน_บ้าน09

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน09 |
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

## Column 82: รูปส่งสินค้า09

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า09 |
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

## Column 83: 10เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 10เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 84: รูปบิลส่งสินค้า_10

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_10 |
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

## Column 85: รูปหน้าร้าน_บ้าน10

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน10 |
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

## Column 86: รูปส่งสินค้า10

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า10 |
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

## Column 87: 11เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 11เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 88: รูปบิลส่งสินค้า_11

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_11 |
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

## Column 89: รูปหน้าร้าน_บ้าน11

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน11 |
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

## Column 90: รูปส่งสินค้า11

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า11 |
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

## Column 91: 12เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 12เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 92: รูปบิลส่งสินค้า_12

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_12 |
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

## Column 93: รูปหน้าร้าน_บ้าน12

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน12 |
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

## Column 94: รูปส่งสินค้า12

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า12 |
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

## Column 95: 13เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 13เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 96: รูปบิลส่งสินค้า_13

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_13 |
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

## Column 97: รูปหน้าร้าน_บ้าน13

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน13 |
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

## Column 98: รูปส่งสินค้า13

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า13 |
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

## Column 99: 14เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 14เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 100: รูปบิลส่งสินค้า_14

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_14 |
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

## Column 101: รูปหน้าร้าน_บ้าน14

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน14 |
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

## Column 102: รูปส่งสินค้า14

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า14 |
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

## Column 103: 15เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 15เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 104: รูปบิลส่งสินค้า_15

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_15 |
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

## Column 105: รูปหน้าร้าน_บ้าน15

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน15 |
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

## Column 106: รูปส่งสินค้า15

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า15 |
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

## Column 107: 16เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 16เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 108: รูปบิลส่งสินค้า_16

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_16 |
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

## Column 109: รูปหน้าร้าน_บ้าน16

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน16 |
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

## Column 110: รูปส่งสินค้า16

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า16 |
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

## Column 111: 17เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 17เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 112: รูปบิลส่งสินค้า_17

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_17 |
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

## Column 113: รูปหน้าร้าน_บ้าน17

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน17 |
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

## Column 114: รูปส่งสินค้า17

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า17 |
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

## Column 115: 18เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 18เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 116: รูปบิลส่งสินค้า_18

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_18 |
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

## Column 117: รูปหน้าร้าน_บ้าน18

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน18 |
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

## Column 118: รูปส่งสินค้า18

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า18 |
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

## Column 119: 19เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 19เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 120: รูปบิลส่งสินค้า_19

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_19 |
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

## Column 121: รูปหน้าร้าน_บ้าน19

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน19 |
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

## Column 122: รูปส่งสินค้า19

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า19 |
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

## Column 123: 20เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Column name | 20เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
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

## Column 124: รูปบิลส่งสินค้า_20

| Property | Value |
|---|---|
| Column name | รูปบิลส่งสินค้า_20 |
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

## Column 125: รูปหน้าร้าน_บ้าน20

| Property | Value |
|---|---|
| Column name | รูปหน้าร้าน_บ้าน20 |
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

## Column 126: รูปส่งสินค้า20

| Property | Value |
|---|---|
| Column name | รูปส่งสินค้า20 |
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

## Column 127: ราคาที่สมควรได้

| Property | Value |
|---|---|
| Column name | ราคาที่สมควรได้ |
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
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 128: ราคาหลังส่งสินค้า

| Property | Value |
|---|---|
| Column name | ราคาหลังส่งสินค้า |
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
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 129: ขออนุมัติเบิกค่าขนส่งส่วนเพิ่ม

| Property | Value |
|---|---|
| Column name | ขออนุมัติเบิกค่าขนส่งส่วนเพิ่ม |
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
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

## Column 130: QR code เส้นทางรวม

| Property | Value |
|---|---|
| Column name | QR code เส้นทางรวม |
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

## Column 131: จุดส่งงานลำดับสุดท้าย

| Property | Value |
|---|---|
| Column name | จุดส่งงานลำดับสุดท้าย |
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

## Column 132: ชื่อปลายทาง_INV_จุดสุดท้าย

| Property | Value |
|---|---|
| Column name | ชื่อปลายทาง_INV_จุดสุดท้าย |
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

