// import { pool } from "../utils/db.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bippbkldwdozkbgkzlqo.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default async function handler(req, res) {
  if (req.method === "POST") {
  } else if (req.method === "GET") {
    const { data, error } = await supabase.from("orders").select();

    return res.json({
      data: data,
    });
  }
}
