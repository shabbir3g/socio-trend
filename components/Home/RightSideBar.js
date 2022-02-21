import React from "react";
import Image from "next/image";

const RightSideBar = () => {
  return (
    <div className="bg-neutral-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 drop-shadow-sm p-3 rounded-lg">
        <p className="mb-3">Contacts</p>
        <ul>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={30} height={30} alt="user" />{" "}
              <span className="ml-3">Hurin Seary</span>
              <span className="p-1 rounded-full bg-green-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={30} height={30} alt="user" />{" "}
              <span className="ml-3">Victor Exrixon</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={30} height={30} alt="user" />{" "}
              <span className="ml-3">Goria Coast</span>
              <span className="p-1 rounded-full bg-orange-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={30} height={30} alt="user" />{" "}
              <span className="ml-3">Hurin Seary</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={30} height={30} alt="user" />{" "}
              <span className="ml-3">David Goria</span>
              <span className="text-gray-500 font-normal text-sm ml-auto">
                4:09 pm
              </span>
            </a>
          </li>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={30} height={30} alt="user" />{" "}
              <span className="ml-3">Seary Victor</span>
              <span className="text-gray-500 font-normal text-sm ml-auto">
                2 days
              </span>
            </a>
          </li>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={30} height={30} alt="user" />{" "}
              <span className="ml-3">Ana Seary</span>
              <span className="p-1 rounded-full bg-blue-500 ml-auto"></span>
            </a>
          </li>
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
