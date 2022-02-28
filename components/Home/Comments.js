import Image from "next/image";
import React from "react";

const Comments = ({ comment }) => {
  return (
    <div className="flex pt-3">
      <div className="">
        <Image
          className="rounded-full"
          src={
            comment?.photoURL ||
            "https://i.ibb.co/MVbC3v6/114-1149878-setting-user-avatar-in-specific-size-w.png"
          }
          alt=""
          height="32px"
          width="32px"
        />
      </div>
      <div className="dark:bg-slate-700 bg-slate-200 px-3 py-2 rounded-2xl ml-2">
        <h1 className="text-sm font-semibold">{comment.displayName}</h1>
        <p className="text-sm">{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comments;