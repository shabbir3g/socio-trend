import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';

export default async function handler(req, res) {
    connectDb();
    const { method } = req;
    const {userId, requestUserid} = req.query;
    const  {requestStatus} = req.body;

  

  // update friend request status
  if (method === "PATCH") {
    try {
     const user = await User.findById(requestUserid);
     if(user) {
         await User.updateOne(
              {
                friends: {
                    friendId: userId,
                }
              },
              {
                  $set: {
                      'friends.$.requestStatus': requestStatus.toLowerCase(), 
                  }
              }
         )
         res.status(200).json({
             message: "Succefully Send Friend Request",
         })
     }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
