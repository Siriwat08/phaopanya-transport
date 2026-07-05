For a record of this table: ทำเบิกส่วนต่างScgวังน้อย

## Action 1: Delete

| Property | Value |
|---|---|
| Action name | Delete |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | Yes |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":true,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | DELETE_RECORD |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ADVANCED |

## Action 2: Edit

| Property | Value |
|---|---|
| Action name | Edit |
| Bulk action? | No |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Overlay |
| Action order | 1 |
| With these properties | {"DesktopBehavior":"Open a form","DesktopEditBehavior":"Edit in place","Prominence":"Display_Overlay","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":false} |
| Do this | EDIT_RECORD |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 3: Add

| Property | Value |
|---|---|
| Action name | Add |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Overlay |
| Action order | 1 |
| With these properties | {"Prominence":"Display_Overlay","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | ADD_RECORD |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | Yes |
| Visible? | ALWAYS |

## Action 4: View Ref (_ComputedKey_ID_SCGนครหลวงJWDภูมิภาค)

| Property | Value |
|---|---|
| Action name | View Ref (_ComputedKey_ID_SCGนครหลวงJWDภูมิภาค) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=detail&amp;table=SCG%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87JWD%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84&amp;row=\", ENCODEURL([ID_SCGนครหลวงJWDภูมิภาค]) )","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | ID_SCGนครหลวงJWDภูมิภาค |
| Set this column | ID_SCGนครหลวงJWDภูมิภาค |
| Only if this condition is true | NOT(ISBLANK([ID_SCGนครหลวงJWDภูมิภาค])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 5: View Map (ต้นทาง)

| Property | Value |
|---|---|
| Action name | View Map (ต้นทาง) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=map&amp;table=%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87Scg%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2&amp;mapcolumn=%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87&amp;row=\", ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | ต้นทาง |
| Set this column | ต้นทาง |
| Only if this condition is true | NOT(ISBLANK([ต้นทาง])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 6: Compose Email (Email พนักงาน)

| Property | Value |
|---|---|
| Action name | Compose Email (Email พนักงาน) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"EmailTo":"[Email พนักงาน]","Subject":null,"Body":null,"Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | EMAIL |
| Attach to column | Email พนักงาน |
| Set this column | Email พนักงาน |
| Only if this condition is true | NOT(ISBLANK([Email พนักงาน])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 7: อัพเดตค่าสถานะผ่านการตรวจสอบ

| Property | Value |
|---|---|
| Action name | อัพเดตค่าสถานะผ่านการตรวจสอบ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"สถานะ","NewColumnValue":"=\"ผ่านการตรวจสอบ\""}],"ColumnToEdit":"สถานะ","NewColumnValue":"=\"ผ่านการตรวจสอบ\"","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | สร้างแผนที่Google Map &amp; QR Code |
| Set this column | สถานะ |
| Only if this condition is true | =USERROLE() = "ADMIN" |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="ผ่านการตรวจสอบ" |
| Visible? | ALWAYS |

## Action 8: Open Url (แสดงแผนที่_GoogleMapsRoutesAPI)

| Property | Value |
|---|---|
| Action name | Open Url (แสดงแผนที่_GoogleMapsRoutesAPI) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"[แสดงแผนที่_GoogleMapsRoutesAPI]","LaunchExternal":false,"Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_URL |
| Attach to column | แสดงแผนที่_GoogleMapsRoutesAPI |
| Set this column | แสดงแผนที่_GoogleMapsRoutesAPI |
| Only if this condition is true | NOT(ISBLANK([แสดงแผนที่_GoogleMapsRoutesAPI])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 9: อัพเดตสถานะไม่ผ่านการตรวจสอบ

| Property | Value |
|---|---|
| Action name | อัพเดตสถานะไม่ผ่านการตรวจสอบ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"สถานะ","NewColumnValue":"=\"ไม่ผ่านการตรวจสอบ\""}],"ColumnToEdit":"สถานะ","NewColumnValue":"=\"ไม่ผ่านการตรวจสอบ\"","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | สถานะ |
| Set this column | สถานะ |
| Only if this condition is true | =USERROLE() = "ADMIN" |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="ไม่ผ่านการตรวจสอบ" |
| Visible? | ALWAYS |

## Action 10: ปุ่มเปิดYes 2

| Property | Value |
|---|---|
| Action name | ปุ่มเปิดYes 2 |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"สร้างPDFเบิกส่วนต่าง","NewColumnValue":"=TRUE"}],"ColumnToEdit":"สร้างPDFเบิกส่วนต่าง","NewColumnValue":"=TRUE","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | สร้างPDFเบิกส่วนต่าง |
| Set this column | สร้างPDFเบิกส่วนต่าง |
| Only if this condition is true | =USERROLE() = "ADMIN" |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | =TRUE |
| Visible? | ALWAYS |

## Action 11: ทำเบิกส่วนต่างScgวังน้อยcsv

| Property | Value |
|---|---|
| Action name | ทำเบิกส่วนต่างScgวังน้อยcsv |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"CsvLocale":"en-GB","Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | EXPORT_VIEW |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Display name | โหลดไฟล์csv |
| Action icon |  |
| Does this action apply to the whole table? | Yes |
| Visible? | ALWAYS |

## Action 12: View Ref (ID_พนักงาน)

| Property | Value |
|---|---|
| Action name | View Ref (ID_พนักงาน) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=detail&amp;table=%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99&amp;row=\", ENCODEURL([ID_พนักงาน]) )","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | ID_พนักงาน |
| Set this column | ID_พนักงาน |
| Only if this condition is true | NOT(ISBLANK([ID_พนักงาน])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 13: ปุ่มเปิดYes_ราคาตามระยะทาง

| Property | Value |
|---|---|
| Action name | ปุ่มเปิดYes_ราคาตามระยะทาง |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"สร้างPDFเบิกตามระยะทาง","NewColumnValue":"=TRUE"}],"ColumnToEdit":"สร้างPDFเบิกตามระยะทาง","NewColumnValue":"=TRUE","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | สร้างPDFเบิกส่วนต่าง |
| Set this column | สร้างPDFเบิกตามระยะทาง |
| Only if this condition is true | =USERROLE() = "ADMIN" |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | =TRUE |
| Visible? | ALWAYS |

