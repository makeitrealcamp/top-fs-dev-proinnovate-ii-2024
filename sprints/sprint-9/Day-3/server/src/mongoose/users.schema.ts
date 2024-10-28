import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  age: { type: Number, required: false },
  bio: { type: String, required: false },
});

export const Users = mongoose.model('Users', userSchema);
