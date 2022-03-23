import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RiUserSmileLine } from 'react-icons/ri';
import { format } from 'timeago.js';

const Chat = ({ message, own }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/api/user/singleUser?id=${message.sender}`)
      .then(({ data }) => setUser(data));
  }, [message.sender]);
  return (
    <>
      {own ? (
        <div className="flex items-end gap-2 flex-row-reverse">
          <div className="flex-shrink-0 w-8 relative h-8 flex mb-5">
            {user?.photoURL ? (
              <Image
                layout="fill"
                objectFit="cover"
                className="h-full w-full rounded-full object-cover mr-2"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <div className="w-10 h-10 rounded-full object-cover mr-2 bg-gray-300 dark:bg-zinc-900">
                <RiUserSmileLine className="w-full h-full object-cover p-2" />
              </div>
            )}
          </div>
          <div className="text-right space-y-1">
            <p className="text-xs font-medium dark:text-gray-300 text-gray-600">
              {user.displayName}
            </p>
            <p className="bg-blue-500 text-white text-left text-sm font-normal md:max-w-sm max-w-sm shadow py-2 px-4 inline-block rounded-md">
              {message.text}
            </p>
            <div className="text-xs">{format(message.createdAt)}</div>
          </div>
        </div>
      ) : (
        <div className="flex items-end gap-2">
          <div className="flex-shrink-0 w-8 relative h-8 flex mb-5">
            {user?.photoURL ? (
              <Image
                layout="fill"
                objectFit="cover"
                className="h-full w-full rounded-full object-cover mr-2"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <div className="w-10 h-10 rounded-full object-cover mr-2 bg-gray-300 dark:bg-zinc-900">
                <RiUserSmileLine className="w-full h-full object-cover p-2" />
              </div>
            )}
          </div>
          <div className="text-left space-y-1">
            <p className="text-xs font-medium dark:text-gray-300 text-gray-600">
              {user.displayName}
            </p>
            <p className="bg-white dark:bg-zinc-800 text-sm font-normal md:max-w-sm max-w-sm shadow py-2 px-4 inline-block rounded-md">
              {message.text}
            </p>
            <div className="text-xs">{format(message.createdAt)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
