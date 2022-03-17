import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProfileModal from './ProfileModal';
import AboutModal from './AboutModal';
import Link from 'next/link';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SinglePost from '../Home/SinglePost';
import { useRouter } from 'next/router';
import CreatePost from '../Home/CreatePost';

const UserProfile = ({ data }) => {
  const router = useRouter();
  const userName = router.query.username;

  const user = useSelector((state) => state.states.user);
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState({});

  // profile modal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  useEffect(() => {
    axios.get(`/api/post/userPost?userName=${userName}`).then((data) => {
      setPosts(data.data);
    });
  }, [userName]);

  useEffect(() => {
    axios.get(`/api/user?email=${user?.email}`).then((data) => {
      setUserData(data);
    });
  }, [user?.email]);

  return (
    <>
      {/* Profile banner */}
      <div className="drop-shadow-sm p-5 bg-white dark:bg-black rounded-2xl">
        <div className="">
          <Image
            className="rounded-2xl object-content"
            src={data.coverPicture || 'https://i.ibb.co/pWc2Ffd/u-bg.jpg'}
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
                src={data.photoURL || 'https://i.ibb.co/5kdWHNN/user-12.png'}
                alt="user profile photo"
                width={100}
                height={100}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="ml-6">
              <div className="font-bold text-lg ">{data.displayName}</div>
              <div className="text-xs font-medium	text-gray-400 ">
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
            </div>
          </div>
          <div className="">
            {user?.email === data.email ? (
              <button
                onClick={openProfileModal}
                className="dark:bg-zinc-800 dark:hover:bg-zinc-600 bg-gray-200 hover:bg-gray-300	dark:text-white font-bold text-xs p-3 rounded-md "
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
            {user.email === data.email ? (
              <button
                className="w-full bg-gray-200 dark:bg-zinc-700 hover:dark:bg-zinc-600 hover:bg-slate-300 font-semibold rounded-md text-gray-700 dark:text-white mt-3 py-2"
                id="edit-about"
              >
                Edit Details
              </button>
            ) : (
              <button className="hidden w-full" id="edit-about"></button>
            )}
          </div>
        </div>

        <div className="md:col-span-8 sm:col-span-12 col-span-12 ">
          {/* create post */}
          {user.email === data.email && <CreatePost user={user} />}
          {posts.map((post) => (
            <SinglePost key={post._id} post={post} userData={userData} />
          ))}
        </div>
      </div>
      {/* Edit Profile Modal */}
      <ProfileModal
        isProfileModalOpen={isProfileModalOpen}
        closeProfileModal={closeProfileModal}
        data={data}
      />
      {/* Edit About Modal */}
      <AboutModal data={data} />
    </>
  );
};

export default UserProfile;
