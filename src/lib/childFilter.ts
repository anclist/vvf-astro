import { ageRangeOf, type ChildAgeRange } from './content/types'

export interface ChildFilterCriteria {
  nameQuery?: string
  ageRanges?: ChildAgeRange[]
}

export function childMatchesFilters(
  child: { displayName: string; age: number },
  criteria: ChildFilterCriteria
): boolean {
  if (criteria.ageRanges && criteria.ageRanges.length > 0) {
    if (!criteria.ageRanges.includes(ageRangeOf(child.age))) return false
  }
  if (criteria.nameQuery && criteria.nameQuery.trim() !== '') {
    if (!child.displayName.toLowerCase().includes(criteria.nameQuery.trim().toLowerCase())) return false
  }
  return true
}
