import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//env config
dotenv.config();

//router import
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

//mongodb connection
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", postRoutes);

// Port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server Running port on ${PORT}`);
});
