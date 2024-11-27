import { test, expect } from '@playwright/test';
import { MenuNavigationPage } from './page-objects/MenuNavigationPage'
import { CategoryProductsPage } from './page-objects/CategoryProductsPage'

let menuNav : MenuNavigationPage
let product : CategoryProductsPage

test.beforeEach(async({page}) => {
    menuNav = new MenuNavigationPage(page)
    product = new CategoryProductsPage(page)
    await menuNav.openPage()
})

test.describe("Check validation order", () =>{
    test('Finish a purchase', async({page})=>{
        await product.addProductCart()
        await product.FinishPurchase()
   
        const successText = page.locator('.sweet-alert').locator('h2')
        await expect(successText).toHaveText("Thank you for your purchase!")
        const purchaseData = await page.locator('.lead').textContent() || ''
        const dataText = purchaseData.split('\n')
        console.log("Dados da compra: ", dataText)
    })
})