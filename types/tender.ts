export type Stage =
  | 'Eligibility Check'
  | 'Sample Details'
  | 'EMD Ready'
  | 'Document Ready'
  | 'Document Upload in portal'
  | 'Submit in website'
  | 'Technical Open Check'
  | 'Financial Open Check'

export type Status = 'In Progress' | 'Ready' | 'Submitted' | 'Completed' | 'At Risk'

export interface Tender {
  id: string
  title: string
  authority: string
  department: string
  state: string
  value: string
  stage: Stage
  status: Status
  due: string
  owner: string
  remarks?: string
  createdAt?: string
  bid?: TenderBidDetails
}

export interface TenderPackage {
  code: string
  region: string
  rfx: string
  emdLakh: string
}

export interface BeneficiaryBank {
  accountHolder: string
  bankName: string
  branch: string
  accountNo: string
  ifsc: string
  accountType: string
}

// Tender-specific values that get printed into the generated bid documents.
// Bidder (company) details are fixed and live in lib/company.ts.
export interface TenderBidDetails {
  rfsNo: string
  rfsDate: string
  corrigendum: string
  workName: string
  shortWorkName: string
  authorityFullName: string
  addresseeDesignation: string
  authorityAddress: string
  bidDeadlineTime: string
  tenderFeePerPackage: string
  bidValidityDays: string
  financialRequirementCr: string
  technicalRequirement: string
  jurisdiction: string
  signingDate: string
  place: string
  packages: TenderPackage[]
  beneficiaryBank: BeneficiaryBank
}

export type MasterKey = 'states' | 'departments' | 'firms' | 'tenderTypes'
export type Masters = Record<MasterKey, string[]>

export interface StageDefinition {
  label: Stage
  path: string
  short: string
  iconName: string
}
