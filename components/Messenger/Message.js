import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/api/user/singleUser?id=${message.sender}`)
      .then(({ data }) => setUser(data));
  }, [message.sender]);

  return (
    <div
      className={own ? "flex flex-col mt-5 items-end" : "flex flex-col mt-5"}
    >
      <div className="flex">
        <div>
          <Image
            height="50"
            width="50"
            className="rounded-full"
            src={user.photoURL || "https://i.ibb.co/Xz214Jt/user-8.webp"}
            alt=""
          />
        </div>
        <p
          className={
            own
              ? "p-2.5 rounded-2xl bg-blue-700 text-white max-w-xs ml-3"
              : "p-2.5 rounded-2xl bg-gray-700 text-white max-w-xs ml-3"
          }
        >
          {message.text}
        </p>
      </div>
      <div className="text-xs mt-2.5">{format(message.createdAt)}</div>
    </div>
  );
}
