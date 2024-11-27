import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MenuNavigationPage } from './MenuNavigationPage'; 

export class CategoryProductsPage{
    private menuNav: MenuNavigationPage;
    readonly page: Page
    
    linkProduct: Locator
    nameProduct: Locator
    bntAddCart: Locator
    linkCart: Locator
    btnPlaceOrder: Locator
    fieldCheckoutName: Locator
    fieldCheckoutCountry: Locator
    fieldCheckoutCity: Locator
    fieldCheckoutCard: Locator
    fieldCheckoutMonth: Locator
    fieldCheckoutYear: Locator
    btnPurchase: Locator

    constructor(page: Page){
        this.page = page
        this.linkProduct = page.getByRole('link', { name: 'Nexus 6' })
        this.nameProduct = page.locator('h2')
        this.bntAddCart = page.getByRole('link', { name: 'Add to cart'})
        this.linkCart = page.locator('#cartur')
        this.btnPlaceOrder = page.getByRole('button', { name: 'Place Order'})
        this.fieldCheckoutName = page.locator('#name')
        this.fieldCheckoutCountry = page.locator('#country')
        this.fieldCheckoutCity = page.locator('#city')
        this.fieldCheckoutCard = page.locator('#card')
        this.fieldCheckoutMonth = page.locator('#month')
        this.fieldCheckoutYear = page.locator('#year')
        this.btnPurchase = page.getByRole('button', { name: 'Purchase'})
        this.menuNav = new MenuNavigationPage(page)
       
    }
    
    nameGenerate = faker.person.fullName()
    countryGenerate = faker.location.country()
    cityGenerate = faker.location.city()
    creditCardGenerate = faker.finance.creditCardNumber()
    monthGenerate = faker.date.month()
    yearGenerate = faker.number.int({ min: 2027, max: 2039 })


    async addProductCart(){
        await this.linkProduct.click()
        await this.bntAddCart.click()
        await this.menuNav.ElementWaitForTimeout(2000)
        await this.page.on('dialog', (dialog) => {
            dialog.accept() 
        })
        await this.linkCart.click()
    }

    async FinishPurchase(){
        await this.menuNav.ElementWaitForTimeout(2000)
        await this.btnPlaceOrder.click()
        await this.fieldCheckoutName.fill(this.nameGenerate)
        await this.fieldCheckoutCountry.fill(this.countryGenerate)
        await this.fieldCheckoutCity.fill(this.cityGenerate)
        await this.fieldCheckoutCard.fill(this.creditCardGenerate)
        await this.fieldCheckoutMonth.fill(this.monthGenerate)
        await this.fieldCheckoutYear.fill(String(this.yearGenerate))
        await this.btnPurchase.click()
    }

}

module.exports = { CategoryProductsPage }