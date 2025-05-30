# API Documentation

This document provides detailed information about all available API endpoints in the Conference Website Backend.

## Base URL

```
http://localhost:5000
```

## Authentication

Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## API Endpoints

### User Management

#### Register User
- **POST** `/user/register`
- **Description**: Register a new user
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User object with token

#### Login User
- **POST** `/user/login`
- **Description**: Authenticate user and get token
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**: User object with token

### Contact Form

#### Submit Contact Form
- **POST** `/contact`
- **Description**: Submit a contact form
- **Request Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string"
  }
  ```
- **Response**: Created contact form object

### Photo Gallery

#### Upload Photo
- **POST** `/photogallery`
- **Description**: Upload a photo to gallery
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Request Body**: FormData
  - `image`: File
  - `title`: string
  - `description`: string
- **Response**: Created photo object

#### Get Photos
- **GET** `/photogallery`
- **Description**: Get all photos
- **Response**: Array of photo objects

### Speakers

#### Add Speaker
- **POST** `/speaker`
- **Description**: Add a new speaker
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Request Body**: FormData
  - `name`: string
  - `designation`: string
  - `image`: File
  - `bio`: string
- **Response**: Created speaker object

#### Get Speakers
- **GET** `/speaker`
- **Description**: Get all speakers
- **Response**: Array of speaker objects

### Notices/Papers

#### Add Notice
- **POST** `/papers`
- **Description**: Add a new notice/paper
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Request Body**: FormData
  - `title`: string
  - `description`: string
  - `file`: File
- **Response**: Created notice object

#### Get Notices
- **GET** `/papers`
- **Description**: Get all notices/papers
- **Response**: Array of notice objects

### Recent Updates

#### Add Update
- **POST** `/recentupdate`
- **Description**: Add a new update
- **Headers**: 
  - `Authorization: Bearer <token>`
- **Request Body**: FormData
  - `title`: string
  - `description`: string
  - `image`: File
- **Response**: Created update object

#### Get Updates
- **GET** `/recentupdate`
- **Description**: Get all recent updates
- **Response**: Array of update objects

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "Error message"
}
```

### 401 Unauthorized
```json
{
  "error": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "error": "Access denied"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

## Rate Limiting

API endpoints are rate-limited to prevent abuse. The current limits are:
- 100 requests per minute per IP address
- 1000 requests per hour per IP address

## File Upload Limits

- Maximum file size: 5MB
- Allowed file types:
  - Images: jpg, jpeg, png, gif
  - Documents: pdf, doc, docx 