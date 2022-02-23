import Image from "next/image";
import React from "react";

const Comments = ({ comment }) => {
  return (
    <div className="flex pt-3">
      <div className="">
        <Image
          className="rounded-full"
          src={comment.photoURL}
          alt=""
          height="32px"
          width="32px"
        />
      </div>
      <div className="bg-gray-700 px-3 py-2 rounded-2xl ml-2">
        <h1 className="text-sm font-semibold">{comment.displayName}</h1>
        <p className="text-sm">{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comments;
