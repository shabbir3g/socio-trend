import connectDb from '.././../../db/connectDatabase';
import Post from "../../../models/Post";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  if (method === "PUT") {
    try {
      const post = await Post.findById(req.query.id);
      if (!post.like.includes(req.body.userId)) {
        await post.updateOne({ $push: { like: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await post.updateOne({ $pull: { like: req.body.userId } });
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
