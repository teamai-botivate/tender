import React from 'react';
import { A4Page, DocumentFooter, bgPackages, BankGuaranteeSection } from '../shared';
import Link from 'next/link';

export default function Page4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-12 px-4 sm:px-8 overflow-auto selection:bg-emerald-200 selection:text-emerald-900">
      <div className="max-w-5xl mx-auto relative">
        <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/doc1" className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors border border-slate-200">
            &larr; Back to Dashboard
          </Link>
          <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-200 hover:shadow-md hover:shadow-emerald-300 active:scale-95 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            Print Document
          </button>
        </div>
        {/* Final Submission Checklist */}
        <A4Page>
          <h2 className="text-center font-bold text-green-700 text-xl mb-6">BID SUBMISSION CHECKLIST / INDEX</h2>
          <p className="mb-2 text-sm">RfS No.: CSPDCL/NIT/ULA-114.23 MW-/1095 dated 14.07.2026 read with Corrigendum-1 dated 03.09.2026.</p>
          <p className="mb-2 text-sm">Bidder: ROTOMAG ENERTEC LIMITED (formerly Rotomag Motors and Controls Pvt. Ltd.) — Individual Bidder (single entity).</p>
          <p className="mb-2 text-sm">Packages: P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 (Bilaspur), P-5 (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur).</p>
          <p className="mb-6 text-sm font-bold">Bid Deadline: 10.09.2026, 15:00 Hrs.</p>
          
          <p className="font-bold text-green-700 mb-2">ENVELOPE-I — COVERING LETTER, TENDER FEE & BID SECURITY (EMD)</p>
          <table className="w-full border-collapse border border-black mb-6  table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-black p-1 w-12 break-words hyphens-auto">Sl.</th>
                <th className="border border-black p-1 text-left break-words hyphens-auto">Document</th>
                <th className="border border-black p-1 w-24 text-center break-words hyphens-auto">Enclosed</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-black p-1 text-center break-words hyphens-auto">1</td><td className="border border-black p-1 break-words hyphens-auto">Covering Letter as per Format-2 (on Company letterhead, signed).</td><td className="border border-black p-1 text-center break-words hyphens-auto">[ ]</td></tr>
              <tr><td className="border border-black p-1 text-center break-words hyphens-auto">2</td><td className="border border-black p-1 break-words hyphens-auto">Copy of online Bid Submission Confirmation for Tender Processing Fee (Rs. 10,000/- per package) — all 7 packages.</td><td className="border border-black p-1 text-center break-words hyphens-auto">[ ]</td></tr>
              <tr><td className="border border-black p-1 text-center break-words hyphens-auto">3</td><td className="border border-black p-1 break-words hyphens-auto">Copy of online Bid Submission Confirmation / proof for Bid Security (EMD).</td><td className="border border-black p-1 text-center break-words hyphens-auto">[ ]</td></tr>
              <tr><td className="border border-black p-1 text-center break-words hyphens-auto">4</td><td className="border border-black p-1 break-words hyphens-auto">Original EMD Bank Guarantees (Annexure-K) for P-1 to P-7 — total Rs. 5.92 Crore (one BG per package).</td><td className="border border-black p-1 text-center break-words hyphens-auto">[ ]</td></tr>
            </tbody>
          </table>

          <p className="font-bold text-green-700 mb-2 mt-4">ENVELOPE-II — TECHNO-COMMERCIAL DOCUMENTS (NO Price Bid)</p>
          <table className="w-full border-collapse border border-black mb-6  table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-black p-1 w-12 break-words hyphens-auto">Sl.</th>
                <th className="border border-black p-1 text-left break-words hyphens-auto">Document</th>
                <th className="border border-black p-1 w-20 text-center break-words hyphens-auto">Enclosed</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Format-1: General Particulars of the Bidder (signed).",
                "Certificate of Incorporation + name-change certificate (Rotomag Motors and Controls Pvt. Ltd. → Rotomag Enertec Ltd.).",
                "Memorandum & Articles of Association (MoA / AoA).",
                "GST Registration Certificate and PAN card.",
                "Format-2: General particulars / covering letter (copy).",
                "Format-5: Power of Attorney in favour of authorised signatory (notarised, on stamp paper) + Board Resolution.",
                "General Eligibility (Cl. 3.2.1): Format-10 declaration + supporting undertakings.",
                "Technical Eligibility (Cl. 3.2.2): Format-7 + Experience Certificate dated 30.06.2026 (APSPDCL) + NREDCAP LOA (Work Order).",
                "Financial Eligibility (Cl. 3.2.3): Format-6 & Format-9 (CA-certified, Momin & Co., with UDIN).",
                "Audited annual accounts (balance sheet, P&L, auditor's report) for the 5-year block.",
                "Format-10: Declaration / Undertaking (no banning / termination / bankruptcy / penalties).",
                "Format-11: Undertaking for downloaded tender document.",
                "Format-12: Technical details of proposed components (makes).",
                "Annexure-F: ALMM Order declaration.",
                "Annexure-I: Domestic Content Requirement (DCR) self-declaration.",
                "Annexure-D: Declaration of Authorization (on stamp paper).",
                "Annexure-H: Bid Security Declaration (on stamp paper).",
                "Annexure-E: Indemnity Bond (on stamp paper, notarised).",
                "Signed & stamped copy of complete RfS document including Corrigendum-1 (each page initialled)."
              ].map((doc, idx) => (
                <tr key={idx}><td className="border border-black p-1 text-center break-words hyphens-auto">{idx + 1}</td><td className="border border-black p-1 break-words hyphens-auto">{doc}</td><td className="border border-black p-1 text-center break-words hyphens-auto">[ ]</td></tr>
              ))}
            </tbody>
          </table>

          <p className="italic text-xs text-gray-500 mt-4 text-justify">
            Note: The complete sealed cover (Envelope-I + Envelope-II) is to reach The ED (RA&PM), CSPDCL, Raipur by the Bid Deadline by registered/speed post, courier or hand delivery. The Offline cover must NOT contain any Price-Bid information.
          </p>
        </A4Page>

        
      </div>
    </div>
  );
}
