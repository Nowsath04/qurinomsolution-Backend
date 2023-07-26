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
router.get("/all-post", getAllPost);

//POST || create blog
router.post("/create-post", createPost);

//PUT || update blog
router.put("/update-post/:id", updatePost);

//GET || SIngle Blog Details
router.get("/get-post/:id", getPostById);

//DELETE || delete blog
router.delete("/delete-post/:id", deletePost);

//GET || user blog
router.get("/user-post/:id", userPost);

export default router;
