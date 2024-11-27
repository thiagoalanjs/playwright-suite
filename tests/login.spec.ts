import { test, expect } from '@playwright/test';
import assert from 'assert';
import {MenuNavigationPage} from './page-objects/MenuNavigationPage'

let menuNav : MenuNavigationPage
let dialogMessage : string = '';

test.beforeEach(async({page}) => {
  menuNav = new MenuNavigationPage(page)
  await menuNav.openPage()
  await menuNav.linkLogin()
})
  
test.describe("Login - invalid authentication", () =>{
    test('empty username', async({page})=>{
      await menuNav.loginPasswordFilled()
     
      page.on('dialog', (dialog) => {
        dialogMessage = dialog.message()
        dialog.accept(); 
      });

      await menuNav.clickButtonLogin()
      assert.strictEqual(dialogMessage, 'Please fill out Username and Password.')
    })

    test('empty password', async({page})=>{
      await menuNav.loginUsernameFilled()
     
      page.on('dialog', (dialog) => {
        dialogMessage = dialog.message()
        dialog.accept()
      });

      await menuNav.clickButtonLogin()
      assert.strictEqual(dialogMessage, 'Please fill out Username and Password.');
    })
    
    test('invalid username', async({page})=>{
      await menuNav.loginUserNotExist()
      page.on('dialog', (dialog) => {
        dialogMessage = dialog.message(); 
        dialog.accept(); 
      });

      await menuNav.clickButtonLogin()
      assert.strictEqual(dialogMessage, 'User does not exist.')
    })

    test('invalid password', async({page})=>{
      await menuNav.invalidLogin()
      page.on('dialog', (dialog) => {
        dialogMessage = dialog.message() 
        dialog.accept()
      });

      await menuNav.clickButtonLogin()
      assert.strictEqual(dialogMessage, 'Wrong password.')
    })

  })

  test.describe("Login - Success", () =>{
    test('Login - Sucess', async({page})=>{
      await menuNav.loginSuccess()
      await menuNav.clickButtonLogin()
      await expect(menuNav.textNameuse).toHaveText('Welcome Deangelo_Goldner-Homenick@yahoo.com')
  })
})