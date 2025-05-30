# Project Structure

This document outlines the structure of the Conference Website Backend project.

```
backend/
├── src/
│   └── index.js              # Main application entry point
├── routes/                   # API route definitions
│   ├── userroute.js         # User authentication routes
│   ├── contactroute.js      # Contact form routes
│   ├── noticeRoutes.js      # Notice/paper routes
│   ├── photoRoutes.js       # Photo gallery routes
│   ├── recentUpdateRoutes.js # Recent updates routes
│   └── speakerRoutes.js     # Speaker management routes
├── controllers/             # Route controllers
│   ├── userController.js    # User-related operations
│   ├── contactController.js # Contact form handling
│   ├── noticeController.js  # Notice/paper management
│   ├── photoController.js   # Photo gallery management
│   ├── recentUpdateController.js # Recent updates handling
│   └── speakerController.js # Speaker management
├── models/                  # Database models
│   ├── userModel.js        # User schema
│   ├── contactModel.js     # Contact form schema
│   ├── noticeModel.js      # Notice/paper schema
│   ├── photoModel.js       # Photo gallery schema
│   ├── recentUpdateModel.js # Recent updates schema
│   └── speakerModel.js     # Speaker schema
├── middlewares/            # Custom middleware functions
│   └── auth.js            # Authentication middleware
├── database/              # Database configuration
│   └── dbconn.js         # MongoDB connection setup
├── multer/               # File upload configuration
│   └── multer.js        # Multer middleware setup
├── docs/                # Project documentation
├── .env                # Environment variables
├── .gitignore         # Git ignore file
├── package.json      # Project dependencies and scripts
└── pnpm-lock.yaml   # Package lock file
```

## Directory Descriptions

### `src/`
Contains the main application entry point (`index.js`) where the Express server is configured and started.

### `routes/`
Contains all the route definitions for different API endpoints. Each route file corresponds to a specific feature of the application.

### `controllers/`
Contains the business logic for handling requests. Each controller file corresponds to a specific route file and contains the actual implementation of the API endpoints.

### `models/`
Contains Mongoose schema definitions for MongoDB collections. Each model file defines the structure and validation rules for a specific type of document.

### `middlewares/`
Contains custom middleware functions used across the application, such as authentication middleware.

### `database/`
Contains database configuration and connection setup.

### `multer/`
Contains configuration for handling file uploads using Multer middleware.

### `docs/`
Contains project documentation files.

## Key Files

### `src/index.js`
- Main application entry point
- Express server configuration
- Middleware setup
- Route registration
- Database connection
- Server startup

### `.env`
Contains environment variables for:
- Port number
- MongoDB connection string
- JWT secret
- Cloudinary credentials

### `package.json`
Lists project dependencies and available scripts:
- express
- mongoose
- jsonwebtoken
- bcryptjs
- multer
- cloudinary
- cors
- dotenv
- validator
- nodemon (dev dependency) 