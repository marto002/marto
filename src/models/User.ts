
import { number } from "framer-motion";
import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";


export interface ParcelInfo {
  from: string;
  to: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  deliveryDate:number;
  comment:string;
  isResidential: boolean;
}

export interface IUser extends Document {
  email: string;
  password: string;
  trackingId: string;
  role: string;
  status?: string;
  parcels?: ParcelInfo[];
}

const ParcelSchema = new Schema<ParcelInfo>({
  from: String,
  to: String,
  weight: Number,
  length: Number,
  width: Number,
  height: Number,
  deliveryDate:String,
  comment:String,
  isResidential: Boolean,

});

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    trackingId: { type: String, unique: true, required: true, default: uuidv4 },
    role: { type: String, default: "user" },
    status: { type: String, default: "None" },
    parcels: { type: [ParcelSchema], default: [] },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
