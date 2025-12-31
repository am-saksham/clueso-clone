# Clueso Clone

A pixel-perfect, full-stack clone of the Clueso landing page, featuring a robust authentication system with Email Verification and Google Login.
Built with **React (Vite)**, **Express**, and **MongoDB**.

🔗 **Live Demo:** [https://clueso-clone-one.vercel.app/](https://clueso-clone-one.vercel.app/)

---

## 🏗️ Architecture Overview

The application follows a **Monorepo-style** structure adapted for Vercel Serverless deployment.

```mermaid
graph TD
    Client[React Client (Vite)]
    Server[Express Server (Serverless)]
    DB[(MongoDB Atlas)]
    Google[Google OAuth]
    Email[Gmail Service]

    Client -- "REST API (/api)" --> Server
    Server -- "Mongoose" --> DB
    Server -- "Validation" --> Google
    Server -- "Nodemailer" --> Email
    Server -- "JWT" --> Client
```

### Key Components:
- **Frontend**: Single Page Application (SPA) built with React & Vite. Handles UI, Routing (React Router), and State Management.
- **Backend**: Express.js application acting as a REST API. Deployed as a **Serverless Function** on Vercel via `api/index.js`.
- **Database**: MongoDB Atlas for storing Users and OTP verification codes.

---

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern UI library with Hooks.
- **Vite**: Ultra-fast build tool and dev server.
- **Tailwind CSS & Lucide React**: For styling and icons.
- **Axios**: API requests.
- **React OAuth/Google**: Google Sign-in integration.

### Backend
- **Node.js & Express**: API Logic.
- **MongoDB & Mongoose**: Data persistence.
- **JsonWebToken (JWT)**: Secure authentication sessions.
- **Nodemailer**: Sending OTP verification emails.
- **Bcrypt.js**: Secure password hashing.

---

## 🚀 Setup & Installation

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas URL
- Google Cloud Console Credentials (Client ID & Secret)

### 2. Clone the Repository
```bash
git clone https://github.com/am-saksham/clueso-clone.git
cd clueso-clone
```

### 3. Install Dependencies
We have a unified `package.json` for deployment convenience.
```bash
npm install
```

### 4. Configure Environment Variables
Create two `.env` files:

#### Root `.env` (Frontend)
```env
# Google Client ID for React
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
```

#### `server/.env` (Backend)
```env
NODE_ENV=development
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_string
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Email Service (Gmail App Password)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_char_app_password
```

### 5. Run Locally
We have configured a **Proxy** in `vite.config.js` so you can run the frontend and it will forward `/api` requests to your local backend.

**Step 1: Start Backend**
```bash
cd server
npm start
# Runs on port 5001
```

**Step 2: Start Frontend** (In a new terminal)
```bash
# From project root
npm run dev
# Runs on port 5173
```

Visit `http://localhost:5173`.

---

## 🧠 Design Decisions & Assumptions

### 1. Vercel Serverless Adaptation
Instead of hosting the backend on a separate server (like DigitalOcean/Heroku), we adapted the Express app to run as a Vercel Serverless Function.
- **Entry Point**: `api/index.js` adapts the Express app for Vercel.
- **ES Modules**: The entire project uses `type: "module"` to align Frontend and Backend syntax (`import`/`export`).

### 2. Email Verification Flow
- **Security**: Users cannot log in immediately after signup. They must verify their email via a 6-digit OTP.
- **Mock Mode**: If `EMAIL_USER` is missing in `.env`, the server automatically switches to "Mock Mode" and prints the OTP to the console for easier development.

### 3. Google OTP Handling
- Google logins are trusted by default and do **not** require OTP verification, as Google has already verified the email.
- Hybrid accounts are supported (Login via Google or Email/Password if the email matches).

### 4. Git Security
- `.env` files are strictly ignored via `.gitignore` to prevent secret leakage.
- Secrets detected in commit history were scrubbed before the final push using git history rewriting.
