import React from "react";
import Image from "next/image";

const SinglePost = () => {
  return (
    <div className="drop-shadow-sm bg-white p-5 rounded-xl my-4 ">
      <div className="flex justify-between">
        <div className=" flex">
          <Image
            src="https://i.ibb.co/5kdWHNN/user-12.png"
            alt=""
            height="45"
            width="45"
          />
          <div className="ml-3">
            <h4 className="text-md font-semibold">Saddaul Siam</h4>
            <span className="text-xs">3 hour ago</span>
          </div>
        </div>
        <div className="">
          <div className="p-1 pb-0 bg-gray-200 rounded-full">
            <Image
              src="https://img.icons8.com/ios-glyphs/20/000000/more.png"
              alt=""
              height="20"
              width="20"
            />
          </div>
        </div>
      </div>
      <div className="pt-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          aspernatur officia optio provident saepe sit hic quod natus quis at
          consectetur eius voluptate deserunt incidunt, veritatis quae
          consequatur repudiandae error?
          <button className="text-blue-600 ml-1">see more</button>
        </p>
      </div>
      <div className="pt-3">
        <Image
          src="https://i.ibb.co/0DKnC6f/t-10.jpg"
          height="350"
          width="600"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="pt-3 flex items-center">
          <span className="p-1 pb-0 bg-gray-200 rounded-full">
            <button>
              <Image
                src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-like-notifications-justicon-flat-justicon.png"
                alt=""
                height="25"
                width="25"
              />
            </button>
          </span>
          <span className="p-1 pb-0 bg-gray-200 rounded-full ml-1">
            <button>
              <Image
                src="https://img.icons8.com/color/48/000000/like--v3.png"
                alt=""
                height="25"
                width="25"
              />
            </button>
          </span>
          <span className="ml-3">2.8K Like</span>
          <div className="ml-5 ">
            <button className="items-center flex">
              <Image
                src="https://img.icons8.com/fluency-systems-regular/48/000000/speech-bubble-with-dots.png"
                alt=""
                height="30"
                width="30"
              />
              <span className="ml-1">22 Comments</span>
            </button>
          </div>
        </div>
        <div>
          <button className="flex items-center">
            <Image
              src="https://img.icons8.com/material-outlined/25/000000/share.png"
              alt=""
              width="25"
              height="25"
            />
            <span className="ml-1">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
