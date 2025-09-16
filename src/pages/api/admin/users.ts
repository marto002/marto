/*import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await connectDB();
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({ users });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
*/




/*
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    await connectDB();
    const users = await User.find({}, { password: 0 }); // exclude password
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}
*/






// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "GET") {
    const users = await User.find();
    return res.status(200).json({ users });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
