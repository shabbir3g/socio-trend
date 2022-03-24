import User from '../../../models/User';
import connectDb from '.././../../db/connectDatabase';

export default async function handler(req, res) {
  const { method } = req;
  connectDb();
  if (method === 'DELETE') {
    const { postId, userId } = req.query;

    try {
      const user = await User.findById(userId);
      const index = user.bookmark.indexOf(postId);
      if (index !== -1) {
        await User.findByIdAndUpdate(userId, {
          $pull: {
            bookmark: postId,
          },
        });
        res.status(200).json({
          success: true,
          message: 'Successfully Removed Post',
        });
      } else {
        res.status(200).json({
          success: false,
          message: 'Post is not saved',
        });
      }
    } catch (err) {
      res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
}
