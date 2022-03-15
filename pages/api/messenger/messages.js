import dbConnect from "../../../utilities/mongo";
import Message from "../../../models/Message";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();
  //add
  if (method === "POST") {
    try {
      const result = await Message.create(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //get
  if (method === "GET") {
    try {
      const messages = await Message.find({
        conversationId: req.query.conversationId,
      });
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
