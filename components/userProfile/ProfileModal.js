import Image from "next/image";
import React, { useState } from "react";

const ProfileModal = () => {
  const [image, setImage] = useState(null);
  console.log(image);

  const handleImg = (file) => {
    console.log(file);
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <div
      className="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center"
      id="edit-profile-modal"
    >
      <div className="bg-gray-200 dark:bg-gray-800 px-7 py-3 rounded shadow-xl text-gray-800">
        <div className="flex justify-between items-center border-b-2 py-3 border-gray-500">
          <h4 className="text-lg font-bold dark:text-white">Edit profile</h4>
          <svg
            className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full dark:text-white dark:hover:bg-gray-600"
            id="close-profile-modal"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="flex justify-between items-center pt-5">
          <h4 className="text-lg font-bold dark:text-white">Profile Picture</h4>
          <div>
            <label htmlFor="files">
              <span className="text-lg text-blue-600 font-bold hover:bg-gray-300 px-3 py-1 rounded-md cursor-pointer">
                Update
              </span>
            </label>

            <input
              type="file"
              name="file"
              id="files"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImg(e.target.files)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={image || "https://i.ibb.co/5kdWHNN/user-12.png"}
            alt="profile image"
            width="150"
            height="150"
          />
        </div>
        <div className="flex justify-between items-center py-5">
          <h4 className="text-lg font-bold dark:text-white">Cover Photo</h4>
          <label htmlFor="files">
            <span className="text-lg text-blue-600 font-bold hover:bg-gray-300 px-3 py-1 rounded-md cursor-pointer ">
              Update
            </span>
          </label>
          <input
            type="file"
            id="files"
            name="file"
            className="hidden"
            // onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="https://i.ibb.co/pWc2Ffd/u-bg.jpg"
            alt="profile image"
            width="500"
            height="200"
          />
        </div>
        {/* <div className="flex space-x-3 pb-3 pt-5 items-center">
          <div className="text-lg font-bold dark:text-white">Your Name:</div>
          <div className="text-md font-semibold dark:text-white">User Name</div>
        </div> */}
        <div className="flex items-center space-x-3 py-6">
          <div className="text-lg font-bold dark:text-white">
            Chenge Your Name:
          </div>
          <input
            placeholder="Type Your Name"
            className="w-2/4 h-10 px-2 focus:outline-none dark:bg-gray-700 dark:text-white"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="mt-3 flex justify-end space-x-3 pb-5">
          <button className="px-3 py-1 bg-green-500 text-gray-200 hover:bg-green-700 rounded-md">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
