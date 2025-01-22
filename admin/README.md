# Nexus Ventures - Admin Panel

The administrative dashboard for the Nexus Ventures video learning platform, built with React, TypeScript, and Vite.

## Features

- Dashboard Analytics
  - User statistics
  - Video metrics
  - Revenue tracking
  - Usage analytics

- Video Management
  - Upload new videos
  - Edit video details
  - Delete videos
  - Manage thumbnails and logos
  - View video statistics

- User Management
  - View all users
  - User roles and permissions
  - User activity tracking
  - Manage referral codes

- Content Management
  - Category management
  - Content moderation
  - Featured content selection
  - Bulk operations

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Chart.js for analytics

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Dashboard/    # Dashboard specific components
│   ├── Videos/       # Video management components
│   └── Users/        # User management components
├── services/         # API integration
├── hooks/            # Custom React hooks
├── utils/            # Helper functions
├── types/            # TypeScript definitions
└── assets/          # Static assets
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Component Documentation

### VideoManagement
Main component for managing videos. Features include:
- Video upload with drag-and-drop
- Batch operations
- Search and filtering
- Statistics visualization

### BarChart
Displays video analytics in a bar chart format:
```typescript
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}
```

## API Integration

The `services/api.ts` file contains all API integration code:

```typescript
// Video Management APIs
videoAPI.getAllVideos()
videoAPI.getVideoById(id)
videoAPI.uploadVideo(formData)
videoAPI.updateVideo(id, formData)
videoAPI.deleteVideo(id)
videoAPI.getVideoStats()

// User Management APIs
userAPI.getAllUsers()
userAPI.getUserById(id)
userAPI.updateUser(id, userData)
userAPI.deleteUser(id)
userAPI.getUserStats()
```

## Security

- JWT token authentication
- Role-based access control
- API request validation
- Secure file upload handling

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## ESLint Configuration

The project uses ESLint with TypeScript support. Configuration can be found in `eslint.config.js`.

## License

This project is licensed under the MIT License.
