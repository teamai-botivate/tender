import React from 'react';
import { A4Page, DocumentFooter } from '../shared';
import Link from 'next/link';

export default function Page5() {
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

        {/* Format-5 Power of Attorney */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-5</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-2">POWER OF ATTORNEY</h2>
          <p className="text-center italic text-xs mb-8 text-gray-500">
            (To be printed/executed on non-judicial stamp paper of appropriate value and duly NOTARISED (mandatory per Cl. 3.5.1).)
          </p>
          
          <p className="mb-4 text-justify">
            Know all men by these presents, We, ROTOMAG ENERTEC LIMITED (formerly Rotomag Motors and Controls Pvt. Ltd.), 
            having our Registered Office at 2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat, India, do 
            hereby constitute, appoint and authorize Mr. Anirudha Singh, Authorised Signatory, as our true and lawful attorney, to 
            do in our name and on our behalf all acts, deeds and things necessary in connection with or incidental to the 
            submission of our bid for Design, Supply, Erection, Testing and Commissioning including Warranty, Comprehensive 
            Operation & Maintenance of Grid-Connected Rooftop Solar Plants of Various Capacities in the Residential Sector 
            under the Utility-Led Aggregation (ULA) Models of PM-Surya Ghar: Muft Bijli Yojana of MNRE under EPC (CAPEX) in 
            the State of Chhattisgarh, against Packages P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 (Bilaspur), P-5 
            (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur), in response to RfS No. CSPDCL/NIT/ULA-114.23 MW-/1095 dated 
            14.07.2026 read with Corrigendum-1 dated 03.09.2026, issued by CSPDCL, Raipur, including signing and submission of 
            the bid and all related documents, undertakings, declarations, guarantees and bank guarantees, and generally dealing 
            with CSPDCL. We ratify all acts lawfully done by our said attorney pursuant to this Power of Attorney.
          </p>
          <p className="mb-12">
            Signed for ROTOMAG ENERTEC LIMITED through the hand of the person duly authorized vide Board Resolution dated 
            09.09.2026.
          </p>

          <p className="mb-8">Accepted: ________________________ (Mr. Anirudha Singh, Authorised Signatory)</p>
          
          <div className="mb-12">
            <p>For ROTOMAG ENERTEC LIMITED: ________________________ (Umesh Balani, Managing Director — DIN 00273387)</p>
          </div>
          
          <div className="flex justify-between items-center text-sm border-t border-gray-300 pt-8">
            <p>WITNESSES: 1. ________________ 2. ________________</p>
            <p>NOTARY (Seal & Signature): __________________</p>
          </div>
        </A4Page>

        {/* Annexure-D Declaration of Authorization */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">ANNEXURE-D</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-2">DECLARATION OF AUTHORIZATION</h2>
          <p className="text-center italic text-xs mb-8 text-gray-500">
            (To be printed/executed on non-judicial stamp paper of appropriate value.)
          </p>
          
          <p className="mb-12 text-justify">
            We, ROTOMAG ENERTEC LIMITED, having our Registered Office at 2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand 
            – 388 121, Gujarat, India, do hereby constitute, appoint and authorize Mr. Anirudha Singh, Authorised Signatory, to do 
            in our name and on our behalf all acts, deeds and things necessary in connection with the submission of our bid for 
            implementation of grid-connected rooftop solar projects (Packages P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 
            (Bilaspur), P-5 (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur)) in response to RfS No. CSPDCL/NIT/ULA-114.23 MW- 
            /1095 dated 14.07.2026 read with Corrigendum-1 dated 03.09.2026 issued by CSPDCL. We ratify all acts lawfully done 
            by our authorized representative.
          </p>
          
          <div className="flex flex-wrap justify-between items-end gap-y-8 mb-12">
            <p>For ROTOMAG ENERTEC LIMITED</p>
            <p>Name: Anirudha Singh</p>
            <p>Designation: Authorised Signatory</p>
            <p>Date: 09.09.2026</p>
          </div>
          
          <div className="flex justify-between items-center text-sm border-t border-gray-300 pt-8">
            <p>WITNESSES: 1. ________________ 2. ________________</p>
            <p>NOTARY (Seal & Signature): __________________</p>
          </div>
        </A4Page>

        {/* Annexure-H Bid Security Declaration */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">ANNEXURE-H</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-2">BID SECURITY DECLARATION</h2>
          <p className="text-center italic text-xs mb-8 text-gray-500">
            (To be printed/executed on non-judicial stamp paper of appropriate value.)
          </p>
          
          <div className="flex justify-between mb-8">
            <p>Ref: ____________</p>
            <p>Date: 09.09.2026</p>
          </div>
          
          <p className="mb-12 text-justify">
            We, ROTOMAG ENERTEC LIMITED, hereby undertake to CSPDCL in respect of our response to RfS No. 
            CSPDCL/NIT/ULA-114.23 MW-/1095 dated 14.07.2026 (Packages P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 
            (Bilaspur), P-5 (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur)) that we will abide by the provisions of the RfS during the 
            bid validity period and shall not withdraw or modify our bid during the bid validity period. In case we withdraw or 
            modify our response during the bid validity period, or violate other provisions of the RfS which make the bid non-responsive, we (including our Parent, Ultimate Parent and Affiliates) shall be suspended / debarred from participating 
            in upcoming tenders issued by any department of the Chhattisgarh Government for a period of 5 years from the date 
            of default as notified by CSPDCL.
          </p>
          
          <p className="mb-12">
            (Name & Signature of the Authorised Signatory — Mr. Anirudha Singh, Authorised Signatory, ROTOMAG ENERTEC LIMITED)
          </p>
          
          <div className="flex justify-between items-center text-sm border-t border-gray-300 pt-8">
            <p>WITNESSES: 1. ________________ 2. ________________</p>
            <p>NOTARY (Seal & Signature): __________________</p>
          </div>
        </A4Page>

        {/* Annexure-E Indemnity Bond */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">ANNEXURE-E</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-2">INDEMNITY BOND</h2>
          <p className="text-center italic text-xs mb-8 text-gray-500">
            (To be printed/executed on non-judicial stamp paper of appropriate value and duly NOTARISED.)
          </p>
          
          <p className="mb-12 text-justify">
            This Indemnity Bond is made this 9th day of September 2026 by ROTOMAG ENERTEC LIMITED, having its Registered 
            Office at 2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat, India (the 'Vendor'), in favour of 
            Chhattisgarh State Power Distribution Company Limited ('CSPDCL'). Whereas CSPDCL is required to release CFA to the 
            Vendor for erection, operation and maintenance of the Solar Power Plant, and whereas the Vendor is required to 
            establish an Insurance Cover for third-party liability, the Vendor undertakes to keep CSPDCL harmless against any past 
            or future unforeseen loss or damage caused due to non-establishment of the Insurance Cover under the contract 
            against which CFA has been released. This Indemnity Bond is irrevocable.
          </p>
          
          <p className="mb-12">
            For ROTOMAG ENERTEC LIMITED (Authorised Representative): ________________________
          </p>
          
          <div className="flex justify-between items-center text-sm border-t border-gray-300 pt-8">
            <p>WITNESSES: 1. ________________ 2. ________________</p>
            <p>NOTARY (Seal & Signature): __________________</p>
          </div>
        </A4Page>

      </div>
    </div>
  );
}
