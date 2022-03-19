import axios from "axios";
import Image from "next/image";

const ChatOnline = ({ user, currentId, setCurrentChat }) => {
  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/api/messenger/conversations?firstUserId=${currentId}?secondUserId=${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      <div
        className="flex items-center font-medium cursor-pointer mt-2.5"
        onClick={() => handleClick(user)}
      >
        <div className="relative mt-2.5">
          <Image
            height="50"
            width="50"
            className="rounded-full"
            src={user?.photoURL || "https://i.ibb.co/Xz214Jt/user-8.webp"}
            alt=""
          />
        </div>
        <span className="chatOnlineName ml-3">{user?.displayName}</span>
      </div>
    </div>
  );
};

export default ChatOnline;
