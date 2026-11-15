# 0001: Spring Boot application, model service later

Status: accepted, 5 November 2026

## Context

The proposal named FastAPI for the backend. The supervisor agreed that the application is built
first and the dataset and model work moves to FYDP-II. The author knows Spring Boot in depth.

## Decision

The backend is Spring Boot. Clause classification sits behind a `ClauseClassifier` interface.
FYDP-I uses a keyword stand-in. FYDP-II adds a small Python model service for Legal-BERT.

## Consequences

The application is complete and testable before any model exists. Two languages exist from
FYDP-II; the model service stays limited to a few endpoints. The stand-in must never be
presented as model results.
