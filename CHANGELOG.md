# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-03-26

### Added
- Initial project setup with Express.js API server (`index.ts`)
- `GET /api/users` endpoint to retrieve all users
- `POST /api/users` endpoint to create a new user
- `GET /api/users/:id` endpoint to retrieve a user by ID
- `helpers.ts` module with common helper functions:
  - `formatDate(date)` — formats a Date to `YYYY-MM-DD`
  - `slugify(text)` — converts text to a URL-friendly slug
  - `paginate(items, page, perPage)` — generic pagination utility
- `utils.ts` module with utility functions:
  - `isValidEmail(email)` — validates email address format
  - `generateId()` — generates a random alphanumeric ID
  - `formatDate(date)` — formats a Date to a full ISO 8601 string

### Changed
- `helpers.ts`: modified to support E2E test trigger integration (DocuPilot webhook)

### Notes
- E2E test triggers added to `helpers.ts` for DocuPilot pipeline validation (rounds 1–3, 2026-03-26)
