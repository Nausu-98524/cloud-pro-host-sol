import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/contact.route.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 7000 || process.env.PORT;

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
