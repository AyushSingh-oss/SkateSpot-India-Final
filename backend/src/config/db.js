import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    if (connect) {
      console.log("database connected succesfully");
    }
    else {
      console.error("database connection failed");
    }
  }
  catch (err) {
    console.log("error while connecting to database:", err.message);
  }
}