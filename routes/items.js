import pkg from "express";
import itemsSchema from "../src/models/items.js";
const itemsRouter = pkg.Router();

//Create
itemsRouter.post("/", async (req, res) => {
  const item = new itemsSchema({
    itemId: req.body.itemId,
    itemName: req.body.itemName,
    currentPrice: req.body.currentPrice,
    duration: req.body.duration,
    dateAdded: req.body.dateAdded,
  });
  try {
    const newItem = await item.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all items
itemsRouter.get("/:id", async (req, res) => {
  try {
    const item = await itemsSchema.find();
    res.send(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default itemsRouter;
