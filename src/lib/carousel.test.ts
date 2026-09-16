import { describe, expect, it } from 'vitest'
import { nextScrollLeft, prevScrollLeft } from './carousel'

describe('nextScrollLeft', () => {
  it('advances by step when far from the end', () => {
    expect(nextScrollLeft(0, 1000, 200)).toBe(200)
  })

  it('wraps to 0 when within threshold of maxScrollLeft', () => {
    expect(nextScrollLeft(995, 1000, 200, 8)).toBe(0)
  })

  it('wraps to 0 when already at maxScrollLeft', () => {
    expect(nextScrollLeft(1000, 1000, 200, 8)).toBe(0)
  })

  it('clamps to maxScrollLeft instead of overshooting', () => {
    expect(nextScrollLeft(900, 1000, 200, 8)).toBe(1000)
  })

  it('returns 0 when there is nothing to scroll', () => {
    expect(nextScrollLeft(0, 0, 200)).toBe(0)
    expect(nextScrollLeft(0, -10, 200)).toBe(0)
  })
})

describe('prevScrollLeft', () => {
  it('retreats by step when far from the start', () => {
    expect(prevScrollLeft(400, 1000, 200)).toBe(200)
  })

  it('wraps to maxScrollLeft when within threshold of the start', () => {
    expect(prevScrollLeft(5, 1000, 200, 8)).toBe(1000)
  })

  it('wraps to maxScrollLeft when already at 0', () => {
    expect(prevScrollLeft(0, 1000, 200, 8)).toBe(1000)
  })

  it('clamps to 0 instead of undershooting', () => {
    expect(prevScrollLeft(100, 1000, 200, 8)).toBe(0)
  })
})
