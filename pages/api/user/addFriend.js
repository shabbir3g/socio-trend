import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';


export default async function handler(req, res) {
    connectDb();
  const { method } = req;
  const {currentUserId, requestUserid} = req.query;

  

  // add friend 
  if (method === "PATCH") {
    try{
        const {requestedUserId} = req.query;    
        await User.findByIdAndUpdate(
            {
                _id: requestedUserId,
            },
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
        console.log(error.message);
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }
  }
}
