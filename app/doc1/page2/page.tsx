import React from 'react';
import { A4Page, DocumentFooter, bgPackages, BankGuaranteeSection } from '../shared';
import Link from 'next/link';

export default function Page2() {
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
        {/* Annexure-K: EMD Bank Guarantees */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">ANNEXURE-K</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-2">EMD / BID SECURITY — BANK GUARANTEES (ROTOMAG ENERTEC LIMITED)</h2>
          <p className="text-center italic text-xs mb-8 text-gray-600">
            (Each Bank Guarantee to be executed by a Scheduled Commercial Bank on non-judicial stamp paper in the name of the executing Bank — one BG per package)
          </p>

          <table className="w-full border-collapse border border-black mb-8 table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white text-left">
                <th className="border border-black p-1 break-words hyphens-auto">Package</th>
                <th className="border border-black p-1 break-words hyphens-auto">Region</th>
                <th className="border border-black p-1 break-words hyphens-auto">Bid Security (EMD)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-black p-1 break-words hyphens-auto">P-1</td><td className="border border-black p-1 break-words hyphens-auto">Raipur Rural</td><td className="border border-black p-1 break-words hyphens-auto">Rs. 92.00 Lakh</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">P-2</td><td className="border border-black p-1 break-words hyphens-auto">Raipur City</td><td className="border border-black p-1 break-words hyphens-auto">Rs. 24.00 Lakh</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">P-3</td><td className="border border-black p-1 break-words hyphens-auto">Durg</td><td className="border border-black p-1 break-words hyphens-auto">Rs. 81.00 Lakh</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">P-4</td><td className="border border-black p-1 break-words hyphens-auto">Bilaspur</td><td className="border border-black p-1 break-words hyphens-auto">Rs. 96.00 Lakh</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">P-5</td><td className="border border-black p-1 break-words hyphens-auto">Rajnandgaon</td><td className="border border-black p-1 break-words hyphens-auto">Rs. 54.00 Lakh</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">P-6</td><td className="border border-black p-1 break-words hyphens-auto">Raigarh</td><td className="border border-black p-1 break-words hyphens-auto">Rs. 88.00 Lakh</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">P-7</td><td className="border border-black p-1 break-words hyphens-auto">Jagdalpur</td><td className="border border-black p-1 break-words hyphens-auto">Rs. 157.00 Lakh</td></tr>
              <tr className="font-bold bg-gray-100">
                <td className="border border-black p-1 break-words hyphens-auto" colSpan={2}>Total</td>
                <td className="border border-black p-1 break-words hyphens-auto">Rs. 592.00 Lakh (Rs. 5.92 Crore)</td>
              </tr>
            </tbody>
          </table>

          {bgPackages.map((pkg, idx) => (
            <BankGuaranteeSection key={idx} pkg={pkg} />
          ))}

          <div className="mt-12">
            <p className="font-bold mb-4">Beneficiary (CSPDCL) bank details for confirmation of the Bank Guarantee (SFMS) / electronic transfer:</p>
            <table className="w-full border-collapse border border-black  table-fixed text-[11px] leading-tight break-words">
              <tbody>
                <tr><td className="border border-black p-1 font-bold break-words hyphens-auto">Name & Address of Account Holder</td><td className="border border-black p-1 break-words hyphens-auto">Manager (CAU), CSPDCL, Raipur (C.G.)</td></tr>
                <tr><td className="border border-black p-1 font-bold break-words hyphens-auto">Bank Name</td><td className="border border-black p-1 break-words hyphens-auto">Punjab National Bank</td></tr>
                <tr><td className="border border-black p-1 font-bold break-words hyphens-auto">Branch Name</td><td className="border border-black p-1 break-words hyphens-auto">Jaistambh Chowk Branch, Raipur (C.G.)</td></tr>
                <tr><td className="border border-black p-1 font-bold break-words hyphens-auto">Account No.</td><td className="border border-black p-1 break-words hyphens-auto">0399002100077705</td></tr>
                <tr><td className="border border-black p-1 font-bold break-words hyphens-auto">IFSC Code</td><td className="border border-black p-1 break-words hyphens-auto">PUNB0039900</td></tr>
                <tr><td className="border border-black p-1 font-bold break-words hyphens-auto">Type of Account</td><td className="border border-black p-1 break-words hyphens-auto">Current Account</td></tr>
              </tbody>
            </table>
            <p className="italic text-xs text-gray-500 mt-2">
              Note: The stamp paper shall be in the name of the executing Bank and of appropriate value; the BG shall be confirmed to CSPDCL (SFMS to the above PNB branch).
            </p>
          </div>
        </A4Page>

        
      </div>
    </div>
  );
}
