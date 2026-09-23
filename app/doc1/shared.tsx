import React from 'react';

const DocumentHeaderComponent = () => (
  <div className="flex justify-between items-start mb-10 border-b-[3px] border-[#C6D22A]/50 pb-6">
    <div className="space-y-1">
      <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">ROTOMAG ENERTEC LIMITED</h1>
      <p className="text-xs text-slate-500 font-medium">(Formerly known as Rotomag Motors and Controls Pvt. Ltd.)</p>
      <p className="text-xs text-slate-500 font-medium">CIN : U34100GJ1993PLC020063</p>
      <p className="text-xs text-slate-500 mt-2">Regd. Office : 2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand - 388 121 Gujarat, INDIA</p>
      <p className="text-xs text-slate-500">Tel. : 9227110023/24 • <span className="text-blue-500">mail@rotomag.com</span> • <span className="text-blue-500">www.rotomag.com</span></p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200 shadow-sm">
        <div className="w-8 h-8 rounded-full border-[5px] border-t-green-500 border-r-blue-500 border-b-yellow-500 border-l-blue-400"></div>
      </div>
      <div>
        <div className="text-3xl font-black italic text-[#8CC63F] tracking-tighter drop-shadow-sm">ROTOMAG</div>
        <div className="text-xs italic text-blue-500 font-semibold mt-0.5">water <span className="text-green-500">energy</span> <span className="text-slate-400">motion</span></div>
      </div>
    </div>
  </div>
);

const DocumentFooterComponent = () => (
  <div className="mt-16 pt-8 border-t border-slate-200">
    <p className="font-bold mb-8 text-slate-700">For ROTOMAG ENERTEC LIMITED</p>
    <p className="text-slate-600 font-medium">(Mr. Anirudha Singh — Authorised Signatory)</p>
    <div className="flex justify-between mt-4 text-slate-500 text-sm font-medium">
      <p>Date: 09.09.2026</p>
      <p>Place: Anand</p>
    </div>
  </div>
);

const A4PageComponent = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white w-[210mm] min-h-[297mm] mx-auto p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] mb-16 text-sm text-slate-800 leading-relaxed font-sans border border-slate-200 rounded-sm transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-bl-[4rem]"></div>
    <DocumentHeader />
    <div className="animate-in fade-in duration-700">
      {children}
    </div>
  </div>
);

const bgPackagesData = [
  { p: 'P-1', region: 'Raipur Rural Region', rfx: '8100052802', amountStr: '92,00,000/-', amountWords: 'Ninety-Two Lakh only' },
  { p: 'P-2', region: 'Raipur City Region', rfx: '8100052825', amountStr: '24,00,000/-', amountWords: 'Twenty-Four Lakh only' },
  { p: 'P-3', region: 'Durg Region', rfx: '8100052828', amountStr: '81,00,000/-', amountWords: 'Eighty-One Lakh only' },
  { p: 'P-4', region: 'Bilaspur Region', rfx: '8100052832', amountStr: '96,00,000/-', amountWords: 'Ninety-Six Lakh only' },
  { p: 'P-5', region: 'Rajnandgaon Region', rfx: '8100052833', amountStr: '54,00,000/-', amountWords: 'Fifty-Four Lakh only' },
  { p: 'P-6', region: 'Raigarh Region', rfx: '8100052843', amountStr: '88,00,000/-', amountWords: 'Eighty-Eight Lakh only' },
  { p: 'P-7', region: 'Jagdalpur Region', rfx: '8100052844', amountStr: '157,00,000/-', amountWords: 'One Crore Fifty-Seven Lakh only' },
];

const BankGuaranteeSectionComponent = ({ pkg }: { pkg: typeof bgPackages[0] }) => (
  <div className="mb-12 border-b border-dashed border-gray-300 pb-12">
    <p className="font-bold mb-4 uppercase">
      PACKAGE {pkg.p} — {pkg.region} (RFX No. {pkg.rfx}) — Bid Security: Rs. {pkg.amountStr} (Rupees {pkg.amountWords})
    </p>
    <div className="flex gap-16 mb-4">
      <p>Bank Guarantee No.: ____________________</p>
      <p>Date: 09.09.2026</p>
    </div>
    <p className="mb-4 text-justify">
      In consideration of M/s ROTOMAG ENERTEC LIMITED (formerly Rotomag Motors and Controls Pvt. Ltd.), having its 
      Registered Office at 2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat (the “Bidder”), 
      submitting its Bid inter alia for Response to RfS No. CSPDCL/NIT/ULA-114.23 MW-/1095 dated 14.07.2026 (read 
      with Corrigendum-1 dated 03.09.2026) for “Design, Supply, Erection, Testing and Commissioning including 
      Warranty, Comprehensive Operation & Maintenance of Grid-Connected Rooftop Solar Plants of Various Capacities 
      in the Residential Sector under the Utility-Led Aggregation (ULA) Models of PM-Surya Ghar: Muft Bijli Yojana of 
      MNRE under EPC (CAPEX) in the State of Chhattisgarh”, against Package {pkg.p} ({pkg.region}), issued by 
      CHHATTISGARH STATE POWER DISTRIBUTION COMPANY LIMITED (“CSPDCL”), the ______________________ 
      [insert name & address of the issuing Scheduled Commercial Bank] (“Guarantor Bank”) hereby agrees 
      unequivocally, irrevocably and unconditionally to pay to CSPDCL or its authorized representative at Chhattisgarh 
      State Power Distribution Company Limited, Vidyut Seva Bhawan, Dagania, Raipur, forthwith on demand in writing, 
      an amount not exceeding Rs. {pkg.amountStr} (Rupees {pkg.amountWords}), on behalf of the Bidder.
    </p>
    <p className="mb-4 text-justify">
      This guarantee shall be valid up to and including ______________ (180 days of bid validity plus claim period) and 
      shall not be terminable by notice or any change in the constitution of the Guarantor Bank. The Guarantor Bank 
      shall make payment on first demand without demur, restriction or conditions and notwithstanding any objection 
      by the Bidder, and shall not require CSPDCL to justify the invocation. Interpreted under the laws of India; the 
      courts at Raipur shall have exclusive jurisdiction.
    </p>
    <div className="flex justify-between mb-4 mt-8">
      <p>Signature: ____________</p>
      <p>Name: ____________</p>
      <p>Designation & Bank Stamp: ____________</p>
    </div>
    <div className="flex gap-4 mb-2">
      <p>For ______________________ [Name of the Bank]</p>
      <p>Attorney/PoA No.: ____________</p>
      <p>WITNESSES: 1. ________</p>
    </div>
    <p>2. ________</p>
  </div>
);


export const DocumentHeader = DocumentHeaderComponent;
export const DocumentFooter = DocumentFooterComponent;
export const A4Page = A4PageComponent;
export const bgPackages = bgPackagesData;
export const BankGuaranteeSection = BankGuaranteeSectionComponent;
