// import { pool } from "../utils/db.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bippbkldwdozkbgkzlqo.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { error } = await supabase.from("orders").insert({
        reciever: req.body.reciever,
        telephone: req.body.telephone,
        place: req.body.place,
        delivery: req.body.deliveryDate,
        message: req.body.message,
        flower: req.body.flower,
        ribbon: req.body.ribbon,
        wrapping: req.body.wrapper,
        colour: req.body.tone,
        status: "pending",
      });
      return res.json({
        message: "success",
      });
    } catch (error) {}
  } else if (req.method === "GET") {
    const { data, error } = await supabase
      .from("orders")
      .select()
      .order("delivery", { ascending: true });

    return res.json({
      data: data,
    });
  }
}
