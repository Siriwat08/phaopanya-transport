// ====================================================================
//  AppSheet Documentation CSV → Google Sheets Parser  v2.0
//  เพิ่ม: Table Type classification + ลำดับ columns ครบถ้วน
// ====================================================================
//
//  วิธีใช้:
//  1. Upload ไฟล์ AppSheet_Documentation.csv ขึ้น Google Drive
//  2. เปิด Google Sheets → Extensions → Apps Script
//  3. วาง code ทั้งหมดนี้ → Save → Reload หน้า Sheets
//  4. เมนู "📋 AppSheet Importer" → "🚀 นำเข้าข้อมูล"
//
//  ผลลัพธ์ (8 Sheets):
//  ├── 📊 AppInfo    → ข้อมูลแอป + สถิติ
//  ├── 📋 Tables     → 90 tables (มี column "Table Type" บอกประเภท)
//  │     • 📋 User Table   = ตาราง Google Sheets จริง (29 รายการ)
//  │     • 🤖 Process Table = Automation bot process (30 รายการ)
//  │     • 📤 Output Table  = Output ของ bot (30 รายการ)
//  │     • 🔧 System Table  = _Per User Settings (1 รายการ)
//  ├── 🏗️ Schemas    → 90 schemas
//  ├── 📌 Columns    → 2,254 columns (มี "Schema (Parent)" บอก owner)
//  ├── 👁️ Views      → 114 views
//  ├── ⚡ Actions    → 212 actions
//  ├── 📏 Rules      → 11 format rules
//  └── 🔪 Slices     → 7 slices
// ====================================================================

// ─────────────────────────────────────────────────
//  CONFIG
// ─────────────────────────────────────────────────
const CFG = {
  CSV_FILENAME:   'AppSheet_Documentation.csv',
  SPREADSHEET_ID: '',          // ปล่อยว่าง = เขียนลง Active Spreadsheet
  HEADER_BG:      '#1a73e8',   // สี header (Google Blue)
  HEADER_FG:      '#ffffff',
};

// ─────────────────────────────────────────────────
//  COLUMN HEADERS — ครบทุก field ตามลำดับที่ต้องการ
// ─────────────────────────────────────────────────
const HEADERS = {

  // Tables: 14 cols จาก data + 1 col เพิ่ม (Table Type)
  Tables: [
    'Table Type',                       // ← เพิ่มเอง (classify อัตโนมัติ)
    'Table name',
    'Visible?',
    'Shared?',
    'Data Source',
    'Source Path',
    'Worksheet Name/Qualifier',
    'Are updates allowed?',
    'Expression for update mode',
    'Data locale',
    'Schema',
    'Store for image and file capture',
    'Column Order List',
    'Partitioned across many files/sources?',
    'Partitioned across many worksheets?',
  ],

  // Schemas: 2 cols
  Schemas: [
    'Schema Name',
    'Visible?',
  ],

  // Columns: 26 cols จาก data + 1 col เพิ่ม (Schema Parent)
  Columns: [
    'Schema (Parent)',                  // ← เพิ่มเอง (parent schema name)
    'Column name',
    'Display name',
    'Type',
    'Visible?',
    'Read-Only',
    'Hidden',
    'Key',
    'Part of Key?',
    'Label',
    'Virtual?',
    'System Defined?',
    'Fixed definition?',
    'Searchable',
    'Scannable',
    'NFC Scannable',
    'Sensitive data',
    'App formula',
    'Initial value',
    'Spreadsheet formula',
    'LocaleName',
    'Description',
    'Type Qualifier',
    'Formula version',
    'Reset on edit?',
    'Editable Initial Value?',
  ],

  // Views: 10 cols
  Views: [
    'View name',
    'View type',
    'Position',
    'Visible?',
    'Created by',
    'Icon',
    'Menu order',
    'ActionType',
    'Show if',
    'View configuration',
  ],

  // Actions: 19 cols
  Actions: [
    'Action name',
    'Display name',
    'For a record of this table',
    'Do this',
    'Prominence',
    'Visible?',
    'Bulk action?',
    'Modifies data?',
    'Needs confirmation?',
    'Confirmation Message',
    'Only if this condition is true',
    'Does this action apply to the whole table?',
    'Disable automatic updates?',
    'Action order',
    'Action icon',
    'Attach to column',
    'Set this column',
    'To this value',
    'With these properties',
  ],

  // Rules: 8 cols
  Rules: [
    'Rule name',
    'Visible?',
    'For this data',
    'If this condition is true',
    'Like this',
    'Format these columns and actions',
    'Rule order',
    'Is this format rule disabled?',
  ],

  // Slices: 7 cols
  Slices: [
    'Slice Name',
    'Source Table',
    'Visible?',
    'Row filter condition',
    'Update mode',
    'Slice Columns',
    'Slice Actions',
  ],
};

// ─────────────────────────────────────────────────
//  MENU
// ─────────────────────────────────────────────────
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📋 AppSheet Importer')
    .addItem('🚀 นำเข้าข้อมูล', 'importAppSheetDoc')
    .addToUi();
}

// ─────────────────────────────────────────────────
//  MAIN
// ─────────────────────────────────────────────────
function importAppSheetDoc() {
  const ui = SpreadsheetApp.getUi();
  const ss = CFG.SPREADSHEET_ID
    ? SpreadsheetApp.openById(CFG.SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  try {
    Logger.log('📂 Step 1/3: อ่านไฟล์ CSV จาก Drive...');
    const rawText = readFileFromDrive_(CFG.CSV_FILENAME);

    Logger.log('⚙️  Step 2/3: Parse + Group blocks...');
    const grouped = parseAppSheetCsv_(rawText);

    Logger.log('📝 Step 3/3: เขียนข้อมูลลง Sheets...');
    writeAllSheets_(ss, grouped);

    const summary =
      '📋 Tables   : ' + grouped.Tables.length   + ' (User:' +
        grouped.Tables.filter(r => r['Table Type'] === '📋 User Table').length +
        ' / Bot:' +
        grouped.Tables.filter(r => r['Table Type'] !== '📋 User Table' && r['Table Type'] !== '🔧 System Table').length +
        ' / Sys:1)\n' +
      '🏗️ Schemas  : ' + grouped.Schemas.length  + '\n' +
      '📌 Columns  : ' + grouped.Columns.length  + '\n' +
      '👁️ Views    : ' + grouped.Views.length    + '\n' +
      '⚡ Actions  : ' + grouped.Actions.length  + '\n' +
      '📏 Rules    : ' + grouped.Rules.length    + '\n' +
      '🔪 Slices   : ' + grouped.Slices.length;

    Logger.log('✅ Done!\n' + summary);
    ui.alert('✅ นำเข้าข้อมูลเสร็จแล้ว!', summary, ui.ButtonSet.OK);

  } catch (err) {
    Logger.log('❌ ERROR: ' + err.message + '\n' + err.stack);
    ui.alert('❌ เกิดข้อผิดพลาด', err.message, ui.ButtonSet.OK);
    throw err;
  }
}

// ====================================================================
//  STEP 1 — อ่านไฟล์จาก Google Drive
// ====================================================================
function readFileFromDrive_(filename) {
  const iter = DriveApp.getFilesByName(filename);
  if (!iter.hasNext()) {
    throw new Error(
      'ไม่พบไฟล์ "' + filename + '" ใน Google Drive\n' +
      'กรุณา upload ไฟล์ก่อน แล้วลองใหม่'
    );
  }
  let text = iter.next().getBlob().getDataAsString('UTF-8');
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1); // ลบ BOM
  return text;
}

// ====================================================================
//  STEP 2A — RFC 4180 CSV Parser (รองรับ multiline quoted fields)
// ====================================================================
function parseRfc4180_(text) {
  const rows  = [];
  let   row   = [];
  let   chars = [];
  let   inQ   = false;
  let   i     = 0;
  const n     = text.length;

  while (i < n) {
    const c = text[i];

    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { chars.push('"'); i += 2; }  // escaped ""
      else if (c === '"')                    { inQ = false;     i++;    }  // close quote
      else                                   { chars.push(c);   i++;    }
    } else {
      if      (c === '"') { inQ = true; i++; }
      else if (c === ',') { row.push(chars.join('')); chars = []; i++; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++; // CRLF
        row.push(chars.join(''));
        rows.push(row);
        row = []; chars = []; i++;
      } else { chars.push(c); i++; }
    }
  }
  if (chars.length > 0 || row.length > 0) { row.push(chars.join('')); rows.push(row); }
  return rows;
}

// ====================================================================
//  STEP 2B — แยก Blocks และ Group ตามประเภท
// ====================================================================
function parseAppSheetCsv_(content) {
  const allRows = parseRfc4180_(content);
  Logger.log('  parsed rows: ' + allRows.length);

  // หา block boundaries
  const blockStarts = [];
  for (let i = 0; i < allRows.length; i++) {
    if (/^---\s*Table\s+\d+\s*---$/.test((allRows[i][0] || '').trim())) {
      blockStarts.push(i);
    }
  }
  Logger.log('  total blocks: ' + blockStarts.length);

  const grouped = {
    AppInfo: [], Tables: [], Schemas: [],
    Columns: [], Views:  [], Actions: [],
    Rules:   [], Slices: [],
  };
  let currentSchema = '';

  for (let bi = 0; bi < blockStarts.length; bi++) {
    const rowStart = blockStarts[bi] + 1;
    const rowEnd   = (bi + 1 < blockStarts.length) ? blockStarts[bi + 1] : allRows.length;

    const dict = {};
    for (let ri = rowStart; ri < rowEnd; ri++) {
      const r = allRows[ri];
      if (!r || r.length === 0) continue;
      const k = (r[0] || '').trim();
      if (!k) continue;
      if (!(k in dict)) dict[k] = (r[1] || '').trim();
    }
    if (Object.keys(dict).length === 0) continue;

    const firstKey = Object.keys(dict)[0];

    switch (firstKey) {
      case 'Table name':
        dict['Table Type'] = classifyTable_(dict);  // ← เพิ่ม classification
        grouped.Tables.push(dict);
        break;
      case 'Schema Name':
        currentSchema = dict['Schema Name'] || '';
        grouped.Schemas.push(dict);
        break;
      case 'Column name':
        dict['Schema (Parent)'] = currentSchema;
        grouped.Columns.push(dict);
        break;
      case 'View name':    grouped.Views.push(dict);   break;
      case 'Action name':  grouped.Actions.push(dict); break;
      case 'Rule name':    grouped.Rules.push(dict);   break;
      case 'Slice Name':   grouped.Slices.push(dict);  break;
      default:             grouped.AppInfo.push(dict); break;
    }
  }
  return grouped;
}

// ====================================================================
//  TABLE TYPE CLASSIFIER
// ====================================================================
function classifyTable_(tableDict) {
  const name = tableDict['Table name'] || '';
  const vis  = tableDict['Visible?']   || '';
  const src  = tableDict['Source Path']|| '';

  if (src === '_Per User Settings') return '🔧 System Table';

  if (vis === 'NEVER' && src.indexOf('/ProcessStateTables/') !== -1) {
    if (name.indexOf('Process Table') !== -1) return '🤖 Process Table';
    if (name.indexOf('Output') !== -1)         return '📤 Output Table';
    return '⚙️ Automation Table';
  }

  return '📋 User Table';
}

// ====================================================================
//  STEP 3 — เขียนทุก Sheet
// ====================================================================
function writeAllSheets_(ss, grouped) {
  if (grouped.AppInfo.length > 0) {
    writeKvSheet_(ss, '📊 AppInfo', grouped.AppInfo);
    SpreadsheetApp.flush();
  }

  const sheetDefs = [
    { tab: '📋 Tables',  data: grouped.Tables,  headers: HEADERS.Tables  },
    { tab: '🏗️ Schemas', data: grouped.Schemas, headers: HEADERS.Schemas },
    { tab: '📌 Columns', data: grouped.Columns, headers: HEADERS.Columns },
    { tab: '👁️ Views',   data: grouped.Views,   headers: HEADERS.Views   },
    { tab: '⚡ Actions', data: grouped.Actions, headers: HEADERS.Actions  },
    { tab: '📏 Rules',   data: grouped.Rules,   headers: HEADERS.Rules   },
    { tab: '🔪 Slices',  data: grouped.Slices,  headers: HEADERS.Slices  },
  ];

  for (const def of sheetDefs) {
    if (!def.data || def.data.length === 0) continue;
    writeColumnarSheet_(ss, def.tab, def.data, def.headers);
    SpreadsheetApp.flush();
  }
}

// ====================================================================
//  WRITE: Key-Value Sheet (AppInfo)
// ====================================================================
function writeKvSheet_(ss, tabName, blocks) {
  const sheet = getOrCreateSheet_(ss, tabName);
  const rows  = [['Section', 'Key', 'Value']];
  for (const block of blocks) {
    const sectionVal = Object.values(block)[0] || '';
    for (const [k, v] of Object.entries(block)) rows.push([sectionVal, k, v]);
    rows.push(['', '', '']);
  }
  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  formatHeader_(sheet, 3);
  Logger.log('  ✓ ' + tabName);
}

// ====================================================================
//  WRITE: Columnar Sheet (1 แถว = 1 record)
//  ใช้ HEADERS ที่กำหนดไว้ล่วงหน้า (ครบทุก field, เรียงตามต้องการ)
// ====================================================================
function writeColumnarSheet_(ss, tabName, data, definedHeaders) {
  const sheet = getOrCreateSheet_(ss, tabName);

  // รวบรวม extra keys ที่ไม่ได้อยู่ใน definedHeaders (ป้องกัน field หาย)
  const defSet   = new Set(definedHeaders);
  const extraSet = new Set();
  for (const rec of data) {
    for (const k of Object.keys(rec)) {
      if (!defSet.has(k)) extraSet.add(k);
    }
  }
  const headers = [...definedHeaders, ...extraSet];

  // สร้าง rows
  const rows = [headers];
  for (const rec of data) {
    rows.push(headers.map(h => (rec[h] !== undefined ? rec[h] : '')));
  }

  // Batch write
  sheet.getRange(1, 1, rows.length, headers.length).setValues(rows);
  formatHeader_(sheet, headers.length);

  // Auto-resize 4 คอลัมน์แรก
  for (let c = 1; c <= Math.min(4, headers.length); c++) {
    sheet.autoResizeColumn(c);
  }

  Logger.log('  ✓ ' + tabName + ': ' + data.length + ' rows × ' + headers.length + ' cols');
}

// ====================================================================
//  UTILITIES
// ====================================================================
function getOrCreateSheet_(ss, name) {
  let sh = ss.getSheetByName(name);
  if (sh) { sh.clearContents(); sh.clearFormats(); }
  else     { sh = ss.insertSheet(name); }
  return sh;
}

function formatHeader_(sheet, numCols) {
  sheet.getRange(1, 1, 1, numCols)
    .setBackground(CFG.HEADER_BG)
    .setFontColor(CFG.HEADER_FG)
    .setFontWeight('bold')
    .setFontSize(10)
    .setVerticalAlignment('middle');
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 28);
}
