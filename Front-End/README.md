# Nexus Ventures - Frontend

The frontend application for the Nexus Ventures video learning platform, built with React, TypeScript, and Vite.

## Features

- User Authentication
  - Login/Register functionality
  - JWT token management
  - Protected routes

- Video Management
  - Video grid display
  - Video player
  - Video details view
  - Video search and filtering

- User Features
  - Referral ID system
  - User profile management
  - Video history tracking

- Modern UI/UX
  - Responsive design
  - Tailwind CSS styling
  - Loading states
  - Error handling

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Project Structure

```
src/
├── components/        # Reusable UI components
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

### VideoGrid
The main video display component that shows a grid of available videos.
```typescript
interface Video {
  id: number;
  title: string;
  thumbnail: string;
  author: string;
  duration: string;
}
```

### PaymentGateway
Handles payment processing with multiple payment methods.
- Credit/Debit Card
- UPI
- Wallets
- Net Banking

## API Integration

The `services/api.ts` file contains all API integration code:

```typescript
// Auth APIs
authAPI.register(userData)
authAPI.login(credentials)
authAPI.getCurrentUser()
authAPI.updateReferralId(referralId)

// Video APIs
videoAPI.getAllVideos()
videoAPI.getVideoById(id)
videoAPI.getUserVideos()
videoAPI.uploadVideo(formData)
```

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
