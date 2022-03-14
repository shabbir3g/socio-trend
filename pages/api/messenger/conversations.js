import dbConnect from "../../../utilities/mongo";
import Conversation from "../../../models/Conversation";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();
  // //add
  if (method === "POST") {
    const newConversation = {
      members: [req.body.senderId, req.body.receiverId],
    };
    try {
      const result = await Conversation.create(newConversation);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  //get
  if (method === "GET") {
    try {
      const result = await Conversation.find({
        members: { $in: [req.query.userId] },
      });
      // console.log(result);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // if (method === "GET") {
  //   try {
  //     const conversation = await Conversation.findOne({
  //       members: { $all: [req.query.firstUserId, req.query.secondUserId] },
  //     });
  //     res.status(200).json(conversation);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }
}
