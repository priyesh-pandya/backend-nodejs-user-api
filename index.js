import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./src/routes/appRoutes.js"; // Import user routes
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// function loggingMiddleware(req, res, next) {
//     next(); // Call the next middleware or route handler        
// }

// Load environment variables from .env file
const env = dotenv.config();
const port = process.env.PORT || 5000;
const mongo_url = process.env.MONGO_URI;
//console.log("Server will run on port:", port);
//console.log("Database URL is:", mongo_url);

const app = express();

// Global middleware 
app.use(cors());
app.use(express.json()); // Parses incoming JSON request payloads
routes(app); // Register user routes with the Express app
app.use(express.static('public'));// Serves static files from the "public" folder

//mongoose connection
mongoose.connect(mongo_url,{
   // useNewUrlParser: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));   

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Microservice API",
      version: "1.0.0",
      description: "RESTful API with Node.js, Express, and MongoDB",
    },
    servers: [
      {
        url: "http://localhost:"+port,
      },
    ],
  },
  apis: ["./routes/*.js"], // path to your route files
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// base test route 
app.get(
    "/api/health", 
    (req, res) => {
        res.status(200).json(
            {status: "success", message: "API is healthy and running!"}
        );
    }    
);

app.get(
    "/", 
    (req, res) => {
        res.status(200).json(
            {status: "success", message: "Node Server is running!"}
        );
    }    
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});  