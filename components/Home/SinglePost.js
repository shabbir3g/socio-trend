import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { format } from "timeago.js";
import axios from "axios";
import Comments from "./Comments";

const SinglePost = ({ post, userData, setIsLike, isLike, setDeletePost }) => {
  const [dbComments, setDbComments] = useState([]);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(null);
  const [menu, setMenu] = useState("hidden");
  const ref = useRef();

  useEffect(() => {
    axios
      .get(`/api/post/comment?id=${post._id}`)
      .then(({ data }) => setDbComments(data));
  }, [status, post._id]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmitComment = async (e) => {
  
    e.preventDefault();
    let comments = {};
    comments.photoURL = userData.photoURL;
    comments.comment = comment;
    comments.displayName = userData.displayName;
    const postComments = [...dbComments, comments];
    await axios
      .put(`/api/post/comment?id=${post._id}`, postComments)
      .then((data) => setStatus(data.status));
      ref.current.value = "";
  };

  const handleLike = async () => {
    const data = { userId: userData._id };
    await axios
      .put(`/api/post/like?id=${post._id}`, data)
      .then((data) => setStatus(data));
    setIsLike(!isLike);
  };
  const handleDelete = (id) => {
    axios.delete(`api/post?id=${id}`).then((data) => {
      if (data.status === 200) {
        setDeletePost(true);
      }
    });
  };
  return (
    <div className="drop-shadow-sm bg-white dark:bg-gray-800 p-5 rounded-xl my-4 ">
      <div className="flex justify-between relative">
        <div className=" flex">
          <Image
            src={
              post.photoURL ||
              "https://i.ibb.co/MVbC3v6/114-1149878-setting-user-avatar-in-specific-size-w.png"
            }
            className="rounded-full"
            alt=""
            height={45}
            width={45}
          />
          <div className="ml-3">
            <h4 className="text-md font-semibold">{post.displayName}</h4>
            <span className="text-xs">{format(post.createdAt)} </span>
          </div>
        </div>
        <div
          className=""
          onClick={() => setMenu(menu === "hidden" ? "block" : "hidden")}
        >
          <div className="py-2 px-[18px] bg-gray-200 dark:bg-gray-600 rounded-full cursor-pointer">
            <i className="fa-solid fa-ellipsis-vertical dark:text-white text-black"></i>
          </div>
        </div>
      </div>
      <div className={menu}>
        <div className="absolute right-5 py-3 bg-gray-300 dark:bg-gray-700  z-40 rounded-lg">
          <ul>
            <li className="py-1 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white px-2">
              <i className="fa-solid fa-pen-to-square"></i> Edit posts
            </li>
            <li
              className="py-1 cursor-pointer hover:bg-gray-700  dark:hover:bg-gray-500 hover:text-white px-2"
              onClick={() => handleDelete(post._id)}
            >
              <i className="fa-solid fa-trash"></i> Delete posts
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-3">
        <p>
          {post.postContent}
          {/* <button className="text-blue-600 pl-2">see more</button> */}
        </p>
      </div>
      <div className="pt-3">
        {post.img && <Image src={post.img} height={350} width={600} alt="" />}
      </div>
      <div className="flex justify-between items-center">
        <div className="pt-3 flex items-center">
          <span className="p-1 pb-0 bg-gray-200 dark:bg-gray-600 rounded-full">
            <button onClick={handleLike}>
              <Image src="/like.svg" alt="" height={25} width={25} />
            </button>
          </span>
          <span className="ml-3">{post.like.length} Like</span>
          <div className="ml-5 ">
            <button className="items-center flex">
              <i className="fa-regular fa-comment text-xl"></i>
              <span className="ml-1">{dbComments.length} Comments</span>
            </button>
          </div>
        </div>
        <div>
          <button className="flex items-center">
            <i className="fa-solid fa-share text-xl"></i>
            <span className="ml-1">{post.share} Share</span>
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmitComment}>
        <div className="flex pt-5">
          <div className="">
            <Image
              src={userData?.photoURL || "/user-8.png"}
              alt=""
              height="40"
              width="40"
              className="rounded-full"
            />
          </div>
          <div className="w-full mx-2">
            <input
              onChange={handleCommentChange} ref={ref}
              className="w-full h-10 dark:bg-slate-700 bg-slate-300 rounded-2xl p-2 resize-none scrollbar-hide"
              placeholder="Wright a comment ..."
            />
          </div>
          <div className="w-10 flex items-center justify-center">
            <button type="submit">
              <i className="fa-solid fa-arrow-up py-3 px-3.5 rounded-full bg-green-600"></i>
            </button>
          </div>
        </div>
      </form>
      {dbComments?.map((comment, index) => (
        <Comments key={index} comment={comment} />
      ))}
    </div>
  );
};

export default SinglePost;
