import jwt from 'jsonwebtoken';

// Admin Authentication middleware
const adminAuthentication = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Extract token from 'Authorization' header

  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is an admin by comparing email (or other identifier)
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Forbidden. You are not authorized." });
    }

    // Attach the decoded info (e.g., email) to the request object for further use in subsequent middleware/handlers
    req.admin = decoded;
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

export default adminAuthentication;
