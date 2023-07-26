import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
  userPost,
} from "../controllers/postControlller.js";

const router = express.Router();

//Routes

router.get("/all-blog", getAllPost);
router.post("/create-blog", createPost);
router.put("/update-blog/:id", updatePost);
router.get("/get-blog/:id", getPostById);
router.delete("/delete-blog/:id", deletePost);
router.get("/user-blog/:id", userPost);

export default router;
