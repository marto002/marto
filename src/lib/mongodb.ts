/*import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error("⚠️ Please define MONGODB_URI in your .env.local");
}
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
*/
/*
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error);
    throw error;
  }
};
*/
//olubiyisther_db_user
//0czCPpNNq6Y0GhOL
//mongodb+srv://yinka:c9BNz0mTqcJpjQh6@cluster0.osywkt4.mongodb.net/<dbname>?retryWrites=true&w=majority/
//mongodb+srv://yinka:c9BNz0mTqcJpjQh6@cluster0.osywkt4.mongodb.net/
//mongodb://localhost:27017/nextauthdemo



import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/yinkashipping";

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}







//mongodb+srv://olubiyisther_db_user:0czCPpNNq6Y0GhOL@yinka.mudaqxa.mongodb.net/