# DND Learning Management System (LMS)

A comprehensive web-based platform designed to facilitate online training and education for Yamaha dealers and staff. The DND LMS streamlines course management, user registration, content delivery, assessment, and reporting for the Yamaha dealer network.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Overview
The DND LMS provides a robust solution for managing training programs, tracking user progress, and delivering educational content. It integrates with Yamaha's existing systems and supports both initial orientation and ongoing professional development for dealership staff.

## Features
- User registration and profile management
- Course creation and organization (text, video, interactive content)
- Enrollment and approval workflows
- Learning paths and content delivery
- Examinations and progress tracking
- Email and in-platform notifications
- Administrative tools for user and course management
- Reporting and analytics dashboard
- Integration with MS Teams for live sessions

## Folder Structure
```
DND_LMS/
├── docs/                # Documentation (SRS, architecture, process flows, metrics)
├── scripts/             # Utility scripts
├── config/              # Configuration files
├── src/
│   ├── server/          # Backend code (API, models, services, etc.)
│   ├── client/          # Frontend code (React components, pages, etc.)
│   └── database/        # DB migrations, seeders
├── tests/               # Integration/E2E tests
├── deployments/         # Deployment scripts/configs (Docker, k8s)
├── README.md            # Project overview
├── .gitignore           # Git ignore rules
├── .env.example         # Example environment variables
```

## Getting Started

### Prerequisites
- Node.js (or Python, depending on backend)
- npm/yarn (for frontend)
- Docker (optional, for containerized deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/dnd-lms.git
   cd dnd-lms
   ```
2. Install backend and frontend dependencies:
   ```bash
   cd src/server && npm install
   cd ../../client && npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in required values.
4. Run the development servers:
   ```bash
   # In one terminal
   cd src/server && npm run dev
   # In another terminal
   cd src/client && npm start
   ```
5. Access the app at `http://localhost:3000` (or as configured).

### Docker (Optional)
To run the app using Docker:
```bash
docker-compose up --build
```

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
This project is licensed. See the LICENSE file for details.
