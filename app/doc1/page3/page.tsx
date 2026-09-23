import React from 'react';
import { A4Page, DocumentFooter, bgPackages, BankGuaranteeSection } from '../shared';
import Link from 'next/link';

export default function Page3() {
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
        {/* Envelope Stickers */}
        <A4Page>
          <div className="bg-green-700 text-white text-center font-bold text-lg p-2 mb-4 uppercase">
            Outer Sealed Cover — Bid Documents
          </div>
          <p className="font-bold mb-2">RfS No.: CSPDCL/NIT/ULA-114.23 MW-/1095 dated 14.07.2026</p>
          <p className="text-xs text-gray-600 mb-4">(read with Corrigendum-1 dated 03.09.2026)</p>
          <p className="mb-2 text-sm">Name of Work: Grid-Connected Rooftop Solar Plants (Residential) under PM-Surya Ghar: Muft Bijli Yojana — Utility-Led Aggregation (ULA) Models, EPC (CAPEX), Chhattisgarh</p>
          <p className="font-bold mb-6 text-sm">Packages: P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 (Bilaspur), P-5 (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur)</p>
          
          <p className="font-bold mb-2">TO:</p>
          <p className="mb-1">The Executive Director (RA&PM),</p>
          <p className="mb-1">Chhattisgarh State Power Distribution Company Limited (CSPDCL),</p>
          <p className="mb-1">Sewa Bhawan, 4th Floor, Danganiya, Raipur,</p>
          <p className="mb-8">Dist. Raipur – 492013, Chhattisgarh, India</p>

          <p className="font-bold mb-2">FROM (Bidder):</p>
          <p className="font-bold mb-1">ROTOMAG ENERTEC LIMITED</p>
          <p className="mb-1 text-sm">2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat, India</p>
          <p className="mb-8 text-sm">Contact: Mr. Anirudha Singh, Authorised Signatory — 9227110023/24 — mail@rotomag.com</p>

          <p className="font-bold text-green-700 text-sm mb-6 text-justify">
            CONTAINS: Envelope-I (Covering Letter, Tender Fee & Bid Security/EMD) and Envelope-II (Techno-Commercial Documents).
          </p>
          
          <p className="font-bold text-red-600 text-center mb-6">DO NOT OPEN — TO BE OPENED ONLY BY CSPDCL ON THE SCHEDULED BID-OPENING DATE.</p>
          <div className="flex justify-between text-sm border-t border-black pt-2 mt-12">
            <p>Bid Deadline: to reach by 10.09.2026, 15:00 Hrs.</p>
            <p>Bidder's Seal & Signature: ____________________</p>
          </div>
        </A4Page>

        <A4Page>
          <div className="bg-green-700 text-white text-center font-bold text-lg p-2 mb-4 uppercase">
            Envelope-I
          </div>
          <p className="font-bold mb-2">RfS No.: CSPDCL/NIT/ULA-114.23 MW-/1095 dated 14.07.2026</p>
          <p className="text-xs text-gray-600 mb-4">(read with Corrigendum-1 dated 03.09.2026)</p>
          <p className="mb-2 text-sm">Name of Work: Grid-Connected Rooftop Solar Plants (Residential) under PM-Surya Ghar: Muft Bijli Yojana — Utility-Led Aggregation (ULA) Models, EPC (CAPEX), Chhattisgarh</p>
          <p className="font-bold mb-6 text-sm">Packages: P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 (Bilaspur), P-5 (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur)</p>
          
          <p className="font-bold mb-2">TO:</p>
          <p className="mb-1">The Executive Director (RA&PM),</p>
          <p className="mb-1">Chhattisgarh State Power Distribution Company Limited (CSPDCL),</p>
          <p className="mb-1">Sewa Bhawan, 4th Floor, Danganiya, Raipur,</p>
          <p className="mb-8">Dist. Raipur – 492013, Chhattisgarh, India</p>

          <p className="font-bold mb-2">FROM (Bidder):</p>
          <p className="font-bold mb-1">ROTOMAG ENERTEC LIMITED</p>
          <p className="mb-1 text-sm">2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat, India</p>
          <p className="mb-8 text-sm">Contact: Mr. Anirudha Singh, Authorised Signatory — 9227110023/24 — mail@rotomag.com</p>

          <p className="font-bold text-green-700 text-sm mb-6 text-justify">
            CONTAINS: Covering Letter (Format-2); online Tender Processing Fee & EMD confirmation; Original EMD Bank Guarantees (Annexure-K) for P-1 to P-7 — total Rs. 5.92 Crore.
          </p>
          
          <p className="font-bold text-red-600 text-center mb-6">ENVELOPE-I — COVERING LETTER, TENDER FEE & BID SECURITY (EMD)</p>
          <div className="flex justify-between text-sm border-t border-black pt-2 mt-12">
            <p>Bid Deadline: to reach by 10.09.2026, 15:00 Hrs.</p>
            <p>Bidder's Seal & Signature: ____________________</p>
          </div>
        </A4Page>

        <A4Page>
          <div className="bg-green-700 text-white text-center font-bold text-lg p-2 mb-4 uppercase">
            Envelope-II
          </div>
          <p className="font-bold mb-2">RfS No.: CSPDCL/NIT/ULA-114.23 MW-/1095 dated 14.07.2026</p>
          <p className="text-xs text-gray-600 mb-4">(read with Corrigendum-1 dated 03.09.2026)</p>
          <p className="mb-2 text-sm">Name of Work: Grid-Connected Rooftop Solar Plants (Residential) under PM-Surya Ghar: Muft Bijli Yojana — Utility-Led Aggregation (ULA) Models, EPC (CAPEX), Chhattisgarh</p>
          <p className="font-bold mb-6 text-sm">Packages: P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 (Bilaspur), P-5 (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur)</p>
          
          <p className="font-bold mb-2">TO:</p>
          <p className="mb-1">The Executive Director (RA&PM),</p>
          <p className="mb-1">Chhattisgarh State Power Distribution Company Limited (CSPDCL),</p>
          <p className="mb-1">Sewa Bhawan, 4th Floor, Danganiya, Raipur,</p>
          <p className="mb-8">Dist. Raipur – 492013, Chhattisgarh, India</p>

          <p className="font-bold mb-2">FROM (Bidder):</p>
          <p className="font-bold mb-1">ROTOMAG ENERTEC LIMITED</p>
          <p className="mb-1 text-sm">2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat, India</p>
          <p className="mb-8 text-sm">Contact: Mr. Anirudha Singh, Authorised Signatory — 9227110023/24 — mail@rotomag.com</p>

          <p className="font-bold text-green-700 text-sm mb-6 text-justify">
            CONTAINS: Techno-Commercial Documents — Formats 1/2/5/6/7/9/10/11/12; Annexures D/E/F/H/I; COI, MoA/AoA, GST & PAN; CA-certified financials & audited accounts; Experience Certificate + LOA; signed & stamped RfS. (NO Price Bid.)
          </p>
          
          <p className="font-bold text-red-600 text-center mb-6">ENVELOPE-II — TECHNO-COMMERCIAL DOCUMENTS (NO PRICE BID)</p>
          <div className="flex justify-between text-sm border-t border-black pt-2 mt-12">
            <p>Bid Deadline: to reach by 10.09.2026, 15:00 Hrs.</p>
            <p>Bidder's Seal & Signature: ____________________</p>
          </div>
        </A4Page>

        
      </div>
    </div>
  );
}
