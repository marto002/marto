import { parse } from "cookie";

export default async function handler(req, res) {
  const cookies = parse(req.headers.cookie || "");
  const userSession = cookies.userSession ? JSON.parse(cookies.userSession) : null;
  res.status(200).json({ user: userSession });
}
