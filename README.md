# DocuPilot Test API

A simple Express.js REST API server for managing users, featuring helper utilities for formatting, pagination, and validation.

## Description

This project provides a lightweight Express-based HTTP API with user management endpoints. It includes a set of reusable helper and utility functions for common tasks such as date formatting, string slugification, pagination, email validation, and ID generation.

## Features

- RESTful user management API (list, create, fetch by ID)
- Email validation utility
- Random ID generation
- Date formatting helpers
- String slugification
- Generic pagination support
- TypeScript support

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/docupilot-test-api.git
   cd docupilot-test-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

## Usage

**Start the server:**
```bash
npm start
```

The server will start on **port 3000** by default.

```
Server running on port 3000
```

## API Reference

### Users

#### List all users
```
GET /api/users
```
**Response:** `200 OK`
```json
[
  { "id": 1, "name": "Jane Doe", "email": "jane@example.com" }
]
```

---

#### Create a user
```
POST /api/users
Content-Type: application/json
```
**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```
**Response:** `201 Created`
```json
{ "id": 1, "name": "Jane Doe", "email": "jane@example.com" }
```

---

#### Get a user by ID
```
GET /api/users/:id
```
**Response:** `200 OK`
```json
{ "id": 1, "name": "Jane Doe", "email": "jane@example.com" }
```
**Error Response:** `404 Not Found`
```json
{ "error": "User not found" }
```

---

## Helper Functions

### `helpers.ts`

| Function | Signature | Description |
|---|---|---|
| `formatDate` | `(date: Date) => string` | Returns date as `YYYY-MM-DD` string |
| `slugify` | `(text: string) => string` | Converts text to URL-friendly slug |
| `paginate` | `<T>(items: T[], page: number, perPage?: number) => { data, total, page, pages }` | Paginates an array of items (default 10 per page) |

### `utils.ts`

| Function | Signature | Description |
|---|---|---|
| `isValidEmail` | `(email: string) => boolean` | Validates email format using regex |
| `generateId` | `() => string` | Generates a random alphanumeric ID |
| `formatDate` | `(date: Date) => string` | Returns full ISO 8601 date-time string |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

## License

MIT
