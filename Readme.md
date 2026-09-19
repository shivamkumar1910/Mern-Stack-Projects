# Full-Stack Projects

Welcome to the Commit Projects repository! This collection showcases multiple full-stack web applications built with React, Node.js, Express, MongoDB, PostgreSQL, and related modern web technologies.

## 📚 Projects Overview

The projects demonstrate different approaches to building scalable, modern web applications, including MERN applications, real-time features, TypeScript, Prisma, and third-party authentication and workflow services.

### 1. **Backend Ledger**
A comprehensive backend ledger system demonstrating Node.js and Express.js fundamentals. This project focuses on building robust server-side architecture.
- **Tech Stack**: MERN Stack
- **Location**: `backend ledger/backend-ledger-main/`

### 2. **Chat App**
A real-time messaging application featuring socket.io for live communication.
- **Tech Stack**: MERN Stack + Socket.io
- **Frontend**: React with responsive UI
- **Backend**: Node.js + Express with real-time socket support
- **Database**: MongoDB
- **Location**: `chat app/`

### 3. **Event App (Eventora)**
A complete event management platform with features for creating, managing, and browsing events.
- **Tech Stack**: MERN Stack + Vite
- **Frontend**: React with Vite (Eventora_Postman_Collection.json for API testing)
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Location**: `event app/`

### 4. **Food App**
A food delivery/ordering application with a modern UI and TypeScript support.
- **Tech Stack**: MERN Stack + TypeScript
- **Frontend**: React with TypeScript and Vite
- **Backend**: Node.js + Express with TypeScript
- **Database**: MongoDB
- **Location**: `food app/`

### 5. **Instagram Clone**
A social media platform inspired by Instagram with features for sharing photos and connecting with users.
- **Tech Stack**: MERN Stack + Socket.io
- **Frontend**: React with Tailwind CSS
- **Backend**: Node.js + Express with socket support
- **Database**: MongoDB
- **Location**: `insta clone/`

### 6. **Job Portal**
A job listing and application platform where users can search for jobs and apply.
- **Tech Stack**: MERN Stack
- **Frontend**: React with modern UI components
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Location**: `job portal/`

### 7. **Netflix Clone**
A video streaming platform clone with features for browsing and playing content.
- **Tech Stack**: MERN Stack
- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Location**: `netflix clone/`

### 8. **Twitter Clone**
A social networking platform inspired by Twitter with features for posting tweets and interacting with other users.
- **Tech Stack**: MERN Stack
- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Location**: `twitter clone/`

### 9. **Project Management System**
A SaaS-style project management platform for organizations to manage projects, tasks, team members, deadlines, and notifications.
- **Tech Stack**: React + TypeScript + Vite + Express + Prisma
- **Authentication**: Clerk organizations with role-based access
- **Database**: PostgreSQL
- **Background Workflows**: Inngest + Resend
- **Location**: `Project Managment System/`

## 🛠️ MERN Stack Technology

Most projects use the following core technologies:

- **MongoDB**: NoSQL database used by the MERN applications
- **PostgreSQL**: Relational database used by the Project Management System
- **Express.js**: Web application framework for Node.js
- **React**: JavaScript library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development

### Additional Technologies Used:
- **Socket.io**: Real-time bidirectional communication (Chat App, Instagram Clone)
- **TypeScript**: Type-safe JavaScript (Food App)
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Modern frontend build tool
- **Prisma**: Type-safe ORM used by the Project Management System
- **Clerk**: Authentication and organization management used by the Project Management System
- **Postman**: API testing and documentation

## 📁 Project Structure

MERN projects typically follow this structure:
```
project-name/
├── backend/              # Node.js + Express server
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Custom middleware
│   └── index.js/server.js
├── frontend/             # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── package.json
```

## 🚀 Getting Started

To get started with any of these projects:

1. Navigate to the desired project directory
2. Install backend dependencies: `npm install` in the backend folder
3. Install frontend dependencies: `npm install` in the frontend folder
4. Configure environment variables (database connection, API endpoints, etc.)
5. Start the backend server
6. Start the frontend development server

The Project Management System has its own setup instructions in `Project Managment System/README.md` and uses separate `client/` and `server/` workspaces.

## 📝 Notes

- Each project may have its own setup guide and specific requirements
- Refer to individual project README files for detailed setup instructions
- All projects follow MVC (Model-View-Controller) architecture patterns
- Database seeding scripts are available for some projects

---

**Happy Coding!** 🚀
