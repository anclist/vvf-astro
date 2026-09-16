// Pure, unit-testable state transitions for DonationAmountWidget's
// preset/custom-amount exclusivity (component-library/spec.md: "Custom
// amount overrides preset selection").
export interface AmountState {
  activePreset: number | null
  customValue: string
}

export function selectPreset(state: AmountState, preset: number): AmountState {
  return { activePreset: preset, customValue: '' }
}

export function setCustomValue(state: AmountState, value: string): AmountState {
  const trimmed = value.trim()
  return { activePreset: trimmed === '' ? state.activePreset : null, customValue: value }
}
