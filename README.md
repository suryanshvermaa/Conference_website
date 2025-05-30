# Conference Website

A full-stack web application for managing and displaying conference information, built with React (Frontend) and Node.js (Backend).

## Project Structure

```
Conference_website/
├── backend/                 # Node.js backend
│   ├── controllers/        # Request handlers
│   ├── database/          # Database configuration
│   ├── middlewares/       # Custom middleware
│   ├── models/           # Database models
│   ├── multer/           # File upload configuration
│   ├── routes/           # API routes
│   └── src/              # Source files
└── frontend/              # React frontend
    ├── public/           # Static assets
    └── src/             # Source files
        ├── components/  # React components
        ├── routes/     # Frontend routes
        └── assets/     # Frontend assets
```

## Features

- User authentication and authorization
- Conference information management
- Organizing committee management
- Speaker management
- Photo gallery
- Contact form
- Recent updates/news section
- Paper submission system
- Program schedule management
- Sponsorship information

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (File uploads)
- Cloudinary (Image storage)
- bcryptjs (Password hashing)

### Frontend
- React
- Vite
- React Router DOM
- Chakra UI
- Tailwind CSS
- Axios
- React Toastify
- Swiper
- Framer Motion

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or pnpm

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create a `.env` file with the following variables:
```
PORT=3000
URI=your_mongodb_connection_string
secret=your_jwt_secret
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret
```

4. Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create a `.env` file with the following variables:
```
VITE_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
# or
pnpm run dev
```

## API Routes

### User Routes
- `/user` - User authentication and management

### Photo Gallery
- `/photogallery` - Photo gallery management

### Speakers
- `/speaker` - Speaker management

### Papers
- `/papers` - Paper submission and management

### Recent Updates
- `/recentupdate` - News and updates management

### Contact
- `/contact` - Contact form submissions

### Organizing Committee
- `/organisingcommitee` - Committee member management

## Frontend Routes

- `/` - Home page
- `/about` - About conference
- `/program` - Conference program
- `/authors` - Author information
- `/contact` - Contact page
- `/sponsors` - Sponsorship information
- `/login` - Admin login
- `/admin` - Admin dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

For any queries or support, please contact the development team. 