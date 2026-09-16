// Pure, unit-testable scroll math shared by LogoCarousel/TestimonialCarousel.
// Wrapping back to the start when "next" is pressed at (or near) the end is
// the behavior component-library/spec.md requires for LogoCarousel.
export function nextScrollLeft(
  current: number,
  maxScrollLeft: number,
  step: number,
  threshold = 8
): number {
  if (maxScrollLeft <= 0) return 0
  if (current >= maxScrollLeft - threshold) return 0
  return Math.min(current + step, maxScrollLeft)
}

export function prevScrollLeft(current: number, maxScrollLeft: number, step: number, threshold = 8): number {
  if (current <= threshold) return maxScrollLeft
  return Math.max(current - step, 0)
}
