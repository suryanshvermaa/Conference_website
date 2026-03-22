# 🎓 ICNARI 2026 — NIT Patna Conference Website

A **Conference Management Platform** (MERN) for the official **ICNARI 2026** conference at **NIT Patna (Patna + Bihta Campus)**.

It includes:

- A **public website** for attendees/authors (About, Authors, Program, Committees, Gallery, Sponsors, Contact)
- A **secure admin dashboard** for organizers to manage content without editing code

Live site: https://icnari26.nasl.in

New to this codebase? Start here: [docs/DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md)

---

## What this project is

- **Official:** Maintained for the ICNARI 2026 conference at NIT Patna
- **Production-grade:** Active deployment, real users, real ops constraints
- **Community contributions:** Now welcoming contributions from the community (all levels)

---

## Key features

- **Admin dashboard** for managing:
	- Speakers
	- Notices/Papers
	- Recent updates
	- Photo gallery
	- Committee members (Organising / International / Technical / Industry Programme)
	- Contact form submissions (admin view)
- **JWT-protected admin actions**
	- Token is sent via a custom request header: `token: <JWT>`
- **Media uploads** with Multer + Cloudinary
- **MongoDB + Mongoose** data models for conference content
- **Docker Compose** setup for local MongoDB (dev)
- **Deployment-ready backend** via Docker Compose + Jenkins pipeline

---

## Tech stack

- **Frontend:** React + Vite, React Router, Tailwind CSS, Chakra UI
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT (token via `token` header, not `Authorization`)
- **Uploads:** Multer + Cloudinary

---

## Repository layout

- [backend](backend) — Express API server
- [frontend](frontend) — React SPA (Vite)
- [docs/DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md) — detailed beginner-friendly guide
- [docker-compose.dev.yml](docker-compose.dev.yml) — MongoDB for local development
- [docker-compose.prod.yml](docker-compose.prod.yml) — backend container (used by [Jenkinsfile](Jenkinsfile))
- [Jenkinsfile](Jenkinsfile) — Jenkins pipeline for backend Docker deployment
- [backend/scripts/createAdmin.js](backend/scripts/createAdmin.js) — bootstrap initial admin user
- [frontend/vercel.json](frontend/vercel.json) — Vercel configuration

---

## Getting started (beginner-friendly)

### Prerequisites

- Node.js 18+ (Node 20 works)
- pnpm (recommended) or npm
- Docker + Docker Compose (for local MongoDB)

### 1) Start MongoDB locally (Docker)

From the repository root:

```bash
docker compose -f docker-compose.dev.yml up -d
```

MongoDB will be reachable at:

- `mongodb://root:example@localhost:27017`

### 2) Backend setup

Install and run the backend:

```bash
cd backend
pnpm install
pnpm run dev
```

Create `backend/.env`:

```env
# API
PORT=3000

# MongoDB (backend runtime)
URI=mongodb://root:example@localhost:27017/conference_db?authSource=admin

# JWT
secret=change_me_to_a_strong_secret

# Cloudinary
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret

# Optional: used by backend/scripts/createAdmin.js
MONGO_URI=mongodb://root:example@localhost:27017/conference_db?authSource=admin
```

Health check:

- `GET http://localhost:3000/health`

### 3) Frontend setup

Install and run the frontend:

```bash
cd frontend
pnpm install
pnpm run dev
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

Frontend runs at:

- `http://localhost:5173`

---

## Admin access

### Create the first admin user (recommended)

Run the bootstrap script:

```bash
cd backend
node scripts/createAdmin.js
```

Notes:

- The script reads `MONGO_URI` (and falls back to `mongodb://root:example@localhost:27017`).
- The backend server uses `URI` for the main connection.

### Login

- Backend endpoint: `POST /user/login`
- Frontend route: `/login`

---

## API notes

### Authentication

Protected endpoints expect a JWT in the request headers:

```text
token: <JWT>
```

Important: the backend expects the header name to be exactly `token` (not `Authorization`).

### Main route groups

The API mounts these route prefixes in [backend/src/routes/index.js](backend/src/routes/index.js):

- `/user`
- `/photogallery`
- `/speaker`
- `/papers`
- `/recentupdate`
- `/contact`
- `/organisingcommitee`
- `/internationalcommitee`
- `/technicalcommitee`
- `/industryprogramme`

---

## DevOps and deployment

### Development database (local)

- Uses [docker-compose.dev.yml](docker-compose.dev.yml) to run MongoDB locally

### Backend production (Docker Compose)

Production compose file: [docker-compose.prod.yml](docker-compose.prod.yml)

```bash
docker compose -f docker-compose.prod.yml up -d --build --force-recreate
```

It expects an env file named `app.env` in the repository root (see [docker-compose.prod.yml](docker-compose.prod.yml)).
The included [Jenkinsfile](Jenkinsfile) copies an external env file to `./app.env` and then runs the compose command.

### CI/CD (Jenkins)

This repository includes a production-oriented Jenkins pipeline in [Jenkinsfile](Jenkinsfile). At a high level it:

1. Cleans the Jenkins workspace
2. Clones this repository
3. Copies an environment file to `./app.env` (the pipeline expects it to exist on the Jenkins machine)
4. Runs `docker compose -f docker-compose.prod.yml up -d --build --force-recreate`

Operational notes:

- The compose file builds the backend image from [backend/Dockerfile](backend/Dockerfile) and exposes port `3000`.
- `app.env` is intentionally not committed; provide it securely via your CI/CD environment.

### Frontend

The frontend is set up for Vercel (see [frontend/vercel.json](frontend/vercel.json)).

---

## License

MIT — see [LICENSE](LICENSE).
