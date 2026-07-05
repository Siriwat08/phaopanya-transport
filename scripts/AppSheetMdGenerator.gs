// ====================================================================
//  AppSheet CSV → Markdown (.md) Generator  v2.1
//  อ่าน CSV ตรงจาก Drive → ไม่ผ่าน Sheets → ไม่มีบัค StringHtmlContent
// ====================================================================
//
//  วิธีใช้:
//  1. แก้ไข CFG_MD.CSV_ID = File ID ของ CSV ใน Google Drive
//  2. แก้ไข CFG_MD.FOLDERS = Folder ID ของแต่ละหมวดหมู่
//  3. เปิด Google Sheets → Extensions → Apps Script → วาง code → Save
//  4. Reload Sheets → เมนู "📋 AppSheet Importer" → "📝 สร้างไฟล์ Markdown"
//
//  ผลลัพธ์ไฟล์ .md ต่อ Schema เช่น:
//    ทำเบิกส่วนต่างScgวังน้อย.md
//    Schema Name: ทำเบิกส่วนต่างScgวังน้อย_Schema
//    Visible?: ALWAYS
//
//    ## Column 1: _RowNumber
//    | Property      | Value  |
//    |---------------|--------|
//    | Column name   | _RowNumber |
//    | Visible?      | ALWAYS |
//    | Type          | Number |
//    ...
// ====================================================================

const CFG_MD = {
  // ── แก้ไขตรงนี้ ──────────────────────────────────────────────────
  CSV_ID: '1Cnz8mzBF-2w0plZ2C1layLv7uZR510Ex',   // File ID ของ CSV

  FOLDERS: {
    APPINFO: '1SzHJygo1v4lzHSw4PrcMfr8wfQrOmlW5',
    SCHEMAS: '1DGsJp_8c-lH9i3WL3dty1t-KzNVyLZ1E',
    ACTIONS: '1ThjqEJrO6MrKDimtuqgRrN2UNqkTy0GO',
    VIEWS:   '1bW6CIzy9EozH4NNf73R27SJ_ylmSIv-F',
    TABLES:  '1nT9peTrvyBC4onWPNyROqXF2kqzqdvQH',
    COLUMNS: '1MqrXjWTM2QvbUeQ17asQ6BtuU1YKPVpc',
    RULES:   '1vFWXbPM8X8MfS2P_L3t1_SVUTNjQKmRG',
    SLICES:  '1uBlcR9HsClTIPYMMR-BoeSJLmMvZdqhU',
  },
};

// ─────────────────────────────────────────────────
//  MENU
// ─────────────────────────────────────────────────
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📋 AppSheet Importer')
    .addItem('📝 สร้างไฟล์ Markdown (.md) ทุกหมวดหมู่', 'generateAllMarkdownFiles')
    .addToUi();
}

// ─────────────────────────────────────────────────
//  MAIN
// ─────────────────────────────────────────────────
function generateAllMarkdownFiles() {
  const ui = SpreadsheetApp.getUi();
  try {
    ui.alert('⏳ กำลังเริ่มทำงาน',
      'ระบบกำลังดึงข้อมูลจาก CSV และจัดรูปตารางลงไฟล์ .md\n(อาจใช้เวลา 1-2 นาที)',
      ui.ButtonSet.OK);

    // ── 1. อ่าน CSV ตรงจาก Drive (ป้องกัน StringHtmlContent bug) ──
    const rawText = readCsvById_(CFG_MD.CSV_ID);

    // ── 2. Parse + Group ──
    const grouped = parseAppSheetCsv_(rawText);

    // ── 3. สร้างไฟล์ .md ──
    processSingleFile_(grouped.AppInfo, CFG_MD.FOLDERS.APPINFO, 'AppInfo');
    processSingleFile_(grouped.Schemas, CFG_MD.FOLDERS.SCHEMAS, 'Schemas');

    processGroupedFiles_(grouped.Columns, CFG_MD.FOLDERS.COLUMNS,
      'Schema (Parent)', 'Column name', 'Column', grouped);
    processGroupedFiles_(grouped.Actions, CFG_MD.FOLDERS.ACTIONS,
      'For a record of this table', 'Action name', 'Action', grouped);
    processGroupedFiles_(grouped.Views, CFG_MD.FOLDERS.VIEWS,
      'View name', 'View name', 'View', grouped);
    processGroupedFiles_(grouped.Tables, CFG_MD.FOLDERS.TABLES,
      'Table Type', 'Table name', 'Table', grouped);
    processGroupedFiles_(grouped.Rules, CFG_MD.FOLDERS.RULES,
      'Rule name', 'Rule name', 'Rule', grouped);
    processGroupedFiles_(grouped.Slices, CFG_MD.FOLDERS.SLICES,
      'Slice Name', 'Slice Name', 'Slice', grouped);

    const summary =
      '📌 Columns : ' + grouped.Columns.length  + ' columns ใน ' + countGroups_(grouped.Columns, 'Schema (Parent)') + ' schemas\n' +
      '⚡ Actions : ' + grouped.Actions.length  + '\n' +
      '👁️ Views   : ' + grouped.Views.length    + '\n' +
      '📋 Tables  : ' + grouped.Tables.length   + '\n' +
      '📏 Rules   : ' + grouped.Rules.length    + '\n' +
      '🔪 Slices  : ' + grouped.Slices.length;

    Logger.log('✅ Done!\n' + summary);
    ui.alert('✅ สร้างไฟล์ .md เสร็จแล้ว!', summary, ui.ButtonSet.OK);

  } catch (err) {
    Logger.log('❌ ERROR: ' + err.message + '\n' + err.stack);
    ui.alert('❌ เกิดข้อผิดพลาด', err.message, ui.ButtonSet.OK);
    throw err;
  }
}

function countGroups_(data, key) {
  return new Set(data.map(r => r[key] || '')).size;
}

// ====================================================================
//  แปลงค่า → ปลอดภัยสำหรับ Markdown table
//  ป้องกัน: | พังตาราง, < > พัง HTML, \n พัง rows, type bug
// ====================================================================
function cleanMd_(val) {
  if (val === undefined || val === null) return '';

  // ── safeguard: ป้องกัน Java/GAS object ที่ serialize ผิดพลาด ──
  const strVal = String(val);
  if (strVal.indexOf('Microsoft.') === 0) return '';  // กัน StringHtmlContent bug
  if (strVal === '[object Object]')       return '';  // กัน object ที่ไม่ stringify

  return strVal
    .replace(/&/g,    '&amp;')   // 1. & ก่อน (ป้องกัน double-escape)
    .replace(/</g,    '&lt;')    // 2. escape < ในค่าเดิม
    .replace(/>/g,    '&gt;')    // 3. escape > ในค่าเดิม
    .replace(/\r?\n/g,'<br>')    // 4. newline → <br> (ปลอดภัยแล้ว ไม่โดน escape)
    .replace(/\|/g,   '&#124;'); // 5. pipe → entity (ป้องกันตารางพัง)
}

// ====================================================================
//  สร้าง Markdown table row
// ====================================================================
function mdRow_(key, val) {
  return '| ' + cleanMd_(key) + ' | ' + cleanMd_(val) + ' |\n';
}

// ====================================================================
//  บันทึกไฟล์ (ลบของเดิมถ้ามีชื่อซ้ำ)
// ====================================================================
function saveFile_(folder, fileName, content) {
  const existing = folder.getFilesByName(fileName);
  while (existing.hasNext()) existing.next().setTrashed(true);
  folder.createFile(fileName, content, MimeType.PLAIN_TEXT);
  Logger.log('  📄 ' + fileName + ' (' + content.length + ' chars)');
}

// ====================================================================
//  สร้างชื่อไฟล์ที่ปลอดภัย (ลบ _Schema + ตัด special chars)
// ====================================================================
function safeFileName_(name, stripSchema) {
  let s = String(name || 'Unnamed');
  if (stripSchema) s = s.replace(/_Schema$/, '');
  return s.replace(/[\\/:*?"<>|]/g, '_').trim();
}

// ====================================================================
//  หมวด Single File (AppInfo, Schemas)
// ====================================================================
function processSingleFile_(dataList, folderId, fileName) {
  if (!dataList || dataList.length === 0) return;
  const folder = DriveApp.getFolderById(folderId);

  let md = '# ' + fileName + '\n\n';
  dataList.forEach((row, idx) => {
    const title = Object.values(row)[0] || ('Item ' + (idx + 1));
    md += '## ' + (idx + 1) + '. ' + cleanMd_(title) + '\n\n';
    md += '| Property | Value |\n|---|---|\n';
    for (const [k, v] of Object.entries(row)) {
      md += mdRow_(k, v);
    }
    md += '\n';
  });

  saveFile_(folder, fileName + '.md', md);
}

// ====================================================================
//  หมวด Grouped Files (Columns, Actions, Views, Tables, ...)
// ====================================================================
function processGroupedFiles_(dataList, folderId, groupByKey, itemNameKey, prefixText, allData) {
  if (!dataList || dataList.length === 0) return;
  const folder = DriveApp.getFolderById(folderId);

  // จัดกลุ่ม
  const groups = {};
  dataList.forEach(row => {
    const g = String(row[groupByKey] || 'Ungrouped');
    if (!groups[g]) groups[g] = [];
    groups[g].push(row);
  });

  for (const [groupName, items] of Object.entries(groups)) {
    let md = '';

    // ── Header บนสุดของไฟล์ ──
    if (groupByKey === 'Schema (Parent)') {
      // Columns: ใส่ Schema info ด้านบน
      const matchSchema = (allData.Schemas || []).find(s => s['Schema Name'] === groupName);
      const schemaVis   = matchSchema ? String(matchSchema['Visible?'] || '') : 'ALWAYS';
      md = 'Schema Name: ' + groupName + '\n';
      md += 'Visible?: ' + schemaVis + '\n\n';
    } else {
      md = groupByKey + ': ' + groupName + '\n\n';
    }

    // ── แต่ละ item → ## heading + table ──
    items.forEach((row, idx) => {
      const itemName = cleanMd_(row[itemNameKey] || '');
      md += '## ' + prefixText + ' ' + (idx + 1) + ': ' + itemName + '\n\n';
      md += '| Property | Value |\n|---|---|\n';

      for (const [k, v] of Object.entries(row)) {
        if (k === groupByKey) continue; // ข้ามค่าซ้ำกับ header
        md += mdRow_(k, v);
      }
      md += '\n';
    });

    // ── บันทึกไฟล์ ──
    const isSchemaGroup = (groupByKey === 'Schema (Parent)');
    const fname = safeFileName_(groupName, isSchemaGroup) + '.md';
    saveFile_(folder, fname, md);
  }
}

// ====================================================================
//  CSV READER (อ่านตรงจาก Drive ด้วย File ID)
//  → ได้ plain string เสมอ, ไม่ผ่าน Sheets, ไม่มี type bug
// ====================================================================
function readCsvById_(fileId) {
  const file = DriveApp.getFileById(fileId);
  let text = file.getBlob().getDataAsString('UTF-8');
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1); // ลบ BOM
  return text;
}

// ====================================================================
//  RFC 4180 CSV PARSER (รองรับ multiline quoted fields)
// ====================================================================
function parseRfc4180_(text) {
  const rows = []; let row = []; let chars = []; let inQ = false; let i = 0;
  const n = text.length;
  while (i < n) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i+1] === '"') { chars.push('"'); i += 2; }
      else if (c === '"')                 { inQ = false; i++; }
      else                                { chars.push(c); i++; }
    } else {
      if      (c === '"') { inQ = true; i++; }
      else if (c === ',') { row.push(chars.join('')); chars = []; i++; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i+1] === '\n') i++;
        row.push(chars.join('')); rows.push(row); row = []; chars = []; i++;
      } else { chars.push(c); i++; }
    }
  }
  if (chars.length > 0 || row.length > 0) { row.push(chars.join('')); rows.push(row); }
  return rows;
}

// ====================================================================
//  BLOCK PARSER + GROUPER
// ====================================================================
function parseAppSheetCsv_(content) {
  const allRows = parseRfc4180_(content);
  const blockStarts = [];
  for (let i = 0; i < allRows.length; i++) {
    if (/^---\s*Table\s+\d+\s*---$/.test((allRows[i][0] || '').trim())) {
      blockStarts.push(i);
    }
  }
  Logger.log('  blocks found: ' + blockStarts.length);

  const grouped = {
    AppInfo: [], Tables: [], Schemas: [],
    Columns: [], Views: [], Actions: [],
    Rules: [], Slices: [],
  };
  let currentSchema = '';

  for (let bi = 0; bi < blockStarts.length; bi++) {
    const rowStart = blockStarts[bi] + 1;
    const rowEnd   = (bi+1 < blockStarts.length) ? blockStarts[bi+1] : allRows.length;
    const dict = {};
    for (let ri = rowStart; ri < rowEnd; ri++) {
      const r = allRows[ri];
      if (!r || !r.length) continue;
      const k = (r[0] || '').trim();
      if (!k || k in dict) continue;
      dict[k] = (r[1] || '').trim(); // ← เป็น plain string เสมอ (จาก CSV)
    }
    if (!Object.keys(dict).length) continue;

    const firstKey = Object.keys(dict)[0];
    switch (firstKey) {
      case 'Table name':
        dict['Table Type'] = classifyTable_(dict);
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
      case 'View name':   grouped.Views.push(dict);   break;
      case 'Action name': grouped.Actions.push(dict); break;
      case 'Rule name':   grouped.Rules.push(dict);   break;
      case 'Slice Name':  grouped.Slices.push(dict);  break;
      default:            grouped.AppInfo.push(dict); break;
    }
  }
  return grouped;
}

// ====================================================================
//  TABLE CLASSIFIER
// ====================================================================
function classifyTable_(d) {
  const name = d['Table name']  || '';
  const vis  = d['Visible?']    || '';
  const src  = d['Source Path'] || '';
  if (src === '_Per User Settings')                    return '🔧 System Table';
  if (vis === 'NEVER' && src.includes('/ProcessStateTables/')) {
    if (name.includes('Process Table'))                return '🤖 Process Table';
    if (name.includes('Output'))                       return '📤 Output Table';
    return '⚙️ Automation Table';
  }
  return '📋 User Table';
}
