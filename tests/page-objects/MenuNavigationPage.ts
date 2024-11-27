import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';


export class MenuNavigationPage {

    readonly page: Page
    linkElementSignUp: Locator
    linkElementlogin: Locator
    btnSignIn: Locator
    fieldSignUpUsername: Locator
    fieldSignUpPassword: Locator
    fieldLoginUsername: Locator
    fieldLoginPassword: Locator
    btnLogin: Locator
    textNameuse: Locator

    constructor(page: Page){
        this.page = page;
        this.linkElementSignUp = page.getByRole('link', { name: 'Sign Up' })
        this.linkElementlogin = page.getByRole('link', { name: 'Log in' })
        this.btnSignIn = page.getByRole('button', { name: 'Sign up' }) 
        this.fieldSignUpUsername = page.locator("#sign-username")
        this.fieldSignUpPassword = page.locator("#sign-password")
        this.fieldLoginUsername = page.locator("#loginusername")
        this.fieldLoginPassword = page.locator("#loginpassword")
        this.btnLogin = page.getByRole('button', { name: 'Log in' }) 
        this.textNameuse = page.locator('#nameofuser')
    }

    async ElementWaitForTimeout(seconds) {
        await this.page.waitForTimeout(seconds)
    }
    
    async openPage(){
        await this.page.goto('/');
    }

    async linkSignIn(){
        await this.linkElementSignUp.click()
    }

    async linkLogin(){
        await this.linkElementlogin.click()
    }

    async clickButtonSignUp(){
        await this.btnSignIn.click()
        await this.ElementWaitForTimeout(2000)
    }

    async clickButtonLogin(){
        await this.btnLogin.click()
        await this.ElementWaitForTimeout(2000)
    }

    async UsernameFilled(){
        await this.fieldSignUpUsername.fill("test@email.com")
    }
    
    async PasswordFilled(){
        await this.fieldSignUpPassword.fill("teste123qweasd")
    }

    async signUpCreateSuccess(){
        const email = faker.internet.email()
        console.log("Email gerado: ", email)
        await this.fieldSignUpUsername.fill(email)
        await this.fieldSignUpPassword.fill("teste123qweasd")
    }

    async signUpRepeatedUser(){
        await this.fieldSignUpUsername.fill("teste@teste.com.br")
        await this.fieldSignUpPassword.fill("teste123qweasd")
    }

    async loginUsernameFilled(){
        await this.fieldLoginUsername.fill('test@mail.com')
    }

    async loginPasswordFilled(){
        await this.fieldLoginPassword.fill("teste123QWE")
    }

    async loginSuccess(){
        await this.fieldLoginUsername.fill('Deangelo_Goldner-Homenick@yahoo.com')
        await this.fieldLoginPassword.fill("teste123qweasd")
    }

    async loginUserNotExist(){
        const email = faker.internet.email()
        await this.fieldLoginUsername.fill(email)
        await this.fieldLoginPassword.fill('teste123qweasd')
    }

    async invalidLogin(){
        await this.fieldLoginUsername.fill('teste@teste.com.br')
        await this.fieldLoginPassword.fill("teste123qweasd")
    }

}

module.exports = { MenuNavigationPage }