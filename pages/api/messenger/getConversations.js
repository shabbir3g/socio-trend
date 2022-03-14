import dbConnect from "../../../utilities/mongo";
import Conversation from "../../../models/Conversation";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    const firstUserId = req.query.firstUserId.split("?")[0];
    const secondUserId = req.query.firstUserId.split("=")[1];
    try {
      const conversation = await Conversation.findOne({
        members: { $all: [firstUserId, secondUserId] },
      });
      console.log(conversation);
      res.status(200).json(conversation);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
