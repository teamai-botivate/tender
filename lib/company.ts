// Fixed bidder (company) details used across every generated tender document.
// Tender-specific values come from Tender.bid instead.

export const COMPANY = {
  name: 'ROTOMAG ENERTEC LIMITED',
  formerName: 'Rotomag Motors and Controls Pvt. Ltd.',
  cin: 'U34100GJ1993PLC020063',
  address: '2102/3 & 4, GIDC Estate, Vitthal Udyognagar, Anand – 388 121, Gujarat, India',
  phone: '9227110023/24',
  email: 'mail@rotomag.com',
  website: 'www.rotomag.com',
  yearOfIncorporation: '1993',
  pan: 'AAACR9061K',
  gst: '______________ (to be filled)',
  signatory: 'Mr. Anirudha Singh',
  signatoryDesignation: 'Authorised Signatory',
  managingDirector: 'Umesh Balani, Managing Director — DIN 00273387',
}

export const CA_FIRM = {
  name: 'Momin & Co., Chartered Accountants',
  frn: '134110W',
  partner: 'CA Hasan Bariawala, Partner',
  membershipNo: '135345',
  udinFormat6: '26135345MAGIVP6707',
  udinFormat9: '26135345IEOJBW2889',
}

export const FINANCIAL_YEARS = ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25', '2025-26']

// Rs. Crore, one value per FINANCIAL_YEARS entry
export const FINANCIAL_DATA: { label: string; values: string[] }[] = [
  { label: 'Total Assets', values: ['421.90', '457.04', '416.57', '564.71', '1048.46', '1440.50'] },
  { label: 'Current Assets', values: ['377.60', '406.99', '371.31', '473.43', '970.03', '1229.44'] },
  { label: 'Total External Liabilities', values: ['210.18', '226.94', '172.50', '268.81', '565.54', '777.70'] },
  { label: 'Current Liabilities (incl. provisions)', values: ['156.75', '173.51', '118.22', '212.90', '526.65', '691.04'] },
  { label: 'Annual Profit Before Taxes', values: ['54.72', '36.73', '24.19', '70.18', '216.22', '207.34'] },
  { label: 'Annual Profit After Taxes', values: ['39.07', '24.52', '13.98', '51.83', '156.38', '147.88'] },
  { label: 'Net Worth [= 1 - 3]', values: ['211.72', '230.10', '244.07', '295.90', '482.92', '662.80'] },
  { label: 'Working Capital [= 2 - 4]', values: ['220.85', '233.48', '253.09', '260.53', '443.38', '538.40'] },
  { label: 'Return on Equity', values: ['18.75%', '10.66%', '5.73%', '17.51%', '32.38%', '22.31%'] },
  { label: 'Annual Turnover', values: ['425.56', '451.93', '501.55', '514.73', '1088.36', '1213.10'] },
]

export const MAAT_CR = '938.73'

export const EXPERIENCE = {
  summary:
    'Per Experience Certificate dated 30.06.2026 issued by the Chief General Manager (RAC & IPC), Southern Power Distribution ' +
    'Company of A.P. Ltd. (APSPDCL) — a State Government DISCOM — for installation & commissioning of 2 kWp grid-connected ' +
    'rooftop solar plants for SC/ST consumers under PM-Surya Ghar (ULA/CAPEX), Tender No. NREDCAP/PMSG/SC&ST/07/2025 dated ' +
    '07.07.2025 (LOA NREDCAP/PMSG/SC&ST/07/2025/1123 dt 13.10.2025 & /1146 dt 14.10.2025):',
  rows: [
    { division: 'Kadapa', sets: '973', mw: '1.946', gridSets: '574', gridMw: '1.148' },
    { division: 'Proddatur', sets: '1,848', mw: '3.696', gridSets: '1,922', gridMw: '3.844' },
    { division: 'Mydukur', sets: '3,208', mw: '6.416', gridSets: '3,118', gridMw: '6.236' },
    { division: 'Kalyandurg', sets: '2,146', mw: '4.292', gridSets: '1,107', gridMw: '2.214' },
    { division: 'Gooty', sets: '1,525', mw: '3.050', gridSets: '626', gridMw: '1.252' },
    { division: 'Adoni', sets: '3,036', mw: '6.072', gridSets: '1,561', gridMw: '3.122' },
    { division: 'Anantapur', sets: '1,168', mw: '2.336', gridSets: '933', gridMw: '1.866' },
    { division: 'Hindupur', sets: '2,790', mw: '5.580', gridSets: '2,660', gridMw: '5.320' },
    { division: 'Dhone', sets: '1,085', mw: '2.170', gridSets: '404', gridMw: '0.808' },
    { division: 'Atmakur', sets: '604', mw: '1.208', gridSets: '0', gridMw: '0.000' },
  ],
  total: { sets: '18,383', mw: '36.766', gridSets: '12,905', gridMw: '25.81' },
}

export const PROPOSED_COMPONENTS = [
  { item: 'Solar PV Module', make: 'Premier / Novasys / Alpex / Cosmic', compliance: 'IEC 61215/IS 14286; IEC 61730-1,2 (DCR, ALMM List-I; cells List-II) — Yes' },
  { item: 'Module Mounting Structure', make: 'Varyaa / RBP', compliance: 'Hot-dip Galvanized MS (IS 2062 & IS 4759) — Yes' },
  { item: 'Junction Box', make: 'RBP / Statcon', compliance: 'IP 65 & IEC 62208 — Yes' },
  { item: 'DC Distribution Box (DCDB)', make: 'RBP / Statcon', compliance: 'IP 65 — Yes' },
  { item: 'AC Distribution Box (ACDB)', make: 'RBP / Statcon', compliance: 'IEC/IS 60947 Part I,II,III; IP 65/54 — Yes' },
  { item: 'PCU / Inverter', make: 'Statcon', compliance: 'IEC 61683/IS 61683; IEC 60068-2; QCO 30.08.2017 — Yes' },
  { item: 'Cable', make: 'KEI / Polycab or Equivalent', compliance: 'IEC 60227/IS 694; IEC 60502/IS 1554 — Yes' },
  { item: 'Net / Smart Meter', make: 'By {authority}', compliance: 'IS 16444 — Yes' },
  { item: 'Civil Works', make: 'RBP', compliance: 'Relevant IS — Yes' },
]
