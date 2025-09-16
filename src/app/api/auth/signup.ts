
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { v4 as uuidv4 } from "uuid";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === "admin@site.com" ? "admin" : "user";
  const trackingId = "TRK-" + uuidv4().slice(0, 8).toUpperCase();

    const newUser = await User.create({ email, password: hashedPassword, role, trackingId: [], });
    return res.status(201).json({ message: "Signup successful", user: { email: newUser.email, role: newUser.role, trackingId: newUser.trackingId,
        createdAt: newUser.createdAt, } });
  }

  if (req.method === "GET") {
    return res.status(200).json({ message: "Signup endpoint is working. Please send a POST request." });
  }

  return res.status(405).json({ error: "Method not allowed" });
}




/*

import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

   
    const trackingId = "TRK-" + uuidv4().slice(0, 8).toUpperCase();

    const newUser = await User.create({
      email,
      password: hashedPassword,
      role: email === "admin@site.com" ? "admin" : "user",
      trackingId,
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        email: newUser.email,
        role: newUser.role,
        trackingId: newUser.trackingId,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
*/