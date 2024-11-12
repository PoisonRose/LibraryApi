# CONTRIBUTING

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

**1. Clone o repositório:**   
    `git clone https://github.com/PoisonRose/LibraryApi.git`  
   Isso criará uma cópia local do repositório na pasta onde você executou o comando.  
**2. Acesse o diretório do repositório com o seguinte comando:**  
    `cd LibraryApi`

Agora você está pronto para contribuir!

## Pré-requisitos

TO DO

## Como contribuir

Para contribuir com este projeto, siga os passos abaixo(IMPORTANTE: Antes de seguir os passos, não esqueça de baixar/clonar o repositório, seguindo os passos da sessão "Como baixar o repositório" acima!):  

**1. Vá para/crie sua branch designada:**  
`git checkout -b nome-da-branch`  
**por favor evite criação de branches sem necessidade, uma branch para cada dev é o padrão**

**2. Antes de começar a trabalhar, atualize sua branch com as últimas mudanças da branch *main* para evitar conflitos:**  
**IMPORTANTE**: repita esse processo antes de fazer seu commit final, garantindo que você está com o código atualizado antes de enviar as mudanças.

```
git checkout main
git pull origin main
git checkout nome-da-branch
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
