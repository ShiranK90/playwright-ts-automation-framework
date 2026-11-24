
import { test, expect } from '@playwright/test';

test.describe('Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('standard user can log in and see the inventory', async ({ page }) => {
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByTestId('inventory-container')).toBeVisible();
  });

  // Test data for invalid login scenarios
  const invalidLogins = [
    {
      name: 'locked out user',
      username: 'locked_out_user',
      password: 'secret_sauce',
      error: 'Epic sadface: Sorry, this user has been locked out.',
    },
    {
      name: 'wrong password',
      username: 'standard_user',
      password: 'wrong_password',
      error: 'Epic sadface: Username and password do not match any user in this service',
    },
    {
      name: 'missing username',
      username: '',
      password: '',
      error: 'Epic sadface: Username is required',
    },
  ];

  // Execute a separate test for each invalid login scenario
  for (const { name, username, password, error } of invalidLogins) {

    test(`shows an error for ${name}`, async ({ page }) => {

      await page.getByTestId('username').fill(username);
      await page.getByTestId('password').fill(password);
      await page.getByTestId('login-button').click();

      await expect(page.getByTestId('error')).toHaveText(error);

      // Verify that the user does not reach the inventory page
      await expect(page).not.toHaveURL(/inventory\.html/);

    });

  }

});
