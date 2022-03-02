import dbConnect from "../../../utilities/mongo";
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "PUT") {
    try {
      const post = await Post.findById(req.query.id);
      if (!post.like.find((l) => l.userId === req.body.userId)) {
        await post.updateOne({ $push: { like: req.body } });
        res.status(200).json(post);
      }
      // else {
      //   await post.like.updateOne({ $pull: { like: req.body } });
      //   res.status(200).json(post);
      // }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
