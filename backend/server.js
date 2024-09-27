import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT
app.use(express.json());

app.use("/api/products",productRoutes)


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);

});
