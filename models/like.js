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

