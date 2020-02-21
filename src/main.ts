const mysql = require("mysql");
import { app } from "./app";
import * as http from "http";
import { getEnv } from "./env";

const con = mysql.createConnection({
  port: getEnv().PORT,
  host: getEnv().HOST,
  user: getEnv().USER,
  password: getEnv().PASSWORD,
  database: getEnv().DATABASE
});

const PORT = getEnv().SERVER_PORT;
const server = http.createServer(app);
server.listen(PORT);
server.on("listening", async () => {
  console.info(`Listening on port ${PORT}`);
  con.connect(err => {
    if (err) {
      console.info("Error connecting to DB");
      return;
    }
    console.info("Connection established");
  });
});

export { con };
