# 🚀 Node.js + TypeScript + Express + MySQL Boilerplate

A clean and scalable Node.js starter using **TypeScript**, **Express.js**, and **MySQL**, designed to get your backend project up and running fast with best practices in structure and configuration.

---

## 📁 Project Structure

```
src/
├── app.ts             # Express app config
├── server.ts          # Entry point
├── routes.ts          # All app routes
├── controllers/       # Route logic handlers
├── services/          # Business logic layer
├── dao/               # Data access (MySQL)
├── utils/             # Helpers (e.g., route logger)
└── config/            # DB + environment config
```

---

## 🧰 Features

- ✅ Express.js with centralized `routes.ts`
- ✅ Layered architecture (Controller → Service → DAO)
- ✅ Type-safe MySQL access via `mysql2`
- ✅ Auto endpoint logger on server start
- ✅ `.env` support with `dotenv`
- ✅ Dev-friendly with `ts-node-dev`
- ✅ Fully typed and scalable

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
```

---

## 🏗️ Available Scripts

| Script         | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Start development server with reload |
| `npm run build`| Compile TypeScript to `dist/`        |
| `npm start`    | Run the production build             |

---

## 🧪 Example Endpoint

Once running, try:

```bash
curl http://localhost:5000/api/users
```

Response:

```json
[
  {
    "id": 1,
    "username": "admin"
  }
]
```

---

## 💡 Future Ideas

- 🔐 JWT Authentication
- 📄 Swagger API Docs
- 🧪 Jest-based Unit Testing
- 🐳 Docker support

---

## 📜 License

MIT License © [Your Name]
