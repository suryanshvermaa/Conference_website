# Setup Guide

This guide will help you set up the Conference Website Backend project on your local machine.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or pnpm package manager
- Git

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Conference_website/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Database Setup**
   - Ensure MongoDB is running on your system
   - The application will automatically connect to the database using the MONGODB_URI from your .env file

5. **Running the Application**
   - Development mode:
     ```bash
     npm run dev
     # or
     pnpm run dev
     ```
   - Production mode:
     ```bash
     npm run run
     # or
     pnpm run run
     ```

## Available Scripts

- `npm run dev`: Starts the development server with nodemon
- `npm run run`: Starts the production server
- `npm test`: Runs tests (currently not configured)

## Troubleshooting

1. **Port Already in Use**
   - Change the PORT in .env file if 5000 is already in use

2. **MongoDB Connection Issues**
   - Verify MongoDB is running
   - Check MONGODB_URI in .env file
   - Ensure network connectivity

3. **Module Not Found Errors**
   - Delete node_modules folder
   - Delete package-lock.json or pnpm-lock.yaml
   - Run `npm install` or `pnpm install` again

## Next Steps

After setting up the project, you can:
1. Review the [API Documentation](./api.md)
2. Check the [Project Structure](./structure.md)
3. Read about [Authentication](./auth.md) 