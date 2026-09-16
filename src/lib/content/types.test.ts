import { describe, expect, it } from 'vitest'
import { ageRangeOf } from './types'

describe('ageRangeOf', () => {
  it.each([
    [0, '0-2'],
    [2, '0-2'],
    [3, '3-5'],
    [5, '3-5'],
    [6, '6-8'],
    [8, '6-8'],
    [9, '9-11'],
    [11, '9-11'],
    [12, '12-14'],
    [14, '12-14'],
    [15, '15+'],
    [30, '15+'],
  ] as const)('maps age %i to range %s', (age, expected) => {
    expect(ageRangeOf(age)).toBe(expected)
  })
})
