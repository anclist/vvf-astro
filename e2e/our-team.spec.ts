import { expect, test } from '@playwright/test'
import { firstBoardMember, firstStaffMember } from './fixtures'

test('team list renders and a board member has a working detail page', async ({ page }) => {
  const board = firstBoardMember()

  await page.goto('/our-team')
  await expect(page.getByRole('heading', { level: 1, name: 'Our Team' })).toBeVisible()
  await expect(page.getByText(board.name).first()).toBeVisible()

  await page.goto(`/our-team/${board.slug}`)
  await expect(page.getByRole('heading', { level: 1, name: board.name })).toBeVisible()
})

// Only board/leader tiers get a detail route (src/lib/content/index.ts,
// getTeamMemberBySlug) — staff cards render but never link to a detail page.
test('a staff member has no detail route', async ({ page }) => {
  const staff = firstStaffMember()

  const response = await page.request.get(`/our-team/${staff.slug}`)
  expect(response.status()).toBe(404)
})
