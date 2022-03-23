import connectDb from '../../../db/connectDatabase';
import Post from '../../../models/Post';
import User from '../../../models/User';

export default async function handler(req, res) {
  const { method } = req;
  connectDb();

  if (method === 'GET') {
    const { userId } = req.query;
    try {
        const user = await User.findById(userId);
        if (user.bookmark.length >= 1) {
        const bookmarkPost = await Promise.all(
          user.bookmark.map((postId) => {
            return Post.findById(postId);
          })
        );

        const bookmarkPostList = [];
        bookmarkPost.map((post) => {
          bookmarkPostList.push(post);
        });

        res.status(200).json(bookmarkPostList);
      } else {
        res.status(400).json([]);
      }
    } catch (err) {
      res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
}
