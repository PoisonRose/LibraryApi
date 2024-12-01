# LibraryApi

## Descrição do projeto
### Sobre o projeto
Este projeto é um projeto da faculdade UNINASSAU, do curso de Ciência da Computação, disciplina Back-End Frameworks, ensinada pelo professor João Ferreira.  
Para o projeto, os alunos devem criar uma API RESTful para gerenciar livros em uma biblioteca, permitindo o controle de usuários (leitores), livros e empréstimos.

### Funcionalidades principais:
- CRUD para livros, com campos título, autor, gênero e ano de publicação.
- CRUD para usuários, incluindo nome, endereço, e-mail e telefone.
- Funcionalidade para registrar empréstimos e devoluções de livros, limitando o número de empréstimos por usuário e marcando datas de devolução.
- Relatórios básicos, como livros mais emprestados e lista de usuários com empréstimos pendentes.

## Como baixar o repositório

**Não esqueça de baixar os programas necessários para baixar o repositório e operar normalmente com o código e projeto.**  
[Um editor de código](https://code.visualstudio.com/)  
[Node.js](https://nodejs.org/pt)  
[Git](https://git-scm.com/downloads)  
[MySQL](https://www.mysql.com/downloads/)

**1. Abra o terminal e entre numa pasta onde queira guardar o repositório:**  

**2. Clone o repositório:**   
    `git clone https://github.com/PoisonRose/LibraryApi.git`  
   Isso criará uma cópia local do repositório na pasta onde você executou o comando.  
   
**3. Acesse o diretório do repositório com o seguinte comando:**  
    `cd LibraryApi`

**4. Abra o repositório no seu editor de código de escolha.**  

**5. Instale os pré-requisitos:**  
`npm install express mysql2 sequelize dotenv`  

**6. Crie uma conexão MySQL usando MySQL Workbench ou MySQL terminal**

**7. No MySQL, crie um banco de dados e o chame de *library***

**8. Crie um arquivo *'.env'*, copie os conteúdos de *'.env.example'* nele e edite-o para ser de acordo com seus dados do MySQL**

- *DB_HOST=localhost* Representa o seu computador local, ou seja, o servidor vai rodar diretamente no seu computador e só pode ser acessado por computadores ligados a ele.  

- *DB_USER=seu_nome_usuario* Representa seu nome de usuário **da sua conexão MySQL**, o padrão é root, mas você deve usar o nome que estiver na sua conexão.

- *DB_PASSWORD=sua_senha* Representa a senha **da sua conexão MySQL**, o padrão é não ter senha(''), mas você deve usar a senha para sua conexão.

- *DB_NAME=nome_da_database*  Representa o nome do banco de dados, usamos library como padrão.

- *DB_DIALECT=mysql*  Representa o dialeto que o Sequelize vai usar para interagir com o banco de dados.

- *DB_PORT=porta_da_database* Representa a porta conectada **Na sua conexão com o banco de dados**, o padrão é 3306.

**9. Pronto! Você já pode contribuir!**

## Pré-requisitos
| Nome | Descrição |  
|----- | -------|
| Git | Ferramenta de versionamento de código |  |
| Node.js | Ambiente de desenvolvimento para javascript | 
| MySQL | Ferramenta para gerenciamento de banco de dados |  
| Express | Framework de Back-end |  
| mysql2 | Driver de conexão do projeto com o banco de dados |  
| Sequelize | ORM para facilitar operações com o banco de dados |  
| dotenv | biblioteca Node.js que carrega variáveis de ambiente  definidas num arquivo .env e permite armazenar configurações sensíveis de forma segura. |


## Contribuindo
Para contribuir com este projeto, siga os passos abaixo(**IMPORTANTE:** Antes de seguir os passos, não esqueça de baixar/clonar o repositório, seguindo os passos da sessão "Como baixar o repositório" acima!):  

**1. Crie sua branch designada:**  
`git checkout -b nome-da-branch`  
**Por favor evite criação de branches sem necessidade, uma branch para cada dev é o padrão, o Gerente de Configuração edita a branch principal diretamente.**  
Após criar a branch, sempre que quiser ir até ela sem criar mais branches, use o comando:  
`git checkout nome-da-branch`

**2. Antes de começar a trabalhar, atualize sua branch com as últimas mudanças da branch *main* para evitar conflitos:**  
**IMPORTANTE**: repita esse processo antes de fazer seu commit final, garantindo que você está com o código atualizado antes de enviar as mudanças.

```
git checkout main
git pull origin main
git checkout nome-da-sua-branch
git merge main  
```

**3. Faça as alterações e commits:**
 - adicione os arquivos que você alterou:  
 `git add .`
 - Faça o commit das mudanças com uma descrição delas:  
 `git commit -m "Descrição das alterações feitas"`

**4. Atualize sua branch com a última versão do main(se não tiver feito no passo 3):**
- para evitar conflitos, sincronize sua branch com a main uma última vez antes de fazer o push:
```
git checkout main
git pull origin main
git checkout nome-da-sua-branch
git merge main
```

**5. Envie sua branch para o repositório remoto**:  
`git push origin nome-da-sua-branch`

**6. Abra um Pull Request**:
- No GitHub, vá até o repositório e abra um Pull Request de sua branch para a main. Descreva as alterações feitas e peça uma revisão para garantir que o código esteja de acordo com o projeto.

## Autores

| Nome | Papel |
| ----------- | ----------- |
| André Marcilio da Silva Ferreira | Documentador |  
| Fábio Coutinho Aroucha | Scrum master |
| Heitor Lopes e Silva | Desenvolvedor |
| Lucas Henrique Lins da Silva | Gerente de Configuração/Desenvolvedor |

## Licença

Creative Commons CC0 1.0 Universal.  
Para mais detalhes da licença, favor ver o arquivo LICENSE.md na lista de arquivos do projeto.
