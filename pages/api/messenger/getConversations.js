import connectDb from '.././../../db/connectDatabase';
import Conversation from "../../../models/Conversation";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  if (method === "GET") {
    try {
      const result = await Conversation.find({
        members: { $in: [req.query.userId] },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
