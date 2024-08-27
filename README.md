# Trabalho de Desenvolvimento Web  
Este trabalho faz parte da matéria de Desenvolvimento Web, conduzido pelo professor Benevaldo.

## Sobre o escopo do trabalho  
O objetivo do trabalho é desenvolver uma aplicação para gerenciamento de alunos, que conta com um CRUD completo em duas telas.

1. **TABELA:** Na tela da tabela, são utilizados dois métodos HTTP. O método `DELETE` está associado ao botão de exclusão, enquanto o `GET` é utilizado pela aplicação para buscar todos os registros de alunos no banco de dados.

2. **FORMULÁRIO:** Na tela do formulário, são utilizados os métodos `POST` e `PUT`. Para utilizar o `PUT`, basta clicar no botão "atualizar" em algum registro da tabela. Para utilizar o `POST`, acesse a aba "Cadastrar Aluno" no menu lateral.

## Como rodar o sistema:

1. **Pré-requisitos:** Certifique-se de que a sua máquina tenha o Node.js (>= 16.14.0) e npm (>= 8.0.0) instalados.

2. **Instalação de dependências:** No diretório da aplicação, execute o comando `npm install` para instalar todas as dependências necessárias.

3. **Iniciar a aplicação:** No mesmo diretório, execute `npm run start` para iniciar o sistema. O comando `ng start` é configurado no arquivo `package.json` do projeto, na seção de scripts.

4. **Acessar o sistema:** Abra o navegador e acesse `http://localhost:4200` para utilizar o sistema.

## Outras funcionalidades do sistema:

1. **Menu Lateral:** O sistema possui um menu lateral que permite navegar entre as duas telas (Tabela e Formulário). É possível recolher o menu lateral, caso o usuário deseje.

2. **Paginação:** Existe a opção de paginação na tabela, permitindo a visualização de uma quantidade menor de dados por página.

3. **Filtro:** O sistema permite filtrar alunos pela matrícula, através de um campo de entrada localizado no canto superior esquerdo da tabela.
