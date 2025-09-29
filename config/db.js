import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Conneced to DB");
  } catch (error) {
    console.log("Error in DB", error.message);
  }
};

export default connectDB;
