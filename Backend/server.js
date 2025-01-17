import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/mangodb.js';  // Adjust path as necessary
import userRouter from './routes/userRoute.js';  // Adjust path as necessary
import productRouter from './routes/productRoute.js';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.send('API Working');
});

// MongoDB connection
connectDb();  // Ensure MongoDB connection works

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
