
import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";
export interface IUser extends Document {
  email: string;
  password: string;
  trackingId: string;
  role: string;
   status?: string;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    trackingId: { type: String, unique: true, required: true,default: uuidv4 },
    role: { type: String, default: "user" },
     status: { type: String, default: "None" },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
