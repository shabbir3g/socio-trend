import dbConnect from "../../../utilities/mongo";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "PUT") {
    try {
      const filter = await Post.findOne({ _id: req.query.id });
      console.log(req.query.id);

      res.json(filter);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
