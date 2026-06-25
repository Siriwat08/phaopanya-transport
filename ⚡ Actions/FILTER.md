For a record of this table: FILTER

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

## Action 4: cLeAR_รับคืน

| Property | Value |
|---|---|
| Action name | cLeAR_รับคืน |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"STARTDATE","NewColumnValue":"=\"\""},{"ColumnToEdit":"ENDDATE","NewColumnValue":"=\"\""},{"ColumnToEdit":"EXPORT TO PDF","NewColumnValue":"=\"\""}],"ColumnToEdit":"STARTDATE","NewColumnValue":"=\"\"","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | STARTDATE |
| Set this column | STARTDATE |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="" |
| Visible? | ALWAYS |

## Action 5: เคลียสรุปจุดส่ง Action - 1

| Property | Value |
|---|---|
| Action name | เคลียสรุปจุดส่ง Action - 1 |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"EXPORT TO Excel(สรุปจำนวนจุดส่งงาน)","NewColumnValue":"=\"\""}],"ColumnToEdit":"EXPORT TO Excel(สรุปจำนวนจุดส่งงาน)","NewColumnValue":"=\"\"","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | EXPORT TO Excel(สรุปจำนวนจุดส่งงาน) |
| Set this column | EXPORT TO Excel(สรุปจำนวนจุดส่งงาน) |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="" |
| Visible? | ALWAYS |

## Action 6: FILTERcsv

| Property | Value |
|---|---|
| Action name | FILTERcsv |
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

