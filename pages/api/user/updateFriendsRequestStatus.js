import User from "../../../models/User";
import connectDb from '../../../db/connectDatabase';

export default async function handler(req, res) {
    connectDb();
    const { method } = req; 
  // update friend request status
  if (method === "PATCH") {
    try{
        const {currentUserId} = req.query;
        const {status, requesterId} = req.body;
        const currentuser = await User.findById(currentUserId);
        if(status === 'confirm') {
            const user = await User.findById(requesterId);
            await currentuser.updateOne(
                {
                    $push: {
                        friends: requesterId,
                    },
                    $pull: {
                        friendsRequest: requesterId,
                    }
                }
            )
            await user.updateOne({
                $push: {
                    friends: currentUserId,
                }
            })

            res.status(200).json({
                message: 'Succefull Confirm Friend Request',
            })
        }
        else if(status === 'cancle') {
            await currentuser.updateOne({
                $pull: {
                    friendsRequest: requesterId,
                }
            })

            res.status(200).json({
                message: 'Succefull Cancle Friend Request',
            })
        }
    }
    catch(error) {       
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
  }
    
}
