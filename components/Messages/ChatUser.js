import { useEffect, useState } from "react";
import { RiUserSmileLine } from "react-icons/ri";
import axios from "axios";
import Image from "next/image";

const ChatUser = ({ conversation, currentUser, currentChat, onlineUsers }) => {
  const [user, setUser] = useState(null);
  const friendId = conversation.members.find((m) => m !== currentUser._id);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios("/api/user/singleUser?id=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation, friendId]);
  console.log({
    onlineUsers,
    conversation,
  });
  return (
    <>
      <div
        className={`relative lg:px-4 px-2 py-2 rounded-lg flex items-center space-x-3 focus-within:ring-1 focus-within:ring-inset focus-within:ring-white hover:bg-gray-200 dark:hover:bg-zinc-800 ${
          currentChat?._id === conversation._id
            ? "bg-gray-200 dark:bg-zinc-800"
            : ""
        }`}
      >
        <div className="flex-shrink-0 relative md:w-14 md:h-14 w-9 h-9">
          {user?.photoURL ? (
            <Image
              layout="fill"
              objectFit="cover"
              className="h-full w-full rounded-full object-cover mr-2"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <div className="md:w-14 md:h-14 w-9 h-9 rounded-full object-cover mr-2 bg-gray-300 dark:bg-zinc-900">
              <RiUserSmileLine className="w-full h-full object-cover p-2" />
            </div>
          )}
          {onlineUsers?.map((u) =>
            u._id === conversation.members[0] ? (
              <div className="absolute w-3 h-3 rounded-full bg-zinc-600 ring-2 ring-white dark:ring-black bottom-0 right-0"></div>
            ) : (
              <div className="absolute w-3 h-3 rounded-full bg-green-600 ring-2 ring-white dark:ring-black bottom-0 right-0"></div>
            )
          )}
        </div>
        <div className="flex-1 min-w-0 hidden lg:block">
          <a href="#" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="truncate text-base font-medium">
              {user?.displayName}
            </p>
          </a>
        </div>
      </div>
      {/* <div className="absolute -bottom-[1px] lg:-bottom-[1px] dark:bg-white bg-black w-1/2 lg:w-3/4 h-1 left-1/2 -translate-x-1/2 rounded"></div> */}
    </>
  );
};

export default ChatUser;
