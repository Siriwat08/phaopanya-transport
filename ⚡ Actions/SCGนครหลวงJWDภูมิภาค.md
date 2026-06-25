For a record of this table: SCGนครหลวงJWDภูมิภาค

## Action 1: Compose Email (Email พนักงาน)

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

## Action 2: Add

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

## Action 3: Edit

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

## Action 4: Delete

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

## Action 5: View Map (จุดส่งสินค้าปลายทาง)

| Property | Value |
|---|---|
| Action name | View Map (จุดส่งสินค้าปลายทาง) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=map&amp;table=SCG%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87JWD%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84&amp;mapcolumn=%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B2%E0%B8%87&amp;row=\", ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | จุดส่งสินค้าปลายทาง |
| Set this column | จุดส่งสินค้าปลายทาง |
| Only if this condition is true | NOT(ISBLANK([จุดส่งสินค้าปลายทาง])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 6: View Ref (ID_เอกสารนำกลับคืนคลัง)

| Property | Value |
|---|---|
| Action name | View Ref (ID_เอกสารนำกลับคืนคลัง) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=detail&amp;table=Doc_Return&amp;row=\", ENCODEURL([ID_Doc_Return]) )","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | ID_Doc_Return |
| Set this column | ID_Doc_Return |
| Only if this condition is true | NOT(ISBLANK([ID_Doc_Return])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 7: View Map (คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย)

| Property | Value |
|---|---|
| Action name | View Map (คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=map&amp;table=SCG%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87JWD%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84&amp;mapcolumn=%E0%B8%84%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%20%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%8B%E0%B8%B5%E0%B8%88%E0%B8%B5%20%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B9%89%E0%B8%A5%E0%B8%A2%E0%B8%B9%E0%B8%94%E0%B8%B5%20%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2&amp;row=\", ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย |
| Set this column | คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย |
| Only if this condition is true | NOT(ISBLANK([คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 8: View Map (ที่อยู่ปลายทาง_LatLong_Api)

| Property | Value |
|---|---|
| Action name | View Map (ที่อยู่ปลายทาง_LatLong_Api) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=map&amp;table=SCG%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87JWD%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84&amp;mapcolumn=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B2%E0%B8%87_LatLong_Api&amp;row=\", ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | ที่อยู่ปลายทาง_LatLong_Api |
| Set this column | ที่อยู่ปลายทาง_LatLong_Api |
| Only if this condition is true | NOT(ISBLANK([ที่อยู่ปลายทาง_LatLong_Api])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 9: SCGนครหลวงJWDภูมิภาค_csv

| Property | Value |
|---|---|
| Action name | SCGนครหลวงJWDภูมิภาค_csv |
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

## Action 10: Process_Delivery_Status_Bot Action - 1

| Property | Value |
|---|---|
| Action name | Process_Delivery_Status_Bot Action - 1 |
| Bulk action? | Yes |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"ReferencedTable":"ตารางงานประจำวัน","ReferencedRows":"=SELECT(ตารางงานประจำวัน[ID_งานประจำวัน], \n  IN([Invoice No], [_THISROW].[Invoice No])\n)","ReferencedAction":"Mark_As_Delivered","InputAssignments":[],"InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":true} |
| Do this | REF_ACTION |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 11: View Ref (SM_Link_SCG)

| Property | Value |
|---|---|
| Action name | View Ref (SM_Link_SCG) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=detail&amp;table=%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%A7%E0%B8%B1%E0%B8%99&amp;row=\", ENCODEURL([SM_Link_SCG]) )","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | SM_Link_SCG |
| Set this column | SM_Link_SCG |
| Only if this condition is true | NOT(ISBLANK([SM_Link_SCG])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
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

## Action 13: View Map (พิกัดตอนกดบันทึกงาน)

| Property | Value |
|---|---|
| Action name | View Map (พิกัดตอนกดบันทึกงาน) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=map&amp;table=SCG%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87JWD%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84&amp;mapcolumn=%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%94%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B6%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99&amp;row=\", ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | พิกัดตอนกดบันทึกงาน |
| Set this column | พิกัดตอนกดบันทึกงาน |
| Only if this condition is true | NOT(ISBLANK([พิกัดตอนกดบันทึกงาน])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

