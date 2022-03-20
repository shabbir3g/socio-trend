import connectDb from '.././../../db/connectDatabase';
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  if (method === "POST") {
    try {
      const post = await Post.create(req.body.data);
      console.log('Omor ali',post);
      res.status(200).json(post);
    } catch (err) {
      res.send(err);
      res.status(500).json(err);
    }
  }
  if (method === 'DELETE') {
    try {
      const result = await Post.deleteOne({ _id: req.query.id });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // get all posts
  if (method === 'GET') {
    try {
      const result = await Post.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
