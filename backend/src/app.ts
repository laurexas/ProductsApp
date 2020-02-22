import * as express from "express";
import * as cors from "cors";
import { con } from "./main";

const app = express();
app.use(cors());
app.use(express.json());


try {
  app.use("/products", function(req, res) {
    const page = req.query.page;
    const limit = req.query.limit;
      
    const skip = (page - 1) * limit;
 
    con.query(
      `SELECT filename, product_name, actual_price, brand_name FROM products_list LIMIT ${limit} OFFSET ${skip}`,
      async (err, data) => {
        if (err) throw err;
        await res.json(data)
      }
    );
  });
} catch (err) {
  console.error(err);
}

export { app };
