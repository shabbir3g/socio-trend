import React from "react";
import Image from "next/image";

const MiddleRightBar = () => {
  return (
    <div>
      <div className="">
        <div className="bg-white dark:bg-gray-800 p-5 rounded">
          <div className="flex mb-3">
            <p className="font-medium">Friend Request</p>
            <span className="font-medium text-blue-500 ml-auto">See all</span>
          </div>
          <hr className="my-4" />
          <ul>
            <li className="mb-3 flex items-center">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 font-normal text-sm dark:text-gray-200">
                  12 mutual friends
                </span>
              </div>
            </li>
            <li className="my-5">
              <a href="#" className="px-5 py-2 bg-blue-500 rounded text-white mr-3">
                Confirm
              </a>
              <a href="#" className="px-5 py-2 bg-slate-200 rounded dark:text-black">
                Delete
              </a>
            </li>
            <li className="mb-3 flex items-center">
              <div className="mr-3">
                <Image src="/user-8.png" width="45px" height="45px" alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 font-normal text-sm dark:text-gray-200">
                  12 mutual friends
                </span>
              </div>
            </li>
            <li className="my-5">
              <a href="#" className="px-5 py-2 bg-blue-500 rounded text-white mr-3">
                Confirm
              </a>{" "}
              <a href="#" className="px-5 py-2 bg-slate-200 rounded dark:text-black">
                Delete
              </a>
            </li>
            <li className="mb-3 flex items-center">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 font-normal text-sm dark:text-gray-200">
                  12 mutual friends
                </span>
              </div>
            </li>
            <li className="my-5">
              <a href="#" className="px-5 py-2 bg-blue-500 rounded text-white mr-3">
                Confirm
              </a>{" "}
              <a href="#" className="px-5 py-2 bg-slate-200 rounded dark:text-black">
                Delete
              </a>
            </li>
          </ul>
        </div>
        <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded">
          <div className="flex mb-5">
            <p className="font-medium">Confirm Friend</p>
            <span className="font-medium text-blue-500 ml-auto">See all</span>
          </div>
          <ul>
            <li className="mb-3 flex items-center px-3 py-2 bg-slate-200 dark:bg-gray-600 dark:text-white  rounded">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                  12 mutual friends
                </span>
              </div>
              <p className="ml-auto mr-3"><i className="fa-solid fa-angle-right"></i></p>
            </li>
            <li className="mb-3 flex items-center px-3 py-2 bg-slate-200 dark:bg-gray-600 dark:text-white rounded">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                  12 mutual friends
                </span>
              </div>
              <p className="ml-auto mr-3"><i className="fa-solid fa-plus"></i></p>
            </li>
            <li className="mb-3 flex items-center px-3 py-2 bg-slate-200 dark:bg-gray-600 dark:text-white rounded">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 dark:text-gray-400 font-normal text-sm">
                  12 mutual friends
                </span>
              </div>
              <p className="ml-auto mr-3"><i className="fa-solid fa-plus"></i></p>
            </li>
          </ul>
        </div>
        <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded">
          <div className="flex mb-5">
            <p className="font-medium">Suggest Group</p>
            <span className="font-medium text-blue-500 ml-auto">See all</span>
          </div>
          <hr className="my-5" />
          <Image className="rounded-lg" src="/e-2.jpg" width="300" height="250" alt="grup"></Image>
        </div>
        <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded">
          <div className="flex mb-5">
            <p className="font-medium">Suggest Page</p>
            <span className="font-medium text-blue-500 ml-auto">See all</span>
          </div>
          <hr className="my-5" />
          <div>
            <Image className="rounded-lg" src="/e-2.jpg" width="300" height="250" alt="grup"></Image>
          </div>
          <div className="flex justify-center mt-2">
            <a href="#" className="px-5 py-2 bg-gray-300 rounded">
              Like Page
            </a>
          </div>
        </div>
        <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded">
          <div className="flex mb-3">
            <p className="font-medium">Event</p>
            <span className="font-medium text-blue-500 ml-auto">See all</span>
          </div>
          <hr className="my-5" />
          <ul>
            <li className="mb-3 flex items-center">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 font-normal text-sm">
                  12 mutual friends
                </span>
              </div>
            </li>
            <li className="mb-3 flex items-center">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 font-normal text-sm">
                  12 mutual friends
                </span>
              </div>
            </li>
            <li className="mb-3 flex items-center">
              <div className="mr-3">
                <Image src="/user-8.png" width={45} height={45} alt="user" />
              </div>
              <div>
                <p className="font-medium">Anthony Daugloi</p>
                <span className="text-gray-500 font-normal text-sm">
                  12 mutual friends
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MiddleRightBar;
