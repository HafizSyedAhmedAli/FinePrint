# Contributing

## Workflow

1. Pick an issue from the project board and move it to In progress.
2. Branch from `main`: `feat/<short-name>`, `fix/<short-name>`, `chore/...`, `docs/...`.
3. Write a failing test first, then the code (TDD).
4. Commit using Conventional Commits (`feat: ...`, `fix: ...`). The hooks format staged files and reject bad messages.
5. Open a pull request. The title must also follow Conventional Commits because we squash-merge.
6. CI must be green and a teammate must review before merge.

## Definition of done

- Tests added at the right level (unit, integration, end to end)
- `format`, lint, typecheck and tests pass locally
- Docs updated when behaviour or setup changes

## Never commit

`.env` files, real private contracts, datasets, or model weights.
