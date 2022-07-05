import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Comments = ({ comment }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`/api/user/singleUser?id=${comment.userId}`).then(({ data }) => {
      setUser(data);
    });
  }, [comment.userId]);
  return (
    <div className="flex pt-3">
      <div className="">
        <Link href={`/${user.userName}`} passHref>
          <Image
            className="rounded-full cursor-pointer"
            src={
              comment?.photoURL ||
              "https://i.ibb.co/MVbC3v6/114-1149878-setting-user-avatar-in-specific-size-w.png"
            }
            alt=""
            height="32px"
            width="32px"
          />
        </Link>
      </div>
      <div className="dark:bg-zinc-800 bg-slate-200 px-3 py-2 rounded-2xl ml-2">
        <Link href={`/${user.userName}`} passHref>
          <h1 className="text-sm font-semibold cursor-pointer">
            {comment.displayName}
          </h1>
        </Link>
        <p className="text-sm">{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comments;
