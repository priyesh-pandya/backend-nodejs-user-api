# Node.js + Express RESTful API (User Microservice)

## Introduction
Hi, I’m Priyesh — an experienced backend developer with strong expertise in **MySQL** and now expanding into **MongoDB** and **Node.js microservices**.  
This project demonstrates my ability to design and implement **RESTful APIs** using **Node.js, Express, and Mongoose**, following clean architecture principles.

---

## Project Architecture
- **Express.js** → lightweight web framework for routing and middleware  
- **Mongoose** → ODM for MongoDB, schema validation, and queries  
- **RESTful API design** → CRUD endpoints for `User` microservice  
- **Environment variables** → managed with `dotenv`  
- **Modular structure** → separation of models, controllers, and routes  

---

## Features (User Microservice)
- **Create User** → `POST /v1/users`  
- **Get All Users** → `GET /v1/users`  
- **Get User by ID** → `GET /v1/users/:id`  
- **Update User** → `PUT /v1/users/:id`  
- **Delete User** → `DELETE /v1/users/:id`  
- **Search User** → `GET /v1/search?q=Priyesh`
---

## Sample Code (Controller Example)
```js
// controllers/userController.js
import User from "../models/user.js";

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

---

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nodejs-user-api.git
   cd nodejs-user-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/mydb
   PORT=3000
   ```
4. Run the server:
   ```bash
   npm run dev
   ```
---

## Folder Structure
```
nodejs-user-api/
│── controllers/       # Business logic (CRUD operations)
│   └── userController.js
│── models/            # Mongoose schemas
│   └── user.js
│── routes/            # API route definitions
│   └── appRoutes.js
│── databases/         # Seed scripts, DB connection
│   └── insertUsers.js
│── server.js          # Entry point
│── .env               # Environment variables
│── package.json
│── README.md
```

---

## Additional Sections You Can Add
http://localhost:5001/api-docs/ # Doc 
http://localhost:5001/api/health # Health check 
- **API Documentation** → Use Swagger/OpenAPI for auto-generated docs.   
- **Testing** → Unit tests with Jest or Mocha.  
- **Deployment** → Steps for deploying on Heroku, Render, or AWS.  
- **Future Enhancements** → JWT authentication, role-based access, logging middleware, etc.  
---