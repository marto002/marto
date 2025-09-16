/*import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user });
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


  await connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    // Admin login (hardcoded)
    if (email === "admin@site.com" && password === "admin123") {
      return res.status(200).json({ role: "admin", message: "Admin login successful" });
    }

    // Normal user
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ role: "user", message: "User login successful", user });
  } else {
    res.status(405).end();
  }
}





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
    // signup logic
  } else if (req.method === "GET") {
    return res.status(200).json({ message: "Signup endpoint is working, use POST to create user." });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
*/




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({
      message: "Login successful",
      user: { email: user.email, role: user.role },
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}