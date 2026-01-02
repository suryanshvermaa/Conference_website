# ICNARI 2026 Conference Website

This website is for the ICNARI 2026 conference hosted by NIT Patna (Bihta campus) and managed by NASL. It provides public pages (Authors, Programs, Committees, Gallery, Sponsorship, Contact) and an admin dashboard for content management.

Live: https://icnari26.nasl.in

## Stack
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, Multer, Cloudinary
- Frontend: React + Vite, React Router, Chakra UI, Tailwind, Axios, Toastify, Swiper

## Quick Start
1) MongoDB (Docker):
```bash
docker-compose up -d
```
2) Backend:
```bash
cd backend
pnpm install
# backend/.env
# PORT=3000
# URI=mongodb://root:example@localhost:27017/conference_db?authSource=admin
# secret=<jwt_secret>
# cloud_name=<cloudinary_cloud>
# api_key=<cloudinary_key>
# api_secret=<cloudinary_secret>
pnpm run dev
```
3) Frontend:
```bash
cd frontend
pnpm install
# frontend/.env
# VITE_API_URL=http://localhost:3000
pnpm run dev
```

## Authentication
- Use header `token: <JWT>` for protected endpoints (401 if missing/invalid).

## API Overview
- `/user` — login, create admin (auth), image upload/delete
- `/speaker` — create/update/delete/list, set priority (auth for write)
- `/papers` — notices add/delete/list (auth for write)
- `/recentupdate` — add/delete/list (auth for write)
- `/contact` — submit (public), list (auth)
- `/organisingcommitee` — members CRUD + priority
- `/internationalcommitee` — members CRUD
- `/technicalcommitee` — members CRUD

## CORS
- Allowed origins: `https://icnari26.nasl.in`, `https://conference-website-three.vercel.app`, `http://localhost:5173`

## Docker
- MongoDB `mongo:8.0` on `27017`, volume `./data`; connect via `mongodb://root:example@localhost:27017/<db>?authSource=admin`.

## Deployment
- Frontend: Vercel (see `vercel.json`)
- Backend: Node.js server with envs above

## Quick API (cURL)
Login (get JWT):
```bash
curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"your_password"}'
```
Upload photo (field `image`, auth):
```bash
curl -X POST http://localhost:3000/photogallery/upload \
  -H "token: YOUR_JWT_TOKEN" \
  -F image=@/path/to/image.jpg
```
List speakers:
```bash
curl http://localhost:3000/speaker/all
```
Delete photo by id (auth):
```bash
curl -X DELETE http://localhost:3000/photogallery/delete/PHOTO_ID \
  -H "token: YOUR_JWT_TOKEN"
```

## 📁 Project Structure

```
Conference_website/
├── backend/                           # Node.js Express API Server
│   ├── src/
│   │   ├── controllers/              # Request handlers & business logic
│   │   │   ├── userController.js           # User authentication & management
│   │   │   ├── speakerController.js        # Speaker CRUD operations
│   │   │   ├── photoController.js          # Photo gallery management
│   │   │   ├── contactController.js        # Contact form handling
│   │   │   ├── organisingmembercontroller.js # Committee management
│   │   │   ├── recentUpdateController.js   # News & announcements
│   │   │   ├── technicalController.js      # Technical committee
│   │   │   ├── InternationalController.js  # International advisory
│   │   │   └── noticeController.js         # Notice management
│   │   ├── models/                   # MongoDB Mongoose schemas
│   │   │   ├── User.js                     # Admin user model
│   │   │   ├── Speaker.js                  # Speaker profiles
│   │   │   ├── Photo.js                    # Gallery images
│   │   │   ├── Contact.js                  # Contact submissions
│   │   │   ├── OrganisingCommitteeMember.js # Committee members
│   │   │   ├── RecentUpdates.js            # News & updates
│   │   │   ├── TechnicalProgrammeCommitteeMember.js
│   │   │   ├── InternationalAdvisoryCommitteeMember.js
│   │   │   └── Notices.js                  # Conference notices
│   │   ├── routes/                   # API endpoint definitions
│   │   ├── database/                 # Database connection config
│   │   ├── middlewares/              # Custom middleware (auth, validation)
│   │   └── multer/                   # File upload configuration
│   ├── package.json                  # Backend dependencies
│   └── pnpm-lock.yaml               # Package lock file
├── frontend/                         # React Vite Application
│   ├── src/
│   │   ├── routes/                   # Main page components
│   │   │   ├── Home.jsx                   # Landing page
│   │   │   ├── About.jsx                  # Conference information
│   │   │   ├── Authors.jsx                # Author guidelines
│   │   │   ├── Program.jsx                # Conference schedule
│   │   │   ├── Contact.jsx                # Contact page
│   │   │   ├── Sponsors.jsx               # Sponsorship information
│   │   │   ├── Admin.jsx                  # Admin dashboard
│   │   │   └── Login.jsx                  # Admin authentication
│   │   ├── components/               # Reusable UI components
│   │   │   ├── aboutcomp/                 # About page components
│   │   │   ├── authorcomp/                # Author-related components
│   │   │   ├── programscomp/              # Program schedule components
│   │   │   ├── OrganisingCommittee/       # Committee management
│   │   │   ├── InternationalCommittee/    # International advisory
│   │   │   ├── TechnicalCommittee/        # Technical committee
│   │   │   └── [Various UI components]    # Navbar, Footer, Forms, etc.
│   │   ├── assets/                   # Static assets
│   │   ├── App.jsx                   # Main application component
│   │   └── main.jsx                  # Application entry point
│   ├── public/                       # Public static files
│   │   ├── [Conference images]            # Building photos, logos
│   │   ├── [Sponsorship tiers]           # Bronze, silver, gold, platinum
│   │   ├── [Technical documents]         # PDF guides and templates
│   │   └── [Directory assets]            # Author photos, session images
│   ├── package.json                  # Frontend dependencies
│   ├── vite.config.js               # Vite build configuration
│   ├── vercel.json                  # Vercel deployment config
│   └── eslint.config.js             # Code quality configuration
├── data/                            # MongoDB data directory (Docker volume)
├── docker-compose.yml               # Docker containerization setup
├── LICENSE                          # ISC License
└── README.md                        # Project documentation
```

## ✨ Key Features

- **Complete Conference Management**: Full-featured platform for academic conferences
- **Multi-Committee Support**: Organizing, Technical, and International Advisory committees
- **Speaker & Session Management**: Comprehensive speaker profiles and session scheduling
- **Paper Submission System**: Academic paper submission and review workflow
- **Photo Gallery**: Dynamic image galleries with admin management
- **News & Updates**: Real-time conference announcements and updates
- **Contact Management**: Contact form submissions with admin dashboard
- **Sponsorship Platform**: Multi-tier sponsorship management (Bronze, Silver, Gold, Platinum)

### 🔐 Admin Features
- **Secure Authentication**: JWT-based admin authentication system
- **Content Management**: Full CRUD operations for all conference content
- **File Upload System**: Cloudinary integration for image and document management
- **Dashboard Analytics**: Administrative overview and management tools
- **Protected Routes**: Role-based access control for sensitive operations

## 🛠️ Technology Stack

### Backend Technologies
- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT) with bcryptjs password hashing
- **File Storage**: Cloudinary for image and document hosting
- **File Uploads**: Multer middleware for multipart form handling
- **Validation**: Validator.js for input sanitization
- **CORS**: Cross-Origin Resource Sharing enabled for frontend communication
- **Environment**: dotenv for environment variable management
- **Development**: Nodemon for auto-reload during development
- **Logging**: CLI-color for enhanced console output

### Frontend Technologies
- **Framework**: React 19 with React DOM
- **Build Tool**: Vite 6.x for fast development and optimized builds
- **Routing**: React Router DOM 7.x for client-side navigation
- **Styling**: 
  - Tailwind CSS 4.x for utility-first styling
  - Chakra UI 3.x for component library
  - Emotion for CSS-in-JS
- **Icons**: Lucide React and React Icons for comprehensive icon sets
- **Animations**: Framer Motion for smooth page transitions and micro-interactions
- **Carousels**: Swiper for touch-friendly image and content sliders
- **HTTP Client**: Axios for API communication
- **Notifications**: React Toastify for user feedback
- **Code Quality**: ESLint 9.x with React-specific rules

### Development & Deployment
- **Package Manager**: PNPM for efficient dependency management
- **Containerization**: Docker with MongoDB container setup
- **Deployment**: Vercel for frontend, custom server for backend
- **Version Control**: Git with structured branching
- **Development Environment**: VS Code with recommended extensions

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v6.0 or higher) - [Installation guide](https://docs.mongodb.com/manual/installation/)
- **PNPM** (recommended) or npm - Package manager
- **Git** - Version control system

### 🐳 Quick Start with Docker

The fastest way to get the project running locally:

```bash
# Clone the repository
git clone https://github.com/suryanshvermaa/Conference_website.git
└── README.md                        # Project documentation

# Start MongoDB with Docker
docker-compose up -d

# The MongoDB container will be available at localhost:27017
# Default credentials: root/example (for development only)
```
cd backend
```

2. **Install dependencies**:
```bash
# Using PNPM (recommended)
pnpm install

# Or using npm
npm install
```

3. **Environment Configuration**:
Create a `.env` file in the backend directory:
```env
# Server Configuration
PORT=3000

# Database Configuration
URI=mongodb://root:example@localhost:27017/conference_db?authSource=admin

# JWT Secret (generate a strong secret key)
secret=your_jwt_secret_key_here

# Cloudinary Configuration (for file uploads)
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret
```
4. **Start the development server**:
```bash
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:3000
```
```bash
# Development mode with hot reload
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

The frontend will be available at `http://localhost:5173`

## 🏗️ Architecture Overview

### Backend Architecture
```
├── Express.js Server
├── MongoDB Database
│   ├── User Collection (Admin accounts)
│   ├── Speaker Collection (Speaker profiles)
│   ├── Photo Collection (Gallery images)
│   ├── Contact Collection (Form submissions)
│   ├── Committee Collections (Various committees)
│   └── Content Collections (News, notices)
├── Cloudinary Integration (File storage)
├── JWT Authentication Middleware
└── CORS Configuration (Multi-origin support)
```

### Frontend Architecture
```
├── React Application (SPA)
├── React Router (Client-side routing)
├── Chakra UI + Tailwind (Styling system)
├── Axios (HTTP client)
├── Protected Routes (Auth-based access)
├── Component Architecture
│   ├── Pages (Route components)
│   ├── Layout Components (Navbar, Footer)
│   ├── Feature Components (Admin panels)
│   └── UI Components (Reusable elements)
└── State Management (React hooks)
```

## 🚀 Deployment

### Production Deployment

The application is currently deployed and accessible at:
- **Primary**: [https://icnari26.nasl.in](https://icnari26.nasl.in)

### Environment Variables for Production

#### Backend (.env)
```env
PORT=3000
URI=mongodb://your_production_mongodb_connection
secret=your_strong_jwt_secret
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret
NODE_ENV=production
```

#### Frontend (.env)
```env
VITE_API_URL=https://your-backend-domain.com
```

## 🧪 Development Workflow

### Running in Development

1. **Start MongoDB** (using Docker):
```bash
docker-compose up -d
```

2. **Start Backend** (in separate terminal):
```bash
cd backend
pnpm run dev
```

3. **Start Frontend** (in separate terminal):
```bash
cd frontend
pnpm run dev
```

### Code Quality & Linting

```bash
# Frontend linting
cd frontend
pnpm run lint

# Auto-fix linting issues
pnpm run lint --fix
```

### Building for Production

```bash
# Frontend build
cd frontend
pnpm run build

# Preview production build
pnpm run preview
```

## 🔗 API Reference

Base URL (development): `http://localhost:3000`

Authentication
- Header: `token: <JWT>` is required for protected endpoints
- Unauthorized responses return `401` with a JSON message

User
- POST `/user/image` — Upload profile image (field: `image`)
- DELETE `/user/image` — Delete profile image (auth)
- POST `/user/newuser` — Create new admin user (auth)
- POST `/user/login` — Login, returns JWT
- GET `/user/Allusers` — List all users (auth)

Photo Gallery
- POST `/photogallery/upload` — Upload image (auth, field: `image`)
- DELETE `/photogallery/delete/:id` — Delete image by id (auth)
- GET `/photogallery/all` — List all images

Speakers
- POST `/speaker/create` — Create speaker (auth)
- DELETE `/speaker/delete/:id` — Delete speaker (auth)
- GET `/speaker/all` — List all speakers
- GET `/speaker/get/:id` — Get speaker by id (auth)
- PUT `/speaker/update/:id` — Update speaker (auth)
- PATCH `/speaker/setPriority/:id` — Set speaker priority (auth)

Papers (Notices)
- POST `/papers/add` — Add a notice (auth)
- DELETE `/papers/delete/:id` — Delete notice by id (auth)
- GET `/papers/all` — List all notices

Recent Updates
- POST `/recentupdate/add` — Add an update (auth)
- GET `/recentupdate/all` — List updates
- DELETE `/recentupdate/delete/:id` — Delete update (auth)

Contact
- POST `/contact/` — Submit contact message
- GET `/contact/` — List contact messages (auth)

Organising Committee
- POST `/organisingcommitee/createMember` — Create member (auth)
- GET `/organisingcommitee/getAllMembers` — List members
- DELETE `/organisingcommitee/deleteMember/:id` — Delete member (auth)
- PUT `/organisingcommitee/updateMember/:id` — Update member (auth)
- GET `/organisingcommitee/getMember/:id` — Get member
- PATCH `/organisingcommitee/setPriority/:id` — Set member priority (auth)

International Advisory Committee
- POST `/internationalcommitee/createMember` — Create member (auth)
- GET `/internationalcommitee/getAllMembers` — List members
- DELETE `/internationalcommitee/deleteMember/:id` — Delete member (auth)
- PUT `/internationalcommitee/updateMember/:id` — Update member (auth)
- GET `/internationalcommitee/getMember/:id` — Get member

Technical Programme Committee
- POST `/technicalcommitee/createMember` — Create member (auth)
- GET `/technicalcommitee/getAllMembers` — List members
- DELETE `/technicalcommitee/deleteMember/:id` — Delete member (auth)
- PUT `/technicalcommitee/updateMember/:id` — Update member (auth)
- GET `/technicalcommitee/getMember/:id` — Get member

Notes
- File uploads use Multer with disk storage; controllers upload to Cloudinary.
- Protected endpoints require a valid JWT in the `token` header.

## 🌐 CORS Configuration

Allowed origins (backend `cors`):
- `https://icnari26.nasl.in`
- `https://conference-website-three.vercel.app`
- `http://localhost:5173`

## 🐳 Docker Compose (MongoDB)

This repository includes a ready-to-run MongoDB service:

```yaml
version: '3.8'
services:
  db:
    image: mongo:8.0
    container_name: mongo_container
    ports:
      - "27017:27017"
    volumes:
      - ./data:/data/db
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
```

- Data persists in the local `./data` directory.
- Connect using `mongodb://root:example@localhost:27017/<db>?authSource=admin`.

## 🔧 Environment Variables Summary

Backend (`backend/.env`)
- `PORT` — API port, e.g., `3000`
- `URI` — MongoDB connection string
- `secret` — JWT secret
- `cloud_name` — Cloudinary cloud name
- `api_key` — Cloudinary API key
- `api_secret` — Cloudinary API secret

Frontend (`frontend/.env`)
- `VITE_API_URL` — Backend base URL, e.g., `http://localhost:3000`

## 📁 File Structure Deep Dive

### Backend Controllers Overview
- `userController.js` - Admin authentication, registration, profile management
- `speakerController.js` - CRUD operations for keynote and invited speakers
- `photoController.js` - Image upload, gallery management with Cloudinary
- `contactController.js` - Contact form processing and admin notifications
- `organisingmembercontroller.js` - Organizing committee member management
- `recentUpdateController.js` - Conference news and announcement system
- `technicalController.js` - Technical program committee management
- `InternationalController.js` - International advisory board management
- `noticeController.js` - Important conference notices and alerts

### Frontend Component Structure
- `routes/` - Main page components (Home, About, Authors, etc.)
- `components/aboutcomp/` - About page subcomponents (venue, history, accommodation)
- `components/authorcomp/` - Author guidelines, submission forms, registration
- `components/programscomp/` - Program schedule, technical sessions, cultural events
- `components/OrganisingCommittee/` - Committee member management interfaces
- `components/InternationalCommittee/` - International advisory board components
- `components/TechnicalCommittee/` - Technical program committee interfaces

## 🤝 Contributing

We welcome contributions to improve the Conference Website project!

### Development Setup
1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
```bash
git clone https://github.com/your-username/Conference_website.git
```
3. **Create a feature branch**:
```bash
git checkout -b feature/amazing-new-feature
```
4. **Set up development environment** following the Getting Started guide
5. **Make your changes** with proper testing
6. **Commit with descriptive messages**:
```bash
git commit -m "Add: New feature for speaker management"
```
7. **Push to your fork**:
```bash
git push origin feature/amazing-new-feature
```
8. **Create a Pull Request** with detailed description

### Contribution Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed
- Ensure responsive design for UI changes
- Follow semantic commit message format

### Code Style
- **JavaScript**: ESLint configuration provided
- **React**: Functional components with hooks
- **CSS**: Tailwind utility classes preferred
- **File Naming**: camelCase for components, kebab-case for utilities

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### License Summary
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No warranty provided
- ❌ No liability assumed
