import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostModal from "./PostModal";
import SinglePost from "./SinglePost";

const MiddleLeftBar = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);

  const user = useSelector((state) => state.states.user);

  useEffect(() => {
    const createPostModal = document.getElementById("create-post-modal");
    const postBtn = document.getElementById("post-modal");
    const closePostModalBtn = document.getElementById("close-post-modal");

    const togglePostModal = () => {
      createPostModal.classList.toggle("hidden");
      createPostModal.classList.toggle("flex");
    };
    postBtn?.addEventListener("click", togglePostModal);
    closePostModalBtn?.addEventListener("click", togglePostModal);
  }, []);

  useEffect(() => {
    axios.get(`https://socio-trend.vercel.app/api/user?email=${user?.email}`).then((data) => {
      setUserData(data?.data);
    });
  }, [user?.email]);

  useEffect(() => {
    axios.get(`https://socio-trend.vercel.app/api/post`).then((data) => setPosts(data?.data));
  }, [user.email, isLike]);

  return (
    <div>
      {/* create post */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded">
        <div className="mb-3">
          <a href="">
            <i className="fa-regular fa-pen-to-square p-2 bg-gray-200 rounded-full text-md text-blue-500"></i>{" "}
            Create post
          </a>
        </div>
        <textarea
          className="border-2 rounded w-full dark:bg-gray-800 p-2"
          onClick={() => console.log("click")}
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
              <i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i>
            </a>
          </div>
        </div>
      </div>
      <PostModal userData={userData} />
      {posts.map((post) => (
        <SinglePost
          key={post._id}
          post={post}
          isLike={isLike}
          setIsLike={setIsLike}
          userData={userData}
        />
      ))}
    </div>
  );
};

export default MiddleLeftBar;
