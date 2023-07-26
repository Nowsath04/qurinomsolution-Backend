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
router.get("/all-post", getAllPost);

//POST || create post
router.post("/create-post", createPost);

//PUT || update post
router.put("/update-post/:id", updatePost);

//GET || SIngle post Details
router.get("/get-post/:id", getPostById);

//DELETE || delete post
router.delete("/delete-post/:id", deletePost);

//GET || user post
router.get("/user-post/:id", userPost);

export default router;
