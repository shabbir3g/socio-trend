import dbConnect from "../../../utilities/mongo";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "POST") {
    try {
      const post = await Post.create(req.body.data);
      res.status(201).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // get all posts
  if (method === "GET") {
    try {
      const result = await Post.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
