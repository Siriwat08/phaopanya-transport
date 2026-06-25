// ====================================================================
//  AppSheet Documentation CSV → Google Sheets Parser
//  เวอร์ชัน 1.0 | สำหรับ SCG JWD Logistics
// ====================================================================
//
//  วิธีใช้:
//  1. Upload ไฟล์ AppSheet_Documentation.csv ขึ้น Google Drive
//  2. เปิด Google Sheets → Extensions → Apps Script
//  3. วาง code ทั้งหมดนี้ → Save
//  4. แก้ไข CONFIG.CSV_FILENAME ถ้าชื่อไฟล์ต่างออกไป
//  5. Reload หน้า Sheets → จะมีเมนู "📋 AppSheet Importer" ขึ้นมา
//  6. คลิก "📋 AppSheet Importer" → "🚀 นำเข้าข้อมูล"
//
//  ผลลัพธ์: สร้าง 8 Sheets โดยอัตโนมัติ
//  ├── 📊 AppInfo    → ข้อมูลแอป + สถิติ
//  ├── 📋 Tables     → 90 Table definitions (1 แถว = 1 table)
//  ├── 🏗️ Schemas    → 90 Schema definitions
//  ├── 📌 Columns    → 2,254 Column definitions (1 แถว = 1 column)
//  ├── 👁️ Views      → 114 View definitions
//  ├── ⚡ Actions    → 212 Action definitions
//  ├── 📏 Rules      → 11 Format Rule definitions
//  └── 🔪 Slices     → 7 Slice definitions
// ====================================================================

// ─────────────────────────────────────────────────
//  CONFIG — แก้ไขตรงนี้เท่านั้น
// ─────────────────────────────────────────────────
const CFG = {
  CSV_FILENAME:   'AppSheet_Documentation.csv', // ชื่อไฟล์ CSV ใน Drive
  SPREADSHEET_ID: '',         // ปล่อยว่าง = เขียนลง Active Spreadsheet
  HEADER_BG:      '#1a73e8', // สี header (Google Blue)
  HEADER_FG:      '#ffffff',
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
//  MAIN ENTRY POINT
// ─────────────────────────────────────────────────
function importAppSheetDoc() {
  const ui = SpreadsheetApp.getUi();
  const ss = CFG.SPREADSHEET_ID
    ? SpreadsheetApp.openById(CFG.SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  try {
    // ── Step 1: อ่านไฟล์ ──
    Logger.log('📂 Step 1: อ่านไฟล์ CSV จาก Drive...');
    const rawText = readFileFromDrive_(CFG.CSV_FILENAME);

    // ── Step 2: Parse + Group ──
    Logger.log('⚙️ Step 2: Parse CSV...');
    const grouped = parseAppSheetCsv_(rawText);

    // ── Step 3: เขียน Sheets ──
    Logger.log('📝 Step 3: เขียนข้อมูลลง Sheets...');
    writeAllSheets_(ss, grouped);

    // ── สรุปผล ──
    const summary =
      '📊 AppInfo  : ข้อมูลแอป\n' +
      '📋 Tables   : ' + grouped.Tables.length    + ' รายการ\n' +
      '🏗️ Schemas  : ' + grouped.Schemas.length   + ' รายการ\n' +
      '📌 Columns  : ' + grouped.Columns.length   + ' รายการ\n' +
      '👁️ Views    : ' + grouped.Views.length     + ' รายการ\n' +
      '⚡ Actions  : ' + grouped.Actions.length   + ' รายการ\n' +
      '📏 Rules    : ' + grouped.Rules.length     + ' รายการ\n' +
      '🔪 Slices   : ' + grouped.Slices.length    + ' รายการ';

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
  let   chars = [];   // ใช้ array แทน string concat เพื่อ performance
  let   inQ   = false;
  let   i     = 0;
  const n     = text.length;

  while (i < n) {
    const c = text[i];

    if (inQ) {
      if (c === '"' && text[i + 1] === '"') {
        chars.push('"');   // escaped "" → "
        i += 2;
      } else if (c === '"') {
        inQ = false;       // ปิด quote
        i++;
      } else {
        chars.push(c);
        i++;
      }
    } else {
      if (c === '"') {
        inQ = true;
        i++;
      } else if (c === ',') {
        row.push(chars.join(''));
        chars = [];
        i++;
      } else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++; // CRLF → LF
        row.push(chars.join(''));
        rows.push(row);
        row   = [];
        chars = [];
        i++;
      } else {
        chars.push(c);
        i++;
      }
    }
  }

  // flush บรรทัดสุดท้าย
  if (chars.length > 0 || row.length > 0) {
    row.push(chars.join(''));
    rows.push(row);
  }

  return rows;
}

// ====================================================================
//  STEP 2B — แยก Blocks และ Group ตามประเภท
// ====================================================================
function parseAppSheetCsv_(content) {
  const allRows = parseRfc4180_(content);
  Logger.log('  parsed rows: ' + allRows.length);

  // หา index ของแต่ละ block (แถวที่เป็น "--- Table N ---")
  const blockStarts = [];
  for (let i = 0; i < allRows.length; i++) {
    const cell = (allRows[i][0] || '').trim();
    if (/^---\s*Table\s+\d+\s*---$/.test(cell)) {
      blockStarts.push(i);
    }
  }
  Logger.log('  total blocks: ' + blockStarts.length);

  // โครงสร้างข้อมูลผลลัพธ์
  const grouped = {
    AppInfo:  [],
    Tables:   [],
    Schemas:  [],
    Columns:  [],
    Views:    [],
    Actions:  [],
    Rules:    [],
    Slices:   [],
  };

  let currentSchema = ''; // ติดตาม parent schema ของ column

  for (let bi = 0; bi < blockStarts.length; bi++) {
    const rowStart = blockStarts[bi] + 1;
    const rowEnd   = (bi + 1 < blockStarts.length) ? blockStarts[bi + 1] : allRows.length;

    // แปลง rows → dict (เอาคีย์แรกพบเท่านั้น)
    const dict = {};
    for (let ri = rowStart; ri < rowEnd; ri++) {
      const r = allRows[ri];
      if (!r || r.length === 0) continue;
      const k = (r[0] || '').trim();
      if (!k) continue;
      if (!(k in dict)) {
        dict[k] = (r[1] || '').trim();
      }
    }

    if (Object.keys(dict).length === 0) continue;

    const firstKey = Object.keys(dict)[0];

    // จัดกลุ่มตาม firstKey
    switch (firstKey) {

      case 'Table name':
        grouped.Tables.push(dict);
        break;

      case 'Schema Name':
        currentSchema = dict['Schema Name'] || '';
        grouped.Schemas.push(dict);
        break;

      case 'Column name':
        // เพิ่ม column บอก parent schema
        dict['Schema (Parent)'] = currentSchema;
        grouped.Columns.push(dict);
        break;

      case 'View name':
        grouped.Views.push(dict);
        break;

      case 'Action name':
        grouped.Actions.push(dict);
        break;

      case 'Rule name':
        grouped.Rules.push(dict);
        break;

      case 'Slice Name':
        grouped.Slices.push(dict);
        break;

      default:
        // Data Summary, Short Name → AppInfo
        grouped.AppInfo.push(dict);
        break;
    }
  }

  return grouped;
}

// ====================================================================
//  STEP 3 — เขียนทุก Sheet
// ====================================================================
function writeAllSheets_(ss, grouped) {
  // นิยาม priority columns สำหรับแต่ละ sheet
  const PRIORITY = {
    Columns:  ['Schema (Parent)', 'Column name', 'Display name', 'Type', 'Visible?', 'Read-Only', 'Hidden', 'Key', 'Part of Key?', 'Virtual?', 'System Defined?', 'App formula', 'Initial value'],
    Actions:  ['Action name', 'For a record of this table', 'Do this', 'Prominence', 'Bulk action?', 'Modifies data?'],
    Tables:   ['Table name', 'Visible?', 'Shared?', 'Data Source', 'Are updates allowed?'],
    Views:    ['View name', 'View type', 'Position', 'Visible?', 'Created by'],
  };

  // ── Sheet: AppInfo (key-value layout) ──
  if (grouped.AppInfo.length > 0) {
    writeKvSheet_(ss, '📊 AppInfo', grouped.AppInfo);
    SpreadsheetApp.flush();
  }

  // ── Sheets อื่นๆ (columnar: 1 แถว = 1 รายการ) ──
  const sheetDefs = [
    { tab: '📋 Tables',  data: grouped.Tables,   priority: PRIORITY.Tables   },
    { tab: '🏗️ Schemas', data: grouped.Schemas                               },
    { tab: '📌 Columns', data: grouped.Columns,  priority: PRIORITY.Columns  },
    { tab: '👁️ Views',   data: grouped.Views,    priority: PRIORITY.Views    },
    { tab: '⚡ Actions', data: grouped.Actions,  priority: PRIORITY.Actions  },
    { tab: '📏 Rules',   data: grouped.Rules                                 },
    { tab: '🔪 Slices',  data: grouped.Slices                                },
  ];

  for (const def of sheetDefs) {
    if (!def.data || def.data.length === 0) continue;
    writeColumnarSheet_(ss, def.tab, def.data, def.priority || []);
    SpreadsheetApp.flush(); // ป้องกัน timeout ด้วยการ flush ระหว่างทาง
  }
}

// ====================================================================
//  WRITE: Key-Value Sheet (สำหรับ AppInfo)
// ====================================================================
function writeKvSheet_(ss, tabName, blocks) {
  const sheet = getOrCreateSheet_(ss, tabName);
  const rows  = [['Section', 'Key', 'Value']];

  for (const block of blocks) {
    const sectionVal = Object.values(block)[0] || ''; // ค่าแรก = section identifier
    for (const [k, v] of Object.entries(block)) {
      rows.push([sectionVal, k, v]);
    }
    rows.push(['', '', '']); // เว้นบรรทัดระหว่าง block
  }

  sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  formatHeader_(sheet, 3);
  Logger.log('  ✓ ' + tabName + ': ' + blocks.length + ' sections');
}

// ====================================================================
//  WRITE: Columnar Sheet (1 แถว = 1 record)
// ====================================================================
function writeColumnarSheet_(ss, tabName, data, priorityKeys) {
  const sheet = getOrCreateSheet_(ss, tabName);

  // รวบรวม unique keys ทั้งหมด (รักษาลำดับการพบครั้งแรก)
  const keySet  = new Set();
  const keyList = [];
  for (const rec of data) {
    for (const k of Object.keys(rec)) {
      if (!keySet.has(k)) {
        keySet.add(k);
        keyList.push(k);
      }
    }
  }

  // จัด headers: priority keys มาก่อน → ที่เหลือตามลำดับ
  const headers = [
    ...priorityKeys.filter(k => keySet.has(k)),
    ...keyList.filter(k => !priorityKeys.includes(k)),
  ];

  // สร้าง data rows
  const rows = [headers];
  for (const rec of data) {
    rows.push(headers.map(h => (rec[h] !== undefined ? rec[h] : '')));
  }

  // Batch write ทีเดียว
  sheet.getRange(1, 1, rows.length, headers.length).setValues(rows);
  formatHeader_(sheet, headers.length);

  // Auto-resize คอลัมน์แรก 3 คอลัมน์เพื่อความสวยงาม
  if (headers.length >= 1) sheet.autoResizeColumn(1);
  if (headers.length >= 2) sheet.autoResizeColumn(2);
  if (headers.length >= 3) sheet.autoResizeColumn(3);

  Logger.log('  ✓ ' + tabName + ': ' + data.length + ' rows × ' + headers.length + ' cols');
}

// ====================================================================
//  UTILITIES
// ====================================================================

/** หาหรือสร้าง Sheet (ถ้ามีแล้ว clear ก่อน) */
function getOrCreateSheet_(ss, name) {
  let sh = ss.getSheetByName(name);
  if (sh) {
    sh.clearContents();
    sh.clearFormats();
  } else {
    sh = ss.insertSheet(name);
  }
  return sh;
}

/** Format header row */
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
