import { pool } from "../utils/db.js";
export default async function handler(req, res) {
  if (req.method === "POST") {
  } else if (req.method === "GET") {
    const result = await pool.query("select * from orders ");
    return res.json({
      data: result.rows,
    });
  }
}
