import * as express from "express";
import * as cors from "cors";
import { con } from "./main";

const app = express();
app.use(cors());
app.use(express.json());


try {
  app.use("/products", function(req, res) {
    let count;
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    const query = `SELECT COUNT(*) as total_products FROM products_list`;
    con.query(query, (err,data) => {
      if(err) throw err;
      count = data[0].total_products
    })
 
    con.query(
      `SELECT filename, product_name, actual_price, brand_name FROM products_list LIMIT ${limit} OFFSET ${skip}`,
      async (err, data) => {
        if (err) throw err;
        await res.json({"total" : count, "data": data})
      }
    );
  });
} catch (err) {
  console.error(err);
}

export { app };
