import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModule.js';

// Function to create JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' }); // Token valid for 1 day
};

// User registration
const registerUser = async (req, res) => {
    
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({ success: false, message: "Name is required" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }
        if (!validator.isStrongPassword(password, { minLength: 8 })) {
            return res.status(400).json({
                success: false,
                message: "Password must contain at least 8 characters, including uppercase, lowercase, and special characters",
            });
        }

        // Check if user exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();

        // Generate token
        const token = createToken(user._id);

        // Respond with success
        res.status(201).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
    }
};

// User login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        // Generate token
        const token = createToken(user._id);
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
    }
};


// Admin login function
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Log the email and password received from the request to verify correctness
        console.log('Received email:', email);
        console.log('Received password:', password);

        // Check if the email and password match the environment variables
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Generate a JWT token on successful login
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
            console.log('Generated Token:', token); // Log the generated token for debugging
            res.json({ success: true, token });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

  

export { loginUser, registerUser, adminLogin };
