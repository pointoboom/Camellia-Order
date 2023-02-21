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
      if (!error) {
        return res.json({
          message: "success",
        });
      } else {
        return res.json({
          message: "fail",
        });
      }
    } catch (error) {
      return res.json({
        message: "fail",
      });
    }
  } else if (req.method === "GET") {
    let date = new Date();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let firstDate = `${date.getFullYear()}-0${date.getMonth() + 1}-01`;
    const lastDate = `${date.getFullYear()}-0${
      date.getMonth() + 1
    }-${lastDayOfMonth.getDate()}`;

    try {
      const { data, error } = await supabase
        .from("orders")
        .select()
        .gte("delivery", `[${firstDate} 00:00:01)`)
        .lte("delivery", `[${lastDate} 23:59:59)`)
        .order("delivery", { ascending: false });

      if (!error || data === !null) {
        return res.json({
          data: data,
        });
      } else {
        return res.json({
          message: "fail",
        });
      }
    } catch (error) {
      return res.json({
        message: "fail",
      });
    }
  }
}
