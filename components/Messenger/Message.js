import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/singleUser?id=${message.sender}`)
      .then(({ data }) => setUser(data));
  }, [message.sender]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <Image
          height="50"
          width="50"
          className="messageImg"
          src={user.photoURL || "https://i.ibb.co/Xz214Jt/user-8.webp"}
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
