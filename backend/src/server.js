import http from "http"
import app from "./app.js"

import { connectDB } from "./lib/db.js"

const PORT = process.env.PORT;
const server = http.createServer()


connectDB()

server.listen(PORT, () => {
  console.log(`Server starts on PORT ${PORT}`);
  connectDB();
});