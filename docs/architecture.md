# Architecture

```mermaid
flowchart LR
  Browser --> Next[Next.js]
  Next -->|/api rewrite| API[Spring Boot API]
  API --> DB[(PostgreSQL)]
  API --> Redis[(Redis)]
  API -.->|FYDP-II| Model[Model service]
```

Redis arrives in Phase F. The model service arrives in FYDP-II and plugs in behind the
`ClauseClassifier` interface.
