import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./CreatePost";
import PostModal from "./PostModal";
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
      {/* <div className="bg-white dark:bg-black p-5 rounded-xl">
        <div className="mb-3">
          <a href="">
            <i className="fa-regular fa-pen-to-square p-2 bg-gray-200 rounded-full text-md text-blue-500"></i>{" "}
            Create post
          </a>
        </div>
        <textarea
          className="border-2 rounded w-full dark:bg-transparent p-2"
          name=""
          id="post-modal"
          cols="30"
          rows="3"
          placeholder="Whats on your mind"
        />
        <br />
        <div>
          <div className="flex">
            <a href="#">
              <i className="fa-solid fa-video p-3"></i>Live Video
            </a>
            <a href="#">
              <i className="fa-regular fa-images p-3"></i> Photo/Video
            </a>
            <a href="#">
              <i className="fa-solid fa-camera p-3"></i> Feeling/Activity
            </a>
            <a href="#" className="ml-auto">
              <i className="fa-solid fa-ellipsis p-3 bg-gray-200 dark:bg-gray-600 rounded-full"></i>
            </a>
          </div>
        </div>
      </div> */}
      <PostModal userData={userData} />
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

  <ToastContainer />
    </div>
  );
};

export default MiddleLeftBar;
