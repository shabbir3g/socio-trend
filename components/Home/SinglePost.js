import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { format } from "timeago.js";
import { FaArrowUp } from "react-icons/fa";
import { FiEdit, FiTrash } from "react-icons/fi";
import { BiShare } from "react-icons/bi";
import axios from "axios";
import Comments from "./Comments";
import Link from "next/link";
import {
  BsChatLeft,
  BsThreeDotsVertical,
  BsHeartFill,
  BsHeart,
} from "react-icons/bs";

const SinglePost = ({ post, userData, setIsLike, isLike, setDeletePost }) => {
  const [dbComments, setDbComments] = useState([]);
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [status, setStatus] = useState(null);
  const [menu, setMenu] = useState("hidden");
  const ref = useRef();

  useEffect(() => {
    axios
      .get(`/api/user?email=${post.email}`)
      .then(({ data }) => setUserName(data.userName));
  }, [post.email]);

  useEffect(() => {
    axios
      .get(`/api/post/comment?id=${post._id}`)
      .then(({ data }) => setDbComments(data));
  }, [status, post._id]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
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
    await axios.put(`/api/post/like?id=${post._id}`, data).then((data) => {
      if (data.status === 200) {
        setStatus(data.status);
        setIsLike(!isLike);
      }
    });
  };
  const handleDelete = (id) => {
    axios.delete(`api/post?id=${id}`).then((data) => {
      if (data.status === 200) {
        setDeletePost(true);
      }
    });
  };
  return (
    <div className="drop-shadow-sm bg-white dark:bg-black p-5 sm:rounded-xl my-4 ">
      <div className="flex justify-between relative">
        <div className=" flex">
          <Link href={`/${userName}`} passHref>
            <Image
              src={
                post.photoURL ||
                "https://i.ibb.co/MVbC3v6/114-1149878-setting-user-avatar-in-specific-size-w.png"
              }
              className="rounded-full cursor-pointer"
              alt=""
              height={45}
              width={45}
            />
          </Link>
          <div className="ml-3">
            <Link href={`/${userName}`} passHref>
              <h4 className="text-md font-semibold cursor-pointer">
                {post.displayName}
              </h4>
            </Link>
            <span className="text-xs">{format(post.createdAt)} </span>
          </div>
        </div>
        <div onClick={() => setMenu(menu === "hidden" ? "block" : "hidden")}>
          <div className="p-3 bg-gray-100 dark:bg-zinc-900 rounded-full cursor-pointer">
            <BsThreeDotsVertical className="dark:text-white text-black" />
          </div>
        </div>
      </div>
      <div className={menu}>
        <div className="absolute right-5 py-3 bg-gray-100 dark:bg-zinc-800 w-40 z-40 rounded-lg">
          <ul>
            <li className="py-1 flex items-center cursor-pointer hover:bg-white dark:hover:bg-zinc-600 px-3">
              <FiEdit className="mr-2" /> Edit posts
            </li>
            {userData.email === post.email && (
              <li
                className="py-1 flex items-center cursor-pointer hover:bg-white  dark:hover:bg-zinc-600 px-3"
                onClick={() => handleDelete(post._id)}
              >
                <FiTrash className="mr-2" /> Delete posts
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="pt-3">
        <p>
          {post.postContent}
          {/* <button className="text-blue-600 pl-2">see more</button> */}
        </p>
      </div>
      {post.img && (
        <div className="pt-3 relative h-96 rounded-lg overflow-hidden w-full">
          <Image src={post.img} layout="fill" objectFit="cover" alt="" />
        </div>
      )}
      <div className="flex justify-between items-center">
        <div className="pt-3 flex items-center">
          <span className="p-1 pt-2 pb-0 px-1.5 bg-gray-200 dark:bg-gray-600 rounded-full">
            {post?.like?.find((id) => id === userData._id) ? (
              <button onClick={handleLike}>
                <BsHeartFill className="text-xl text-red-500" />
              </button>
            ) : (
              <button onClick={handleLike}>
                <BsHeart className="text-xl" />
              </button>
            )}
          </span>
          <span className="ml-3">{post?.like?.length} Like</span>
          <div className="ml-5 ">
            <button className="items-center flex gap-1">
              <BsChatLeft className="text-xl mt-1" />
              <span className="ml-1">{dbComments.length} Comments</span>
            </button>
          </div>
        </div>
        <div>
          <button className="flex items-center">
            <BiShare className="text-xl" />
            <span className="ml-1">{post.share} Share</span>
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmitComment}>
        <div className="flex gap-2 items-center pt-5">
          <div className="">
            <Image
              src={userData?.photoURL || "/user-8.png"}
              alt=""
              height="50"
              width="50"
              className="rounded-full"
            />
          </div>
          <div className="w-full">
            <input
              onChange={handleCommentChange}
              ref={ref}
              className="w-full h-10 dark:bg-zinc-800 bg-gray-200 rounded-full p-2 resize-none scrollbar-hide"
              placeholder="Wright a comment ..."
            />
          </div>
          <div className="w-10 flex items-center justify-center p-3 rounded-full bg-blue-600">
            <button type="submit">
              <FaArrowUp className=" text-white" />
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
