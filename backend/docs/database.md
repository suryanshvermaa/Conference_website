# Database Schema Documentation

This document describes the database schemas used in the Conference Website Backend.

## MongoDB Connection

The application uses MongoDB as its database. The connection is configured in `database/dbconn.js` and uses the `MONGODB_URI` from the environment variables.

## Schemas

### User Schema
```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### Contact Schema
```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### Photo Schema
```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### Speaker Schema
```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### Notice/Paper Schema
```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### Recent Update Schema
```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## Indexes

The following indexes are created for better query performance:

1. User Collection:
   - `email`: Unique index

2. Contact Collection:
   - `email`: Index for faster lookups

3. Photo Collection:
   - `createdAt`: Index for sorting by date

4. Speaker Collection:
   - `name`: Index for faster lookups

5. Notice/Paper Collection:
   - `createdAt`: Index for sorting by date

6. Recent Update Collection:
   - `createdAt`: Index for sorting by date

## Data Validation

All schemas include:
- Required field validation
- Type checking
- String trimming where appropriate
- Email format validation for email fields
- Timestamp tracking with `createdAt`

## File Storage

The application uses Cloudinary for file storage. Each file upload results in:
1. File upload to Cloudinary
2. Storage of the Cloudinary URL in the respective schema
3. Storage of the Cloudinary public ID for future reference

## Database Operations

Common database operations include:
- Create: Adding new documents
- Read: Retrieving documents with various filters
- Update: Modifying existing documents
- Delete: Removing documents (with associated Cloudinary files)

## Backup and Recovery

It's recommended to:
1. Set up regular MongoDB backups
2. Keep Cloudinary backups of uploaded files
3. Maintain a backup of the `.env` file with all credentials 