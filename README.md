# Tridosha - IHWP(Indian Health and Wellness) Project Application

A comprehensive React-based web application for Ayurvedic wellness assessment and personalized health recommendations based on Prakriti (constitution) analysis.

## Description

The Tridosha Application is designed to help users discover their Ayurvedic constitution (Prakriti) through a comprehensive questionnaire and receive personalized recommendations for diet, daily routines, and wellness practices. The application features:

- **Prakriti Assessment**: Interactive questionnaire to determine your Ayurvedic constitution
- **Personalized Diet Charts**: Customized dietary recommendations based on your Prakriti
- **Daily Schedule Suggestions**: Tailored routine recommendations for optimal wellness
- **User Management**: Secure login system with user data persistence
- **Admin Panel**: Administrative interface for user management
- **Follow-up Tracking**: System to track user progress and wellness journey

## Features

- 🔐 User authentication and registration
- 📋 Comprehensive Prakriti assessment questionnaire
- 🍎 Personalized diet recommendations
- ⏰ Daily schedule and routine suggestions
- 👥 Admin panel for user management
- 📊 Progress tracking and follow-ups
- 📱 Responsive design for all devices
- 💾 Local data persistence

## Technology Stack

- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.18
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Testing**: React Testing Library, Jest

## Installation Steps

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prakriti-ihwp-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm list
   ```

## How to Run the Project

### Development Mode

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The application will automatically reload when you make changes

### Production Build

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Serve the production build**
   - The build files will be created in the `build` folder
   - You can serve these files using any static file server

### Testing

1. **Run tests**
   ```bash
   npm test
   ```

2. **Run tests with coverage**
   ```bash
   npm test -- --coverage
   ```

## Project Structure

```
src/
├── components/
│   ├── AdminPanel.jsx      # Admin interface for user management
│   ├── Card.jsx            # Reusable card component
│   ├── DailySchedule.jsx  # Daily routine recommendations
│   ├── DietChart.jsx      # Personalized diet recommendations
│   ├── FollowUps.jsx      # User progress tracking
│   ├── HomePage.jsx       # Main dashboard
│   ├── LoginPage.jsx      # User authentication
│   └── PrakritiTest.jsx   # Prakriti assessment questionnaire
├── App.js                  # Main application component
├── App.css                 # Global styles
├── index.js                # Application entry point
└── index.css               # Base styles
```

## Usage

1. **First Time Users**:
   - Register with your name and basic information
   - Complete the Prakriti assessment questionnaire
   - Access personalized diet and schedule recommendations

2. **Returning Users**:
   - Login with your existing credentials
   - View your previous assessments and recommendations
   - Update your wellness information


3. **For Administrators** :
   -Admin Access : Use PIN "admin123" to access admin panel
   -User Management : View and manage all users
   -Basic Analytics : Monitor user engagement

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



