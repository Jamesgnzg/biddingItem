import pkg from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
// import userRouter from "./routes/users.js";
import registerRouter from "./routes/register.js";
import itemsRouter from "./routes/items.js";

config();
const app = pkg();
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(pkg.json());
// app.use("/users", userRouter);
app.use("/register", registerRouter);
app.use("/items", itemsRouter);

app.listen(3000, () => console.log("Server Started"));
