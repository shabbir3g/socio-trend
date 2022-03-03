// router.put("/like/:id", auth, async, (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     //click if the posh has already been liked

//     if (
//       posts.likes.filter((like) => like.user.toString() === req.user.id)
//         .length > 0
//     ) {
//       return res.status(400).json({ msg: "post already liked" });
//     }

//     post.like.unshift({ user: req.user.id });

//     await post.save();

//     res.json(post.likes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server error");
//   }
// });

// router.put("/unlike/:id", auth, async, (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     //click if the posh has already been liked

//     if (
//       posts.likes.filter((like) => like.user.toString() === req.user.id)
//         .length === 0
//     ) {
//       return res.status(400).json({ msg: "post has not yet been liked" });
//     }

//     // get remove index
//     const removeIndex = post.likes
//       .map((like) => like.user.toString())
//       .indexOf(req.user.id);
//     post.like.splice(removeIndex, 1);

//     await post.save();

//     res.json(post.likes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server error");
//   }
// });

// import axios from "axios";

// export const UPDATE_LIKES = "UPDATE_LIKES";
// export const POST_ERROR = "POST_ERROR";

// // Add Like
// export const addLike = (postId) => async (dispatch) => {
//   try {
//     const res = await axios.put(`api/posts/like/${postId}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data },
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: error.response.statusText, status: err.response.status },
//     });
//   }
// };

// // Remove Post
// export const removeLike = (postId) => async (dispatch) => {
//   try {
//     const res = await axios.put(`api/posts/unlike/${postId}`);

//     dispatch({
//       type: UPDATE_LIKES,
//       payload: { id, likes: res.data },
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: error.response.statusText, status: err.response.status },
//     });
//   }
// };

