import axios from "axios";
import Image from "next/image";

export default function ChatOnline({ user, currentId, setCurrentChat }) {
  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/messenger/conversations?firstUserId=${currentId}?secondUserId=${user._id}`
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
