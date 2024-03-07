import pkg from "express";
import registerController from "../controllers/registerUsersController.js";
const router = pkg.Router();

router.post("/", registerController.handleNewUser);

export default router;
