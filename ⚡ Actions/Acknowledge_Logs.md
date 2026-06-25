For a record of this table: Acknowledge_Logs

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

## Action 3: Compose Email (Email พนักงาน)

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
| Only if this condition is true | =COUNT(<br>  SELECT(<br>    Announcements[ID_ประกาศ], <br>    NOT(IN([ID_ประกาศ], SELECT(Acknowledge_Logs[ID_ประกาศ], [Email พนักงาน] = USEREMAIL())))<br>  )<br>) &gt; 0 |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | Yes |
| Visible? | ALWAYS |

## Action 5: View Ref (ID_ประกาศ)

| Property | Value |
|---|---|
| Action name | View Ref (ID_ประกาศ) |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| With these properties | {"NavigateTarget":"CONCATENATE(\"#page=detail&amp;table=Announcements&amp;row=\", ENCODEURL([ID_ประกาศ]) )","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false} |
| Do this | NAVIGATE_APP |
| Attach to column | ID_ประกาศ |
| Set this column | ID_ประกาศ |
| Only if this condition is true | NOT(ISBLANK([ID_ประกาศ])) |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

