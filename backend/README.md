# Nexus Ventures - Backend API

The backend API server for the Nexus Ventures video learning platform, built with Node.js, Express, and MongoDB.

## Features

- Authentication & Authorization
  - JWT-based authentication
  - Role-based access control
  - Secure password hashing
  - Token management

- File Management
  - Video upload handling
  - Image upload for thumbnails and logos
  - File type validation
  - Size restrictions

- API Features
  - RESTful endpoints
  - Input validation
  - Error handling
  - CORS support
  - Rate limiting

- Database
  - MongoDB with Mongoose
  - Efficient queries
  - Data validation
  - Relationship management

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- CORS

## Project Structure

```
backend/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/          # Database models
├── routes/          # API routes
├── uploads/         # Uploaded files
│   ├── videos/
│   ├── thumbnails/
│   └── logos/
└── utils/          # Helper functions
```

## API Documentation

### Authentication Endpoints

#### Register User
- **POST** `/api/auth/register`
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "contactNo": "string",
  "whatsappNo": "string",
  "state": "string",
  "referralCode": "string"
}
```

#### Login User
- **POST** `/api/auth/login`
```json
{
  "email": "string",
  "password": "string"
}
```

### Video Endpoints

#### Upload Video
- **POST** `/api/videos`
```json
{
  "title": "string",
  "description": "string",
  "duration": "string",
  "video": "file",
  "thumbnail": "file",
  "logo": "file"
}
```

#### Get All Videos
- **GET** `/api/videos`

#### Get Video by ID
- **GET** `/api/videos/:id`

#### Update Video
- **PUT** `/api/videos/:id`

#### Delete Video
- **DELETE** `/api/videos/:id`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nexus-ventures
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
```

3. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server
- `npm test` - Run tests

## Middleware Documentation

### auth.js
Handles authentication and authorization:
```javascript
protect // Protects routes from unauthorized access
authorize // Checks user roles for access control
```

### upload.js
Handles file uploads:
```javascript
uploadVideo // Handles video and image uploads
```

## Error Handling

The API uses a centralized error handling mechanism:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});
```

## Security Measures

- JWT token authentication
- Password hashing with bcrypt
- File type validation
- Request rate limiting
- CORS configuration
- Input sanitization

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
