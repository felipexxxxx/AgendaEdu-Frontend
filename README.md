# 📚 ClassUP

Sistema educacional completo que permite às instituições de ensino gerenciar professores, alunos, atividades, presenças, avisos e histórico de salas, com notificações automáticas por e-mail.

## 🚀 Descrição do Projeto

ClassUP é uma aplicação web criada para escolas e faculdades gerenciarem turmas, atividades, avisos e presença. A plataforma permite:

- Autenticação de alunos e professores com diferenciação de permissões por função (role).
- Criação e gerenciamento de salas, atividades e avisos pelo professor.
- Confirmação de presença e visualização de colegas e avisos por parte dos alunos.
- Encerramento de semestre com arquivamento de dados e envio de notificações por e-mail.
- Histórico de salas encerradas acessível tanto por alunos quanto por professores.

## ✨ Destaques do Projeto

- 🔐 Autenticação com JWT e recuperação de senha via e-mail.
- 📬 Notificações por e-mail para ações importantes (remoção de aluno, encerramento de semestre etc.).
- 👨‍🏫 Perfis distintos: professores possuem permissões administrativas completas.
- 🧠 Histórico inteligente: preserva dados de turmas encerradas e permite consulta posterior.
- 🎨 Interface dinâmica e UX intuitiva.

## 🧱 Arquitetura do Projeto

- **Backend**: Java + Spring Boot
- **Frontend**: React + Tailwind CSS
- **Banco de Dados**: MySQL
- **Autenticação**: JWT
- **Envio de E-mails**: Spring Mail (SMTP Gmail)
- **Deploy**: Railway (backend + banco) e Netlify (frontend)

## 🔐 Funcionalidades

### 📌 Gerais
- Autenticação com diferenciação de usuário (aluno ou professor)
- Recuperação de senha com envio de código por e-mail

### 👨‍🏫 Professor
- Criar, visualizar, editar e excluir salas
- Criar, editar e excluir atividades e avisos
- Remover alunos da sala (com e-mail automático)
- Encerrar semestre (arquiva salas e notifica alunos)
- Visualizar histórico de salas encerradas
- Editar perfil, senha, e-mail e foto de perfil (armazenada no localStorage)

### 🎓 Aluno
- Entrar em sala via código gerado pelo professor
- Confirmar ou cancelar presença em atividades
- Visualizar avisos e colegas da turma
- Acessar histórico de salas
- Editar perfil, senha, e-mail e foto de perfil

## 🖼️ Interface da Aplicação

### Tela Inicial
![Tela Inicial](./public/prints/telaInicio.png)

### Quem Somos
![Quem Somos](./public/prints/telaQuemSomos.png)

### Tela de Login
![Login](./public/prints/telaLogin.png)

### Redefinir Senha
![Redefinir Senha](./public/prints/telaRedefinirSenha.png)

### Tela de Logout
![Logout](./public/prints/telaLogoutUsuario.png)


---

### Painel do Professor
![Painel Professor](./public/prints/telaPainelProfessor.png)

### Criar Sala
![Criar Sala](./public/prints/telaPainelProfessorCriacaoSala.png)

### Encerrar Semestre
![Encerrar Semestre](./public/prints/telaPainelProfessorEncerrarSemestre.png)

---

### Sala do Professor - Atividades
![Atividades](./public/prints/telaProfessorAtividades.png)

#### Criar Atividade
![Criar Atividade](./public/prints/telaProfessorAtividadesCriacao.png)

#### Detalhes da Atividade
![Detalhes Atividade](./public/prints/telaProfessorAtividadesDetalhes.png)

#### Editar Atividade
![Editar Atividade](./public/prints/telaProfessorAtividadesEdicao.png)

#### Excluir Atividade
![Excluir Atividade](./public/prints/telaProfessorAtividadesExclusao.png)

---

### Sala do Professor - Avisos
![Avisos](./public/prints/telaProfessorAvisos.png)

#### Criar Aviso
![Criar Aviso](./public/prints/telaProfessorAvisosCriacao.png)

#### Detalhes do Aviso
![Detalhes Aviso](./public/prints/telaProfessorAvisosDetalhes.png)

#### Editar Aviso
![Editar Aviso](./public/prints/telaProfessorAvisosEdicao.png)

#### Excluir Aviso
![Excluir Aviso](./public/prints/telaProfessorAvisosExclusao.png)

---

### Visualizar Alunos
![Visualizar Alunos](./public/prints/telaProfessorVerAlunos.png)

---

### Perfil do Usuário
![Perfil](./public/prints/telaPerfilUsuarios.png)

### Trocar Email
![Trocar Email](./public/prints/telaTrocarEmailUsuario.png)

### Trocar Senha
![Trocar Senha](./public/prints/telaTrocarSenhaUsuario.png)

---

### Sala do Aluno - Atividades
![Atividades Aluno](./public/prints/telaSalaAlunoAtividades.png)

#### Detalhes Atividade
![Detalhes Atividade Aluno](./public/prints/telaSalaAlunoAtividadesDetalhes.png)

---

### Sala do Aluno - Avisos
![Avisos Aluno](./public/prints/telaSalaAlunoAvisos.png)

#### Detalhes Aviso
![Detalhes Aviso Aluno](./public/prints/telaSalaAlunoAvisosDetalhes.png)

---

### Sala - Colegas(Tela do aluno)
![Entrar em Sala](./public/prints/telaAlunoVerSalas.png)

---

### Histórico de Salas
![Histórico](./public/prints/telaSalaHistorico.png)

---



## 🛠️ Instalação Local

### Backend
```bash
git clone https://github.com/seu-usuario/classup-backend.git
cd classup-backend
mvn clean install
mvn spring-boot:run
```

Crie um banco de dados MySQL chamado `classup_db`. Edite o arquivo `application.properties` com suas configurações locais:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/classup_db
spring.datasource.username=root
spring.datasource.password=sua_senha
spring.mail.username=seu_email@gmail.com
spring.mail.password=sua_senha_de_app
API_SECURITY_TOKEN_SECRET=segredo_super_secreto
```

### Frontend
```bash
git clone https://github.com/seu-usuario/classup-frontend.git
cd classup-frontend
npm install
npm run dev
```

## 🚢 Deploy

- 🔧 **Backend + Banco de Dados**: [Railway](https://railway.app)
- 🌐 **Frontend**: [Netlify](https://classup-web.netlify.app/inicio)

## 📡 Endpoints da API (principais)

### `/user`
- POST `/login`, `/logout`, `/enviar-email`, `/redefinir-senha`
- GET `/` (perfil)
- PUT `/email`, `/senha`

### `/professor/sala`
- GET `/`, `/{id}`, `/atividades/{id}/resumo`
- POST `/`, `/atividades`, `/avisos`, `/encerrar`
- PUT `/atividades/{id}`, `/avisos/{id}`
- DELETE `/atividades/{id}`, `/avisos/{id}`, `/aluno/{alunoId}`

### `/aluno/sala`
- POST `/entrar`
- GET `/detalhes`
- PUT `/atividades/{id}/confirmar`, `/atividades/{id}/cancelar`

### `/sala/historico`
- GET `/`, `/{id}`

## 📜 Regras de Negócio

- Professores podem criar e gerenciar salas, atividades e avisos.
- Alunos só podem estar vinculados a uma sala ativa por vez.
- O semestre só pode ser encerrado por professores.
- Alunos não conseguem editar ou excluir atividades/avisos.
- Apenas o próprio usuário pode editar seu perfil, e-mail ou senha.

## 🔁 Fluxo de Utilização

1. **Login:** usuário acessa com matrícula ou e-mail.
2. **Aluno sem sala:** insere código para entrar em uma sala.
3. **Professor cria salas:** e gerencia seus componentes (atividades/avisos).
4. **Confirmação de presença:** aluno visualiza e responde às atividades.
5. **Encerramento do semestre:** tudo é arquivado, mantendo histórico.

## 👨‍💻 Autor
Desenvolvido por [Felipe de Paula](https://github.com/felipexxxxx)

---

💬 Dúvidas ou sugestões? Fique à vontade para abrir uma issue no repositório!
