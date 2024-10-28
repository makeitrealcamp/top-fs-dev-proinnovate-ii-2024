import mongoose from 'mongoose';

export const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export const Posts = mongoose.model('Posts', postsSchema);
