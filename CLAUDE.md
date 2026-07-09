# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the server with nodemon (auto-restart on changes)
- `npm start` — start the server with plain node
- Server runs on `PORT` from `.env` (default 5000 in code, but `.env-sample` sets 5001)
- No test suite is configured (`npm test` is a stub that exits with an error)

## Environment

Copy `.env-sample` to `.env` and set `MONGO_URI` (MongoDB connection string) and `PORT`. `API_URL`, `API_KEY`, `API_SECRET` in `.env-sample` are currently unused by the code.

## Architecture

This is a single-service Express + Mongoose REST API (ESM modules, `"type": "module"` in package.json). There is no build step.

- `index.js` — app entry point: loads env, connects to MongoDB via Mongoose, wires global middleware (`cors`, `express.json`), registers routes, configures `swagger-jsdoc`/`swagger-ui-express` at `/api-docs`, and defines `/api/health` and `/` inline.
- `src/routes/appRoutes.js` — exports a single `routes(app)` function called from `index.js` that registers all endpoints directly on the Express `app` (no `express.Router()` sub-routers). Swagger JSDoc annotations live inline above each route. Note the swagger config's `apis` glob (`./routes/*.js`) does not match the actual `src/routes/` path, so JSDoc comments currently aren't picked up.
- `src/controllers/userController.js` — request handlers for User CRUD + search, imported by `appRoutes.js`.
- `src/models/user.js` — Mongoose schema/model for `User` (`name`, `email`, `date`).
- `src/databases/insertUsers.js` — standalone seed script (`seedUsers()`), opens its own Mongoose connection and disconnects when done. Triggered via `GET /v1/seed-users` in `appRoutes.js`, not run as a separate CLI script.

### Routes (all registered in `src/routes/appRoutes.js`)

- `GET /v1/users` — list users
- `GET /v1/users/:id` — get user by id
- `POST /v1/users` — create user
- `PUT /v1/users/:id` — update user
- `DELETE /v1/users/:id` — delete user
- `GET /v1/search?q=` — case-insensitive search on `name`/`email`
- `GET /v1/seed-users` — bulk-insert seed data via `insertUsers.js`
- `GET /v1/products`, `GET /v1/orders` — placeholder stub routes
- `GET /api/health`, `GET /` — health/status checks (defined in `index.js`, not `appRoutes.js`)
- `GET /api-docs` — Swagger UI
