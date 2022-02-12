import Link from "next/link";
import React from "react";

const LeftSideBar = () => {
  return (
    <div className="bg-neutral-100">
      <div className="w-full">
        <div className="bg-white p-5 rounded">
          <p className="mb-3">New Feeds</p>
          <ul>
            <Link href="/">
              <a>
                <li className="mb-3">
                  <i className="fa-solid fa-tv p-3 bg-blue-300 text-white rounded-full"></i>{" "}
                  NewsFeed
                </li>
              </a>
            </Link>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-tv p-3 bg-blue-500 text-white rounded-full mr-2"></i>{" "}
                NewsFeed
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-ribbon p-3 bg-red-400 text-white rounded-full mr-2"></i>{" "}
                Bedges
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-globe p-3 bg-yellow-400 text-white rounded-full mr-2"></i>{" "}
                Explore Stories
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-bolt p-3 bg-red-400 text-white rounded-full mr-2"></i>{" "}
                Popular Groups
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-regular fa-user p-3 bg-blue-400 text-white rounded-full mr-2"></i>{" "}
                Author Profile
              </a>
            </li>
            <Link href="/profile">
              <a>
                <li className="mb-3">
                  <i className="fa-regular fa-user p-3 bg-blue-300 text-white rounded-full"></i>
                  Author Profile
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="my-5 bg-white p-5 rounded">
          <p className="mb-3">More pages</p>
          <ul>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-inbox p-3 text-indigo-500 text-2xl"></i> Email Box
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-home p-3 text-indigo-500 text-2xl"></i> Near Hotel
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-location-dot p-3 text-indigo-500 text-2xl"></i> Latest Event
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-brands fa-youtube p-3 text-indigo-500 text-2xl"></i> Live Stream
              </a>
            </li>
          </ul>
        </div>
        <div className="my-5 bg-white p-5 rounded">
          <p className="mb-3">Account</p>
          <ul>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-gear p-3 text-gray-400 text-2xl"></i> Settings
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-chart-pie p-3 text-gray-400 text-2xl"></i> Analytics
              </a>
            </li>
            <li className="mb-3">
              <a href="">
                <i className="fa-solid fa-comment p-3 text-gray-400 text-2xl"></i> Chat
              </a>
            </li>
            <Link href="/chat">
              <a>
                <li className="mb-3">
                  <i className="fa-solid fa-comment p-3"></i> Chat
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
