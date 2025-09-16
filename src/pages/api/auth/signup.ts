/*import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();
    const { email, password } = req.body;

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: "User created", user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
*/

import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
/*
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === "admin@site.com" ? "admin" : "user";

    const newUser = await User.create({ email, password: hashedPassword, role });

    res.status(201).json({ message: "Signup successful", user: { email: newUser.email, role: newUser.role } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
*/



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === "admin@site.com" ? "admin" : "user";

    const newUser = await User.create({ email, password: hashedPassword, role });
    return res.status(201).json({ message: "Signup successful", user: { email: newUser.email, role: newUser.role } });
  }

  if (req.method === "GET") {
    return res.status(200).json({ message: "Signup endpoint is working. Please send a POST request." });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
