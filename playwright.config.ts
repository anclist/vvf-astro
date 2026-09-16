import { defineConfig, devices } from '@playwright/test'

const baseURL = 'http://localhost:4321'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  use: { baseURL },
  webServer: {
    command: 'npm run preview',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [{ name: 'chromium', use: devices['Desktop Chrome'] }],
})
