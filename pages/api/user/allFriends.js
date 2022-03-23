import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';

export default async function handler(req, res) {
    connectDb();
  const { method } = req;
  const {userId} = req.query;

  if(method === 'GET') {
      try{
        const user = await User.findById(userId);
        if(user.friends.length >= 1) {
          const friends = await Promise.all(
              user.friends.map((friendId) => {
                return User.findById(friendId);
              })
          )
          const friendList = [];
          friends.map((friend) => {              
              const {_id, displayName, userName, photoURL} = friend;
              friendList.push({
                  _id,
                  displayName,
                  userName,
                  photoURL
              })
          })
          res.status(200).json(friendList)
        }
        else {
          res.status(200).json([])
        }
      }
      catch (err) {
          res.status(500).json({
              error: err.message,
          })
      }
  }
}