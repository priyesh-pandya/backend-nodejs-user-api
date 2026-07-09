import { createUser,showUsers,deleteUser,showUserById,updateUser,searchUsers,findDuplicateUsersByFields } from "../controllers/userController.js";
import seedUsers  from "../databases/insertUsers.js";

const routes = (app) => {        
    /**
     * @swagger
     * /v1/users:
     *   get:
     *     summary: Get all users
     *     responses:
     *       200:
     *         description: List of users
     */
    app.get("/v1/users",showUsers);

    app.get("/v1/users/duplicate",findDuplicateUsersByFields);

    app.get("/v1/users/:id",showUserById);
    /**
     * @swagger
     * /v1/users:
     *   post:
     *     summary: Create a new user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       201:
     *         description: User created successfully
     */
    app.post("/v1/users",createUser);

    app.delete("/v1/users/:id",deleteUser);

    app.get("/v1/search/",searchUsers);

    ///v1/seed-users
    app.get("/v1/seed-users",async (req,res) => {
        try {
            const data = await seedUsers();
            res.status(201).json({ message: "Success", data });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.put("/v1/users/:id",updateUser);

    // Define your routes here
    app.get("/v1/products", (req, res) => {
        res.status(200).json({ message: "Product route is working!" });
    });

    app.get("/v1/orders", (req, res) => {
        res.status(200).json({ message: "Order route is working!" });
    });  

    // You can add more routes for different resources (e.g., orders, categories, etc.)         
    // Add more routes as needed
};

export default routes;