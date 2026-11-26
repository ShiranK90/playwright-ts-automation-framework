import { test, expect } from '@playwright/test';

test.describe('Inventory', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
  });

  test('displays six products', async ({ page }) => {
    await expect(page.getByTestId('inventory-item')).toHaveCount(6);
  });

  test('adding a product updates the cart badge and button', async ({ page }) => {
    const firstProduct = page.getByTestId('inventory-item').first();
    const addToCartButton = firstProduct.getByTestId('add-to-cart-button');
    const cartBadge = page.getByTestId('shopping_cart_badge');  
  });

    test('removing a product updates the cart badge and button', async ({ page }) => {
    const firstProduct = page.getByTestId('inventory-item').first();
    const addToCartButton = firstProduct.getByTestId('add-to-cart-button');
    const removeFromCartButton = firstProduct.getByTestId('remove-from-cart-button');
    const cartBadge = page.getByTestId('shopping_cart_badge');
      });
});