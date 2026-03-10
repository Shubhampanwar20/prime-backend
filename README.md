# 📌 Task Management Full Stack Application

A full-stack **Task Management Web Application** built with **Node.js, Express, PostgreSQL, JWT Authentication, and React (Vite)**.

This project demonstrates secure authentication, protected REST APIs, and CRUD operations for managing tasks.

Users can:

- Register
- Login securely
- Create tasks
- View tasks
- Update tasks
- Delete tasks

All tasks are displayed in a modern **React dashboard interface**.

---

# 🚀 Tech Stack

## Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- REST API

## Frontend
- React
- Vite
- Axios
- CSS

## Tools
- Postman (API Testing)
- Git & GitHub
- VS Code

---

# ✨ Features

## 🔐 Authentication
- User Registration
- Secure Login using JWT
- Password encryption
- Protected API routes

## 📋 Task Management
- Create Task
- View Tasks
- Update Task
- Delete Task
- Task status tracking (Completed / Pending)

## 📊 Dashboard
- Displays user tasks
- Shows task title and description
- Task status indicator

---

# 📁 Project Structure

```
prime-backend
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public
│   ├── index.html
│   └── vite.config.js
│
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   └── taskController.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── config
│   │   └── db.js
│
├── screenshots
│   ├── login.png
│   ├── Register.png
│   └── Dashboard.png
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shubhampanwar20/prime-backend.git
cd prime-backend
```

---

# 🔧 Backend Setup

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5050
DATABASE_URL=postgresql://postgres:password@localhost:5432/prime_db
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

Server runs at:

```
http://localhost:5050
```

---

# 💻 Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔗 API Endpoints

## Authentication

Register User

```
POST /api/v1/auth/register
```

Login User

```
POST /api/v1/auth/login
```

---

## Tasks

Get All Tasks

```
GET /api/v1/tasks
```

Create Task

```
POST /api/v1/tasks
```

Update Task

```
PUT /api/v1/tasks/:id
```

Delete Task

```
DELETE /api/v1/tasks/:id
```

---

# 🧪 API Testing

All APIs were tested using **Postman**.

Example request:

```
POST /api/v1/tasks
Authorization: Bearer <JWT_TOKEN>
```

---

# 📸 Screenshots

## Login Page
![Login](screenshots/login.png)

## Register Page
![Register](screenshots/Register.png)

## Dashboard
![Dashboard](screenshots/Dashboard.png)

---

# 🔮 Future Improvements

- Task categories
- Admin dashboard
- Task deadlines
- Pagination
- Deployment (Render / Vercel)

---

# 👨‍💻 Author

**Shubham Panwar**

GitHub  
https://github.com/Shubhampanwar20

---

# 📄 License

This project is for educational and learning purposes.
