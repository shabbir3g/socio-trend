import connectDb from '.././../../db/connectDatabase';
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  // get posts by user email
  if (method === "GET") {
    const result = await Post.find({ userName: req.query.userName });
    res.json(result);
  }
}
