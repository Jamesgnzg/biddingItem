import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  roles: { User: { type: Number, default: 2001 }, Admin: Number },
  auctionItemId: Number,
  walletAmount: { type: Number, default: 0 },
  tokenId: String,
});

export default mongoose.model("User", userSchema);
