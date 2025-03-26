import mongoose from "mongoose";

const bokSchema = new mongoose.Schema({
   name: String,
   price: Number,
   description: String,
   image: String,
});

export const Book = mongoose.model("Book", bokSchema);