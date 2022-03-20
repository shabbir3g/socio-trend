import User from "../../../models/User";
import connectDb from '.././../../db/connectDatabase';

export default async function handler(req, res) {
    connectDb();
  const { method } = req;
  const {userId} = req.query;

  if(method === 'GET') {
      try{
          const user = await User.findById(userId);
          if(user.friendsRequest.length >= 1) {
                const friendRequest = Promise.all(
                    user.friendsRequest.map((friendId) => {
                    return user.findById(friendId);
                    })
                )
                const friendRequestList = friendRequest.map((friend) => {
                    const {_id, displayName, userName, photoURL} = friend;
                    friendRequestList.push({
                        _id,
                        displayName,
                        userName,
                        photoURL
                    })
                })
                res.status(200).json({
                    allFriendRequest: friendRequestList,
                });
          }
          else {
              res.status(200).json({
                allFriendRequest: [],
              });
          }
      }
      catch (err) {
          res.status(500).json({
              error: 'Internal Server Error',
          })
      }
  }
}