import Image from "next/image";
import React, { useState } from "react";

const ProfileModal = ({ data }) => {
  const [profileImg, setProfileImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);

  const handleProfileImg = (file) => {
    setProfileImg(URL.createObjectURL(file));
  };
  const handleCoverImg = (file) => {
    setCoverImg(URL.createObjectURL(file));
  };
  return (
    <div
      className="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center z-10"
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
            <label htmlFor="files1">
              <span className="text-lg text-blue-600 font-bold hover:bg-gray-300 px-3 py-1 rounded-md cursor-pointer">
                Update
              </span>
            </label>
            <input
              type="file"
              name="file"
              id="files1"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleProfileImg(e.target.files[0])}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="object-cover rounded-full border-2 bg-no-repeat"
            src={
              profileImg ||
              data.photoURL ||
              "https://i.ibb.co/5kdWHNN/user-12.png"
            }
            alt="profile image"
            width="120"
            height="120"
          />
        </div>
        <div className="flex justify-between items-center py-5">
          <h4 className="text-lg font-bold dark:text-white">Cover Photo</h4>
          <label htmlFor="files2">
            <span className="text-lg text-blue-600 font-bold hover:bg-gray-300 px-3 py-1 rounded-md cursor-pointer ">
              Update
            </span>
          </label>
          <input
            type="file"
            name="file"
            id="files2"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleCoverImg(e.target.files[0])}
          />
        </div>

        <div className="flex justify-center">
          <Image
          className="object-content"
            src={
              coverImg ||
              data.coverPicture ||
              "https://i.ibb.co/pWc2Ffd/u-bg.jpg"
            }
            alt="profile image"
            width="500"
            height="200"
          />
        </div>
        <div className="flex items-center space-x-3 py-6">
          <div className="text-lg font-bold dark:text-white">
            Chenge Your Name:
          </div>
          <input
            placeholder={data.displayName}
            defaultValue={data.displayName}
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
