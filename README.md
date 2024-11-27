
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
npm install - Instalação de todas as dependências do arquivo package.json
```

## Rodando os testes

```bash
"npx playwright test" - Executa todos os testes para todos o navegadores configurados no arquivo playwright.config.ts
"npx playwright test --ui" - Executa os testes no modo gráfico para debug onde você poderá acompanhar com interface gráfica.
"npx playwright test --project=chromium" - Executa todos os testes somente no chromium
```
## Rodando com o Docker
```
"docker build -t playwright-demoblazer" - Criando a imagem docker conforme o arquivo Dockerfile
"docker compose up" - Inicializa o contêiner para executar os testes


```
![image](https://github.com/user-attachments/assets/63f2f8fa-d848-42c3-8221-44bdddd50544)

![image](https://github.com/user-attachments/assets/b933c24c-3bc4-4ea5-a49a-9a03fa6e8b4f)



## Reports do Allure

Comando para gerar reports:

"allure serve allure-results" ou também "allure open ./allure-report"

![image](https://github.com/user-attachments/assets/6df64e8e-d5e5-42da-9d0d-b124ab7a8437)

![image](https://github.com/user-attachments/assets/558de6e7-c6d0-4807-8ddf-e5c3d2a5516f)

![image](https://github.com/user-attachments/assets/16fe0ec4-1332-4ab6-bf5f-f6b45f289df4)

