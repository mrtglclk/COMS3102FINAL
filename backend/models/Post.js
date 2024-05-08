import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image: { type: String, required: true },
  caption: String
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;
