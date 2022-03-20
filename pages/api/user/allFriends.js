import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';

export default async function handler(req, res) {
    connectDb();
  const { method } = req;
  const {userId} = req.query;

  if(method === 'GET') {
      try{
          const user = await User.findById(userId);
          const friends = Promise.all(
              user.friends.map((friendId) => {
                return user.findById(friendId);
              })
          )
          const friendList = friends.map((friend) => {
              const {_id, displayName, userName, photoURL} = friend;
              friendList.push({
                  _id,
                  displayName,
                  userName,
                  photoURL
              })
          })
      }
      catch (err) {
          res.status(500).json({
              error: err.message,
          })
      }
  }
}