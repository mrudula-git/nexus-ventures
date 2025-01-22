# Nexus Ventures - Video Learning Platform

A comprehensive video learning platform built with modern web technologies. The platform consists of three main components:
- Frontend (User Interface)
- Admin Panel
- Backend API

## Project Structure

```
nexus-ventures/
├── Front-End/         # User interface
├── admin/            # Admin panel
└── backend/          # API server
```

## Features

- User Authentication (JWT)
- Video Management
- File Upload System
- Referral System
- Admin Dashboard
- Responsive Design
- Secure API Endpoints

## Tech Stack

### Frontend & Admin
- React with TypeScript
- Vite
- Tailwind CSS
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer for file uploads

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/nexus-ventures.git
cd nexus-ventures
```

2. Install dependencies for all components:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../Front-End
npm install

# Install admin panel dependencies
cd ../admin
npm install
```

3. Set up environment variables:
```bash
# In backend/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nexus-ventures
JWT_SECRET=your-super-secret-jwt-key-change-in-production
NODE_ENV=development
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm start

# Start frontend development server
cd ../Front-End
npm run dev

# Start admin panel development server
cd ../admin
npm run dev
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/referral` - Update referral ID

### Video Endpoints
- `GET /api/videos` - Get all videos
- `GET /api/videos/:id` - Get video by ID
- `POST /api/videos` - Upload new video
- `PUT /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video
- `GET /api/videos/user/videos` - Get user's videos

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.