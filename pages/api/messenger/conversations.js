import connectDb from '.././../../db/connectDatabase';
import Conversation from "../../../models/Conversation";

export default async function handler(req, res) {
  const { method } = req;

  connectDb();

  if (method === "GET") {
    const firstUserId = req.query.firstUserId.split("?")[0];
    const secondUserId = req.query.firstUserId.split("=")[1];
    const newConversation = {
      members: [firstUserId, secondUserId],
    };
    const conversation = await Conversation.findOne({
      members: { $all: [firstUserId, secondUserId] },
    });
    if (conversation) {
      try {
        const conversation = await Conversation.findOne({
          members: { $all: [firstUserId, secondUserId] },
        });
        res.status(200).json(conversation);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      try {
        const result = await Conversation.create(newConversation);
        res.status(200).json(result);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  }
}
