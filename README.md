# Restaurant Website with Reservation System
Live/Deploy link : https://restaurant-frontend-five-gilt.vercel.app/
## Overview

This is a full-stack restaurant website application with a table reservation system. The project is divided into two main parts:

- **Frontend**: A React-based user interface built with Vite
- **Backend**: An Express.js API server with MongoDB database integration

## Features

- Modern, responsive restaurant website
- Online table reservation system
- Menu display
- About us and team information
- Mobile-friendly design

## Project Structure

```
├── backend/           # Express.js server
│   ├── config/        # Configuration files
│   ├── controller/    # Request handlers
│   ├── database/      # Database connection
│   ├── error/         # Error handling
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   └── server.js      # Server entry point
└── frontend/         # React application
    ├── public/        # Static assets
    └── src/           # React source code
        ├── components/ # UI components
        └── Pages/     # Application pages
```

## Technologies Used

### Frontend
- React 19
- React Router DOM
- Axios for API requests
- React Hot Toast for notifications
- React Icons
- Vite as build tool

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- Validator for data validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB


### Running the Application

1. Start the backend server

```bash
cd backend
node server.js
```

2. Start the frontend development server

```bash
cd frontend
npm run dev
```



## Deployment

The application is configured for deployment on Vercel. Both frontend and backend have `vercel.json` configuration files.



## Author

Swayam
