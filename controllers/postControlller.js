import mongoose from "mongoose";
import postModel from "../models/postModel.js";
import userModel from "../models/userModel.js";

//GET ALL POSTS CONTROLLERS
export const getAllPost = async (req, res) => {
  try {
    const blogs = await postModel.find({}).populate("user");
    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "No Posts Found",
      });
    }
    return res.status(200).send({
      success: true,
      BlogCount: blogs.length,
      message: "All Post lists",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error WHile Getting Posts",
      error,
    });
  }
};

//CREATE POST CONTROLLERS
export const createPost = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    //validation
    if (!title || !description || !image || !user) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const exisitingUser = await userModel.findById(user);

    //VALIDATION ERROR
    if (!exisitingUser) {
      return res.status(404).send({
        success: false,
        message: "unable to find user",
      });
    }

    const newBlog = new postModel({ title, description, image, user });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    exisitingUser.blogs.push(newBlog);
    await exisitingUser.save({ session });
    await session.commitTransaction();
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "Posts Created!",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Creating Posts",
      error,
    });
  }
};

// UPDATE POST CONTROLLERS
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await postModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Posts Updated!",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Updating Posts",
      error,
    });
  }
};

//SINGLE POST CONTROLLERS
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await postModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Posts not found with this is",
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single Posts",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error while getting single Posts",
      error,
    });
  }
};

// DELETE POST CONTROLLERS
export const deletePost = async (req, res) => {
  try {
    const blog = await postModel
      // .findOneAndDelete(req.params.id)
      .findByIdAndDelete(req.params.id)
      .populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    return res.status(200).send({
      success: true,
      message: "Posts Deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting Posts",
      error,
    });
  }
};

// GET USER POST
export const userPost = async (req, res) => {
  try {
    const userBlog = await userModel.findById(req.params.id).populate("blogs");

    if (!userBlog) {
      return res.status(404).send({
        success: false,
        message: "Posts not found with this id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "user Posts",
      userBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error in user Posts",
      error,
    });
  }
};
