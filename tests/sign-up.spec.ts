import { test, expect } from '@playwright/test';
import assert from 'assert';
import {MenuNavigationPage} from '../tests/page-objects/MenuNavigationPage'

let menuNav : MenuNavigationPage
let dialogMessage : string = '';


test.beforeEach(async({page}) => {
  menuNav = new MenuNavigationPage(page)
  await menuNav.openPage()
  await menuNav.linkSignIn()
})

test.describe("Sign up - invalid scenarios", () =>{

  test('Validate empty fields', async ({ page }) => {
    
    page.on('dialog', (dialog) => {
      dialogMessage = dialog.message(); 
      dialog.accept(); 
    });
   
    await menuNav.clickButtonSignUp();
    assert.strictEqual(dialogMessage, 'Please fill out Username and Password.');

  });

  test('Validate empty Username field', async ({page}) => {
    await menuNav.UsernameFilled();
    
    page.on('dialog', (dialog) => {
      dialogMessage = dialog.message(); 
      dialog.accept(); 
    });
   
    await menuNav.clickButtonSignUp();
    assert.strictEqual(dialogMessage, 'Please fill out Username and Password.');
    console.log('Mensagem do dialog capturada:', dialogMessage);

  })

  test('Validate empty Password field', async ({page}) => {
    await menuNav.PasswordFilled()
    
    page.on('dialog', (dialog) => {
      dialogMessage = dialog.message(); 
      dialog.accept(); 
    });
    
    await menuNav.clickButtonSignUp()
    assert.strictEqual(dialogMessage, 'Please fill out Username and Password.');
    console.log('Mensagem do dialog capturada:', dialogMessage);
  
  })
  
  test('Validate already registered username', async ({page}) => {
    await menuNav.signUpRepeatedUser()
  
    page.on('dialog', (dialog) => {
      dialogMessage = dialog.message(); 
      dialog.accept(); 
    });
    
    await menuNav.clickButtonSignUp()
    assert.strictEqual(dialogMessage, 'This user already exist.');
    console.log('Mensagem do dialog capturada:', dialogMessage);
  })
})

test.describe("Sign Up - success", () => {
  test('Validate success sign up', async({page}) => {
    await menuNav.signUpCreateSuccess()
    
    page.on('dialog', async(dialog) => {
      dialogMessage = dialog.message(); 
      dialog.accept();
    
    });
    
  await menuNav.clickButtonSignUp()
   assert.strictEqual(dialogMessage, 'Sign up successful.');
   console.log('Mensagem do alert capturada:', dialogMessage);
  })
})