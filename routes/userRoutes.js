import express from "express";
import { getAllUsers, login, register } from "../controllers/userContoller.js";

const router = express.Router();

// Routes

router.get("/all-users", getAllUsers);
router.post("/register", register);
router.post("/login", login);

export default router;
