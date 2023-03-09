import { createClient } from "@supabase/supabase-js";
import moment from "moment";
const supabaseUrl = "https://bippbkldwdozkbgkzlqo.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default async function handler(req, res) {
  if (req.method === "POST") {
  } else if (req.method === "GET") {
    let date = new Date();
    let firstDate = moment(req.query.month)
      .startOf("month")
      .format(`${date.getFullYear()}-MM-DD`);
    let lastDate = moment(req.query.month)
      .endOf("month")
      .format(`${date.getFullYear()}-MM-DD`);

    try {
      const { data, error } = await supabase
        .from("orders")
        .select()
        .gte("delivery", `[${firstDate} 00:00:01)`)
        .lte("delivery", `[${lastDate} 23:59:59)`)
        .order("delivery", { ascending: false });
      let sumIncome = 0;
      let sumDelFee = 0;
      const sumPrice = data.map((data) => {
        sumIncome += data.price;
        sumDelFee += data.delivery_fee;
      });

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
