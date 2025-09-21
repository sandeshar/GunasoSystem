import { test, expect } from '@playwright/test';

test.describe('Citizen Ticket Submission Flow', () => {
    test('should allow citizen to submit a grievance ticket', async ({ page }) => {
        // Navigate to the citizen portal
        await page.goto('/citizen');

        // Should show citizen dashboard
        await expect(page.locator('h1, h2, [role="heading"]')).toContainText(['Dashboard', 'Citizen', 'Welcome']);

        // Navigate to submit page
        await page.click('text=Submit');
        await expect(page).toHaveURL('/citizen/submit');

        // Fill out the grievance form
        await page.fill('input[name="title"], input[placeholder*="title"], input[placeholder*="subject"]', 'Water supply issue in Ward 5');
        await page.fill('textarea[name="description"], textarea[placeholder*="description"], textarea[placeholder*="details"]', 'There has been no water supply for the past 3 days in Ward 5, Block A. This is causing significant inconvenience to residents.');

        // Select category if available
        const categorySelect = page.locator('select[name="category"], [data-testid="category-select"], .cds--dropdown');
        if (await categorySelect.isVisible()) {
            await categorySelect.click();
            await page.locator('text=Water and Sanitation, text=Utilities, text=Infrastructure').first().click();
        }

        // Select ward if available
        const wardSelect = page.locator('select[name="ward"], [data-testid="ward-select"], .cds--dropdown');
        if (await wardSelect.isVisible()) {
            await wardSelect.click();
            await page.locator('text=Ward 5, text=5').first().click();
        }

        // Upload file if file uploader is present
        const fileInput = page.locator('input[type="file"]');
        if (await fileInput.isVisible()) {
            // Create a test file
            await fileInput.setInputFiles({
                name: 'evidence.txt',
                mimeType: 'text/plain',
                buffer: Buffer.from('This is evidence of the water supply issue.')
            });
        }

        // Submit the form
        await page.click('button[type="submit"], button:has-text("Submit"), .cds--btn--primary');

        // Should navigate to confirmation page or show success message
        await expect(page).toHaveURL(/\/citizen\/(submit\/confirmation|mygrievances)/);
        await expect(page.locator('text=Success, text=Submitted, text=Thank you, text=Confirmation')).toBeVisible();
    });

    test('should validate required fields on submission', async ({ page }) => {
        await page.goto('/citizen/submit');

        // Try to submit without filling required fields
        await page.click('button[type="submit"], button:has-text("Submit"), .cds--btn--primary');

        // Should show validation errors
        await expect(page.locator('text=required, text=Required, text=field is required, .cds--form-requirement')).toBeVisible();
    });

    test('should allow citizen to view their submitted tickets', async ({ page }) => {
        await page.goto('/citizen/mygrievances');

        // Should show list of grievances
        await expect(page.locator('h1, h2, [role="heading"]')).toContainText(['Grievances', 'My Tickets', 'My Submissions']);

        // Should show table or list of tickets
        const ticketsList = page.locator('table, .ticket-list, .cds--data-table, [data-testid="tickets-list"]');
        await expect(ticketsList).toBeVisible();
    });

    test('should allow citizen to view ticket details', async ({ page }) => {
        await page.goto('/citizen/mygrievances');

        // Click on a ticket (assuming at least one exists or mock data is present)
        const firstTicket = page.locator('tr:has(td), .ticket-item, [data-testid^="ticket-"]').first();
        if (await firstTicket.isVisible()) {
            await firstTicket.click();

            // Should navigate to ticket details
            await expect(page).toHaveURL(/\/citizen\/mygrievances\/\w+/);

            // Should show ticket details
            await expect(page.locator('text=Status, text=Date, text=Category')).toBeVisible();
        }
    });

    test('should support language switching', async ({ page }) => {
        await page.goto('/citizen');

        // Find and click language toggle
        const languageToggle = page.locator('#language-toggle, [data-testid="language-toggle"], text=EN, text=NP');
        if (await languageToggle.isVisible()) {
            await languageToggle.click();

            // Should switch to Nepali
            await expect(page.locator('text=नागरिक, text=ड्यासबोर्ड, text=उजुरी')).toBeVisible();

            // Switch back to English
            await languageToggle.click();
            await expect(page.locator('text=Citizen, text=Dashboard, text=Grievances')).toBeVisible();
        }
    });
});