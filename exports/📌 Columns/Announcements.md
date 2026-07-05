Schema Name: Announcements_Schema
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

## Column 2: ID_ประกาศ

| Property | Value |
|---|---|
| Column name | ID_ประกาศ |
| Visible? | ALWAYS |
| Type | Text |
| Type Qualifier | {"MaxLength":null,"MinLength":null,"LongTextFormatting":"Plain Text","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| Read-Only | No |
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

## Column 3: วันที่ประกาศ

| Property | Value |
|---|---|
| Column name | วันที่ประกาศ |
| Visible? | ALWAYS |
| Type | Date |
| Type Qualifier | {"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 4: หัวข้อประกาศ

| Property | Value |
|---|---|
| Column name | หัวข้อประกาศ |
| Visible? | ALWAYS |
| Type | Enum |
| Type Qualifier | {"EnumValues":["กฎระเบียบและข้อบังคับ","แจ้งข้อมูลข่าวสาร","ความปลอดภัยและอุบัติเหตุ","สอบถามและรับฟังความคิดเห็น"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"Plain Text\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
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

## Column 5: เนื้อหาประกาศ

| Property | Value |
|---|---|
| Column name | เนื้อหาประกาศ |
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
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 6: Note

| Property | Value |
|---|---|
| Column name | Note |
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
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

## Column 7: Related Acknowledge_Logs

| Property | Value |
|---|---|
| Column name | Related Acknowledge_Logs |
| Visible? | ALWAYS |
| Description | Acknowledge_Logs entries that reference this entry in the ID_ประกาศ column |
| Type | List |
| Type Qualifier | {"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"Acknowledge_Logs\",\"ReferencedRootTableName\":\"Acknowledge_Logs\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"Plain Text\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_รับทราบ\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" , ","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null} |
| App formula | REF_ROWS("Acknowledge_Logs", "ID_ประกาศ") |
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

