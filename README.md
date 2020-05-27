# Projeto - Módulo Acadêmico - EdTech/GrupoA Educação

## Objetivo:

O objetivo deste projeto é desenvolver a funcionalidade de **cadastro de aluno** no módulo acadêmico do sistema de matrículas da instuição. Para realizar a matrícula, é necessário que o cadastro tenha sido realizado com sucesso. Este ambiente pode ser acessado por funcionário da instituição, desde que logado no sistema.
Neste ambiente, devem ser informados os dados básicos do aluno e, caso estejam corretos, o cadastro é confirmado. É possível, além disso, pesquisar aluno pelo nome, editar e excluir cadastro. 

## Mockups de interface

* Listagem de Alunos
![Listagem de Alunos](/mockups/mockup-students.png)

* Criar Aluno
![Listagem de Alunos](/mockups/mockup-students-add.png)

* Criar Aluno - Sucesso 
![Listagem de Alunos](/mockups/mockup-students-add-success.png)

* Criar Aluno - Erro
![Listagem de Alunos](/mockups/mockup-students-add-error.png)

* Editar Aluno
![Listagem de Alunos](/mockups/mockup-students-update.png)

* Excluir Aluno
![Listagem de Alunos](/mockups/mockup-students-delete.png)

## Especificações técnicas

- **Front End:** Vuetify
- **Banco de Dados:** Firebase (Postgresql será implantado em atualização)

## Observações:

- O cadastro é validado somente se fornecidos todos os dados e de forma correta.
- Dos campos do cadastro, somente o nome e o email podem ser editdos.
- A funcionalidade de pesquisa está em desenvolvimento (não obrigatória no desafio inicial).
- No Back End, foi utilizado o Firebase por motivos técnicos. Em futura atualização, banco de dados será migrado para Postgresql.
