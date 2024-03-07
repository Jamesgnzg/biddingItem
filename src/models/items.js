import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemId: Number,
  itemName: String,
  currentPrice: { type: Number, default: 0 },
  duration: Date,
  dateAdded: Date,
});

export default mongoose.model("Item", itemSchema);
