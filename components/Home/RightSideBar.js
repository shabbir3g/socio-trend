import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import baseUrl from "../../utilities/baseUrl";

const RightSideBar = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/allUsers`)
      .then(({ data }) => setUsers(data));
  }, []);
  return (
    <div className="bg-neutral-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 drop-shadow-sm p-3 rounded-lg">
        <p className="mb-3">Contacts</p>
        <ul>
          {users.map((user) => (
            <li className="mb-3" key={user._id}>
              <a href="#" className="flex items-center">
                <Image
                  src={
                    user.photoURL ||
                    "http://uitheme.net/sociala/images/profile-4.png"
                  }
                  width="30"
                  height="30"
                  alt="user"
                  className="rounded-full"
                />
                <span className="ml-3 contact-users" title={user.displayName}>{user.displayName}</span>
                <span className="p-1 rounded-full bg-green-500 ml-auto"></span>
                {/* <span className="p-1 rounded-full bg-yellow-500 ml-auto"></span> */}
              </a>
            </li>
          ))}
        </ul>
        <p className="mb-5 mt-5">Groupes</p>
        <ul className="right-side-group">
          <li className="mb-3">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-blue-500 text-white rounded-full">
                UD
              </span>
              <span className="ml-3">Study Group</span>
              <span className="text-gray-500 font-normal text-sm ml-auto">
                2 min
              </span>
            </a>
          </li>
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-yellow-500 text-white rounded-full">
                AR
              </span>
              <span className="ml-3">Armany Design</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-red-500 text-white rounded-full">
                UD
              </span>
              <span className="ml-3">De fabous</span>
              <span className="p-1 rounded-full bg-orange-500 ml-auto"></span>
            </a>
          </li>
        </ul>
        <p className="mb-5 mt-5">Pages</p>
        <ul className="right-side-group">
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-blue-500 text-white rounded-full">
                AB
              </span>
              <span className="ml-3">Armany Seary</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-yellow-500 text-white rounded-full">
                HD
              </span>
              <span className="ml-3">Entropio Inc</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-blue-500 text-white rounded-full">
                AB
              </span>
              <span className="ml-3">Armany Seary</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-yellow-500 text-white rounded-full">
                HD
              </span>
              <span className="ml-3">Entropio Inc</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-blue-500 text-white rounded-full">
                AB
              </span>
              <span className="ml-3">Armany Seary</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-4">
            <a href="" className="flex items-center">
              <span className="p-1.5 bg-yellow-500 text-white rounded-full">
                HD
              </span>
              <span className="ml-3">Entropio Inc</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
