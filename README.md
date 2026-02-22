# 🎓 ICNARI 2026 Conference Website (NIT Patna)

Official codebase for the ICNARI 2026 conference website maintained for NIT Patna (Bihta Campus). The project is a full-stack web app with:
- A **public website** for attendees and authors (About, Authors, Program, Committees, Gallery, Sponsors, Contact)
- A **secure admin dashboard** used by organizers to update website content without editing code (speakers, notices/papers, updates, photo gallery, committee members, contact messages)

Live site: https://icnari26.nasl.in

New to this codebase? Start here: 📘 [docs/DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md)

## ✨ Key Features

- 🧑‍💼 Admin dashboard for managing speakers, notices/papers, recent updates, gallery, and committee members
- 🔐 JWT-based protected admin actions (token via `token` header)
- ☁️ Cloudinary-backed media uploads (via Multer)
- 📬 Public contact form + admin view for submitted messages
- 🐳 Docker Compose setup for local MongoDB (dev) and containerized backend (prod)
- 🧰 CI/CD-ready Jenkins pipeline for backend deployment

## 🧱 Tech Stack

- **Frontend:** React + Vite, React Router, Tailwind CSS, Chakra UI
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT (token is sent via a custom `token` header)
- **Uploads:** Multer + Cloudinary

## 🗂️ Repository Layout

- [backend](backend) — Express API server
- [frontend](frontend) — React SPA (Vite)
- [docs/DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md) — detailed beginner-friendly guide
- [docker-compose.dev.yml](docker-compose.dev.yml) — MongoDB for local development
- [docker-compose.prod.yml](docker-compose.prod.yml) — backend container (used by [Jenkinsfile](Jenkinsfile))
- [Jenkinsfile](Jenkinsfile) — Jenkins pipeline for backend Docker deployment

## 🛠️ Tooling & Ops

- **Jenkins CI/CD:** [Jenkinsfile](Jenkinsfile)
- **Docker Compose:** dev DB in [docker-compose.dev.yml](docker-compose.dev.yml), backend container in [docker-compose.prod.yml](docker-compose.prod.yml)
- **Admin bootstrap:** [backend/scripts/createAdmin.js](backend/scripts/createAdmin.js)
- **Frontend deployment:** Vercel config in [frontend/vercel.json](frontend/vercel.json)

## 🚀 Local Development

### ✅ Prerequisites

- Node.js 18+ (Node 20 works)
- pnpm (recommended) or npm
- Docker + Docker Compose (for MongoDB locally)

### 1) Start MongoDB (Docker) 🐳

This repo provides MongoDB via Docker Compose.

```bash
docker compose -f docker-compose.dev.yml up -d
```

MongoDB will be reachable at `mongodb://root:example@localhost:27017`.

### 2) Run the backend ⚙️

```bash
cd backend
pnpm install
pnpm run dev

# or
# npm install
# npm run dev
```

Create `backend/.env` with:

```env
# API
PORT=3000

# MongoDB
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

Backend health check:

- `GET http://localhost:3000/health`

### 3) Run the frontend 🖥️

```bash
cd frontend
pnpm install
pnpm run dev

# or
# npm install
# npm run dev
```

Create `frontend/.env` with:

```env
VITE_API_URL=http://localhost:3000
```

Frontend will be available at `http://localhost:5173`.

## 🔐 Admin Access

### Create the first admin user (recommended)

Use the CLI script (creates a `User` document in MongoDB):

```bash
cd backend
node scripts/createAdmin.js
```

Notes:
- The script reads `MONGO_URI` (and falls back to `mongodb://root:example@localhost:27017`).
- The backend server itself uses `URI` from [backend/src/database/dbconn.js](backend/src/database/dbconn.js).

### Login

- Backend: `POST /user/login`
- Frontend: `/login`

## 🔌 API Notes

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


## 📦 Deployment

### Backend (Docker Compose) 🐳

Production compose file: [docker-compose.prod.yml](docker-compose.prod.yml)

```bash
docker compose -f docker-compose.prod.yml up -d --build --force-recreate
```

It expects an env file named `app.env` in the repository root (see [docker-compose.prod.yml](docker-compose.prod.yml)).
The included [Jenkinsfile](Jenkinsfile) copies an external env file to `./app.env` and then runs the compose command.

### CI/CD (Jenkins) 🤖

This repository includes a production-oriented Jenkins pipeline in [Jenkinsfile](Jenkinsfile). At a high level it:

1. Cleans the Jenkins workspace
2. Clones this repository
3. Copies an environment file to `./app.env` (the pipeline expects it to exist on the Jenkins machine)
4. Runs `docker compose -f docker-compose.prod.yml up -d --build --force-recreate`

Operational notes:
- The compose file builds the backend image from [backend/Dockerfile](backend/Dockerfile) and exposes port `3000`.
- `app.env` is intentionally not committed; provide it securely via your CI/CD environment.

### Frontend ▲

The frontend is set up for Vercel (see [frontend/vercel.json](frontend/vercel.json)).

## 📄 License

MIT — see [LICENSE](LICENSE).
