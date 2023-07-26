import mongoose from "mongoose";

// Mongo Db Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MONGO CONNECTED`);
  } catch (error) {
    console.log(`MONGO NOT CONNECTED: ${error}`);
  }
};
export default connectDB;
