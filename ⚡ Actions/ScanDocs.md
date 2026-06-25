For a record of this table: ScanDocs

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

## Action 3: Compose Email (Scan_By)

| Property | Value |
|---|---|
| Action name | Compose Email (Scan_By) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"EmailTo":"[Scan_By]","Subject":null,"Body":null,"Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | EMAIL |
| Attach to column | Scan_By |
| Set this column | Scan_By |
| Only if this condition is true | NOT(ISBLANK([Scan_By])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 4: Add

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

## Action 5: ScanStatus

| Property | Value |
|---|---|
| Action name | ScanStatus |
| Bulk action? | Yes |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"ReferencedTable":"ตารางงานประจำวัน","ReferencedRows":"=SELECT(\n  ตารางงานประจำวัน[ID_งานประจำวัน],\n  IN([Invoice No], LIST([_THISROW].[Scan_Invoice], [_THISROW].[Select_Invoice]))\n)","ReferencedAction":"Update ScanStatus","InputAssignments":[],"InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":true} |
| Do this | REF_ACTION |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 6: View Ref (Invoice_No)

| Property | Value |
|---|---|
| Action name | View Ref (Invoice_No) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=detail&amp;table=%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%A7%E0%B8%B1%E0%B8%99&amp;row=\", ENCODEURL([Invoice_No]) )","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | Invoice_No |
| Set this column | Invoice_No |
| Only if this condition is true | NOT(ISBLANK([Invoice_No])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 7: Update Action - 1

| Property | Value |
|---|---|
| Action name | Update Action - 1 |
| Bulk action? | Yes |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"ReferencedTable":"ตารางงานประจำวัน","ReferencedRows":"=SELECT(\n  ตารางงานประจำวัน[ID_งานประจำวัน],\n  IN([Invoice No], LIST([_THISROW].[Scan_Invoice], [_THISROW].[Select_Invoice]))\n)","ReferencedAction":"Update ScanStatus","InputAssignments":[],"InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":true} |
| Do this | REF_ACTION |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

