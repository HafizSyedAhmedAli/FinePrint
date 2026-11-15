# FinePrint

AI-assisted web platform that helps consumers find and understand risky clauses in
Terms of Service, licences and privacy policies. FinePrint is a consumer-awareness
tool and does not give legal advice.

Final Year Design Project, Department of Software Engineering, QUEST Nawabshah.

## Stack

- Backend: Spring Boot, Java 21, PostgreSQL, Flyway, Testcontainers
- Frontend: Next.js, TypeScript, Feature-Sliced Design, Tailwind, Bun
- Tooling: Docker Compose, GitHub Actions, Husky, lint-staged, Prettier, commitlint

## Prerequisites

Git, Docker Desktop (running), JDK 21, Bun 1.2 or newer, Node 22.

## Quick start (Windows PowerShell)

```powershell
git clone https://github.com/HafizSyedAhmedAli/FinePrint.git
cd FinePrint
Copy-Item .env.example .env
bun install          # installs the commit hooks
docker compose up -d db
```

Backend (terminal 1; use `./mvnw` on macOS or Linux):

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

Frontend (terminal 2):

```powershell
cd frontend
bun install
bun run dev
```

Open http://localhost:3000. API health: http://localhost:8080/actuator/health.
Whole stack in containers: `docker compose up --build`.

## Tests

| What                              | Command                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| Backend unit tests                | `cd backend; .\mvnw.cmd test`                                    |
| Backend full check (needs Docker) | `cd backend; .\mvnw.cmd verify`                                  |
| Frontend lint, types, unit tests  | `cd frontend; bun run lint; bun run typecheck; bun run test:run` |
| Frontend end to end               | `cd frontend; bun run e2e`                                       |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Architecture and decisions are in [docs](docs).
