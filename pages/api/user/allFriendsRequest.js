import User from "../../../models/User";
import connectDb from ".././../../db/connectDatabase";

export default async function handler(req, res) {
  connectDb();
  const { method } = req;
  const { userId } = req.query;

  if (method === "GET") {
    try {
      const user = await User.findById(userId);
      const friendRequest = Promise.all(
        user.friends.map((friend) => {
          if (friend.requestStatus === "pending" && send === false) {
            return user.findById(friend.friendId);
          }
        })
      );
      const friendRequestList = friendRequest.map((friend) => {
        const { _id, displayName, userName, photoURL } = friend;
        friendRequestList.push({
          _id,
          displayName,
          userName,
          photoURL,
        });
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  }
}
