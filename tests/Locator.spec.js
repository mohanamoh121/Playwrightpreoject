import { test,expect } from '@playwright/test'
test('Validating Login Functionality', async ({ page }) => {
   page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    page.locator('//input[@name="username"]').fill('Admin')
   page.locator('//input[@name="password"]').fill('admin123')
     page.locator('//button[@type="submit"]').click();
})