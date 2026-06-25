For a record of this table: PDFพนักงาน

## Action 1: Edit

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

## Action 3: CLEAR 2

| Property | Value |
|---|---|
| Action name | CLEAR 2 |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"\""},{"ColumnToEdit":"StartDate","NewColumnValue":"=\"\""},{"ColumnToEdit":"EndDate","NewColumnValue":"=\"\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=\"\""},{"ColumnToEdit":"ชื่อไฟล์","NewColumnValue":"=\"\""}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"\"","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่องาน |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | =USERROLE() =  ADMIN |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="" |
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

## Action 5: สร้างใบป่ะหน้า_สำเริง แก้วกามเกตุ

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_สำเริง แก้วกามเกตุ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สำเริง แก้วกามเกตุ\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สำเริง แก้วกามเกตุ\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="สำเริง แก้วกามเกตุ" |
| Visible? | ALWAYS |

## Action 6: สร้างใบป่ะหน้าทุกคน

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้าทุกคน |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| With these properties | {"Actions":[{"ActionName":"สร้างใบป่ะหน้า_สำเริง แก้วกามเกตุ"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_สุทิศ นันพนัก"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_เอกรัฐ อนุรักษ์"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_สุด พันพม่า"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_ธวัชชัย หนูมา"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_ปราโมทย์ เรียนพิษ"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_กฤษฎา พิญญะดำ"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_กิตติพงษ์ แหลมผักแว่น"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_จักรภัทร วงทอง"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_พีระพล รูปแก้ว"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_อชิตพล ยังยิ้ม"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_ธีรยุทธ นราทอง"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_สมคิด นวนไธสง"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_จิรายุ โคตรวงษ์"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_ทัดเทพ พรมมา"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_พงศธร หมวดไธสง"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_เกียรติศักดิ์ พินิจเมือง"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_เกียรติศักดิ์ ยอมใหญ่"},{"ActionName":"Clearหน้าจอ"},{"ActionName":"สร้างใบป่ะหน้า_สิทธิชัย ทิศวงค์"},{"ActionName":"CLEAR 2"}],"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | COMPOSITE |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |

## Action 7: Clearหน้าจอ

| Property | Value |
|---|---|
| Action name | Clearหน้าจอ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=\"\""},{"ColumnToEdit":"ชื่อไฟล์","NewColumnValue":"=\"\""}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="" |
| Visible? | ALWAYS |

## Action 8: สร้างใบป่ะหน้า_สุทิศ นันพนัก

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_สุทิศ นันพนัก |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สุทิศ นันพนัก\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สุทิศ นันพนัก\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="สุทิศ นันพนัก" |
| Visible? | ALWAYS |

## Action 9: สร้างใบป่ะหน้า_เอกรัฐ อนุรักษ์

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_เอกรัฐ อนุรักษ์ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"เอกรัฐ อนุรักษ์\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"เอกรัฐ อนุรักษ์\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="เอกรัฐ อนุรักษ์" |
| Visible? | ALWAYS |

## Action 10: สร้างใบป่ะหน้า_สุด พันพม่า

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_สุด พันพม่า |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สุด พันพม่า\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สุด พันพม่า\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="สุด พันพม่า" |
| Visible? | ALWAYS |

## Action 11: สร้างใบป่ะหน้า_ธวัชชัย หนูมา

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_ธวัชชัย หนูมา |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ธวัชชัย หนูมา\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ธวัชชัย หนูมา\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="ธวัชชัย หนูมา" |
| Visible? | ALWAYS |

## Action 12: สร้างใบป่ะหน้า_ปราโมทย์ เรียนพิษ

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_ปราโมทย์ เรียนพิษ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ปราโมทย์ เรียนพิษ\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ปราโมทย์ เรียนพิษ\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="ปราโมทย์ เรียนพิษ" |
| Visible? | ALWAYS |

## Action 13: สร้างใบป่ะหน้า_กฤษฎา พิญญะดำ

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_กฤษฎา พิญญะดำ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"กฤษฎา พิญญะดำ\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"กฤษฎา พิญญะดำ\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="กฤษฎา พิญญะดำ" |
| Visible? | ALWAYS |

## Action 14: สร้างใบป่ะหน้า_กิตติพงษ์ แหลมผักแว่น

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_กิตติพงษ์ แหลมผักแว่น |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"กิตติพงษ์ แหลมผักแว่น\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"กิตติพงษ์ แหลมผักแว่น\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="กิตติพงษ์ แหลมผักแว่น" |
| Visible? | ALWAYS |

## Action 15: สร้างใบป่ะหน้า_จักรภัทร วงทอง

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_จักรภัทร วงทอง |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"จักรภัทร วงทอง\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"จักรภัทร วงทอง\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="จักรภัทร วงทอง" |
| Visible? | ALWAYS |

## Action 16: สร้างใบป่ะหน้า_พีระพล รูปแก้ว

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_พีระพล รูปแก้ว |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"พีระพล รูปแก้ว\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"พีระพล รูปแก้ว\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="พีระพล รูปแก้ว" |
| Visible? | ALWAYS |

## Action 17: สร้างใบป่ะหน้า_อชิตพล ยังยิ้ม

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_อชิตพล ยังยิ้ม |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"อชิตพล ยังยิ้ม\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"อชิตพล ยังยิ้ม\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="อชิตพล ยังยิ้ม" |
| Visible? | ALWAYS |

## Action 18: สร้างใบป่ะหน้า_ธีรยุทธ นราทอง

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_ธีรยุทธ นราทอง |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ธีรยุทธ นราทอง\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ธีรยุทธ นราทอง\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="ธีรยุทธ นราทอง" |
| Visible? | ALWAYS |

## Action 19: สร้างใบป่ะหน้า_สมคิด นวนไธสง

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_สมคิด นวนไธสง |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สมคิด นวนไธสง\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สมคิด นวนไธสง\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="สมคิด นวนไธสง" |
| Visible? | ALWAYS |

## Action 20: สร้างใบป่ะหน้า_จิรายุ โคตรวงษ์

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_จิรายุ โคตรวงษ์ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"จิรายุ โคตรวงษ์\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"จิรายุ โคตรวงษ์\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="จิรายุ โคตรวงษ์" |
| Visible? | ALWAYS |

## Action 21: สร้างใบป่ะหน้า_ทัดเทพ พรมมา

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_ทัดเทพ พรมมา |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ทัดเทพ พรมมา\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"ทัดเทพ พรมมา\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="ทัดเทพ พรมมา" |
| Visible? | ALWAYS |

## Action 22: สร้างใบป่ะหน้า_พงศธร หมวดไธสง

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_พงศธร หมวดไธสง |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"พงศธร หมวดไธสง\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"พงศธร หมวดไธสง\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="พงศธร หมวดไธสง" |
| Visible? | ALWAYS |

## Action 23: สร้างใบป่ะหน้า_เกียรติศักดิ์ พินิจเมือง

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_เกียรติศักดิ์ พินิจเมือง |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"เกียรติศักดิ์ พินิจเมือง\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"เกียรติศักดิ์ พินิจเมือง\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="เกียรติศักดิ์ พินิจเมือง" |
| Visible? | ALWAYS |

## Action 24: สร้างใบป่ะหน้า_เกียรติศักดิ์ ยอมใหญ่

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_เกียรติศักดิ์ ยอมใหญ่ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"เกียรติศักดิ์ ยอมใหญ่\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"เกียรติศักดิ์ ยอมใหญ่\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="เกียรติศักดิ์ ยอมใหญ่" |
| Visible? | ALWAYS |

## Action 25: PDFพนักงานcsv

| Property | Value |
|---|---|
| Action name | PDFพนักงานcsv |
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

## Action 26: สร้างใบป่ะหน้า_สิทธิชัย ทิศวงค์

| Property | Value |
|---|---|
| Action name | สร้างใบป่ะหน้า_สิทธิชัย ทิศวงค์ |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| With these properties | {"Assignments":[{"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สิทธิชัย ทิศวงค์\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=TRUE"}],"ColumnToEdit":"ชื่อ - นามสกุล","NewColumnValue":"=\"สิทธิชัย ทิศวงค์\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true} |
| Do this | SET_COLUMN_VALUE |
| Attach to column | ชื่อ - นามสกุล |
| Set this column | ชื่อ - นามสกุล |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Action icon |  |
| Does this action apply to the whole table? | No |
| To this value | ="สิทธิชัย ทิศวงค์" |
| Visible? | ALWAYS |

