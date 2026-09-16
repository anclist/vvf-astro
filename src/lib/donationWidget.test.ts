import { describe, expect, it } from 'vitest'
import { selectPreset, setCustomValue, type AmountState } from './donationWidget'

const initial: AmountState = { activePreset: null, customValue: '' }

describe('selectPreset', () => {
  it('sets the preset and clears any custom value', () => {
    const state = selectPreset({ activePreset: null, customValue: '42' }, 100)
    expect(state).toEqual({ activePreset: 100, customValue: '' })
  })
})

describe('setCustomValue', () => {
  it('deselects the active preset when a non-blank value is entered', () => {
    const state = setCustomValue({ activePreset: 100, customValue: '' }, '75')
    expect(state).toEqual({ activePreset: null, customValue: '75' })
  })

  it('does not resurrect a preset once it has been overridden by a custom value', () => {
    const withCustom = setCustomValue({ activePreset: 100, customValue: '' }, '75')
    const cleared = setCustomValue(withCustom, '')
    expect(cleared).toEqual({ activePreset: null, customValue: '' })
  })

  it('leaves the preset untouched when clearing a value that never had a preset', () => {
    const state = setCustomValue({ activePreset: null, customValue: '75' }, '')
    expect(state).toEqual({ activePreset: null, customValue: '' })
  })

  it('keeps activePreset null when clearing an already-preset-less state', () => {
    const state = setCustomValue(initial, '')
    expect(state).toEqual({ activePreset: null, customValue: '' })
  })

  it('treats whitespace-only input as blank', () => {
    const state = setCustomValue({ activePreset: 50, customValue: '' }, '   ')
    expect(state).toEqual({ activePreset: 50, customValue: '   ' })
  })
})
