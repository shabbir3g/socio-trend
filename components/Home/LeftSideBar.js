import axios from 'axios';
import Link from 'next/link';
import { FaUsers, FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import {
  BsChatLeftFill,
  BsGear,
  BsChat,
  BsChevronDown,
  BsFillBookmarksFill,
  BsFillBookmarkFill,
} from 'react-icons/bs';
import { CgScreen } from 'react-icons/cg';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useFirebase from '../../firebase/useFirebase';
import Image from 'next/image';

const LeftSideBar = () => {
  const { googleSingOut } = useFirebase();
  const [data, setData] = useState({});
  const user = useSelector((state) => state.states.user);

  useEffect(() => {
    axios
      .get(`/api/user?email=${user?.email}`)
      .then(({ data }) => setData(data));
  }, [user?.email]);
  return (
    <div>
      <div className="w-full space-y-4">
        <div className="bg-white font-medium dark:bg-black p-5 rounded-lg drop-shadow-sm space-y-3">
          <p>Quick links</p>
          <div className="left-sidebar space-y-2">
            <Link href="/">
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <CgScreen className="bg-blue-400 p-2 w-10 h-10 text-white rounded-md" />
                Newsfeed
              </a>
            </Link>
            <Link href="/friends">
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <FaUsers className="bg-red-400 p-2 w-10 h-10 text-white rounded-md" />
                Friends
              </a>
            </Link>
            <Link href="/messenger">
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <BsChatLeftFill className="bg-green-400 p-2 w-10 h-10 text-white rounded-md" />
                Messages
              </a>
            </Link>
            <Link href="/posts/bookmarked">
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <BsFillBookmarkFill className="bg-teal-400 p-2 w-10 h-10 text-white rounded-md" />
                Bookmarks
              </a>
            </Link>
            <Link href={`/${data.userName}`}>
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <FaUserAlt className="bg-amber-400 p-2 w-10 h-10 text-white rounded-md" />
                My profile
              </a>
            </Link>
          </div>
        </div>
        {/* <div className="my-5 bg-white dark:bg-black p-5 rounded-lg drop-shadow-sm">
          <p>More pages</p>
          <ul className="left-second-sidebar">
            <li>
              <Link href="https://gmail.com">
                <a target="_blank">
                  <i className="fa-solid fa-inbox p-3 text-indigo-500 text-2xl"></i>{" "}
                  Email Box
                </a>
              </Link>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-home p-3 text-indigo-500 text-2xl"></i>{" "}
                Near Hotel
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-location-dot p-3 text-indigo-500 text-2xl"></i>{" "}
                Latest Event
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-youtube p-3 text-indigo-500 text-2xl"></i>{" "}
                Live Stream
              </a>
            </li>
          </ul>
        </div> */}
        <div className="bg-white font-medium dark:bg-black p-5 rounded-lg drop-shadow-sm space-y-3">
          <div className="left-sidebar space-y-2">
            <div className="flex items-center gap-2 p-1.5">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                {data.photoURL && (
                  <Image
                    alt={data && data.displayName}
                    src={data && data.photoURL}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <p>{data.displayName}</p>
              <BsChevronDown className="ml-auto" />
            </div>
            <Link href={`/${data.userName}`}>
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <BsGear className="bg-indigo-400 p-2 w-10 h-10 text-white rounded-md" />
                Settings
              </a>
            </Link>
            <Link href="/friends">
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <BsChat className="bg-lime-400 p-2 w-10 h-10 text-white rounded-md" />
                Chat
              </a>
            </Link>
            <Link href="/posts/bookmarked">
              <a className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md">
                <BsFillBookmarksFill className="bg-sky-400 p-2 w-10 h-10 text-white rounded-md" />
                Saved posts
              </a>
            </Link>
            <button
              onClick={googleSingOut}
              className="flex items-center w-full gap-2 hover:bg-gray-200 dark:hover:bg-zinc-900 p-1.5 rounded-md"
            >
              <FiLogOut className="bg-rose-400 p-2 w-10 h-10 text-white rounded-md" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
