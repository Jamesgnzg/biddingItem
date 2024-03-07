import pkg from "express";
import userSchema from "../src/models/user.js";
const userRouter = pkg.Router();

//Get all User
userRouter.get("/", async (req, res) => {
  try {
    const users = await userSchema.find();
    res.send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one User
userRouter.get("/:id", async (req, res) => {
  try {
    const users = await userSchema.findById(req.params.id);
    res.status(200).send(users.userName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Create
userRouter.post("/", async (req, res) => {
  const user = new userSchema({
    userName: req.body.userName,
    details: req.body.details,
    email: req.body.email,
    password: req.body.password,
    auctionItemId: req.body.auctionItemId,
    walletAmount: req.body.walletAmount,
    tokenId: req.body.tokenId,
  });

  try {
    const newUser = await user.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Update
userRouter.patch("/:id", (req, res) => {});
//Delete
userRouter.delete("/:id", (req, res) => {});
export default userRouter;
