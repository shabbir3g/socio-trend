import dbConnect from "../../../utilities/mongo";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "PUT") {
    try {
      const result = await Post.findByIdAndUpdate(
        req.query.id,
        { $set: { comment: req.body } },
        { new: true }
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "GET") {
    try {
      const filter = await Post.findOne({ _id: req.query.id });
      const result = await filter.comment;
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
