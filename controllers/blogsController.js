import Blog from "../models/blogsModel.js";

const blogsController = {
  getBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  createBlog: async (req, res) => {
    try {
      const { image, title, description } = req.body;
      const blog = new Blog({ image, title, description });
      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteBlog: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBlog = await Blog.findByIdAndDelete(id);

      if (!deletedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      res.status(200).json(deletedBlog);
    } catch (error) {
      console.error(error);  // Log the error
      res.status(500).json({ error: error.message });
    }
  },
};

export default blogsController;
