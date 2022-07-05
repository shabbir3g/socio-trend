import User from "../../../models/User";
import connectDb from ".././../../db/connectDatabase";

export default async function handler(req, res) {
  connectDb();
  const { method } = req;
  // add friend
  if (method === "PATCH") {
<<<<<<< HEAD
    const { recipientId } = req.query;
    try {
      await User.findByIdAndUpdate(
        {
          _id: recipientId,
        },
        {
          $push: {
            friendsRequest: req.body.currentUserId,
          },
        }
      );
=======
    const {recipientId} = req.query;
    try{        
        await User.findByIdAndUpdate(
            recipientId,
            {
                $push: {
                    friendsRequest: req.body.currentUserId,
                }
            }
        )
>>>>>>> 99d94ada259dec7df075aaf7ed5705c1f3d3aa51

      res.status(200).json({
        message: "Succefully Send Friend Request",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
