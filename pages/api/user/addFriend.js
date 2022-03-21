import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';


export default async function handler(req, res) {
    connectDb();
  const { method } = req;
  // add friend 
  if (method === "PATCH") {
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

        res.status(200).json({
            message: 'Succefully Send Friend Request',
        })
    }
    catch(error) {        
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
  }
}
