# 🤝 Contributing

Thanks for your interest in contributing to **ICNARI 2026 — NIT Patna Conference Website**.

## Quick start

### 1) Fork and clone

1. Fork the repository on GitHub
2. Clone your fork:

```bash
git clone https://github.com/<your-username>/Conference_website.git
cd Conference_website
```

### 2) Create a branch

Use one of these prefixes:

- `feature/<short-name>`
- `fix/<short-name>`
- `docs/<short-name>`
- `chore/<short-name>`

Example:

```bash
git checkout -b feature/openapi-improvements
```

### 3) Run the project locally

Start MongoDB (pick one option):

Option A (Docker, easy) — from the repo root:

```bash
docker compose -f docker-compose.dev.yml up -d
```

Option B (No Docker) — use local MongoDB or MongoDB Atlas:

- Local MongoDB (no auth): set `URI=mongodb://127.0.0.1:27017/conference_db` in `backend/.env`
- MongoDB Atlas: set your Atlas connection string in `backend/.env`

Backend:

```bash
cd backend
pnpm install
pnpm run dev
```

Frontend:

```bash
cd frontend
pnpm install
pnpm run dev
```

If you don’t use pnpm, npm works as well (`npm install`, `npm run dev`).

## Environment variables

- Backend env file: `backend/.env`
- Frontend env file: `frontend/.env`
- Production env file (Docker): `./app.env`

Do not commit real secrets.

## Commit conventions

If your team does not already follow a convention, we recommend **Conventional Commits**:

- `feat: ...`
- `fix: ...`
- `docs: ...`
- `chore: ...`

Examples:

- `feat: add OpenAPI documentation`
- `fix: correct contact form validation`

## Code style

### Frontend

- Run ESLint:

```bash
cd frontend
pnpm run lint
```

### Backend

The backend currently does not ship a linter config.

Guidelines:

- Keep controllers small and predictable
- Use status codes consistently (`400`, `401`, `404`, `500`)
- Prefer a stable response shape for APIs

## Pull request workflow

1. Ensure your branch is up to date with `main`
2. Open a PR against `main`
3. Fill out the PR template
4. Keep PRs focused (one feature/fix per PR)

## What to work on

- Check `CHANGELOG.md` and the Issues page
- Good first issues are listed in the root README roadmap and Issues
