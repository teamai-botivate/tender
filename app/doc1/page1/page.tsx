import React from 'react';
import { A4Page, DocumentFooter, bgPackages, BankGuaranteeSection } from '../shared';
import Link from 'next/link';

export default function Page1() {
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
        {/* Page 1: Covering Letter */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-2</div>
          <h2 className="text-center font-bold text-green-600 underline text-lg mb-6">COVERING LETTER</h2>
          
          <div className="flex justify-between mb-4">
            <p>RfS No: CSPDCL/NIT/ULA-114.23 MW-/1095 dated 14.07.2026</p>
            <p>Dated: 09.09.2026</p>
          </div>
          
          <div className="mb-4">
            <p>To,</p>
            <p>The Executive Director (RA&PM),</p>
            <p>Chhattisgarh State Power Distribution Company Limited,</p>
            <p>4th Floor, Sewa Bhawan, Danganiya, Raipur – 492013 (C.G.)</p>
          </div>
          
          <p className="font-bold mb-4 text-justify">
            Sub: Request for Selection (RfS) for Design, Supply, Erection, Testing and Commissioning including Warranty, 
            Comprehensive Operation & Maintenance of Grid-Connected Rooftop Solar Plants of Various Capacities in the 
            Residential Sector under the Utility-Led Aggregation (ULA) Models of PM-Surya Ghar: Muft Bijli Yojana of MNRE 
            under EPC (CAPEX) in the State of Chhattisgarh, against Packages P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 (Bilaspur), P-5 (Rajnandgaon), P-6 (Raigarh), P-7 (Jagdalpur), with RfS No. CSPDCL/NIT/ULA-114.23 MW-/1095 
            dated 14.07.2026 read with Corrigendum-1 dated 03.09.2026.
          </p>
          
          <p className="mb-4">Dear Sir,</p>
          <p className="mb-4 text-justify">
            We, ROTOMAG ENERTEC LIMITED (formerly Rotomag Motors and Controls Pvt. Ltd.), having read, examined and 
            understood the Request for Selection and Corrigendum-1, hereby submit our bid, as an individual bidder (single 
            entity), against Packages P-1 (Raipur Rural), P-2 (Raipur City), P-3 (Durg), P-4 (Bilaspur), P-5 (Rajnandgaon), P-6 
            (Raigarh), P-7 (Jagdalpur), comprising the Techno-Commercial Bid and the Price Bid. We confirm that neither we nor 
            any of our Parent Company / Affiliate has submitted any other bid, directly or indirectly, in response to this RfS, and 
            that we are not participating in any consortium under this tender.
          </p>
          <ul className="list-decimal pl-5 mb-6 space-y-2 text-justify">
            <li>Non-refundable Tender Processing Fee of Rs. 10,000/- per package has been submitted online for each package bid.</li>
            <li>Bid Security (EMD) — Rs. 5.92 Crore in total for the packages bid — has been furnished as Bank Guarantee(s) in the prescribed format (Annexure-K).</li>
            <li>Our Price Bid has been submitted online strictly as per this RfS, without deviation, condition or assumption.</li>
            <li>We independently meet the cumulative technical and financial eligibility for all packages bid; our Net Worth is positive for the latest 3 financial years.</li>
            <li>All terms and conditions of our bid are valid for 180 days from the Bid deadline; we have taken no deviation (Zero-Deviation bidding).</li>
          </ul>
          
          <p className="font-bold mb-2">Packages applied for:</p>
          <table className="w-full border-collapse border border-black mb-6 table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white text-left">
                <th className="border border-black p-1 break-words hyphens-auto">S.No.</th>
                <th className="border border-black p-1 break-words hyphens-auto">Package & Region</th>
                <th className="border border-black p-1 break-words hyphens-auto">RFX No.</th>
                <th className="border border-black p-1 break-words hyphens-auto">EMD (Rs. Lakh)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {sno: 1, pkg: "Package-1: Raipur Rural Region", rfx: "8100052802", emd: "92"},
                {sno: 2, pkg: "Package-2: Raipur City Region", rfx: "8100052825", emd: "24"},
                {sno: 3, pkg: "Package-3: Durg Region", rfx: "8100052828", emd: "81"},
                {sno: 4, pkg: "Package-4: Bilaspur Region", rfx: "8100052832", emd: "96"},
                {sno: 5, pkg: "Package-5: Rajnandgaon Region", rfx: "8100052833", emd: "54"},
                {sno: 6, pkg: "Package-6: Raigarh Region", rfx: "8100052843", emd: "88"},
                {sno: 7, pkg: "Package-7: Jagdalpur Region", rfx: "8100052844", emd: "157"},
              ].map(row => (
                <tr key={row.sno}>
                  <td className="border border-black p-1 break-words hyphens-auto">{row.sno}</td>
                  <td className="border border-black p-1 break-words hyphens-auto">{row.pkg}</td>
                  <td className="border border-black p-1 break-words hyphens-auto">{row.rfx}</td>
                  <td className="border border-black p-1 break-words hyphens-auto">{row.emd}</td>
                </tr>
              ))}
              <tr className="font-bold bg-gray-100">
                <td className="border border-black p-1 break-words hyphens-auto" colSpan={3}>Total EMD</td>
                <td className="border border-black p-1 break-words hyphens-auto">592 (Rs. 5.92 Cr)</td>
              </tr>
            </tbody>
          </table>
          
          <p className="mt-8">Thanking you, Yours faithfully,</p>
          <DocumentFooter />
        </A4Page>

        {/* Page 3: General Particulars */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-1</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-6">GENERAL PARTICULARS OF THE BIDDER</h2>
          
          <table className="w-full border-collapse border border-black mb-6 table-fixed text-[11px] leading-tight break-words">
            <tbody>
              {[
                {label: "Name of the Bidder", value: "ROTOMAG ENERTEC LIMITED (formerly Rotomag Motors and Controls Pvt. Ltd.)"},
                {label: "Registered Office Address", value: "2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat, India"},
                {label: "Contact No. / E-mail / Website", value: "9227110023/24 / mail@rotomag.com / www.rotomag.com"},
                {label: "Authorized Contact Person", value: "Mr. Anirudha Singh, Authorised Signatory"},
                {label: "Year of Incorporation", value: "1993"},
                {label: "CIN", value: "U34100GJ1993PLC020063"},
                {label: "Ever debarred by any Govt. Dept./Undertaking", value: "No"},
                {label: "Whether wishes to form a Project Company", value: "No – bidding as an individual entity"},
                {label: "Bidding company listed in India", value: "No"},
                {label: "GST No.", value: "______________ (to be filled)"},
                {label: "PAN No.", value: "AAACR9061K"},
                {label: "Certificate of Incorporation / name-change enclosed", value: "Yes"},
                {label: "MoA/AoA, GST & PAN enclosed", value: "Yes"},
              ].map((row, i) => (
                <tr key={i}>
                  <td className="border border-black p-1 font-bold w-1/3 break-words hyphens-auto">{row.label}</td>
                  <td className="border border-black p-1 w-2/3 break-words hyphens-auto">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <DocumentFooter />
        </A4Page>

        {/* Page 4: Financial Eligibility */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-6</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-6">FINANCIAL ELIGIBILITY CRITERIA REQUIREMENT</h2>
          
          <p className="font-bold mb-4">Name of Financially Evaluated Entity: ROTOMAG ENERTEC LIMITED (formerly Rotomag Motors and Controls Pvt. Ltd.)</p>
          
          <table className="w-full border-collapse border border-black mb-6 text-center table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-black p-1 break-words hyphens-auto">Financial Year</th>
                <th className="border border-black p-1 break-words hyphens-auto">Annual Turnover (Rs. Cr)</th>
                <th className="border border-black p-1 break-words hyphens-auto">MAAT Value (Rs. Cr)</th>
                <th className="border border-black p-1 break-words hyphens-auto">Net Worth (Rs. Cr)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-black p-1 break-words hyphens-auto">2020-21</td><td className="border border-black p-1 break-words hyphens-auto">425.56</td><td className="border border-black p-1 break-words hyphens-auto">425.56</td><td className="border border-black p-1 break-words hyphens-auto">211.72</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">2021-22</td><td className="border border-black p-1 break-words hyphens-auto">451.93</td><td className="border border-black p-1 break-words hyphens-auto">451.93</td><td className="border border-black p-1 break-words hyphens-auto">230.10</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">2022-23</td><td className="border border-black p-1 break-words hyphens-auto">501.55</td><td className="border border-black p-1 break-words hyphens-auto">501.55</td><td className="border border-black p-1 break-words hyphens-auto">244.07</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">2023-24</td><td className="border border-black p-1 break-words hyphens-auto">514.73</td><td className="border border-black p-1 break-words hyphens-auto">514.73</td><td className="border border-black p-1 break-words hyphens-auto">295.90</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">2024-25</td><td className="border border-black p-1 break-words hyphens-auto">1088.36</td><td className="border border-black p-1 break-words hyphens-auto">1088.36</td><td className="border border-black p-1 break-words hyphens-auto">482.92</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">2025-26</td><td className="border border-black p-1 break-words hyphens-auto">1213.10</td><td className="border border-black p-1 break-words hyphens-auto">1213.10</td><td className="border border-black p-1 break-words hyphens-auto">662.80</td></tr>
            </tbody>
          </table>
          
          <p className="italic text-sm text-justify mb-8">
            MAAT (average of the best three of five audited financial years — FY 2025-26, 2024-25 & 2023-24) = Rs. 938.73 Crore, against the 
            cumulative requirement of Rs. 301.00 Crore for the seven packages bid. Net Worth is positive and increasing for all years shown. 
            Figures are per audited financial statements (audited in the erstwhile name 'Rotomag Motors and Controls Pvt. Ltd.'; name-change 
            certificate enclosed).
          </p>
          
          <div className="mb-8">
            <p className="font-bold mb-8">For ROTOMAG ENERTEC LIMITED</p>
            <p>(Mr. Anirudha Singh — Authorised Signatory)</p>
            <div className="flex justify-between mt-2">
              <p>Date: 09.09.2026</p>
              <p>Place: Anand</p>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="font-bold mb-4">Certified by Chartered Accountant / Statutory Auditor:</p>
            <p className="mb-2">For Momin & Co., Chartered Accountants — FRN 134110W — (CA Hasan Bariawala, Partner), M.No. 135345.</p>
            <div className="flex gap-8 mb-4">
              <p>UDIN: 26135345MAGIVP6707</p>
              <p>Date: 09.09.2026</p>
              <p>Place: Anand.</p>
            </div>
            <p className="italic text-xs text-gray-500">(The CA-certified Format-6 & Format-9 on the Company letterhead are enclosed.)</p>
          </div>
        </A4Page>

        {/* Page 5: Financial Data */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-9</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-6">FINANCIAL DATA</h2>
          
          <div className="flex justify-between font-bold mb-4">
            <p>Applicant's legal name: ROTOMAG ENERTEC LIMITED</p>
            <p>Date: 09.09.2026</p>
          </div>
          
          <table className="w-full border-collapse border border-black mb-6 text-right  table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-black p-1 text-left break-words hyphens-auto">Description</th>
                <th className="border border-black p-1 break-words hyphens-auto">2020-21</th>
                <th className="border border-black p-1 break-words hyphens-auto">2021-22</th>
                <th className="border border-black p-1 break-words hyphens-auto">2022-23</th>
                <th className="border border-black p-1 break-words hyphens-auto">2023-24</th>
                <th className="border border-black p-1 break-words hyphens-auto">2024-25</th>
                <th className="border border-black p-1 break-words hyphens-auto">2025-26</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Total Assets</td><td className="border border-black p-1 break-words hyphens-auto">421.90</td><td className="border border-black p-1 break-words hyphens-auto">457.04</td><td className="border border-black p-1 break-words hyphens-auto">416.57</td><td className="border border-black p-1 break-words hyphens-auto">564.71</td><td className="border border-black p-1 break-words hyphens-auto">1048.46</td><td className="border border-black p-1 break-words hyphens-auto">1440.50</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Current Assets</td><td className="border border-black p-1 break-words hyphens-auto">377.60</td><td className="border border-black p-1 break-words hyphens-auto">406.99</td><td className="border border-black p-1 break-words hyphens-auto">371.31</td><td className="border border-black p-1 break-words hyphens-auto">473.43</td><td className="border border-black p-1 break-words hyphens-auto">970.03</td><td className="border border-black p-1 break-words hyphens-auto">1229.44</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Total External Liabilities</td><td className="border border-black p-1 break-words hyphens-auto">210.18</td><td className="border border-black p-1 break-words hyphens-auto">226.94</td><td className="border border-black p-1 break-words hyphens-auto">172.50</td><td className="border border-black p-1 break-words hyphens-auto">268.81</td><td className="border border-black p-1 break-words hyphens-auto">565.54</td><td className="border border-black p-1 break-words hyphens-auto">777.70</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Current Liabilities (incl. provisions)</td><td className="border border-black p-1 break-words hyphens-auto">156.75</td><td className="border border-black p-1 break-words hyphens-auto">173.51</td><td className="border border-black p-1 break-words hyphens-auto">118.22</td><td className="border border-black p-1 break-words hyphens-auto">212.90</td><td className="border border-black p-1 break-words hyphens-auto">526.65</td><td className="border border-black p-1 break-words hyphens-auto">691.04</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Annual Profit Before Taxes</td><td className="border border-black p-1 break-words hyphens-auto">54.72</td><td className="border border-black p-1 break-words hyphens-auto">36.73</td><td className="border border-black p-1 break-words hyphens-auto">24.19</td><td className="border border-black p-1 break-words hyphens-auto">70.18</td><td className="border border-black p-1 break-words hyphens-auto">216.22</td><td className="border border-black p-1 break-words hyphens-auto">207.34</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Annual Profit After Taxes</td><td className="border border-black p-1 break-words hyphens-auto">39.07</td><td className="border border-black p-1 break-words hyphens-auto">24.52</td><td className="border border-black p-1 break-words hyphens-auto">13.98</td><td className="border border-black p-1 break-words hyphens-auto">51.83</td><td className="border border-black p-1 break-words hyphens-auto">156.38</td><td className="border border-black p-1 break-words hyphens-auto">147.88</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Net Worth [= 1 - 3]</td><td className="border border-black p-1 break-words hyphens-auto">211.72</td><td className="border border-black p-1 break-words hyphens-auto">230.10</td><td className="border border-black p-1 break-words hyphens-auto">244.07</td><td className="border border-black p-1 break-words hyphens-auto">295.90</td><td className="border border-black p-1 break-words hyphens-auto">482.92</td><td className="border border-black p-1 break-words hyphens-auto">662.80</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Working Capital [= 2 - 4]</td><td className="border border-black p-1 break-words hyphens-auto">220.85</td><td className="border border-black p-1 break-words hyphens-auto">233.48</td><td className="border border-black p-1 break-words hyphens-auto">253.09</td><td className="border border-black p-1 break-words hyphens-auto">260.53</td><td className="border border-black p-1 break-words hyphens-auto">443.38</td><td className="border border-black p-1 break-words hyphens-auto">538.40</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Return on Equity</td><td className="border border-black p-1 break-words hyphens-auto">18.75%</td><td className="border border-black p-1 break-words hyphens-auto">10.66%</td><td className="border border-black p-1 break-words hyphens-auto">5.73%</td><td className="border border-black p-1 break-words hyphens-auto">17.51%</td><td className="border border-black p-1 break-words hyphens-auto">32.38%</td><td className="border border-black p-1 break-words hyphens-auto">22.31%</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Annual Turnover</td><td className="border border-black p-1 break-words hyphens-auto">425.56</td><td className="border border-black p-1 break-words hyphens-auto">451.93</td><td className="border border-black p-1 break-words hyphens-auto">501.55</td><td className="border border-black p-1 break-words hyphens-auto">514.73</td><td className="border border-black p-1 break-words hyphens-auto">1088.36</td><td className="border border-black p-1 break-words hyphens-auto">1213.10</td></tr>
            </tbody>
          </table>
          
          <p className="italic text-sm text-justify">
            Figures in Rs. Crore; audited data for a continuous five-year block (Return on Equity in %). Certified by Momin & Co., Chartered Accountants 
            (FRN 134110W) — CA Hasan Bariawala, Partner, M.No. 135345. UDIN: 26135345IEOJBW2889. Date: 09.09.2026, Place: Anand. Audited 
            balance sheets and income statements for the block are enclosed.
          </p>
        </A4Page>
        
        {/* Page 6: Work Experience */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-7</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-6">WORK EXPERIENCE</h2>
          
          <div className="flex gap-8 mb-4">
            <p>Bidder's legal name: ROTOMAG ENERTEC LIMITED</p>
            <p>Date: 09.09.2026</p>
          </div>
          
          <p className="mb-4 text-justify">
            Per Experience Certificate dated 30.06.2026 issued by the Chief General Manager (RAC & IPC), Southern Power Distribution 
            Company of A.P. Ltd. (APSPDCL) — a State Government DISCOM — for installation & commissioning of 2 kWp grid-connected 
            rooftop solar plants for SC/ST consumers under PM-Surya Ghar (ULA/CAPEX), Tender No. NREDCAP/PMSG/SC&ST/07/2025 dated 
            07.07.2025 (LOA NREDCAP/PMSG/SC&ST/07/2025/1123 dt 13.10.2025 & /1146 dt 14.10.2025):
          </p>
          
          <table className="w-full border-collapse border border-black mb-4 text-center table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white text-sm">
                <th className="border border-black p-1 text-left break-words hyphens-auto">Division (APSPDCL)</th>
                <th className="border border-black p-1 break-words hyphens-auto">Installed & Commissioned<br/>(No. of Sets)</th>
                <th className="border border-black p-1 break-words hyphens-auto">Installed &<br/>Commissioned Capacity<br/>(MW)</th>
                <th className="border border-black p-1 break-words hyphens-auto">Grid-Synchronized (No.<br/>of Sets)</th>
                <th className="border border-black p-1 break-words hyphens-auto">Grid-Synchronized<br/>Capacity (MW)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Kadapa</td><td className="border border-black p-1 break-words hyphens-auto">973</td><td className="border border-black p-1 break-words hyphens-auto">1.946</td><td className="border border-black p-1 break-words hyphens-auto">574</td><td className="border border-black p-1 break-words hyphens-auto">1.148</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Proddatur</td><td className="border border-black p-1 break-words hyphens-auto">1,848</td><td className="border border-black p-1 break-words hyphens-auto">3.696</td><td className="border border-black p-1 break-words hyphens-auto">1,922</td><td className="border border-black p-1 break-words hyphens-auto">3.844</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Mydukur</td><td className="border border-black p-1 break-words hyphens-auto">3,208</td><td className="border border-black p-1 break-words hyphens-auto">6.416</td><td className="border border-black p-1 break-words hyphens-auto">3,118</td><td className="border border-black p-1 break-words hyphens-auto">6.236</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Kalyandurg</td><td className="border border-black p-1 break-words hyphens-auto">2,146</td><td className="border border-black p-1 break-words hyphens-auto">4.292</td><td className="border border-black p-1 break-words hyphens-auto">1,107</td><td className="border border-black p-1 break-words hyphens-auto">2.214</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Gooty</td><td className="border border-black p-1 break-words hyphens-auto">1,525</td><td className="border border-black p-1 break-words hyphens-auto">3.050</td><td className="border border-black p-1 break-words hyphens-auto">626</td><td className="border border-black p-1 break-words hyphens-auto">1.252</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Adoni</td><td className="border border-black p-1 break-words hyphens-auto">3,036</td><td className="border border-black p-1 break-words hyphens-auto">6.072</td><td className="border border-black p-1 break-words hyphens-auto">1,561</td><td className="border border-black p-1 break-words hyphens-auto">3.122</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Anantapur</td><td className="border border-black p-1 break-words hyphens-auto">1,168</td><td className="border border-black p-1 break-words hyphens-auto">2.336</td><td className="border border-black p-1 break-words hyphens-auto">933</td><td className="border border-black p-1 break-words hyphens-auto">1.866</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Hindupur</td><td className="border border-black p-1 break-words hyphens-auto">2,790</td><td className="border border-black p-1 break-words hyphens-auto">5.580</td><td className="border border-black p-1 break-words hyphens-auto">2,660</td><td className="border border-black p-1 break-words hyphens-auto">5.320</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Dhone</td><td className="border border-black p-1 break-words hyphens-auto">1,085</td><td className="border border-black p-1 break-words hyphens-auto">2.170</td><td className="border border-black p-1 break-words hyphens-auto">404</td><td className="border border-black p-1 break-words hyphens-auto">0.808</td></tr>
              <tr><td className="border border-black p-1 text-left break-words hyphens-auto">Atmakur</td><td className="border border-black p-1 break-words hyphens-auto">604</td><td className="border border-black p-1 break-words hyphens-auto">1.208</td><td className="border border-black p-1 break-words hyphens-auto">0</td><td className="border border-black p-1 break-words hyphens-auto">0.000</td></tr>
              <tr className="font-bold bg-gray-100"><td className="border border-black p-1 text-left break-words hyphens-auto">TOTAL</td><td className="border border-black p-1 break-words hyphens-auto">18,383</td><td className="border border-black p-1 break-words hyphens-auto">36.766</td><td className="border border-black p-1 break-words hyphens-auto">12,905</td><td className="border border-black p-1 break-words hyphens-auto">25.81</td></tr>
            </tbody>
          </table>
          
          <p className="italic text-sm text-justify mb-8">
            Total installed & commissioned = 36.766 MW across 18,383 systems; total grid-synchronized (power evacuation commenced) = 25.81 MW 
            across 12,905 systems. Against the cumulative requirement for the seven packages bid of 60,100 kWp OR 10,000 installations, the bidder 
            qualifies on the number-of-installations criterion — 12,905 grid-synchronized installations (18,383 installed & commissioned) exceed the 
            requirement of 10,000 installations. The experience is for a Government DISCOM (APSPDCL) under PM-Surya Ghar rooftop (ULA/CAPEX), 
            and the certificate is issued before the last date of bid submission. Work Order (NREDCAP LOA) and this Work Completion / Experience 
            Certificate are enclosed.
          </p>
          
          <DocumentFooter />
        </A4Page>

        {/* Page 7: Declaration / Undertaking */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-10</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-6">DECLARATION / UNDERTAKING</h2>
          
          <p className="mb-4">We, ROTOMAG ENERTEC LIMITED, do hereby solemnly undertake and declare the following:</p>
          <p className="mb-4 text-justify">1. No Business Banning: CSPDCL, any Central/State Government Department, PSU, other government entity or local body has not banned or blacklisted business with us as on the date of tender submission.</p>
          <p className="mb-4 text-justify">2. No Contract Termination: None of the work awarded to us has been rescinded or terminated by CSPDCL, any Central/State Government Department, PSU, other government entity or local body during the last three (3) years due to our non-performance.</p>
          <p className="mb-4 text-justify">3. No Bankruptcy/Insolvency: We have not suffered bankruptcy or insolvency during the last five (5) years.</p>
          <p className="mb-8 text-justify">4. No Severe Penalties/Liquidated Damages: During the last five (5) years, we have not paid liquidated damages of 10% (or more) of the contract value in any contract due to delay, nor incurred a penalty of 10% (or more) of the contract value due to any other reason.</p>
          
          <DocumentFooter />
        </A4Page>
        
        {/* Page 9: Technical Details */}
        <A4Page>
          <div className="text-right font-bold underline mb-4">FORMAT-12</div>
          <h2 className="text-center font-bold text-green-600 text-lg mb-6">TECHNICAL DETAILS OF THE PROPOSED COMPONENTS</h2>
          
          <table className="w-full border-collapse border border-black mb-6 table-fixed text-[11px] leading-tight break-words">
            <thead>
              <tr className="bg-green-700 text-white text-left">
                <th className="border border-black p-1 break-words hyphens-auto">Sl.</th>
                <th className="border border-black p-1 break-words hyphens-auto">Item</th>
                <th className="border border-black p-1 break-words hyphens-auto">Make proposed by Bidder</th>
                <th className="border border-black p-1 break-words hyphens-auto">Technical Compliance as per RfS</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-black p-1 break-words hyphens-auto">1</td><td className="border border-black p-1 break-words hyphens-auto">Solar PV Module</td><td className="border border-black p-1 break-words hyphens-auto">Premier / Novasys / Alpex / Cosmic</td><td className="border border-black p-1 break-words hyphens-auto">IEC 61215/IS 14286; IEC 61730-1,2 (DCR, ALMM List-I; cells List-II) — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">2</td><td className="border border-black p-1 break-words hyphens-auto">Module Mounting Structure</td><td className="border border-black p-1 break-words hyphens-auto">Varyaa / RBP</td><td className="border border-black p-1 break-words hyphens-auto">Hot-dip Galvanized MS (IS 2062 & IS 4759) — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">3</td><td className="border border-black p-1 break-words hyphens-auto">Junction Box</td><td className="border border-black p-1 break-words hyphens-auto">RBP / Statcon</td><td className="border border-black p-1 break-words hyphens-auto">IP 65 & IEC 62208 — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">4</td><td className="border border-black p-1 break-words hyphens-auto">DC Distribution Box (DCDB)</td><td className="border border-black p-1 break-words hyphens-auto">RBP / Statcon</td><td className="border border-black p-1 break-words hyphens-auto">IP 65 — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">5</td><td className="border border-black p-1 break-words hyphens-auto">AC Distribution Box (ACDB)</td><td className="border border-black p-1 break-words hyphens-auto">RBP / Statcon</td><td className="border border-black p-1 break-words hyphens-auto">IEC/IS 60947 Part I,II,III; IP 65/54 — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">6</td><td className="border border-black p-1 break-words hyphens-auto">PCU / Inverter</td><td className="border border-black p-1 break-words hyphens-auto">Statcon</td><td className="border border-black p-1 break-words hyphens-auto">IEC 61683/IS 61683; IEC 60068-2; QCO 30.08.2017 — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">7</td><td className="border border-black p-1 break-words hyphens-auto">Cable</td><td className="border border-black p-1 break-words hyphens-auto">KEI / Polycab or Equivalent</td><td className="border border-black p-1 break-words hyphens-auto">IEC 60227/IS 694; IEC 60502/IS 1554 — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">8</td><td className="border border-black p-1 break-words hyphens-auto">Net / Smart Meter</td><td className="border border-black p-1 break-words hyphens-auto">By CSPDCL</td><td className="border border-black p-1 break-words hyphens-auto">IS 16444 — Yes</td></tr>
              <tr><td className="border border-black p-1 break-words hyphens-auto">9</td><td className="border border-black p-1 break-words hyphens-auto">Civil Works</td><td className="border border-black p-1 break-words hyphens-auto">RBP</td><td className="border border-black p-1 break-words hyphens-auto">Relevant IS — Yes</td></tr>
            </tbody>
          </table>
          
          <p className="font-bold mt-8 mb-8">STAMP & SIGNATURE OF AUTHORIZED SIGNATORY</p>
          <DocumentFooter />
        </A4Page>

        
      </div>
    </div>
  );
}
