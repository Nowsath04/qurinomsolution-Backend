import express from "express";
import { getAllUsers, login, register } from "../controllers/userContoller.js";
//router object
const router = express.Router();

// GET ALL USERS || GET
router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", register);

//LOGIN || POST
router.post("/login", login);

export default router;
