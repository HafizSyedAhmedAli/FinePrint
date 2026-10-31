import { expect, test } from '@playwright/test';

test('home page shows the title and the legal disclaimer', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'FinePrint' })).toBeVisible();
  await expect(page.getByText(/does not give legal advice/i)).toBeVisible();
});
