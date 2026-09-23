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
}

export type MasterKey = 'states' | 'departments' | 'firms' | 'tenderTypes'
export type Masters = Record<MasterKey, string[]>

export interface StageDefinition {
  label: Stage
  path: string
  short: string
  iconName: string
}
