// Sample outputs for each skill
const sampleInputs = {
  receipt: `Staples #0842 - Store Receipt
Date: March 14, 2026
---------------------------
Printer Paper (2x)    $24.98
Ink Cartridge (Black) $34.99
Sticky Notes 3-pack   $12.99
---------------------------
Subtotal:             $72.96
Tax (8.5%):            $6.20
---------------------------
TOTAL:                $79.16
Payment: Visa ****4821`,

  categorize: `Date,Merchant,Amount
2026-03-01,Uber Eats,48.20
2026-03-02,Delta Airlines,380.00
2026-03-03,Zoom Pro,15.99
2026-03-05,WeWork Monthly,800.00
2026-03-07,Staples,79.16
2026-03-10,AWS,142.50
2026-03-12,Marriott Hotel,220.00
2026-03-14,Adobe Creative Cloud,54.99`,

  invoice: `INVOICE #INV-2291
From: Design Studio LLC
To: Acme Corp
Date: 2026-02-15
Due: 2026-03-01

Services:
Brand Redesign (40hrs @ $85)    $3,400.00
Logo Files & Assets               $400.00
Rush Fee (10%)                    $380.00
--------------------------------------
Subtotal:                       $4,180.00
Tax (0%):                           $0.00
TOTAL DUE:                      $4,180.00`,

  reconcile: `BANK STATEMENT (March 2026):
03/01 Payroll Direct Debit     -$12,400.00
03/03 Client Payment ACME       +$8,500.00
03/05 WeWork                     -$800.00
03/07 Staples                     -$79.16
03/09 Duplicate charge Zoom      -$15.99
03/10 AWS                        -$142.50

BOOKS:
03/01 Payroll                  -$12,400.00
03/03 ACME Invoice #209         +$8,500.00
03/05 WeWork Rent                -$800.00
03/07 Office Supplies             -$79.16
03/10 AWS Cloud                  -$142.50`,

  report: `TRANSACTIONS - MARCH 2026

REVENUE:
03/03  Client ACME Corp         $8,500.00
03/15  Client Bright Ideas      $6,200.00
03/22  Client NorthStar LLC    $12,800.00
03/28  Retainer - FiveOaks       $4,500.00

EXPENSES:
03/01  Payroll                 $12,400.00
03/05  WeWork Rent                $800.00
03/07  Office Supplies             $79.16
03/09  Zoom Pro                    $15.99
03/10  AWS                        $142.50
03/12  Travel - Client Visit      $380.00
03/14  Adobe CC                    $54.99

FEBRUARY NET: $14,750.00`
};

const sampleOutputs = {
  receipt: `RECEIPT SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vendor       Staples #0842
Date         Mar 14, 2026
Payment      Visa ****4821
Category     Office Supplies

LINE ITEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Printer Paper (2x)                $24.98
Ink Cartridge (Black)             $34.99
Sticky Notes 3-pack               $12.99

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subtotal                          $72.96
Tax (8.5%)                         $6.20
TOTAL                             $79.16`,

  categorize: `Date        Merchant                  Amount     Category
─────────────────────────────────────────────────────────
2026-03-01  Uber Eats                 $48.20     Meals & Entertainment
2026-03-02  Delta Airlines           $380.00     Travel
2026-03-03  Zoom Pro                  $15.99     Software & Subscriptions
2026-03-05  WeWork Monthly           $800.00     Rent & Facilities
2026-03-07  Staples                   $79.16     Office Supplies
2026-03-10  AWS                      $142.50     Software & Subscriptions
2026-03-12  Marriott Hotel           $220.00     Travel
2026-03-14  Adobe Creative Cloud      $54.99     Software & Subscriptions`,

  invoice: `INVOICE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice #    INV-2291
Vendor       Design Studio LLC
Client       Acme Corp
Issued       Feb 15, 2026
Due          Mar 1, 2026
Status       ⚠️  OVERDUE — 18 days

LINE ITEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand Redesign (40hrs @ $85)    $3,400.00
Logo Files & Assets               $400.00
Rush Fee (10%)                    $380.00

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subtotal                        $4,180.00
Tax                                 $0.00
TOTAL DUE                       $4,180.00`,

  reconcile: `RECONCILIATION SUMMARY — March 2026
══════════════════════════════════════

✅  5 transactions matched
⚠️  1 unmatched in bank (Client ACME - missing from books)
❌  1 DUPLICATE detected: Zoom Pro charged twice on 03/09

Matched transactions:    $-13,421.66
Unmatched (bank only):   +$8,500.00
Duplicate charge:           -$15.99

Net difference:          $8,500.00
Action required:         Book ACME payment + dispute Zoom duplicate`,

  report: `MONTHLY REPORT — March 2026
══════════════════════════════════

REVENUE
  Client ACME Corp               $8,500.00
  Client Bright Ideas            $6,200.00
  Client NorthStar LLC          $12,800.00
  Retainer - FiveOaks            $4,500.00
  ─────────────────────────────────────────
  Total Revenue                 $32,000.00

EXPENSES
  Payroll                       $12,400.00
  Rent & Facilities                $800.00
  Office Supplies                   $79.16
  Software & Subscriptions         $212.48
  Travel                           $380.00
  ─────────────────────────────────────────
  Total Expenses                $13,871.64

NET INCOME                      $18,128.36
February Net                    $14,750.00
Month-over-Month                 ▲ +22.9%`
};

// Excel (CSV) export data for each skill
const exportData = {
  receipt: {
    filename: 'receipt_staples_2026-03-14.csv',
    csv: `Field,Value
Vendor,Staples #0842
Date,2026-03-14
Payment Method,Visa ****4821
Category,Office Supplies
,,
Item,Amount
Printer Paper (2x),24.98
Ink Cartridge (Black),34.99
Sticky Notes 3-pack,12.99
,,
Subtotal,72.96
Tax,6.20
Total,79.16`
  },
  categorize: {
    filename: 'expenses_categorized_march2026.csv',
    csv: `Date,Merchant,Amount,Category
2026-03-01,Uber Eats,48.20,Meals & Entertainment
2026-03-02,Delta Airlines,380.00,Travel
2026-03-03,Zoom Pro,15.99,Software & Subscriptions
2026-03-05,WeWork Monthly,800.00,Rent & Facilities
2026-03-07,Staples,79.16,Office Supplies
2026-03-10,AWS,142.50,Software & Subscriptions
2026-03-12,Marriott Hotel,220.00,Travel
2026-03-14,Adobe Creative Cloud,54.99,Software & Subscriptions`
  },
  invoice: {
    filename: 'invoice_INV-2291.csv',
    csv: `Field,Value
Invoice #,INV-2291
Vendor,Design Studio LLC
Client,Acme Corp
Issue Date,2026-02-15
Due Date,2026-03-01
Status,OVERDUE — 18 days
,,
Description,Amount
Brand Redesign (40hrs @ $85),3400.00
Logo Files & Assets,400.00
Rush Fee (10%),380.00
,,
Subtotal,4180.00
Tax,0.00
Total Due,4180.00`
  },
  reconcile: {
    filename: 'reconciliation_march2026.csv',
    csv: `Transaction Date,Description,Bank Amount,Books Amount,Status,Notes
2026-03-01,Payroll,-12400.00,-12400.00,Matched,
2026-03-03,Client ACME,8500.00,,Unmatched,Missing from books
2026-03-05,WeWork,-800.00,-800.00,Matched,
2026-03-07,Staples,-79.16,-79.16,Matched,
2026-03-09,Zoom Pro,-15.99,,Duplicate,Charged twice — dispute
2026-03-10,AWS,-142.50,-142.50,Matched,`
  },
  report: {
    filename: 'monthly_report_march2026.csv',
    csv: `Category,Type,Amount
Client ACME Corp,Revenue,8500.00
Client Bright Ideas,Revenue,6200.00
Client NorthStar LLC,Revenue,12800.00
Retainer - FiveOaks,Revenue,4500.00
Total Revenue,,32000.00
,,
Payroll,Expense,12400.00
Rent & Facilities,Expense,800.00
Office Supplies,Expense,79.16
Software & Subscriptions,Expense,212.48
Travel,Expense,380.00
Total Expenses,,13871.64
,,
Net Income,,18128.36
February Net,,14750.00
Month-over-Month Change,,+22.9%`
  }
};

function downloadCSV(skill) {
  const { filename, csv } = exportData[skill];
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ── BULK UPLOAD ──────────────────────────────────────────────

const dropZone     = document.getElementById('drop-zone');
const fileInput    = document.getElementById('file-input');
const browseBtn    = document.getElementById('browse-btn');
const fileQueue    = document.getElementById('file-queue');
const fileList     = document.getElementById('file-list');
const queueMeta    = document.getElementById('queue-meta');
const clearBtn     = document.getElementById('clear-btn');
const processAllBtn = document.getElementById('process-all-btn');
const bulkResults  = document.getElementById('bulk-results');
const resultsList  = document.getElementById('results-list');
const resultsTitle = document.getElementById('results-title');
const exportAllBtn = document.getElementById('export-all-btn');

let uploadedFiles = [];

const skillOptions = [
  { value: 'auto',       label: '🤖 Auto-detect' },
  { value: 'receipt',    label: '🧾 Receipt Processing' },
  { value: 'categorize', label: '🏷️ Expense Categorization' },
  { value: 'invoice',    label: '📄 Invoice Management' },
  { value: 'reconcile',  label: '⚖️ Bank Reconciliation' },
  { value: 'report',     label: '📊 Monthly Reporting' },
];

// Auto-detect skill from filename
function detectSkill(filename) {
  const f = filename.toLowerCase();
  if (f.includes('receipt') || f.includes('staples') || f.includes('amazon')) return 'receipt';
  if (f.includes('invoice') || f.includes('inv-') || f.includes('bill')) return 'invoice';
  if (f.includes('bank') || f.includes('statement') || f.includes('recon')) return 'reconcile';
  if (f.includes('report') || f.includes('p&l') || f.includes('monthly')) return 'report';
  return 'categorize';
}

function fileIcon(name) {
  const ext = name.split('.').pop().toLowerCase();
  if (ext === 'pdf') return '📄';
  if (['xlsx','xls'].includes(ext)) return '📊';
  if (ext === 'csv') return '📋';
  return '📁';
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function renderFileList() {
  fileList.innerHTML = '';
  uploadedFiles.forEach((f, i) => {
    const row = document.createElement('div');
    row.className = 'file-row';
    row.dataset.index = i;

    const detectedSkill = detectSkill(f.name);
    const opts = skillOptions.map(o =>
      `<option value="${o.value}" ${o.value === detectedSkill ? 'selected' : ''}>${o.label}</option>`
    ).join('');

    row.innerHTML = `
      <div class="file-icon">${fileIcon(f.name)}</div>
      <div class="file-info">
        <div class="file-name">${f.name}</div>
        <div class="file-size">${formatSize(f.size)}</div>
      </div>
      <div class="file-skill"><select>${opts}</select></div>
      <div class="file-status status-pending" id="status-${i}">Pending</div>
    `;
    fileList.appendChild(row);
  });
  queueMeta.textContent = `${uploadedFiles.length} file${uploadedFiles.length !== 1 ? 's' : ''} selected`;
  fileQueue.style.display = 'block';
  bulkResults.style.display = 'none';
  resultsList.innerHTML = '';
}

function addFiles(newFiles) {
  const arr = Array.from(newFiles);
  // Dedupe by name
  arr.forEach(f => {
    if (!uploadedFiles.find(e => e.name === f.name)) uploadedFiles.push(f);
  });
  renderFileList();
}

browseBtn.addEventListener('click', (e) => { e.stopPropagation(); fileInput.click(); });
dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => addFiles(fileInput.files));

dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('drag-over');
  addFiles(e.dataTransfer.files);
});

clearBtn.addEventListener('click', () => {
  uploadedFiles = [];
  fileQueue.style.display = 'none';
  bulkResults.style.display = 'none';
  fileInput.value = '';
});

// Simulated results per skill
const bulkOutputs = {
  receipt:    (name) => `RECEIPT SUMMARY — ${name}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nVendor     Extracted from file\nDate       2026-03-${String(Math.floor(Math.random()*28)+1).padStart(2,'0')}\nCategory   Office Supplies\nTotal      $${(Math.random()*200+20).toFixed(2)}`,
  categorize: (name) => `CATEGORIZATION — ${name}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${Math.floor(Math.random()*20+5)} transactions processed\nTop category: Software & Subscriptions\nUncategorized: 0\nReady for export`,
  invoice:    (name) => `INVOICE SUMMARY — ${name}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nInvoice #  INV-${Math.floor(Math.random()*9000+1000)}\nVendor     Extracted from file\nDue        2026-04-${String(Math.floor(Math.random()*28)+1).padStart(2,'0')}\nTotal      $${(Math.random()*5000+500).toFixed(2)}\nStatus     ✅ On time`,
  reconcile:  (name) => `RECONCILIATION — ${name}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ ${Math.floor(Math.random()*40+10)} matched\n⚠️  ${Math.floor(Math.random()*3)} unmatched\n❌  0 duplicates\nNet difference: $0.00`,
  report:     (name) => `MONTHLY REPORT — ${name}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nRevenue    $${(Math.random()*40000+10000).toFixed(2)}\nExpenses   $${(Math.random()*20000+5000).toFixed(2)}\nNet        $${(Math.random()*15000+3000).toFixed(2)}\nMoM        ▲ ${(Math.random()*20+1).toFixed(1)}%`,
};

processAllBtn.addEventListener('click', async () => {
  if (!uploadedFiles.length) return;

  processAllBtn.disabled = true;
  processAllBtn.textContent = 'Processing...';
  bulkResults.style.display = 'block';
  resultsList.innerHTML = '';
  resultsTitle.textContent = `Processing ${uploadedFiles.length} files...`;

  const rows = fileList.querySelectorAll('.file-row');
  const allResults = [];

  for (let i = 0; i < uploadedFiles.length; i++) {
    const file = uploadedFiles[i];
    const statusEl = document.getElementById(`status-${i}`);
    const skillSelect = rows[i].querySelector('select');
    let skill = skillSelect.value;
    if (skill === 'auto') skill = detectSkill(file.name);

    statusEl.textContent = 'Processing…';
    statusEl.className = 'file-status status-processing';

    await new Promise(r => setTimeout(r, 600 + Math.random() * 600));

    const output = bulkOutputs[skill](file.name);
    allResults.push({ name: file.name, skill, output });

    statusEl.textContent = 'Done';
    statusEl.className = 'file-status status-done';

    // Add result row
    const skillLabel = skillOptions.find(o => o.value === skill)?.label || skill;
    const resultRow = document.createElement('div');
    resultRow.className = 'result-row';
    resultRow.innerHTML = `
      <div class="result-header">
        <span class="result-chevron">▶</span>
        <span class="result-file">${file.name}</span>
        <span class="result-skill-tag">${skillLabel}</span>
        <span class="file-status status-done">Done</span>
      </div>
      <div class="result-body">
        <pre class="result-pre">${output}</pre>
      </div>
    `;
    resultRow.querySelector('.result-header').addEventListener('click', () => {
      resultRow.classList.toggle('open');
    });
    resultsList.appendChild(resultRow);
    // Auto-open first result
    if (i === 0) resultRow.classList.add('open');
  }

  resultsTitle.textContent = `${uploadedFiles.length} files processed`;
  processAllBtn.disabled = false;
  processAllBtn.textContent = '⚡ Process all';

  // Wire export all
  exportAllBtn.onclick = () => exportAllResults(allResults);
});

function exportAllResults(results) {
  const rows = ['File,Skill,Output Summary'];
  results.forEach(r => {
    const summary = r.output.split('\n').slice(0,3).join(' | ').replace(/,/g, ';');
    rows.push(`"${r.name}","${r.skill}","${summary}"`);
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bulk_results.csv';
  a.click();
  URL.revokeObjectURL(url);
}

// ── TRY-IT SECTION ───────────────────────────────────────────
const skillSelect = document.getElementById('skill-select');
const docInput = document.getElementById('doc-input');
const runBtn = document.getElementById('run-btn');
const outputPre = document.getElementById('output-pre');
const exportBtn = document.getElementById('export-btn');

exportBtn.addEventListener('click', () => {
  downloadCSV(skillSelect.value);
});

// Pre-fill input when skill changes
skillSelect.addEventListener('change', () => {
  const skill = skillSelect.value;
  docInput.value = sampleInputs[skill];
  outputPre.textContent = '// Waiting for input...';
  outputPre.className = '';
  exportBtn.disabled = true;
  exportBtn.className = 'btn-export';
});

// Pre-fill on load
docInput.value = sampleInputs['receipt'];

// Simulate processing
runBtn.addEventListener('click', () => {
  const skill = skillSelect.value;
  const input = docInput.value.trim();
  if (!input) {
    outputPre.textContent = '// Please paste a document above.';
    return;
  }

  runBtn.disabled = true;
  runBtn.textContent = 'Processing...';
  outputPre.textContent = '// Analyzing document...';
  outputPre.className = '';

  const steps = [
    '// Reading document structure...',
    '// Extracting fields...',
    '// Applying ' + skillSelect.options[skillSelect.selectedIndex].text + '...',
    '// Formatting output...',
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < steps.length) {
      outputPre.textContent = steps[i];
      i++;
    } else {
      clearInterval(interval);
      outputPre.textContent = sampleOutputs[skill];
      outputPre.className = 'ready';
      runBtn.disabled = false;
      runBtn.textContent = 'Run skill →';
      exportBtn.disabled = false;
      exportBtn.className = 'btn-export ready';
    }
  }, 400);
});
