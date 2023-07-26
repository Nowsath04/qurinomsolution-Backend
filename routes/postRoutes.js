import express from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
  userPost,
} from "../controllers/postControlller.js";
//router object
const router = express.Router();

//routes
// GET || all blogs
router.get("/all-blog", getAllPost);

//POST || create blog
router.post("/create-blog", createPost);

//PUT || update blog
router.put("/update-blog/:id", updatePost);

//GET || SIngle Blog Details
router.get("/get-blog/:id", getPostById);

//DELETE || delete blog
router.delete("/delete-blog/:id", deletePost);

//GET || user blog
router.get("/user-blog/:id", userPost);

export default router;
