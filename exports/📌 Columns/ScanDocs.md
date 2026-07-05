Schema Name: ScanDocs_Schema
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

## Column 2: ID_ScanDocs

| Property | Value |
|---|---|
| Column name | ID_ScanDocs |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | Yes |
| Hidden | No |
| Label | Yes |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | UNIQUEID() |
| System Defined? | No |
| Key | Yes |
| Part of Key? | Yes |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 3: Scan_Invoice

| Property | Value |
|---|---|
| Column name | Scan_Invoice |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":"=AND(\n  IN([_THIS], ตารางงานประจำวัน[Invoice No]),\n  LOOKUP([_THIS], \"ตารางงานประจำวัน\", \"Invoice No\", \"Plan Delivery\") = [_THISROW].[เลือกวันที่],\n  LOOKUP([_THIS], \"ตารางงานประจำวัน\", \"Invoice No\", \"จำนวน_Invoice_ที่ต้องสแกน\") &gt; 0,\n  ISBLANK(\n    SELECT(ScanDocs[ID_ScanDocs], \n      OR([Scan_Invoice] = [_THIS], [Select_Invoice] = [_THIS])\n    )\n  )\n)","Error_Message_If_Invalid":"=\"Invoice นี้ไม่ถูกต้อง, ไม่ใช่งานวันที่เลือก หรือสแกนรับไปแล้ว\"","Show_If":"=ISBLANK([Select_Invoice])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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
| Scannable | Yes |
| Sensitive data | No |

## Column 4: Select_Invoice

| Property | Value |
|---|---|
| Column name | Select_Invoice |
| Visible? | ALWAYS |
| Type | Enum |
| Type Qualifier | {"EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":"=SELECT(\n  ตารางงานประจำวัน[Invoice No],\n  AND(\n    [Plan Delivery] = [_THISROW].[เลือกวันที่],\n    OR(ISBLANK([ScanStatus]), [ScanStatus] &lt;&gt; \"สแกนรับแล้ว\"),\n    [จำนวน_Invoice_ที่ต้องสแกน] &gt; 0 \n  )\n)\n- ScanDocs[Scan_Invoice]\n- ScanDocs[Select_Invoice]","Error_Message_If_Invalid":"=\"เลข Invoice ไม่ถูกต้อง, ไม่ใช่งานของวันนี้/เมื่อวาน หรือถูกสแกนรับไปแล้ว\"","Show_If":"=ISBLANK([Scan_Invoice])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 5: Scan_DateTime

| Property | Value |
|---|---|
| Column name | Scan_DateTime |
| Visible? | ALWAYS |
| Type | DateTime |
| Type Qualifier | {"MinValue":null,"MaxValue":null,"UseLongDateFormat":false,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =NOW() |
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

## Column 6: Scan_By

| Property | Value |
|---|---|
| Column name | Scan_By |
| Visible? | ALWAYS |
| Type | Email |
| Type Qualifier | {"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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
| Sensitive data | Yes |

## Column 7: Scan_Method

| Property | Value |
|---|---|
| Column name | Scan_Method |
| Visible? | ALWAYS |
| Type | Enum |
| Type Qualifier | {"EnumValues":["Barcode","Manual"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"=ISBLANK([_THIS])","Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | =ISBLANK([_THIS]) |
| Initial value | =IF(ISNOTBLANK([Select_Invoice]), "Manual", "Barcode") |
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

## Column 8: Invoice_No

| Property | Value |
|---|---|
| Column name | Invoice_No |
| Visible? | ALWAYS |
| Type | Ref |
| Type Qualifier | {"ReferencedTableName":"ตารางงานประจำวัน","ReferencedRootTableName":"ตารางงานประจำวัน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_งานประจำวัน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":"=AND(\n  ISNOTBLANK([_THIS]),\n  IN(\n    LOOKUP([_THIS], \"ตารางงานประจำวัน\", \"ID_งานประจำวัน\", \"Plan Delivery\"),\n    LIST(TODAY(), TODAY() - 1)\n  ),\n  ISBLANK(\n    SELECT(ScanDocs[ID_ScanDocs], \n      AND(\n        [Invoice_No] = [_THIS], \n        [ID_ScanDocs] &lt;&gt; [_THISROW].[ID_ScanDocs]\n      )\n    )\n  )\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =ANY(<br>  SELECT(ตารางงานประจำวัน[ID_งานประจำวัน], <br>    [Invoice No] = IF(ISNOTBLANK([Scan_Invoice]), [Scan_Invoice], [Select_Invoice])<br>  )<br>) |
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

## Column 9: ชื่อเจ้าของสินค้า

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
| Initial value | =[Invoice_No].[ชื่อเจ้าของสินค้า] |
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

## Column 10: ทะเบียนรถ

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
| Initial value | =[Invoice_No].[ทะเบียนรถ] |
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

## Column 11: Shipment No

| Property | Value |
|---|---|
| Column name | Shipment No |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =[Invoice_No].[Shipment No] |
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

## Column 12: วันที่ส่งสินค้า

| Property | Value |
|---|---|
| Column name | วันที่ส่งสินค้า |
| Visible? | ALWAYS |
| Type | Date |
| Type Qualifier | {"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| Initial value | =[Invoice_No].[Plan Delivery] |
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

## Column 13: หมายเหตุการรับเอกสาร

| Property | Value |
|---|---|
| Column name | หมายเหตุการรับเอกสาร |
| Visible? | ALWAYS |
| Type | LongText |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice_No])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 14: จำนวน_ทั้งหมด

| Property | Value |
|---|---|
| Column name | จำนวน_ทั้งหมด |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =COUNT(<br>  UNIQUE(<br>    SELECT(<br>      ตารางงานประจำวัน[Invoice No],<br>      [Plan Delivery] = [_THISROW].[เลือกวันที่]<br>    )<br>  )<br>) |
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

## Column 15: จำนวน_สแกนแล้ว

| Property | Value |
|---|---|
| Column name | จำนวน_สแกนแล้ว |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =COUNT(<br>  UNIQUE(<br>    SELECT(<br>      ตารางงานประจำวัน[Invoice No],<br>      AND(<br>        [Plan Delivery] = [_THISROW].[เลือกวันที่],<br>        [ScanStatus] = "สแกนรับแล้ว"<br>      )<br>    )<br>  )<br>) |
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

## Column 16: จำนวน_รอสแกน

| Property | Value |
|---|---|
| Column name | จำนวน_รอสแกน |
| Visible? | ALWAYS |
| Type | Number |
| Type Qualifier | {"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =[จำนวน_ทั้งหมด] - [จำนวน_สแกนแล้ว] |
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

## Column 17: สรุปยอด

| Property | Value |
|---|---|
| Column name | สรุปยอด |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | = "📋 " &amp; [จำนวน_ทั้งหมด] &amp; "  ✅ " &amp; [จำนวน_สแกนแล้ว] &amp; "  ⏳ " &amp; [จำนวน_รอสแกน] |
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

## Column 18: เลือกวันที่

| Property | Value |
|---|---|
| Column name | เลือกวันที่ |
| Visible? | ALWAYS |
| Type | Date |
| Type Qualifier | {"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | =IF(<br>  TOTALHOURS(NOW() - TODAY()) &gt;= 16,<br>  TODAY(),<br>  TODAY() - 1<br>) |
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

