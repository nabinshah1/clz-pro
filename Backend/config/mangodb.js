import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on('connected', () => {
    console.log('DB Connected');
  });

  try {
    // Connect to MongoDB using the URL and adding writeConcern configuration
    await mongoose.connect(`${process.env.MONGODB_URL}/collage`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: { w: 'majority' },  // This ensures writes are acknowledged by the majority
    });

    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

export default connectDb;
