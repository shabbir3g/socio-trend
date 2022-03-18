import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import SinglePost from "./SinglePost";

const MiddleLeftBar = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [deletePost, setDeletePost] = useState(false);

  const user = useSelector((state) => state.states.user);

  useEffect(() => {
    const createPostModal = document.getElementById("create-post-modal");
    const postBtn = document.getElementById("post-modal");
    const submitBtn = document.getElementById("post-submit");
    const closePostModalBtn = document.getElementById("close-post-modal");

    const togglePostModal = () => {
      createPostModal.classList.toggle("hidden");
      createPostModal.classList.toggle("flex");
    };
    postBtn?.addEventListener("click", togglePostModal);
   submitBtn?.addEventListener("click", togglePostModal);
    closePostModalBtn?.addEventListener("click", togglePostModal);
  }, []);

  useEffect(() => {
    axios.get(`/api/user?email=${user?.email}`).then((data) => {
      setUserData(data?.data);
    });
  }, [user?.email]);

  useEffect(() => {
    axios.get(`/api/post`).then((data) => setPosts(data?.data));
  }, [user.email, isLike, deletePost]);

  return (
    <div>
      {/* create post */}
      <CreatePost user={userData} />

      {posts.map((post) => (
        <SinglePost
          key={post._id}
          post={post}
          isLike={isLike}
          setIsLike={setIsLike}
          deletePost={deletePost}
          setDeletePost={setDeletePost}
          userData={userData}
        />
      ))}
    </div>
  );
};

export default MiddleLeftBar;
