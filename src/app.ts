import * as express from "express";
import * as cors from "cors";
import { con } from "./main";

const app = express();
app.use(cors());
app.use(express.json());

try {
  app.use("/products", function(req, res) {
    con.query(
      'SELECT filename, product_name, actual_price, brand_name FROM products_list',
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
