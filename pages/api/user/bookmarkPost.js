import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';

export default async function handler(req, res) {
    const { method } = req;  
    connectDb();
    if(method === 'PATCH') {
        const {postId,userId} = req.query;
        try{
            await User.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        bookmark: postId,
                    }
                }
            )
            res.status(200).json({
                message: 'Successfully Saved Post',
            })
        }
        catch(err) {
            res.status(500).json({
                error: 'Internal Server Error',
            })
        }
    }
}