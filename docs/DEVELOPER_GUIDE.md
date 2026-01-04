# Developer Guide (Beginner-Friendly)

This guide explains how to understand, run, modify, and maintain the **ICNARI 2026 Conference Website** codebase.

If you are new to full‑stack projects, read sections **1 → 9** first, then come back for workflows and deployment.

---

## 1) Project Overview

### What the project does
- A public conference website for ICNARI 2026 (pages like About, Authors, Programs, Gallery, Sponsors, Contact).
- An **admin dashboard** for managing content:
  - Speakers
  - Notices/Papers
  - Recent updates
  - Photo gallery
  - Committee members (Organising / Technical / International)
  - Contact messages

### Who this project is for
- Conference visitors: browse conference information.
- Admins/organizers: update the website content without editing code.

### High-level use cases
- Visitor views program/speakers and reads updates.
- Visitor submits a contact form.
- Admin logs in and:
  - uploads an image,
  - creates/updates speakers/committee members,
  - adds notices and updates,
  - manages the photo gallery,
  - reads contact messages.

---

## 2) Tech Stack Explanation

### Frontend (what & why)
- **React (with Vite)**: builds a fast single-page app (SPA) with modern tooling.
- **React Router**: handles page navigation in the browser without full reloads.
- **Tailwind CSS + Chakra UI**: UI styling (Tailwind utility classes + Chakra components).
- **Axios + fetch**: makes HTTP requests to the backend API.
- **React Toastify**: user notifications (success/error toasts).

### Backend (what & why)
- **Node.js + Express**: REST API server (simple and common for JavaScript backends).
- **Mongoose**: object modeling for MongoDB (schemas + convenient queries).
- **JWT (JSON Web Token)**: authentication tokens for admin-only routes.
- **bcryptjs**: secure password hashing.
- **dotenv**: loads environment variables from `.env`.
- **cors**: allows the frontend domain to call the backend API.

### Database and external services
- **MongoDB**: stores all content (speakers, notices, contacts, etc.).
- **Cloudinary**: stores uploaded images and returns a hosted URL.

---

## 3) Project Architecture

### Overall architecture
- **Client–server** architecture (frontend and backend are separate apps).
  - `frontend/` = React SPA
  - `backend/` = Express REST API
  - `data/` = local MongoDB Docker volume

### How frontend and backend communicate
- The frontend calls backend endpoints like:
  - `GET /speaker/all`
  - `POST /user/login`
- The backend responds with JSON.
- For protected admin endpoints, the frontend sends a JWT in a custom header:
  - `token: <JWT>`

### Data flow (step-by-step)

#### Example A: Admin login
1. Admin submits login form (email/password) in the frontend.
2. Frontend sends `POST /user/login`.
3. Backend validates credentials:
   - checks email exists,
   - compares password with bcrypt.
4. Backend returns a JWT token.
5. Frontend stores the token in `localStorage` and unlocks `/admin/*` routes.

#### Example B: Creating a speaker with an image
1. Admin uploads an image from the admin UI.
2. Frontend sends `POST /user/image` with multipart form data (`image` field).
3. Backend uploads to Cloudinary and returns `result.url`.
4. Frontend sends `POST /speaker/create` with `imageUrl` + other fields.
5. Backend saves the speaker document in MongoDB.

#### Example C: Public contact form
1. Visitor fills contact form.
2. Frontend sends `POST /contact` (no auth).
3. Backend validates required fields and stores the message in MongoDB.

---

## 4) Folder & File Structure

### Top level
- `docker-compose.yml`
  - Starts MongoDB locally via Docker.
- `data/`
  - MongoDB data files (Docker volume). You usually do not edit these manually.
- `backend/`
  - API server.
- `frontend/`
  - React app.

### Backend folder
- `backend/src/index.js`
  - **Backend entry point**. Creates Express app, enables CORS/JSON, mounts routes, starts server.
  - Critical file (edit carefully).
- `backend/src/routes/`
  - Express route modules. Each file wires URL paths to controller functions.
- `backend/src/controllers/`
  - Business logic: reads request body, talks to DB models, returns JSON.
  - Safe to modify when adding/changing API behavior.
- `backend/src/models/`
  - Mongoose schemas (MongoDB collections).
  - Critical for data shape; changes here can affect existing data.
- `backend/src/database/dbconn.js`
  - Mongo connection logic (reads `process.env.URI`).
  - Critical (if broken, backend won’t start).
- `backend/src/middlewares/middleware.js`
  - JWT auth middleware.
  - Critical for security.
- `backend/src/multer/multer.js`
  - Multer + Cloudinary configuration.
  - Critical for uploads.
- `backend/scripts/createAdmin.js`
  - CLI script to create an admin user directly in MongoDB.

### Frontend folder
- `frontend/src/main.jsx`
  - **Frontend entry point**. Renders React app and sets up router.
  - Critical (app won’t mount if broken).
- `frontend/src/App.jsx`
  - Main router definition (public pages + protected admin routes).
  - Safe to modify when adding routes.
- `frontend/src/components/`
  - Reusable UI components and admin dashboard components.
  - Safe to modify.
- `frontend/src/routes/`
  - Page-level components for routes like `/`, `/authors`, `/contact`, `/login`.

### Files to treat with extra care
- `backend/src/index.js`, `backend/src/database/dbconn.js`, `backend/src/middlewares/middleware.js`
- `docker-compose.yml` (affects DB startup)

---

## 5) Frontend Documentation

### Entry point
- `frontend/src/main.jsx` mounts the app into `#root` and wraps it with:
  - `BrowserRouter` for routing
  - `StrictMode` (React dev checks)
  - `CookiesProvider` (cookies library; token is currently stored in localStorage)

### Routing system
- `frontend/src/App.jsx` uses `Routes`/`Route`.
- Admin routes are nested under `/admin` and wrapped with a protected route.

### State management
- There is no global state library (like Redux).
- State is handled using:
  - React `useState`
  - `localStorage` for auth token and basic user data

### Component structure and reusability
- Public pages are in `frontend/src/routes/`.
- Reusable pieces (Navbar, Footer, admin forms, list views) are in `frontend/src/components/`.

### How API calls are made
- API base URL is read from:
  - `import.meta.env.VITE_API_URL`
- Calls are made using `axios` or `fetch` directly in components.
- Protected admin calls include a header:
  - `token: localStorage.getItem('token')`

Tip for maintainers: if you add many endpoints, consider creating a small API helper (example: `frontend/src/api/client.js`) so headers and base URL are centralized.

---

## 6) Backend Documentation

### Entry point
- `backend/src/index.js`:
  - loads env vars (`dotenv.config()`)
  - enables CORS for specific origins
  - enables JSON parsing (`express.json()`)
  - mounts the main router at `/`
  - connects to MongoDB, then starts the server

### API structure and routing
- `backend/src/routes/index.js` mounts route modules:
  - `/user`
  - `/photogallery`
  - `/speaker`
  - `/papers`
  - `/recentupdate`
  - `/contact`
  - `/organisingcommitee`
  - `/internationalcommitee`
  - `/technicalcommitee`

### Controllers / “services” / middleware
- Controllers live in `backend/src/controllers/*`.
- There is no separate “service layer” folder right now; controllers directly call Mongoose models.
- Middleware:
  - `backend/src/middlewares/middleware.js` (`auth`) verifies JWT from `req.headers.token`.

### Authentication & authorization flow
- Login endpoint: `POST /user/login`
  - returns `{ token, user, ... }`.
- Protected routes use `auth` middleware.
- Frontend protection:
  - `frontend/src/components/ProtectedRoutes.jsx` checks if `localStorage.token` exists.

Important detail: the backend expects the header name to be exactly `token` (not `Authorization`).

### Error handling strategy
- Errors are handled inside each controller using `try/catch`.
- Responses are **not fully consistent** across endpoints:
  - some return `{success: true/false, msg: ...}`
  - others return `{message: ...}`
  - some use `res.status(400/401/500)` properly, others return 200 with `success:false`

As a maintainer, prefer:
- consistent status codes (400 for bad request, 401 for auth, 500 for server errors)
- consistent response shape

---

## 7) Database Design

The database is MongoDB. Each Mongoose model becomes a MongoDB collection.

### Collections (schemas)

#### `User`
- Fields:
  - `name` (string, required)
  - `email` (string, required, unique)
  - `password` (string, required, hashed)
  - `photo` (string URL, default)
- Notes:
  - Controllers refer to `pic`, but the schema uses `photo`. That means profile image may not save as intended unless aligned.

#### `Speaker`
- Fields:
  - `name` (required)
  - `specialization` (array of strings)
  - `imageUrl` (string URL)
  - `description` (required)
  - `priority` (number, default 0)
- Common query:
  - `Speaker.find().sort({ createdAt: -1 })`

#### `Notice` (used for “Papers”)
- Fields:
  - `heading` (required)
  - `content` (required)
  - `link` (optional)
  - `authors` (array of strings)

#### `RecentUpdate`
- Fields:
  - `title` (required)
  - `description` (required)
  - `eventDate` (required date)
  - `link` (optional)

#### `Photo`
- Fields:
  - `imageUrl` (required)
  - `tags` (array of strings)

#### Committee member collections
There are three similar collections:
- `OrganisingCommitteeMember` (has `priority`)
- `InternationalAdvisoryCommitteeMember`
- `TechnicalProgrammeCommitteeMember`

Common fields:
- `name` (required)
- `specialization` (array)
- `college` (required)
- `committee` (required)
- `imageUrl` (string)
- `description` (required)

#### `Contact`
- Fields:
  - `name`, `email`, `subject`, `message` (required)
  - `phone` (optional)
  - `createdAt`

### Relationships between data
- Most collections are **independent** (no MongoDB references between documents).
- “Relationships” are mostly conceptual (e.g., committee members belong to a committee via a `committee` string).

### Common query patterns
- List pages: `Model.find().sort({ createdAt: -1 })`
- Delete by id: `Model.findByIdAndDelete(id)`
- Update by id:
  - fetch with `findById`, mutate fields, `save()`
- Priority ordering is supported in the data model (fields exist), but sorting by priority is not consistently applied in controllers.

---

## 8) Environment Setup

### Required software
- **Node.js**: recommended **18+** (Vite 6 typically requires Node 18+).
- **pnpm**: package manager used by both frontend and backend.
- **Docker + Docker Compose**: for running MongoDB locally.

### Environment variables

#### Backend (`backend/.env`)
Example:
```env
PORT=3000
URI=mongodb://root:example@localhost:27017/conference_db?authSource=admin
secret=your_jwt_secret
cloud_name=your_cloudinary_cloud
api_key=your_cloudinary_key
api_secret=your_cloudinary_secret
```

Notes:
- The backend uses `URI` for MongoDB connection.
- The admin creation script `backend/scripts/createAdmin.js` uses `MONGO_URI` (or falls back to `mongodb://root:example@localhost:27017`). If you use a custom DB name/authSource, set `MONGO_URI` too.

#### Frontend (`frontend/.env`)
Example:
```env
VITE_API_URL=http://localhost:3000
```

### Step-by-step local setup
1. Start MongoDB with Docker:
   - From project root: `docker-compose up -d`
2. Backend setup:
   - `cd backend`
   - `pnpm install`
   - Create `backend/.env` (see above)
   - `pnpm run dev`
3. Frontend setup:
   - `cd frontend`
   - `pnpm install`
   - Create `frontend/.env` (see above)
   - `pnpm run dev`
4. Open the site:
   - Vite dev server prints the local URL (commonly `http://localhost:5173`).

---

## 9) How to Run the Project

### Development mode
- MongoDB: `docker-compose up -d`
- Backend:
  - `cd backend && pnpm run dev`
- Frontend:
  - `cd frontend && pnpm run dev`

### Production mode (basic)
Backend:
- `cd backend`
- `pnpm install --prod`
- `pnpm start`

Frontend:
- `cd frontend`
- `pnpm install`
- `pnpm run build` (outputs `frontend/dist/`)
- `pnpm run preview` (local preview of the production build)

### Common commands explained
- `pnpm install`: installs dependencies.
- `pnpm run dev`: runs development server with auto-reload (backend uses nodemon).
- `pnpm run build`: creates a production build (frontend).
- `pnpm start`: runs backend in “production” mode (no auto-reload).

---

## 10) Common Workflows

### Adding a new feature (example: new content type)
1. Create a Mongoose model in `backend/src/models/`.
2. Create controller functions in `backend/src/controllers/`.
3. Add a route file in `backend/src/routes/`.
4. Mount the route in `backend/src/routes/index.js`.
5. Build frontend UI:
   - create a page or component
   - add route in `frontend/src/App.jsx`
6. Add auth protection if needed:
   - backend: `auth` middleware
   - frontend: ensure it lives under `/admin` protected routes

### Fixing a bug
- Reproduce the bug.
- Identify if it’s frontend, backend, or data:
  - Frontend errors show in browser console.
  - Backend errors show in backend terminal logs.
  - Data issues can be inspected in MongoDB.
- Add a small log statement in the relevant controller/component to confirm the flow.

### Updating frontend without breaking backend
- Do not change endpoint URLs without updating both sides.
- Keep the request/response shape stable:
  - if backend returns `speakers` as an array, keep it consistent.
- Use `.env` to target dev/staging/prod backend URLs.

### Updating backend APIs safely
- Add new fields in responses rather than removing old ones.
- Keep old endpoints until the frontend is migrated.
- Prefer versioning (example `/v2/...`) if you need breaking changes.

---

## 11) Common Mistakes & Debugging Tips

### Frequent errors
- **CORS error** (browser blocks request):
  - The backend only allows certain origins.
  - If you run frontend on a different URL/port, add it to the CORS list in `backend/src/index.js`.
- **401 Unauthorized**:
  - Missing `token` header.
  - Token expired/invalid.
  - You’re calling an admin endpoint without logging in.
- **MongoDB connection failed**:
  - Docker container not running.
  - Wrong `URI` in `backend/.env`.
- **`VITE_API_URL` undefined**:
  - Missing `frontend/.env`.
  - Restart Vite after changing env vars.

### How to debug frontend issues
- Open DevTools → Console + Network.
- Check the request URL is correct.
- Check response status code and JSON.

### How to debug backend issues
- Watch the backend terminal logs.
- Add temporary `console.log(req.body)` in controllers.
- Validate `process.env.*` values are loaded (dotenv runs at startup).

---

## 12) Deployment Overview

### How the project is deployed (current setup)
- Frontend:
  - Deployed on **Vercel**.
  - `frontend/vercel.json` rewrites routes to `index.html` so React Router works.
- Backend:
  - Deployed as a Node.js server (separate from Vercel frontend).
- Database:
  - In development, MongoDB runs via Docker.
  - In production, you should use a managed MongoDB or a dedicated server.

### Environment differences (dev vs prod)
- Dev:
  - `VITE_API_URL=http://localhost:3000`
  - MongoDB local Docker
- Prod:
  - `VITE_API_URL=https://<your-backend-domain>`
  - MongoDB hosted
  - Different JWT secret and Cloudinary keys

### Things to be careful about
- Ensure backend CORS allows the production frontend origin.
- Never commit `.env` files.
- Use strong secrets in production.

---

## 13) Security Considerations

### How sensitive data is handled
- Passwords are hashed with bcrypt before storage.
- JWT secret is stored in env vars.

### Authentication best practices used
- JWT-based auth for admin routes.
- Password hashing.

### Common security pitfalls to avoid
- Token in `localStorage` is vulnerable to XSS (if a malicious script runs, it can read the token).
  - Consider moving to **HTTP-only cookies** for better protection.
- The API uses a custom `token` header.
  - Consider switching to `Authorization: Bearer <token>` (more standard).
- No rate limiting:
  - Consider adding rate limiting on login endpoints to reduce brute-force risk.

---

## 14) Future Improvements

### Known limitations
- Inconsistent API response shapes and error status codes.
- Some mismatches between code and schema:
  - User controller expects `pic`, schema uses `photo`.
  - `backend/routes.md` appears outdated and does not match current routes.

### Scalability considerations
- Add pagination for list endpoints (speakers, photos, contacts) if data grows.
- Add indexing on commonly queried fields (e.g., `createdAt`, `priority`).

### Suggested improvements
- Create a centralized error handler middleware in Express.
- Add request validation (schema-based) for all endpoints.
- Centralize frontend API calls (single axios instance with auth header).
- Add role-based access control if you need multiple admin roles.
