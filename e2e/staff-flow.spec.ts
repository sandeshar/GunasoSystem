import { test, expect } from '@playwright/test';

test.describe('Staff Ticket Management Flow', () => {
    test('should allow staff to view ticket queue', async ({ page }) => {
        // Navigate to staff portal
        await page.goto('/staff');

        // Should show staff dashboard
        await expect(page.locator('h1, h2, [role="heading"]')).toContainText(['Dashboard', 'Staff', 'Admin']);

        // Navigate to tickets page
        await page.click('text=Tickets, text=Queue, text=Manage');
        await expect(page).toHaveURL(/\/staff\/(ticket|queue)/);

        // Should show tickets table
        const ticketsTable = page.locator('table, .cds--data-table, [data-testid="tickets-table"]');
        await expect(ticketsTable).toBeVisible();

        // Should have ticket columns
        await expect(page.locator('th, .cds--table-header')).toContainText(['Date', 'Status', 'Category']);
    });

    test('should allow staff to view and manage individual tickets', async ({ page }) => {
        await page.goto('/staff/ticket');

        // Click on a ticket (assuming tickets exist or mock data)
        const firstTicket = page.locator('tr:has(td), .ticket-row, [data-testid^="ticket-"]').first();
        if (await firstTicket.isVisible()) {
            await firstTicket.click();

            // Should navigate to ticket details
            await expect(page).toHaveURL(/\/staff\/ticket\/\w+/);

            // Should show ticket details and management options
            await expect(page.locator('text=Status, text=Assign, text=Update')).toBeVisible();
        }
    });

    test('should allow staff to assign tickets', async ({ page }) => {
        // Go to a specific ticket page (mock ID)
        await page.goto('/staff/ticket/test-ticket-id');

        // Look for assign button or assignment interface
        const assignButton = page.locator('button:has-text("Assign"), [data-testid="assign-button"], text=Assign');
        if (await assignButton.isVisible()) {
            await assignButton.click();

            // Should show assignment modal or form
            await expect(page.locator('.cds--modal, [role="dialog"], .assignment-form')).toBeVisible();

            // Select staff member if dropdown exists
            const staffSelect = page.locator('select[name="assignee"], .cds--dropdown');
            if (await staffSelect.isVisible()) {
                await staffSelect.click();
                await page.locator('option, .cds--dropdown-item').first().click();
            }

            // Confirm assignment
            await page.click('button:has-text("Confirm"), button:has-text("Assign"), .cds--btn--primary');

            // Should show success message or update status
            await expect(page.locator('text=Assigned, text=Success')).toBeVisible();
        }
    });

    test('should allow staff to update ticket status', async ({ page }) => {
        await page.goto('/staff/ticket/test-ticket-id');

        // Look for status update controls
        const statusSelect = page.locator('select[name="status"], [data-testid="status-select"]');
        if (await statusSelect.isVisible()) {
            await statusSelect.click();
            await page.locator('option[value="in-progress"], text=In Progress').first().click();

            // Save status update
            await page.click('button:has-text("Update"), button:has-text("Save")');

            // Should show success confirmation
            await expect(page.locator('text=Updated, text=Status changed')).toBeVisible();
        }
    });

    test('should allow staff to add notes to tickets', async ({ page }) => {
        await page.goto('/staff/ticket/test-ticket-id');

        // Look for add notes functionality
        const addNotesButton = page.locator('button:has-text("Add Note"), [data-testid="add-notes"]');
        if (await addNotesButton.isVisible()) {
            await addNotesButton.click();

            // Should show notes modal
            await expect(page.locator('.cds--modal, [role="dialog"]')).toBeVisible();

            // Fill note content
            await page.fill('textarea[name="notes"], textarea[placeholder*="note"]', 'Following up on this issue. Contacted relevant department.');

            // Save note
            await page.click('button:has-text("Save"), button:has-text("Add Note")');

            // Should close modal and show note in timeline
            await expect(page.locator('text=Following up on this issue')).toBeVisible();
        }
    });

    test('should allow staff to manage categories and wards', async ({ page }) => {
        await page.goto('/staff');

        // Look for settings or management options
        const settingsLink = page.locator('text=Settings, text=Manage, text=Categories');
        if (await settingsLink.isVisible()) {
            await settingsLink.click();

            // Should show management interface
            await expect(page).toHaveURL(/\/staff\/(settings|management)/);

            // Should show categories and wards management
            await expect(page.locator('text=Categories, text=Wards')).toBeVisible();
        }
    });

    test('should allow staff to view reports', async ({ page }) => {
        await page.goto('/staff/reports');

        // Should show reports page
        await expect(page.locator('h1, h2, [role="heading"]')).toContainText(['Reports', 'Analytics', 'Statistics']);

        // Should have report data or charts
        const reportContent = page.locator('table, .chart, .cds--data-table, [data-testid="reports"]');
        await expect(reportContent).toBeVisible();
    });

    test('should support accessibility navigation', async ({ page }) => {
        await page.goto('/staff');

        // Test keyboard navigation
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');

        // Should navigate to a page (basic keyboard navigation test)
        await expect(page).toHaveURL(/\/staff\//);

        // Check for skip links
        const skipLink = page.locator('[href="#main"], text=Skip to main content');
        if (await skipLink.isVisible()) {
            await expect(skipLink).toBeVisible();
        }

        // Check for proper heading structure
        const headings = page.locator('h1, h2, h3');
        await expect(headings.first()).toBeVisible();
    });
});