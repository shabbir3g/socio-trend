import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ChatOnline({
  user,
  onlineUsers,
  currentId,
  setCurrentChat,
}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  // useEffect(() => {
  //   const getFriends = async () => {
  //     const res = await axios.get("/users/friends/" + currentId);
  //     setFriends(res.data);
  //   };

  //   getFriends();
  // }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/messenger/getConversations?firstUserId=${currentId}?secondUserId=${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend" onClick={() => handleClick(user)}>
        <div className="chatOnlineImgContainer">
          <Image
            height="50"
            width="50"
            className="chatOnlineImg"
            src={user.photoURL || "https://i.ibb.co/Xz214Jt/user-8.webp"}
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{user?.displayName}</span>
      </div>
    </div>
  );
}
