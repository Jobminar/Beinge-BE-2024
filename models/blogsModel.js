import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  image: { type: Buffer, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Blog = model("Blog", blogSchema);

export default Blog;
