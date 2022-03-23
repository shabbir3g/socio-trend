import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileModal from "./ProfileModal";
import AboutModal from "./AboutModal";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import SinglePost from "../Home/SinglePost";
import { useRouter } from "next/router";
import "react-responsive-modal/styles.css";
import CreatePost from "../Home/CreatePost";

const UserProfile = ({ userData, setUpdateUserData }) => {
  const router = useRouter();
  const userName = router.query.username;
  const [deletePost, setDeletePost] = useState(false);
  const reduxUser = useSelector((state) => state.states.user);
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({});
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [newPost, setNewPost] = useState(false);

  useEffect(() => {
    axios.get(`/api/post/userPost?userName=${userName}`).then((data) => {
      setPosts(data?.data);
    });
  }, [userName, deletePost, isLike, newPost]);

  useEffect(() => {
    axios.get(`/api/user?email=${reduxUser?.email}`).then((data) => {
      setCurrentUserData(data);
    });
  }, [reduxUser?.email]);

  return (
    <>
      {/* Profile banner */}
      <div className="drop-shadow-sm p-5 bg-white dark:bg-black rounded-2xl">
        <div className="">
          <Image
            className="rounded-2xl object-content"
            src={userData.coverPicture || 'https://i.ibb.co/pWc2Ffd/u-bg.jpg'}
            width={1000}
            objectFit="cover"
            height={300}
            alt="user cover photo"
          />
        </div>
        <div className="flex justify-between pt-2 pb-5 border-b dark:border-zinc-600 border-gray-300">
          <div className=" flex ">
            <div className="-mt-12 ml-5">
              <Image
                src={
                  userData.photoURL || 'https://i.ibb.co/5kdWHNN/user-12.png'
                }
                alt="user profile photo"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="ml-6">
              <div className="font-bold text-lg ">{userData.displayName}</div>
              <div className="text-xs font-medium	text-gray-400 ">
                <a href={`mailto:${userData.email}`}>{userData.email}</a>
              </div>
            </div>
          </div>
          <div className="">
            {reduxUser.email === userData.email ? (
              <button
                className="bg-green-500 hover:bg-green-700	text-white font-bold text-xs p-3 rounded-md "
                onClick={() => setOpenProfileModal(true)}
              >
                Edit profile
              </button>
            ) : (
              <button id="edit-profile" className="hidden"></button>
            )}
          </div>
        </div>
        <div className="flex ">
          <Link href="">
            <a className="pr-8 pt-3 font-semibold">Post</a>
          </Link>
          <Link href="/friends">
            <a className="pr-8 pt-3 font-semibold">Friends</a>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 bg-gray-100 dark:bg-zinc-900 pt-3">
        <div className="md:col-span-4 sm:col-span-12 col-span-12 ">
          <div className="drop-shadow-sm bg-white dark:bg-black p-5 rounded-xl">
            <h2 className="text-lg font-semibold pb-3">About</h2>
            <div className="flex items-center">
              <i className="fa-solid fa-graduation-cap"></i>
              <span className="ml-3">Went to {userData.education}</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-house-chimney"></i>
              <span className="ml-3">Lives in {userData.city}</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-location-dot" />
              <span className="ml-3">From {userData.from}</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-heart"></i>
              <span className="ml-3">{userData.relationship}</span>
            </div>
            <div className="flex items-center py-3">
              <i className="fa-solid fa-clock"></i>
              <span className="ml-3">
                Joined {userData.createdAt?.slice(0, 10)}
              </span>
            </div>
            {reduxUser.email === userData.email ? (
              <button
                className="w-full bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-slate-300 font-semibold rounded-md text-gray-700 dark:text-white mt-3 py-2"
                onClick={() => setOpenDetailsModal(true)}
              >
                Edit Details
              </button>
            ) : (
              <button className="hidden w-full"></button>
            )}
          </div>
        </div>
        <div className="md:col-span-8 sm:col-span-12 col-span-12 ">
          {/* create post */}
          {reduxUser.email === userData.email && (
            <CreatePost user={userData} setNewPost={setNewPost} />
          )}
          {posts && posts?.map((post) => (
            <SinglePost
              key={post._id}
              post={post}
              isLike={isLike}
              setIsLike={setIsLike}
              userData={currentUserData}
              deletePost={deletePost}
              setDeletePost={setDeletePost}
            />
          ))}
        </div>
      </div>
      {/* Edit Profile Modal */}
      <ProfileModal
        data={userData}
        open={openProfileModal}
        setOpenProfileModal={setOpenProfileModal}
        setUpdateUserData={setUpdateUserData}
      />
      {/* Edit About Modal */}
      <AboutModal
        data={userData}
        openDetailsModal={openDetailsModal}
        setOpenDetailsModal={setOpenDetailsModal}
        setUpdateUserData={setUpdateUserData}
      />
    </>
  );
};

export default UserProfile;
