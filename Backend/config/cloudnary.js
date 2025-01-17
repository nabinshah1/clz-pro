import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,       // Add your Cloudinary Cloud Name here
    api_key: process.env.CLOUDINARY_API_KEY,       // Add your Cloudinary API Key here
    api_secret: process.env.CLOUDINARY_SECRET_KEY  // Add your Cloudinary API Secret here
  });

  console.log("Connected to Cloudinary successfully!");
};

export default connectCloudinary;
