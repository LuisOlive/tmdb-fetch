export interface DiscoveredCompany {
  id: number
  name: string
  logo_path: string
  origin_country: string
}

export default interface Company extends DiscoveredCompany {
  description: string
  headquarters: string
  homepage: string
  id: number
  logo_path: string
  name: string
  origin_country: string
  parent_company?: Company
}
