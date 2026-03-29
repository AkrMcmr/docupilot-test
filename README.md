# DocuPilot Test API

A simple Express.js REST API server built with TypeScript, featuring user management endpoints and a collection of reusable helper and utility functions.

## Description

This project provides a lightweight Express API for managing users, along with common helper functions for date formatting, text slugification, pagination, email validation, and ID generation. It is designed as a clean, modular foundation for building TypeScript-based REST APIs.

## Features

- **User Management API**: Create and retrieve users via RESTful endpoints
- **Date Formatting**: Convert `Date` objects to ISO strings or date-only strings
- **Slugification**: Convert arbitrary text to URL-friendly slugs
- **Pagination**: Generic pagination utility for any array of items
- **Email Validation**: Validate email addresses using regex
- **Random ID Generation**: Generate random alphanumeric IDs

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

```bash
# Clone the repository
git clone https://github.com/your-org/docupilot-test-api.git
cd docupilot-test-api

# Install dependencies
npm install

# Compile TypeScript
npm run build

# Start the server
npm start
```

The server will start on **port 3000** by default.

## Usage

### Running the Server

```bash
npm start
# Server running on port 3000
```

### Example Requests

```bash
# Get all users
curl http://localhost:3000/api/users

# Create a new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "email": "jane@example.com"}'

# Get a user by ID
curl http://localhost:3000/api/users/1
```

## API Reference

### Users

#### `GET /api/users`

Returns a list of all users.

**Response** `200 OK`
```json
[
  { "id": 1, "name": "Jane Doe", "email": "jane@example.com" }
]
```

---

#### `POST /api/users`

Creates a new user.

**Request Body**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

**Response** `201 Created`
```json
{ "id": 1, "name": "Jane Doe", "email": "jane@example.com" }
```

---

#### `GET /api/users/:id`

Returns a single user by their numeric ID.

**Response** `200 OK`
```json
{ "id": 1, "name": "Jane Doe", "email": "jane@example.com" }
```

**Response** `404 Not Found`
```json
{ "error": "User not found" }
```

---

## Helper Functions (`helpers.ts`)

### `formatDate(date: Date): string`
Formats a `Date` object to a `YYYY-MM-DD` string.

```typescript
import { formatDate } from './helpers';
formatDate(new Date('2026-03-26T07:42:07Z')); // "2026-03-26"
```

### `slugify(text: string): string`
Converts a string to a URL-friendly slug.

```typescript
import { slugify } from './helpers';
slugify('Hello World!'); // "hello-world"
```

### `paginate<T>(items: T[], page: number, perPage?: number)`
Paginates an array of items.

```typescript
import { paginate } from './helpers';
const result = paginate([1, 2, 3, 4, 5], 1, 2);
// { data: [1, 2], total: 5, page: 1, pages: 3 }
```

**Parameters**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `items` | `T[]` | — | Array of items to paginate |
| `page` | `number` | — | Current page number (1-indexed) |
| `perPage` | `number` | `10` | Number of items per page |

**Returns** `{ data: T[], total: number, page: number, pages: number }`

---

## Utility Functions (`utils.ts`)

### `isValidEmail(email: string): boolean`
Validates an email address format.

```typescript
import { isValidEmail } from './utils';
isValidEmail('jane@example.com'); // true
isValidEmail('not-an-email');     // false
```

### `generateId(): string`
Generates a random alphanumeric ID string.

```typescript
import { generateId } from './utils';
generateId(); // e.g. "k7f2x9qm3ab"
```

### `formatDate(date: Date): string`
Formats a `Date` object to a full ISO 8601 string.

```typescript
import { formatDate } from './utils';
formatDate(new Date('2026-03-26')); // "2026-03-26T00:00:00.000Z"
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and add tests where applicable
4. Commit your changes: `git commit -m 'feat: add your feature'`
5. Push to your branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

## License

This project is licensed under the MIT License.
