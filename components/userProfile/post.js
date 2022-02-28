// import { POST_ERROR, UPDATE_LIKES } from "../../models/like";

// const initialState = {
//   posts: [],
//   post: null,
//   loading: true,
//   error: {},
// };

// export default function(state = initialState, action){
//   const { type, payload } = action;

//   switch (type) {
//     case UPDATE_LIKES:
//       return {
//         ...state,
//         posts: state.posts.map((post) =>
//           post.id === payload.id ? { ...post, likes: payload.likes } : post
//         ),
//         loading: false,
//       };
//     case POST_ERROR:
//       return {
//         ...state,
//         posts: payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// }
