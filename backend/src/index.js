import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';


import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();


app.use("/api/auth", authRoutes);
app.use(express.json()) // parsing incoming json into js object for req.body

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
    connectDB();
})