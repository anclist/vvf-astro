import { expect, test } from '@playwright/test'
import { firstEvent } from './fixtures'

test('events list renders events and links to a detail page that renders', async ({ page }) => {
  const event = firstEvent()

  await page.goto('/events')
  await expect(page.getByRole('heading', { level: 1, name: 'Events & Campaigns' })).toBeVisible()

  await page.goto(`/events/${event.slug}`)
  await expect(page.getByRole('heading', { level: 1, name: event.title })).toBeVisible()
})
