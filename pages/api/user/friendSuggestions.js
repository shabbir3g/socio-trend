import User from '../../../models/User';
import connectDb from '.././../../db/connectDatabase';

export default async function handler(req, res) {
  const { method } = req;

  connectDb();
  if (method === 'GET') {
    const { userId } = req.query;

    const pipeline = [
      {
        $match: {
          $and: [
            {
              friends: {
                $nin: [userId],
              },
            },
            {
              friendsRequest: {
                $nin: [userId],
              },
            },
            {
              _id: {
                $ne: new mongoose.Types.ObjectId(userId),
              },
            },
          ],
        },
      },
      {
        $sample: {
          size: 3,
        },
      },
      {
        $project: {
          _id: 1,
          displayName: 1,
          photoURL: 1,
        },
      },
    ];

    const suggestionsFriends = await User.aggregate(pipeline);

    res.status(200).json(suggestionsFriends);
  }
}
