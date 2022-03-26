import { RiUserSmileLine } from "react-icons/ri";
import Image from "next/image";
import axios from "axios";

const OnlineUsers = ({ onlineUser, currentId, setCurrentChat }) => {
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
    <>
      <div
        className={`relative px-2 py-2 rounded-lg flex items-center space-x-3 focus-within:ring-1 focus-within:ring-inset focus-within:ring-white hover:bg-gray-200 dark:hover:bg-zinc-800`}
        onClick={() => handleClick(onlineUser)}
      >
        <div className="flex-shrink-0 relative md:w-14 md:h-14 w-9 h-9">
          {onlineUser?.photoURL ? (
            <Image
              layout="fill"
              objectFit="cover"
              className="h-full w-full rounded-full object-cover mr-2"
              src={onlineUser?.photoURL}
              alt=""
            />
          ) : (
            <div className="md:w-14 md:h-14 w-9 h-9 rounded-full object-cover mr-2 bg-gray-300 dark:bg-zinc-900">
              <RiUserSmileLine className="w-full h-full object-cover p-2" />
            </div>
          )}

          <div className="absolute w-3 h-3 rounded-full bg-green-600 ring-2 ring-white dark:ring-black bottom-0 right-0"></div>
        </div>
      </div>
    </>
  );
};

export default OnlineUsers;
