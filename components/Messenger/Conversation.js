import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios("/api/user/singleUser?id=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <Image
        height="50"
        width="50"
        className="conversationImg"
        src={user?.photoURL || "https://i.ibb.co/Xz214Jt/user-8.webp"}
        alt=""
      />
      <span className="conversationName pl-3">{user?.displayName}</span>
    </div>
  );
}
