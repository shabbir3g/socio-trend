import User from "../../../models/User";
import connectDb from '../../../db/connectDatabase';

export default async function handler(req, res) {
    connectDb();
    const { method } = req;
    const {currentUserId, requestUserid} = req.query;
    const  {requestStatus} = req.body;

  

  // update friend request status
  if (method === "PATCH") {
    try{        
        await User.updateOne(
            {
                'friends.friendId': currentUserId,
            },
            {
                $set: {
                    'friends.$.requestStatus': requestStatus.toLowerCase(), 
                }
            }
        )

        await User.updateOne(
            {
                'friends.friendId': requestUserid,
            },
            {
                $set: {
                    'friends.$.requestStatus': requestStatus.toLowerCase(), 
                }
            }
        )

        res.status(200).json((`Succefully ${requestStatus} Friends Request`));
    }
    catch(error) {
        next(error);
    }
  }
}
