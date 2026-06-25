For a record of this table: Image_Doc_Return

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

## Action 4: View Ref (ID_Doc_Return)

| Property | Value |
|---|---|
| Action name | View Ref (ID_Doc_Return) |
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

## Action 5: Image_Doc_Return_csv

| Property | Value |
|---|---|
| Action name | Image_Doc_Return_csv |
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

