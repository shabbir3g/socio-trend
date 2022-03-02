import Image from "next/image";
import React from "react";
import { format } from "timeago.js";

const UserSinglePost = ({ post }) => {
  return (
    <div className="drop-shadow-sm bg-white dark:bg-gray-800 p-5 rounded-xl my-4 ">
      <div className="flex justify-between">
        <div className=" flex">
          <Image
            src={post.photoURL}
            className="rounded-full"
            alt=""
            height="45"
            width="45"
          />
          <div className="ml-3">
            <h4 className="text-md font-semibold">{post.displayName}</h4>
            <span className="text-xs">{format(post.createdAt)} </span>
          </div>
        </div>
        <div className="">
          <div className="py-2 px-4 bg-gray-200 dark:bg-gray-600 rounded-full">
            <i className="fa-solid fa-ellipsis-vertical dark:text-white text-black"></i>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <p>
          {post.postContent}
          <button className="text-blue-600 pl-2">see more</button>
        </p>
      </div>
      <div className="pt-3">
      
      { post.img ? <Image src={post.img} height="350" width="600" alt="" /> : ""}
            
       
      </div>
      <div className="flex justify-between items-center">
        <div className="pt-3 flex items-center">
          <span className="p-1 pb-0 bg-gray-200 dark:bg-gray-600 rounded-full">
            <button>
              <Image
                src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-like-notifications-justicon-flat-justicon.png"
                alt=""
                height="25"
                width="25"
              />
            </button>
          </span>
          <span className="p-1 pb-0 bg-gray-200 dark:bg-gray-600 rounded-full ml-1">
            <button>
              <Image
                src="https://img.icons8.com/color/48/000000/like--v3.png"
                alt=""
                height="25"
                width="25"
              />
            </button>
          </span>
          <span className="ml-3">{post.like} Like</span>
          <div className="ml-5 ">
            <button className="items-center flex">
              <i className="fa-regular fa-comment text-xl"></i>
              <span className="ml-1">{post.comment.length} Comments</span>
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
    </div>
  );
};

export default UserSinglePost;
