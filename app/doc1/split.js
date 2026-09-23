const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, 'page.tsx');
let content = fs.readFileSync(pageFile, 'utf8');

const sharedEndIdx = content.indexOf('export default function Doc1Page() {');
const sharedContent = content.substring(0, sharedEndIdx);

let finalSharedContent = "import React from 'react';\n\n" + sharedContent.replace(/import React from 'react';\n*/g, '');

finalSharedContent += "\nexport const DocumentHeader = DocumentHeaderComponent;\n";
finalSharedContent += "export const DocumentFooter = DocumentFooterComponent;\n";
finalSharedContent += "export const A4Page = A4PageComponent;\n";
finalSharedContent += "export const bgPackages = bgPackagesData;\n";
finalSharedContent += "export const BankGuaranteeSection = BankGuaranteeSectionComponent;\n";

finalSharedContent = finalSharedContent
  .replace('const DocumentHeader =', 'const DocumentHeaderComponent =')
  .replace('const DocumentFooter =', 'const DocumentFooterComponent =')
  .replace('const A4Page =', 'const A4PageComponent =')
  .replace('const bgPackages =', 'const bgPackagesData =')
  .replace('const BankGuaranteeSection =', 'const BankGuaranteeSectionComponent =');

fs.writeFileSync(path.join(__dirname, 'shared.tsx'), finalSharedContent);

const mainStart = content.indexOf('export default function Doc1Page() {');
const docMain = content.substring(mainStart);

const p1Start = docMain.indexOf('{/* Page 1: Covering Letter */}');
const p2Start = docMain.indexOf('{/* Annexure-K: EMD Bank Guarantees */}');
const p3Start = docMain.indexOf('{/* Envelope Stickers */}');
const p4Start = docMain.indexOf('{/* Final Submission Checklist */}');
const p5Start = docMain.indexOf('{/* Stamp Paper Documents */}');

const p1Content = docMain.substring(p1Start, p2Start);
const p2Content = docMain.substring(p2Start, p3Start);
const p3Content = docMain.substring(p3Start, p4Start);
const p4Content = docMain.substring(p4Start, p5Start);
const p5Content = docMain.substring(p5Start, docMain.lastIndexOf('</div></div>'));

function writePage(name, content) {
  const dir = path.join(__dirname, name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  
  const pageStr = "import React from 'react';\n" +
    "import { A4Page, DocumentFooter, bgPackages, BankGuaranteeSection } from '../shared';\n" +
    "import Link from 'next/link';\n\n" +
    "export default function " + name.charAt(0).toUpperCase() + name.slice(1) + "() {\n" +
    "  return (\n" +
    "    <div className=\"min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12 px-4 sm:px-8 overflow-auto selection:bg-emerald-200 selection:text-emerald-900\">\n" +
    "      <div className=\"max-w-5xl mx-auto relative\">\n" +
    "        <div className=\"sticky top-4 z-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4\">\n" +
    "          <Link href=\"/doc1\" className=\"inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors border border-slate-200\">\n" +
    "            &larr; Back to Dashboard\n" +
    "          </Link>\n" +
    "          <button className=\"px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-200 hover:shadow-md hover:shadow-emerald-300 active:scale-95 flex items-center gap-2\">\n" +
    "            <svg className=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth=\"2\" d=\"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z\"></path></svg>\n" +
    "            Print Document\n" +
    "          </button>\n" +
    "        </div>\n" +
    "        " + content + "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  );\n" +
    "}\n";
  fs.writeFileSync(path.join(dir, 'page.tsx'), pageStr);
}

writePage('page1', p1Content);
writePage('page2', p2Content);
writePage('page3', p3Content);
writePage('page4', p4Content);
writePage('page5', p5Content);
