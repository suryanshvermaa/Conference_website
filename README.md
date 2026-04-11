# 🎓 ICNARI 2026 — NIT Patna Conference Website

A Conference Management Platform (MERN) for the official ICNARI 2026 conference at NIT Patna (Patna + Bihta Campus).

Live: [https://icnari26.nasl.in](https://icnari26.nasl.in)

New to this codebase? Start with [docs/DEVELOPER_GUIDE.md](./docs/DEVELOPER_GUIDE.md). ✨

---

## 📖 About

This repository powers:
- A public conference website (About, Authors, Program, Committees, Gallery, Sponsors, Contact)
- A secure admin dashboard used by organizers to manage website content without editing code

The backend is an Express API backed by MongoDB (Mongoose). Media is stored on Cloudinary and referenced by URL.

---

## ✅ Features

- Admin dashboard to manage:
  - Speakers
  - Papers/Notices
  - Recent updates
  - Photo gallery
  - Committee members (Organising / International / Technical / Industry Programme)
  - Contact form submissions (admin inbox)
- JWT-protected admin actions
  - Token is sent via a custom request header: `token: <JWT>`
- Cloudinary uploads (Multer + Cloudinary SDK)
- MongoDB support (local install / Atlas / or Docker Compose for dev)
- Deployment-ready backend via Docker Compose + Jenkins pipeline

---

## 🧰 Tech stack (from the repository)

Frontend (frontend/package.json):
- React (Vite)
- React Router
- Tailwind CSS
- Chakra UI
- Axios

Backend (backend/package.json):
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- Multer + Cloudinary (uploads)

---

## 🗂️ Project structure

Top-level layout:

```
.
├── backend/                 # Express API
├── frontend/                # React SPA (Vite)
├── docs/                    # Developer guide + OpenAPI spec
├── docker-compose.dev.yml   # Local MongoDB
├── docker-compose.prod.yml  # Backend containers (used by Jenkins)
└── Jenkinsfile              # CI/CD pipeline for Docker deployment
```

---

## ⚙️ Setup (local development)

### Prerequisites

- Node.js 20 (the backend Docker image uses `node:20-bookworm-slim`)
- pnpm (recommended) or npm
- MongoDB (choose one): local MongoDB install, MongoDB Atlas, or Docker + Docker Compose

### 1) Start MongoDB

Pick **one** option:

#### Option A: Docker (easy)

From the repository root:

```bash
docker compose -f docker-compose.dev.yml up -d
```

MongoDB root credentials from docker-compose.dev.yml:
- Username: `root`
- Password: `example`
- Host/port: `localhost:27017`

#### Option B: No Docker (local MongoDB or MongoDB Atlas)

✅ Local MongoDB (typical default, no auth):

- Install MongoDB for your OS (Ubuntu users can install via official MongoDB docs).
- Start MongoDB service (`mongod`).
- Use this connection string in `backend/.env`:

```env
URI=mongodb://127.0.0.1:27017/conference_db
```

✅ MongoDB Atlas (cloud):

- Create a free cluster on Atlas and copy the connection string.
- Use this connection string in `backend/.env`:

```env
URI=mongodb+srv://<username>:<password>@<cluster-host>/conference_db?retryWrites=true&w=majority
```

If you use the admin bootstrap script, set `MONGO_URI` similarly.

### 2) Backend

Install dependencies and start the API server:

```bash
cd backend
pnpm install
pnpm run dev
```

Alternative (npm):

```bash
cd backend
npm install
npm run dev
```

Health check:
- `GET http://localhost:3000/health`

### 3) Frontend

Install dependencies and start the Vite dev server:

```bash
cd frontend
pnpm install
pnpm run dev
```

Alternative (npm):

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL:
- `http://localhost:5173`

---

## 🔑 Environment variables

### Backend (backend/.env)

These variables are read in backend/src/*:

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
```

Used by the bootstrap admin script backend/scripts/createAdmin.js:

```env
MONGO_URI=mongodb://root:example@localhost:27017/conference_db?authSource=admin
```

### Frontend (frontend/.env)

Used across frontend/src/*:

```env
VITE_API_URL=http://localhost:3000
```

### Production (root app.env)

docker-compose.prod.yml loads environment variables from `app.env` at the repository root.

---

## 🧩 API overview

Route groups are mounted in backend/src/routes/index.js:

- `/user` (login, admin creation, list users, Cloudinary image helper)
- `/speaker`
- `/papers`
- `/recentupdate`
- `/photogallery`
- `/contact`
- `/organisingcommitee`
- `/internationalcommitee`
- `/technicalcommitee`
- `/industryprogramme`

OpenAPI 3.0 spec: docs/openapi.yaml.

Authentication:
- Protected endpoints require a JWT in the `token` request header (not `Authorization`).

---

## 🤝 Contributing

Contributions are welcome.

- See CONTRIBUTING.md for local setup, branch naming, and PR guidelines.
- Please follow the Code of Conduct in CODE_OF_CONDUCT.md.

---

## 🌟 Contributors

Thanks to everyone who has contributed to this project. 🙌

<a href="https://github.com/suryanshvermaa/Conference_website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=suryanshvermaa/Conference_website" alt="Contributors" />
</a>

---

## 👥 Maintainers

- Suryansh Verma (GitHub: suryanshvermaa)

---

## 📦 Deployment notes

- The compose file builds the backend image from [backend/Dockerfile](backend/Dockerfile) and exposes port `3000`.
- `app.env` is intentionally not committed; provide it securely via your CI/CD environment.
- The frontend is set up for Vercel (see [frontend/vercel.json](frontend/vercel.json)).

---

## 📄 License

MIT — see [LICENSE](LICENSE).
