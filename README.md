
![image](https://github.com/user-attachments/assets/5818d584-299f-48b8-81a8-c578bc0bf9ac)



# Automação de testes com Playwright e Typescript

Esse projeto é um exemplo de teste automatizado com o framework Playwright escrito em Typescript e integrado com reports do Allure.

Site usado para os testes - https://www.demoblaze.com/

## Instalação & Configuração


Playwright - https://playwright.dev/docs/intro

Docker - https://docs.docker.com/engine/install/

Allure Reports - https://allurereport.org/

## Configurando o comando 
```bash
Para MAC/Linux   System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");

Para Windows   System.setProperty("webdriver.chrome.driver", "C://<PATH DO CHROMEDRIVER NA SUA MÁQUINA>");
```

## Comando mvn

```bash
"mvn clean install" - Instalação das dependências
"mvn clean test" -  Roda todos os testes que estão no pacote Tests
"mvn clean test -DfailIfNoTests=false  -Dtest=Tests.loginUserTest" - Roda somente um arquivo nesse exemplo 'loginUserTest'
```

![image](https://github.com/user-attachments/assets/0f7fc1f2-d081-4b90-af0b-574a2341b2d0)

## Reports do Allure

Comando para gerar reports:

"allure serve allure-results" ou também "allure open ./allure-report"

![image](https://github.com/user-attachments/assets/6df64e8e-d5e5-42da-9d0d-b124ab7a8437)

![image](https://github.com/user-attachments/assets/558de6e7-c6d0-4807-8ddf-e5c3d2a5516f)

![image](https://github.com/user-attachments/assets/16fe0ec4-1332-4ab6-bf5f-f6b45f289df4)

