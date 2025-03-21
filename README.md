# 📝 TODO - Gerenciador de Tarefas (Full Stack)

A aplicação TODO é um gerenciador de tarefas onde é possível adicionar, editar, marcar como concluída ou excluir tarefas.

---

## 🌐 Tecnologias Utilizadas

### Frontend

-   [React](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [React Router DOM](https://reactrouter.com/)
-   [Axios](https://axios-http.com/)

### Backend

-   [Java 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
-   [Spring Boot](https://spring.io/projects/spring-boot)
-   [Spring Web](https://spring.io/guides/gs/rest-service/)
-   [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
-   [Flyway](https://flywaydb.org/)
-   [Lombok](https://projectlombok.org/)
-   [H2 Database](https://www.h2database.com/) (desenvolvimento)
-   [PostgreSQL](https://www.postgresql.org/) (produção)

---

## 🚀 Como rodar o projeto

### Backend

```bash
# Acesse a pasta do backend
cd backend

# Execute o projeto (pode usar IntelliJ, VS Code ou terminal)
./mvnw spring-boot:run
```

-   O backend sobe na porta `http://localhost:8080`
-   Flyway aplica as migrações automaticamente

### Frontend

```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
```

-   O frontend sobe na porta `http://localhost:5173`

---

## 📝 Funcionalidades (MVP)

-   [x] Criar tarefa
-   [x] Listar tarefas
-   [x] Marcar como concluída
-   [x] Editar tarefa
-   [x] Excluir tarefa
-   [x] Filtro: Todas, Ativas, Concluídas
-   [ ] Autenticação e perfil de usuário (futuro)

---

## ⚖️ Banco de dados

-   **Dev:** H2 em memória com `application-test.yml`
-   **Prod:** PostgreSQL com `application-prod.yml`
-   **Migrações:** gerenciadas via Flyway (`src/main/resources/db/migration`)

---

## 🔧 Estrutura de pastas (exemplo)

```
todo/
├── backend/
│   ├── src/main/java/com/felipecordeiro/todo/
│   └── resources/db/migration/
├── frontend/
│   ├── src/
│   └── index.html
```

---

## 🚫 Licença

Projeto de estudo - livre para usar, modificar e aprimorar como quiser. ✨

---

Se quiser contribuir ou dar ideias de melhorias, manda ver! 🚀
