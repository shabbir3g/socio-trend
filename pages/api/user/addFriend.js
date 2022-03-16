import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';


export default async function handler(req, res) {
    connectDb();
  const { method } = req;
  const {userId, requestUserid} = req.query;

  

  // add friend 
  if (method === "POST") {
    try {
     const user = await User.findById(requestUserid);
     if(user) {
         await User.findByIdAndUpdate(
              requestUserid,
              {
                  $push: {
                    friends: {
                        friendId: userId,
                        requestStatus: 'pending',
                    },
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