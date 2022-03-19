import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios(
          "http://localhost:3000/api/user/singleUser?id=" + friendId
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation flex items-center p-2.5 cursor-pointer mt-2.5">
      <Image
        height="50"
        width="50"
        className="w-10 h-10 rounded-full object-cover mr-5"
        src={user?.photoURL || "https://i.ibb.co/Xz214Jt/user-8.webp"}
        alt=""
      />
      <span className="conversationName font-medium pl-3">{user?.displayName}</span>
    </div>
  );
}
