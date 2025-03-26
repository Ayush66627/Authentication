import connectDB from "./db/dbConnection.js";
import app from "./app.js";
import dotenv from "dotenv";
import bookroute from "../route/book.route.js";
import cors from "cors";
import userrouter from "../route/user.route.js"
import loginroute from "../route/user.route.js"
import express from "express";
import path from "path";

dotenv.config({
    path: "./env",
})

app.use(cors(corsOptions));
app.use(express.json());
const corsOptions = {
  origin: "https://authentication-pp61.onrender.com",
  credentials: true,
}

connectDB()
.then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("Error",err);
})

const __dirname = path.resolve();


app.use("/books", bookroute);
app.use("/users", userrouter);
app.use("/login", loginroute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})
