# Trabalho de Desenvolvimento Web <br>
Este trabalho é designado a matéria de desenvolvimento web, conduzido pelo docente Benevaldo.<br>

# Sobre o escopo do trabalho <br>
O trabalho consiste em desenvolvimento de ima aplicação de gerenciamento de alunos, onde nós temos um CRUD completo em duas telas. <br>

1- <strong>TABELA</strong>: na tela da tabela, está em uso dois métodos HTTP, o DELETE que está associado com o botão, e o GET feito pela aplicação para buscar todos os registros de alunos que residem no banco de dados.

2 - <strong>FORMULÁRIO</strong>: no Formulário está em uso os métodos POST e PUT,para utilizar o PUT é necessário clicar no botão de "atualizar" em algum registro da tabela. Para utilizar o POST, o acesso a tela deve ser pela aba "cadastrar aluno", pelo menu ao lado.

# Como rodar o sistema:<br>

<strong>1°PASSO:</strong> É necessário está instalado na máquina node >= x.x.x e npm >= x.x.x .<br>

<strong>2°PASSO:</strong> Der o comando npm install em um terminal localizado diretório da aplicação, assim, npm instala todas as dependências necessárias para rodar o projeto. <br>

<strong>3°PASSO:</strong> Em um terminal localizado no diretório do projeto, der o comando npm run start. Este comando executa ng start,essa execução é feita no arquivo package.json do projeto na parte de script.<br>

<strong>4°PASSO:</strong> No navegador, acesse localhost:4200 para acessar o sistema.



# Outras Features do sistema: <br>
1 - <strong> MENU LATERAL: </strong>o sistema poussui um menu lateral que permite navegar entre as duas telas do sistema, a Tabela e o formulário. Também é possível diminuir o menu lateral caso desejado pelo usuário.<br>

2 - <strong>PAGINAÇÃO:</strong> é  possível adicionar uma paginação na tabela do sistema para visualizar uma quantidade menos massiva de dados.

3 - <strong>FILTRO:</strong> é possível filtrar o aluno pela matrícula do mesmo em Input localizado no canto superior esquerdo da tabela.
