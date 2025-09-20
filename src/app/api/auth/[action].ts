
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;
  await connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    if (action === "signup") {
      try {
        const user = new User({ email, password });
        await user.save();
        return res.status(201).json({ message: "Signup successful", user });
      } catch (err: any) {
        return res.status(400).json({ error: err.message });
      }
    }

    if (action === "login") {
      const user = await User.findOne({ email, password });
      if (!user) return res.status(401).json({ error: "Invalid credentials" });
      return res.status(200).json({ message: "Login successful", user });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}











/*
// pages/api/auth/[action].ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;
  await connectDB();

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  if (action === "signup") {
    try {
      const existing = await User.findOne({ email });
      if (existing) return res.status(400).json({ error: "User already exists" });

      const hashed = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashed });
      await user.save();

      // return only safe fields
      return res.status(201).json({ message: "Signup successful", user: { email: user.email } });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (action === "login") {
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ error: "Invalid credentials" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      // Respond with email (and role if you have it)
      return res.status(200).json({ message: "Login successful", user: { email: user.email, role: (user as any).role || "user" } });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(400).json({ error: "Invalid action" });
}
*/