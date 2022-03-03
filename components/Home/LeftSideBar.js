import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useFirebase from "../../firebase/useFirebase";
import baseUrl from "../../utilities/baseUrl";

const LeftSideBar = () => {
  const [users, setUsers] = useState([]);
  const { googleSingOut } = useFirebase();

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/allUsers`)
      .then(({ data }) => setUsers(data));
  }, []);
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg drop-shadow-sm ">
          <p className="mb-3">New Feeds</p>
          <ul className="left-sidebar">
            <Link href="/">
              <a>
                <li className="mb-3">
                  <i className="fa-solid fa-tv p-3 bg-blue-500 text-white rounded-full"></i>
                  NewsFeed
                </li>
              </a>
            </Link>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-ribbon p-3 bg-red-400 text-white rounded-full"></i>
                Bedges
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-globe p-3 bg-yellow-400 text-white rounded-full"></i>
                Explore Stories
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-bolt p-3 bg-red-400 text-white rounded-full"></i>
                Popular Groups
              </a>
            </li>
            <Link href="/profile">
              <a>
                <li className="mb-3">
                  <i className="fa-regular fa-user p-3 bg-blue-400 text-white rounded-full"></i>
                  Author Profile
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded-lg drop-shadow-sm">
          <p className="mb-3">More pages</p>
          <ul className="left-second-sidebar">
            <li>
              <Link href="/email">
                <a>
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
        </div>
        <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded-lg drop-shadow-sm">
          <p className="mb-3">Account</p>
          <ul className="left-second-sidebar">
            <li>
              <a href="">
                <i className="fa-solid fa-gear p-3 text-gray-400 text-2xl"></i>{" "}
                Settings
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-chart-pie p-3 text-gray-400 text-2xl"></i>{" "}
                Analytics
              </a>
            </li>
            <li>
              <Link href="/chatting">
                <a>
                  <i className="fa-solid fa-comment p-3 text-gray-400 text-2xl"></i>{" "}
                  Chat
                </a>
              </Link>
            </li>
            <li onClick={googleSingOut} className="signout mb-3 ">
              <i className="fa-solid fa-right-from-bracket p-3 "></i> Sign Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
