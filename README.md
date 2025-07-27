# Loom - Voice and Video Calling Application

A real-time communication application built using ZEGOCLOUD SDK that enables voice and video calling functionality.

## Features

- **User Authentication**
  - Random user ID generation for quick testing
  - Unique username creation with "Loom_" prefix
  
- **Voice Calling**
  - One-to-one voice calls
  - High-quality audio streaming
  - 60-second invitation timeout
  - Real-time voice communication

- **Video Calling**
  - One-to-one video calls
  - HD video quality
  - Camera controls
  - Real-time video streaming

- **User Interface**
  - Clean and modern design
  - Gradient background
  - User information display
  - Easy-to-use call buttons
  - Responsive layout

## Tech Stack

- **Frontend**
  - React.js
  - Tailwind CSS
  - Vite (Build tool)

- **SDK & APIs**
  - ZEGOCLOUD UIKit
  - ZIM SDK for real-time communication

## Prerequisites

- Node.js >= 16.x
- npm >= 8.x
- ZEGOCLOUD account and credentials

## Installation

1. Clone the repository
```sh
git clone <repository-url>
```

2. Install dependencies
```sh
npm install
```

3. Create a `.env` file and add your ZEGOCLOUD credentials
```sh
VITE_APP_ID=your_app_id
VITE_SERVER_SECRET=your_server_secret
```

4. Start the development server
```sh
npm run dev
```

## Configuration

The application uses the following ZEGOCLOUD configurations:
- AppID: Required for SDK initialization
- ServerSecret: For secure token generation
- Random UserID: For testing purposes
- Custom Username: Format "Loom_userXXXX"

## Usage

1. Open the application in your browser
2. Your unique UserID and Username will be generated automatically
3. To make a call:
   - Click on "Voice Call" or "Video Call" button
   - Enter the recipient's UserID
   - Enter the recipient's Username
   - Wait for the recipient to accept the call

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License

## Acknowledgments

- [ZEGOCLOUD](https://www.zegocloud.com/) for providing the communication SDK
- [React](https://reactjs.org/) for the frontend framework
