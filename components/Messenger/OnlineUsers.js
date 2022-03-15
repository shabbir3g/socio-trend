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
      <div className="flex items-center font-medium cursor-pointer mt-2.5" onClick={() => handleClick(user)}>
        <div className="relative mt-2.5">
          <Image
            height="50"
            width="50"
            className="rounded-full"
            src={user.photoURL || "https://i.ibb.co/Xz214Jt/user-8.webp"}
            alt=""
          />
          <div className="w-2.5 h-2.5 rounded-full bg-lime-600 absolute top-1 right-1"></div>
        </div>
        <span className="chatOnlineName ml-3">{user?.displayName}</span>
      </div>
    </div>
  );
}
