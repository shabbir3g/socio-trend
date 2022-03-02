import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileModal from "./ProfileModal";
import AboutModal from "./AboutModal";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import SinglePost from "../Home/SinglePost";
import baseUrl from "../../utilities/baseUrl";

const UserProfile = ({ data }) => {
  const user = useSelector((state) => state.states.user);
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const editDetailsModal = document.getElementById("edit-about-modal");
    const editDetailsBtn = document.getElementById("edit-about");

    const editProfileModal = document.getElementById("edit-profile-modal");
    const editProfileBtn = document.getElementById("edit-profile");

    const closeAboutModalBtn = document.getElementById("close-about-modal");
    const closeProfileModalBtn = document.getElementById("close-profile-modal");

    const toggleModalAbout = () => {
      editDetailsModal.classList.toggle("hidden");
      editDetailsModal.classList.toggle("flex");
    };

    const toggleModalProfile = () => {
      editProfileModal.classList.toggle("hidden");
      editProfileModal.classList.toggle("flex");
    };

    editDetailsBtn.addEventListener("click", toggleModalAbout);
    editProfileBtn.addEventListener("click", toggleModalProfile);

    closeAboutModalBtn.addEventListener("click", toggleModalAbout);
    closeProfileModalBtn.addEventListener("click", toggleModalProfile);
  }, []);

  useEffect(() => {
    axios.get(`${baseUrl}/api/post/userPost?email=${user.email}`).then((data) => {
      setPosts(data.data);
    });
  }, [user.email]);
  useEffect(() => {
    fetch(`${baseUrl}/api/user?email=${user?.email}`)
      .then((result) => result.json())
      .then((data) => setUserData(data));
  }, [user?.email]);
  return (
    <>
      {/* Profile banner */}
      <div className="drop-shadow-sm p-5 bg-white dark:bg-gray-800 rounded-2xl">
        <div className="">
          <Image
            className="rounded-2xl object-content"
            src={data.coverPicture || "https://i.ibb.co/pWc2Ffd/u-bg.jpg"}
            width={1000}
            height={250}
            alt="user cover photo"
          />
        </div>
        <div className="flex justify-between pt-2 pb-5">
          <div className=" flex ">
            <div className="-mt-12 ml-5">
              <Image
                src={data.photoURL || "https://i.ibb.co/5kdWHNN/user-12.png"}
                alt="user profile photo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="ml-6">
              <div className="font-bold text-lg ">{data.displayName}</div>
              <div className="text-xs font-medium	text-gray-400 ">
                support@gmail.com
              </div>
            </div>
          </div>
          <div className="">
            <button
              className="bg-green-500 hover:bg-green-700	text-white font-bold text-xs p-3 rounded-md "
              id="edit-profile"
            >
              Edit profile
            </button>
          </div>
        </div>
        <hr />
        <div className="flex ">
          <Link href="">
            <a className="pr-8 pt-3 font-semibold">Post</a>
          </Link>
          <Link href="/friends">
            <a className="pr-8 pt-3 font-semibold">Friends</a>
          </Link>
        </div>
      </div>

      {/* Post and About */}

      <div className="grid grid-cols-12 gap-4 bg-gray-100 dark:bg-gray-900 pt-3">
        <div className="md:col-span-4 sm:col-span-12 col-span-12 ">
          <div className="drop-shadow-sm bg-white dark:bg-gray-800 p-5 rounded-xl">
            <h2 className="text-lg font-semibold pb-3">About</h2>
            <div className="flex items-center">
              <i className="fa-solid fa-graduation-cap"></i>
              <span className="ml-3">Went to {data.education}</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-house-chimney"></i>
              <span className="ml-3">Lives in {data.city}</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-location-dot" />
              <span className="ml-3">From {data.from}</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-heart"></i>
              <span className="ml-3">{data.relationship} Relationship</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-clock"></i>
              <span className="ml-3">
                Joined {data.createdAt?.slice(0, 10)}
              </span>
            </div>
            <button
              className="w-full bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-slate-300 font-semibold rounded-md text-gray-700 dark:text-white mt-3 py-2"
              id="edit-about"
            >
              Edit Details
            </button>
          </div>
        </div>

        <div className="md:col-span-8 sm:col-span-12 col-span-12 ">
          {/* create post */}
          <div className="drop-shadow-sm bg-white dark:bg-gray-800 p-5 rounded-xl">
            <div className="">
              <div className="flex items-center">
                <Image
                  src="https://img.icons8.com/office/25/000000/create-new.png"
                  alt=""
                  height="30"
                  width="30"
                />
                <span className="pl-3 font-semibold">Create Post</span>
              </div>
              <div className="mt-5 border-2 rounded-xl p-2 flex">
                <div>
                  <Image
                    src="https://i.ibb.co/5kdWHNN/user-12.png"
                    alt="user profile photo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-3 w-full">
                  <textarea
                    name=""
                    id=""
                    // cols="80"
                    rows="4"
                    placeholder="What's on your mind"
                    className="focus:outline-none text-sm w-full dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="files">
                  <span className="text-lg text-blue-600 font-bold hover:bg-gray-300 px-3 py-1 rounded-md cursor-pointer">
                    Image
                  </span>
                </label>
                <input
                  type="file"
                  name="file"
                  id="files"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {posts.map((post) => (
            <SinglePost key={post._id} post={post} userData={userData} />
          ))}
        </div>
      </div>
      {/* Edit Profile Modal */}
      <ProfileModal data={data} />
      {/* Edit About Modal */}
      <AboutModal data={data} />
    </>
  );
};

export default UserProfile;
