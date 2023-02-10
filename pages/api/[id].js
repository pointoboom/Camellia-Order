import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bippbkldwdozkbgkzlqo.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default async function getOrderByID(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("orders")
      .select()
      .eq("order_id", req.query.id);
    if (!error) {
      return res.json({
        data: data,
      });
    } else {
      return res.json({
        message: "fail",
      });
    }
  } else if (req.method === "POST") {
    const { error } = await supabase
      .from("orders")
      .update({
        reciever: req.body.reciever,
        telephone: req.body.telephone,
        place: req.body.place,
        delivery: req.body.deliveryDate,
        message: req.body.message,
        flower: req.body.flower,
        ribbon: req.body.ribbon,
        wrapping: req.body.wrapper,
        colour: req.body.tone,
        price: req.body.price,
        delivery_fee: req.body.delivery_fee,
        sender: req.body.sender,
        detail: req.body.detail,
        status: req.body.status,
      })
      .eq("order_id", req.query.id);
    if (!error) {
      return res.json({
        message: "success",
      });
    } else {
      return res.json({
        message: "fail",
      });
    }
  } else if (req.method === "DELETE") {
    const { error } = await supabase
      .from("orders")
      .delete()
      .eq("order_id", req.query.id);
    if (!error) {
      return res.json({
        message: "success",
      });
    } else {
      return res.json({
        message: "fail",
      });
    }
  }
}
