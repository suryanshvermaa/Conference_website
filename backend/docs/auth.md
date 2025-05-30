# Authentication Documentation

This document describes the authentication system used in the Conference Website Backend.

## Overview

The application uses JSON Web Tokens (JWT) for authentication. The authentication system includes:
- User registration
- User login
- Token-based authentication
- Role-based access control

## Authentication Flow

1. **Registration**
   - User submits registration details
   - Password is hashed using bcrypt
   - User is created in database
   - JWT token is generated and returned

2. **Login**
   - User submits credentials
   - Credentials are verified
   - JWT token is generated and returned

3. **Protected Routes**
   - Client includes JWT token in Authorization header
   - Server validates token
   - Access is granted or denied based on token validity

## JWT Token Structure

```javascript
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "userId": "user_id",
    "role": "user_role",
    "iat": "issued_at_timestamp",
    "exp": "expiration_timestamp"
  },
  "signature": "HMACSHA256_signature"
}
```

## Token Configuration

- **Secret Key**: Stored in `JWT_SECRET` environment variable
- **Expiration**: 24 hours from issuance
- **Algorithm**: HS256 (HMAC with SHA-256)

## Authentication Middleware

The authentication middleware (`middlewares/auth.js`) performs the following checks:

1. Verifies token presence in Authorization header
2. Validates token signature
3. Checks token expiration
4. Attaches user information to request object

```javascript
// Example middleware usage
const auth = require('../middlewares/auth');

router.post('/protected-route', auth, (req, res) => {
  // Route handler
});
```

## Role-Based Access Control

The application supports two roles:
1. **user**: Basic access
2. **admin**: Full access to all features

Role checks can be implemented in routes:

```javascript
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};

// Example usage
router.post('/admin-route', auth, checkRole('admin'), (req, res) => {
  // Admin-only route handler
});
```

## Security Measures

1. **Password Security**
   - Passwords are hashed using bcrypt
   - Minimum password length: 6 characters
   - Passwords are never stored in plain text

2. **Token Security**
   - Tokens are signed with a secure secret key
   - Tokens expire after 24 hours
   - Tokens are transmitted over HTTPS only

3. **Request Security**
   - CORS is enabled for specific origins
   - Rate limiting is implemented
   - Input validation is performed

## Error Handling

Authentication-related errors return appropriate status codes:

- **400**: Invalid request data
- **401**: Missing or invalid token
- **403**: Insufficient permissions
- **500**: Server error

## Best Practices

1. **Token Storage**
   - Store tokens in memory (not localStorage)
   - Implement token refresh mechanism
   - Clear tokens on logout

2. **Password Management**
   - Enforce strong password policies
   - Implement password reset functionality
   - Use secure password recovery methods

3. **Session Management**
   - Implement token blacklisting for logout
   - Monitor for suspicious activity
   - Implement session timeout

## API Endpoints

### Register
```
POST /user/register
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Login
```
POST /user/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}
```

## Testing Authentication

1. **Registration Test**
   ```bash
   curl -X POST http://localhost:5000/user/register \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
   ```

2. **Login Test**
   ```bash
   curl -X POST http://localhost:5000/user/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"password123"}'
   ```

3. **Protected Route Test**
   ```bash
   curl -X GET http://localhost:5000/protected-route \
     -H "Authorization: Bearer <your_token>"
   ``` 