# File Upload Documentation

This document describes the file upload system used in the Conference Website Backend.

## Overview

The application uses Multer for handling file uploads and Cloudinary for cloud storage. The system supports:
- Image uploads for photos, speakers, and updates
- Document uploads for notices/papers
- Automatic file optimization
- Secure file storage

## Configuration

### Multer Configuration
Located in `multer/multer.js`:
```javascript
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // File type validation
  }
});
```

### Cloudinary Configuration
Located in `config/cloudinary.js`:
```javascript
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
```

## Supported File Types

### Images
- JPEG/JPG
- PNG
- GIF
- Maximum size: 5MB

### Documents
- PDF
- DOC/DOCX
- Maximum size: 5MB

## Upload Process

1. **Client-side**
   - Files are sent as FormData
   - Content-Type: multipart/form-data

2. **Server-side**
   - Multer processes the upload
   - File is validated
   - File is uploaded to Cloudinary
   - URLs are stored in database

## Implementation Examples

### Photo Upload
```javascript
router.post('/photogallery', auth, upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      folder: 'photos'
    });
    
    const photo = new Photo({
      title: req.body.title,
      description: req.body.description,
      imageUrl: result.secure_url,
      cloudinaryId: result.public_id
    });
    
    await photo.save();
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Document Upload
```javascript
router.post('/papers', auth, upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      folder: 'papers',
      resource_type: 'raw'
    });
    
    const paper = new Paper({
      title: req.body.title,
      description: req.body.description,
      fileUrl: result.secure_url,
      cloudinaryId: result.public_id
    });
    
    await paper.save();
    res.status(201).json(paper);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## File Management

### Storage Structure
```
cloudinary/
├── photos/
│   ├── [photo_id].jpg
│   └── ...
├── speakers/
│   ├── [speaker_id].jpg
│   └── ...
├── papers/
│   ├── [paper_id].pdf
│   └── ...
└── updates/
    ├── [update_id].jpg
    └── ...
```

### File Deletion
When a record is deleted, the associated file is also removed from Cloudinary:
```javascript
const deleteFile = async (cloudinaryId) => {
  try {
    await cloudinary.uploader.destroy(cloudinaryId);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};
```

## Error Handling

### Common Errors
1. **File Size Exceeded**
   - Status: 400
   - Message: "File size exceeds 5MB limit"

2. **Invalid File Type**
   - Status: 400
   - Message: "Invalid file type"

3. **Upload Failed**
   - Status: 500
   - Message: "File upload failed"

### Error Response Format
```json
{
  "error": "Error message",
  "details": "Additional error details"
}
```

## Security Measures

1. **File Validation**
   - Size limits
   - Type checking
   - Malware scanning (if implemented)

2. **Access Control**
   - Authentication required for uploads
   - Role-based access for certain file types
   - Secure URLs for file access

3. **Storage Security**
   - Files stored in private Cloudinary folders
   - Secure URLs for file access
   - Automatic file optimization

## Best Practices

1. **File Upload**
   - Validate files before upload
   - Use appropriate file types
   - Implement progress tracking
   - Handle failed uploads gracefully

2. **File Management**
   - Regular cleanup of unused files
   - Monitor storage usage
   - Implement file versioning if needed

3. **Performance**
   - Optimize images before upload
   - Use appropriate file formats
   - Implement caching strategies

## Testing

### Upload Test
```bash
curl -X POST http://localhost:5000/photogallery \
  -H "Authorization: Bearer <your_token>" \
  -F "image=@/path/to/image.jpg" \
  -F "title=Test Photo" \
  -F "description=Test Description"
```

### Delete Test
```bash
curl -X DELETE http://localhost:5000/photogallery/<photo_id> \
  -H "Authorization: Bearer <your_token>"
```

## Monitoring

1. **Storage Usage**
   - Monitor Cloudinary storage
   - Track upload patterns
   - Identify large files

2. **Performance Metrics**
   - Upload success rate
   - Upload time
   - Error rates

3. **Security Monitoring**
   - Failed upload attempts
   - Unauthorized access attempts
   - Suspicious file types 