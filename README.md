# Sistema Escolar — Cadastro de Alunos e Professores

Uma aplicação web que simula um sistema escolar, permitindo o cadastro, listagem e exclusão de alunos e professores. O projeto foi desenvolvido utilizando React + Vite, consumindo uma API simulada através do JSON Server.

# Objetivo

O objetivo deste projeto é criar um CRUD de professores e integrá-lo à aplicação web desenvolvida pelo professor [Jeferson Queiroga](https://github.com/JefersonQueiroga), tendo como referência o CRUD de alunos.

O projeto serve como prática dos conceitos de desenvolvimento de aplicações web e da integração entre uma interface React e uma API.

# Imagens

## Página Inicial

<img width="1912" height="1077" alt="Captura de tela 2026-09-23 095804" src="https://github.com/user-attachments/assets/b98f91a6-1dc9-4cb9-92d3-85c83f0b92fa" />

## Página de Listagem de Professores

<img width="1917" height="1078" alt="Captura de tela 2026-09-23 095814" src="https://github.com/user-attachments/assets/99a8e325-725a-4a13-ae24-11e1e79cc8d8" />

## Página de Cadastro de Professores

<img width="1917" height="1078" alt="Captura de tela 2026-09-23 095821" src="https://github.com/user-attachments/assets/03affe46-6f2e-426a-87fe-581d28233310" />


# Como Executa

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.

## Clone/DownLoad

1. Baixe o projeto pelo GitHub: **https://github.com/MuriloAlvesII/Exercicio-Formulario-React.git** e extraia a pasta zip.
- Ou, se tiver o Git instalado, rode no terminal (PowerShell):
  ```bash
  git clone https://github.com/MuriloAlvesII/Exercicio-Formulario-React.git
  ```
2. Abra a pasta do projeto no VS Code.
- Ou, pelo terminal:
   ```bash
   cd Exercicio-Crud
   ```
   
3. Instale as dependências:
- No terminal, dentro da pasta do projeto, rode:
   ```bash
   npm install
   ```

4. Execute o projeto:
- Este projeto precisa de **dois terminais abertos ao mesmo tempo** — um para a API simulada e outro para a aplicação React.
  - **Terminal 1 — API simulada (json-server):**
  ```bash
  npx json-server --watch db.json --port 3000
  ```

  - **Terminal 2 — aplicação React (Vite):**
  ```bash
  npm run dev
  ```

Depois, abra no navegador o endereço mostrado pelo Vite no terminal.

> Se aparecer uma mensagem de erro de conexão na tela, confira se o Terminal 1 (json-server) ainda está rodando.

# Autor

- Projeto: [Exercicio-Crud](https://github.com/MuriloAlvesII/Exercicio-Crud.git)
- GitHub: [@MuriloAlvesII](https://github.com/MuriloAlvesII)

Projeto desenvolvido para a disciplina de Programação para Internet — IFRN Campus Pau dos Ferros.

- Este projeto foi desenvolvido a partir do projeto original [sistema-escolar](https://github.com/JefersonQueiroga/sistema-escolar.git), criado por [Jeferson Queiroga](https://github.com/JefersonQueiroga).
