# Project Issue Backlog (for Open Source)

This file lists **new issues found by scanning the repository** (backend, frontend, docs, and deployment configs).

Note: Issues already present in your provided screenshot are intentionally **not** repeated here.

---

## Backend (API / Database)

1) 🐛 **User profile field mismatch: `pic` vs `photo`**
- 🏷️ Labels: backend, bug
- Problem: `userController` expects `pic` but `User` model defines `photo`, so profile images may not persist and frontend reads may be inconsistent.
- Where: `backend/src/controllers/userController.js`, `backend/src/models/User.js`, `frontend/src/components/AddAdmin.jsx`, `frontend/src/routes/Login.jsx`
- Acceptance criteria:
  - Use a single field name everywhere (`photo` recommended).
  - Update controllers + OpenAPI schema accordingly.
  - Existing users continue to work (migrate or fallback read).

2) 🐛 **`getAllUsers` projection uses non-existent field `pic`**
- 🏷️ Labels: backend, bug, good first issue
- Problem: `UserModel.find(..., { ... pic: 1 })` won’t return the intended photo field.
- Where: `backend/src/controllers/userController.js`
- Acceptance criteria:
  - Replace `pic` with `photo` (or the chosen canonical field).
  - Add a small regression test / manual curl example in docs.

3) 🔐 **Sensitive fields returned from admin creation (`createNewAdmin`)**
- 🏷️ Labels: backend, security
- Problem: Response includes `user:newuser` which contains hashed password.
- Where: `backend/src/controllers/userController.js`
- Acceptance criteria:
  - Never return `password` (or other sensitive fields) in any response.
  - Use `.select('-password')` or map to a safe DTO.

4) 🔐 **Sensitive fields returned from `signUp` (even if route is disabled)**
- 🏷️ Labels: backend, security
- Problem: `signUp` returns `user:newuser` including hashed password.
- Where: `backend/src/controllers/userController.js`
- Acceptance criteria:
  - Sanitize response output.
  - Consider removing or guarding unused endpoints (admin-only).

5) 🐛 **Inconsistent HTTP status codes in user endpoints**
- 🏷️ Labels: backend, bug
- Problem: Validation failures often return `200` with `{success:false}` instead of `400`; server errors return `200` in some branches.
- Where: `backend/src/controllers/userController.js`
- Acceptance criteria:
  - Use `400` for invalid input, `401`/`403` for auth, `404` for not found, `500` for server errors.
  - Keep response shape consistent.

6) 💥 **`uploadImage` crashes when `req.file` is missing**
- 🏷️ Labels: backend, bug, good first issue
- Problem: Assumes `req.file.path` exists; multer failures or missing file will throw.
- Where: `backend/src/controllers/userController.js`
- Acceptance criteria:
  - Return `400` with a clear message when no file is provided.
  - Return `500` on Cloudinary errors.

7) 🧹 **Cloud upload leaves temp files on disk**
- 🏷️ Labels: backend, bug
- Problem: Multer writes to disk; after Cloudinary upload, local file is never deleted.
- Where: `backend/src/controllers/userController.js`, `backend/src/multer/multer.js`
- Acceptance criteria:
  - Delete temp files after successful or failed Cloudinary upload.
  - Ensure the temp directory is configurable and git-ignored.

8) ⚙️ **Multer storage config lacks `destination` and relies on defaults**
- 🏷️ Labels: backend, enhancement
- Problem: Disk destination is implicit; behavior differs by environment and may fill temp directories.
- Where: `backend/src/multer/multer.js`
- Acceptance criteria:
  - Define an explicit temp upload directory.
  - Ensure it’s excluded from git and cleaned up.

9) 🐛 **`deleteImage` API contract mismatch (body vs path param)**
- 🏷️ Labels: backend, bug
- Problem: JSDoc suggests `:imageurl` param, implementation reads `req.body.imageurl`.
- Where: `backend/src/controllers/userController.js`
- Acceptance criteria:
  - Align route + controller + OpenAPI: either use `DELETE /user/image` with body OR `DELETE /user/image/:id`.
  - Return `400` for missing input.

10) 🛡️ **Fragile Cloudinary `public_id` extraction from URL**
- 🏷️ Labels: backend, security, enhancement
- Problem: `getImageByImageUrl` depends on a specific URL segment count and can break for different Cloudinary setups.
- Where: `backend/src/controllers/userController.js`
- Acceptance criteria:
  - Store `public_id` at upload time and delete using `public_id`.
  - If URL is accepted, implement a robust parser with validation.

11) 💥 **Photo gallery upload controller uses undeclared variable**
- 🏷️ Labels: backend, bug, good first issue
- Problem: `imageUrl=req.body.imageUrl` without `const/let` creates a global variable.
- Where: `backend/src/controllers/photoController.js`
- Acceptance criteria:
  - Declare `const imageUrl = ...`.
  - Add input validation (required `imageUrl`/tags).

12) 🐛 **Photo gallery upload route + controller mismatch (multer file ignored)**
- 🏷️ Labels: backend, bug
- Problem: Route uses `upload.single('image')`, but controller ignores `req.file` and expects `req.body.imageUrl`.
- Where: `backend/src/routes/photoRoutes.js`, `backend/src/controllers/photoController.js`
- Acceptance criteria:
  - Choose one approach:
    - (A) Accept file and upload to Cloudinary server-side, OR
    - (B) Remove multer and accept `imageUrl` only.
  - Update docs and frontend accordingly.

13) 🐛 **Photo delete endpoint returns success even if id doesn’t exist**
- 🏷️ Labels: backend, bug, good first issue
- Problem: `findByIdAndDelete` is not checked; non-existent ID still returns 200.
- Where: `backend/src/controllers/photoController.js`
- Acceptance criteria:
  - Return `404` when the photo doesn’t exist.

14) 🐛 **Speaker create endpoint lacks required-field validation**
- 🏷️ Labels: backend, bug
- Problem: `name`/`description`/`imageUrl` can be missing, resulting in inconsistent DB state.
- Where: `backend/src/controllers/speakerController.js`
- Acceptance criteria:
  - Validate required fields with clear `400` errors.

15) 🐛 **Speaker update returns `201 Created` instead of `200 OK`**
- 🏷️ Labels: backend, bug, good first issue
- Where: `backend/src/controllers/speakerController.js`
- Acceptance criteria:
  - Return `200` for updates.

16) ✨ **Speaker specialization parsing does not trim values consistently**
- 🏷️ Labels: backend, enhancement
- Problem: create uses `split(',')` (no trim), update trims; stored values differ.
- Where: `backend/src/controllers/speakerController.js`
- Acceptance criteria:
  - Normalize specialization parsing in both create and update.

17) 🐛 **Priority endpoint does not enforce integer type**
- 🏷️ Labels: backend, bug
- Problem: `priority` can be float/string.
- Where: `backend/src/controllers/speakerController.js`
- Acceptance criteria:
  - Enforce integer validation (e.g., `Number.isInteger`).

18) ✨ **Recent updates: missing input validation on create**
- 🏷️ Labels: backend, enhancement
- Problem: Can save empty titles/descriptions and invalid dates.
- Where: `backend/src/controllers/recentUpdateController.js`
- Acceptance criteria:
  - Validate required fields; validate/parse `eventDate`.

19) ✨ **Notices/Papers: missing input validation on create**
- 🏷️ Labels: backend, enhancement
- Problem: `heading`/`content` can be empty; link/authors not validated.
- Where: `backend/src/controllers/noticeController.js`
- Acceptance criteria:
  - Validate required fields and return `400` on invalid input.

20) ✨ **Contact form: validate email format and phone number**
- 🏷️ Labels: backend, enhancement, good first issue
- Problem: Only checks presence; invalid email/phone can be stored.
- Where: `backend/src/controllers/contactController.js`
- Acceptance criteria:
  - Validate with `validator` (already a dependency).

21) 🐛 **Committee routes use inconsistent not-found and update semantics**
- 🏷️ Labels: backend, bug
- Problem: Some delete endpoints return `400` when a member is missing; updates return `201`.
- Where: committee controllers under `backend/src/controllers/*Controller*.js`
- Acceptance criteria:
  - Use `404` for missing records, `200` for updates.

22) 🧭 **Misspellings in route paths (`c **Notices/Papers: missing input validommitee`)**
- 🏷️ Labels: backend, enhancement
- Problem: Public API paths and frontend calls include misspellings, increasing confusion and breaking expectations.
- Where: `backend/src/routes/index.js`, committee route files, frontend committee components
- Acceptance criteria:
  - Introduce correct spelling routes (`/committee/...`) while keeping old routes as aliases (non-breaking).
  - Update docs to prefer the corrected routes.

23) 🧹 **Model filename typo (`InductryProgramCommittee.js`)**
- 🏷️ Labels: backend, maintenance, good first issue
- Problem: File naming typo reduces discoverability and looks unprofessional.
- Where: `backend/src/models/InductryProgramCommittee.js`
- Acceptance criteria:
  - Rename file and update imports safely.

24) 🧩 **Inconsistent JSON response shape across endpoints**
- 🏷️ Labels: backend, enhancement
- Problem: Some endpoints use `{success,msg}`, others `{message}`, others `{error}`.
- Where: multiple controllers
- Acceptance criteria:
  - Define a consistent response contract and apply across controllers.

25) 🛡️ **Potential internal error leakage (`err.message` returned directly)**
- 🏷️ Labels: backend, security
- Problem: Several endpoints return raw `error.message` which can leak internals.
- Where: multiple controllers
- Acceptance criteria:
  - Return user-safe error messages; log detailed errors server-side.

26) 🧩 **Missing global Express error handler and async wrapper**
- 🏷️ Labels: backend, enhancement
- Problem: Repeated try/catch with inconsistent behavior.
- Where: backend architecture
- Acceptance criteria:
  - Add a centralized error handler middleware.
  - Use an `asyncHandler` wrapper to reduce boilerplate.

27) 🛡️ **No rate limiting on public endpoints (abuse risk)**
- 🏷️ Labels: backend, security
- Problem: `/contact` and `/user/login` can be abused.
- Acceptance criteria:
  - Add rate limiting middleware (e.g., `express-rate-limit`) with sane defaults.

28) 🛡️ **Missing security headers (`helmet`)**
- 🏷️ Labels: backend, security
- Acceptance criteria:
  - Add `helmet()` with appropriate configuration.

29) ⚙️ **Hard-coded CORS origins instead of environment configuration**
- 🏷️ Labels: backend, enhancement
- Problem: Updating origins requires code changes.
- Where: `backend/src/index.js`
- Acceptance criteria:
  - Read allowed origins from env (comma-separated list) and document it.

30) 🧹 **Console logging in API responses / noisy logs**
- 🏷️ Labels: backend, maintenance, good first issue
- Problem: `getAllUsers` logs `req.user`; many controllers log raw errors.
- Where: `backend/src/controllers/userController.js`, others
- Acceptance criteria:
  - Remove debug logs or gate them behind a `LOG_LEVEL`.

---

## Frontend (React / UX / Reliability)

31) 💥 **Navbar props bug: wrong function signature**
- 🏷️ Labels: frontend, bug, good first issue
- Problem: `Navbar` is declared as `(fetch, setfetch)` but React passes a single props object; this breaks dependencies and auth state updates.
- Where: `frontend/src/components/Navbar.jsx`
- Acceptance criteria:
  - Change signature to `({ fetch, setfetch })` (or rename as needed).

32) 🎨 **Navbar uses placeholder Vite logo**
- 🏷️ Labels: frontend, enhancement, good first issue
- Problem: UI shows `/vite.svg` instead of conference branding.
- Where: `frontend/src/components/Navbar.jsx`
- Acceptance criteria:
  - Replace with a real logo asset from `frontend/src/assets` or `frontend/public`.

33) 🧭 **Navbar menu labels use `<Link to="">` (no-op navigation)**
- 🏷️ Labels: frontend, enhancement
- Problem: Clicking “About/Authors/Programs/Sponsors” doesn’t navigate; it’s just a hover dropdown.
- Where: `frontend/src/components/Navbar.jsx`
- Acceptance criteria:
  - Use a `<button>` for dropdown toggles OR link to a meaningful landing page.

34) 💥 **Runtime error: `toast` is used but not imported**
- 🏷️ Labels: frontend, bug, good first issue
- Problem: `AllUpdatesUser` calls `toast.error(...)` without importing `toast`.
- Where: `frontend/src/components/AllUpdatesUser.jsx`
- Acceptance criteria:
  - Import `toast` or remove the usage.

35) 🧹 **Public pages send auth token header unnecessarily**
- 🏷️ Labels: frontend, maintenance, good first issue
- Problem: Public list endpoints (`/recentupdate/all`, etc.) are requested with a `token` header even when not needed.
- Where: e.g. `frontend/src/components/AllUpdatesUser.jsx`
- Acceptance criteria:
  - Remove token header from public requests.

36) 🧹 **Duplicate ToastContainers across many components**
- 🏷️ Labels: frontend, maintenance
- Problem: `ToastContainer` exists in `App.jsx` and in many individual components, risking duplicate toasts and extra DOM.
- Where: `frontend/src/App.jsx` and multiple `frontend/src/components/*`
- Acceptance criteria:
  - Keep a single `ToastContainer` at app root.
  - Remove per-component containers.

37) 🧩 **API client duplication (axios config repeated everywhere)**
- 🏷️ Labels: frontend, enhancement
- Problem: Base URL and headers are repeated and inconsistent.
- Acceptance criteria:
  - Create a shared axios instance (e.g. `src/api/client.js`) with baseURL + token injection.

38) 🛡️ **Token stored in `localStorage` (XSS risk)**
- 🏷️ Labels: frontend, security
- Problem: If any XSS exists, attacker can steal token.
- Acceptance criteria:
  - Document the risk and provide a migration path to httpOnly cookies (or other strategy).

39) 🐛 **Inconsistent list keys use array index**
- 🏷️ Labels: frontend, bug, good first issue
- Problem: `AllUpdatesUser` uses `index` as `key`, causing unstable rendering.
- Where: `frontend/src/components/AllUpdatesUser.jsx`
- Acceptance criteria:
  - Use `_id` from backend documents.

40) ✨ **Missing loading/empty states on some public list pages**
- 🏷️ Labels: frontend, enhancement
- Problem: Some pages render empty UI during fetch.
- Acceptance criteria:
  - Add loading indicator and empty-state message to public pages.

41) 🧭 **Hard-coded/odd route slugs make URLs brittle**
- 🏷️ Labels: frontend, enhancement
- Problem: Routes like `/about/about-nit-patna-(bihta-campus)` are hard to share and may cause encoding issues.
- Where: `frontend/src/App.jsx`
- Acceptance criteria:
  - Replace with clean slugs (keep backward compatibility via redirects).

42) 🐛 **Potential broken link strategy for static HTML pages**
- 🏷️ Labels: frontend, bug
- Problem: Navbar uses an `<a href="/authors/...html">` for “CMT Acknowledgement”; this can bypass SPA routing.
- Where: `frontend/src/components/Navbar.jsx`
- Acceptance criteria:
  - Ensure the file exists in `public/` and works in production, OR convert it to a React route.

43) ⚙️ **Environment config: committed `frontend/.env`**
- 🏷️ Labels: frontend, devops, good first issue
- Problem: Committing `.env` makes deployments and forks harder (and risks leaking values if later expanded).
- Where: `frontend/.env`
- Acceptance criteria:
  - Add `frontend/.env.example`.
  - Ensure `.env` is git-ignored and not committed.

44) 🐛 **Login stores `photo` from response, but backend user field is `photo` and admin creation uses `pic`**
- 🏷️ Labels: frontend, bug
- Problem: UI may show missing profile image after login/admin creation.
- Where: `frontend/src/routes/Login.jsx`, `frontend/src/components/AddAdmin.jsx`
- Acceptance criteria:
  - After backend field naming is fixed, update frontend storage usage.

45) 🛟 **No top-level Error Boundary**
- 🏷️ Labels: frontend, enhancement
- Problem: Runtime errors (like missing imports) can blank the app.
- Acceptance criteria:
  - Add a simple Error Boundary around routes with a friendly fallback.

46) 📄 **Backend supports pagination params, but frontend has no pagination UI/queries**
- 🏷️ Labels: frontend, backend, enhancement, performance, ux
- Problem: Multiple backend “list all” endpoints already support pagination-style query params (`skip` + `limit`), but the frontend always calls the `/all` routes without any pagination params and renders unbounded lists (or does client-side slicing after fetching everything). This wastes bandwidth, slows down admin/public pages as data grows, and makes the pagination support in the API unused.
- Where:
  - Backend (pagination implemented via `req.query.skip` + `req.query.limit`):
    - `backend/src/controllers/noticeController.js` (GET `/papers/all`)
    - `backend/src/controllers/recentUpdateController.js` (GET `/recentupdate/all`)
    - `backend/src/controllers/speakerController.js` (GET `/speaker/all`)
    - `backend/src/controllers/contactController.js` (GET `/contact`)
    - Routes: `backend/src/routes/noticeRoutes.js`, `backend/src/routes/recentUpdateRoutes.js`, `backend/src/routes/speakerRoutes.js`, `backend/src/routes/contactroute.js`
  - Frontend (calls list endpoints without pagination params / no pagination controls):
    - Admin lists: `frontend/src/components/AllPapers.jsx`, `frontend/src/components/AllUpdates.jsx`, `frontend/src/components/AllSpeakers.jsx`, `frontend/src/components/GetAllContact.jsx`
    - Public lists: `frontend/src/components/AllPapersUser.jsx`, `frontend/src/components/AllUpdatesUser.jsx`, `frontend/src/components/programscomp/AllSpeakersprog.jsx`
    - Home highlights: `frontend/src/components/Board.jsx` (fetches *all* then slices; also has unused `page` state)
- Acceptance criteria:
  - Add pagination state (`page`, `pageSize`) to the affected list pages and render minimal controls (Prev/Next or page numbers).
  - Update API calls to pass `skip=(page-1)*pageSize` and `limit=pageSize` (or update backend to accept `page` + `limit` and keep `skip` as backward-compatible).
  - Ensure deleting/updating items keeps pagination consistent (e.g., refetch current page).
  - (Optional but recommended) Add a total count to responses (e.g., `{ items, total }` or `X-Total-Count`) so the UI can disable “Next” correctly.

---

## Docs

47) 📝 **`backend/routes.md` is outdated / unrelated to this project**
- 🏷️ Labels: docs, good first issue
- Problem: Mentions `/api/users` and `/api/events` which don’t exist.
- Where: `backend/routes.md`
- Acceptance criteria:
  - Replace with real routes or remove the file.

48) 📝 **Developer guide references missing `CODE_OF_CONDUCT.md`**
- 🏷️ Labels: docs, good first issue
- Problem: README mentions a Code of Conduct file that isn’t present.
- Where: `README.md`
- Acceptance criteria:
  - Add `CODE_OF_CONDUCT.md` or remove the reference.

49) 📝 **OpenAPI spec contains TODOs and unverified server URL**
- 🏷️ Labels: docs, good first issue
- Problem: `docs/openapi.yaml` includes “TODO: verify” notes.
- Acceptance criteria:
  - Verify the correct API host(s) and remove TODO markers.

50) 📝 **OpenAPI: document response schemas consistently**
- 🏷️ Labels: docs, enhancement
- Problem: Many endpoints return inconsistent shapes; spec can drift.
- Acceptance criteria:
  - Standardize responses and update `docs/openapi.yaml`.

---

## DevOps / CI / Deployment

51) ⚙️ **No GitHub Actions workflows**
- 🏷️ Labels: devops, enhancement
- Problem: No automated lint/build checks for PRs.
- Acceptance criteria:
  - Add workflows for frontend lint/build and backend lint/basic runtime check.

52) 🛡️ **docker-compose.dev uses weak default MongoDB credentials**
- 🏷️ Labels: devops, security
- Problem: `root/example` is insecure and exposed on `27017`.
- Where: `docker-compose.dev.yml`
- Acceptance criteria:
  - Move credentials to env file and document local-only use.
  - Optionally bind to localhost only.

53) ⚙️ **docker-compose.prod lacks restart policies and healthchecks**
- 🏷️ Labels: devops, enhancement
- Problem: Containers won’t auto-recover; no readiness checks.
- Where: `docker-compose.prod.yml`
- Acceptance criteria:
  - Add `restart: unless-stopped` and a basic healthcheck.

54) ⚙️ **docker-compose.prod duplicates backend services without load balancing**
- 🏷️ Labels: devops, enhancement
- Problem: Two replicas expose different ports but no routing layer.
- Acceptance criteria:
  - Either remove the replica or add a reverse proxy/load balancer configuration.

55) ⚙️ **Jenkinsfile uses hard-coded env file location**
- 🏷️ Labels: devops, enhancement
- Problem: Not portable; breaks on different Jenkins agents.
- Where: `Jenkinsfile`
- Acceptance criteria:
  - Use Jenkins credentials / secret files, or a parameterized path.

56) ⚙️ **Backend Dockerfile lacks `WORKDIR` and duplicates `EXPOSE`**
- 🏷️ Labels: devops, enhancement, good first issue
- Problem: Image layout is non-standard; double `EXPOSE` and no `WORKDIR` makes maintenance harder.
- Where: `backend/Dockerfile`
- Acceptance criteria:
  - Add `WORKDIR /app`, remove duplicate `EXPOSE`, ensure correct ownership for non-root user.

---

## Repo Hygiene / Maintenance

57) 🧪 **No automated tests**
- 🏷️ Labels: maintenance, enhancement
- Problem: There are no unit/integration tests in repo.
- Acceptance criteria:
  - Add minimal tests for at least one controller and one frontend component or API client.

58) 🧹 **Backend lacks ESLint configuration**
- 🏷️ Labels: maintenance, enhancement
- Problem: Frontend has linting; backend does not.
- Acceptance criteria:
  - Add ESLint (or a minimal lint script) for backend.

59) 🧹 **Unused imports in backend controllers (e.g., `fs`)**
- 🏷️ Labels: maintenance, good first issue
- Problem: `fs` is imported but not used in multiple controllers.
- Acceptance criteria:
  - Remove unused imports and fix lint warnings.

60) 🧹 **Inconsistent naming and typos in identifiers**
- 🏷️ Labels: maintenance, good first issue
- Problem: `recendUpdatesRouter` typo and multiple committee naming typos.
- Acceptance criteria:
  - Standardize naming in code while preserving API compatibility.

61) ⚙️ **Environment variable naming is inconsistent across runtime and scripts**
- 🏷️ Labels: maintenance, enhancement
- Problem: Server uses `URI`, admin script uses `MONGO_URI`.
- Where: `backend/src/database/dbconn.js`, `backend/scripts/createAdmin.js`, docs
- Acceptance criteria:
  - Use one env var name consistently and update docs/examples.
