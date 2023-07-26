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
// GET || all post
router.get("/all-blog", getAllPost);

//POST || create post
router.post("/create-blog", createPost);

//PUT || update post
router.put("/update-blog/:id", updatePost);

//GET || SIngle post Details
router.get("/get-blog/:id", getPostById);

//DELETE || delete post
router.delete("/delete-blog/:id", deletePost);

//GET || user post
router.get("/user-blog/:id", userPost);

export default router;
