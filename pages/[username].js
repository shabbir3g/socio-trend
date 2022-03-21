import Head from 'next/head';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LeftSideBar from '../components/Home/LeftSideBar';
import RightSideBar from '../components/Home/RightSideBar';
import Navigation from '../components/Share/Navigation';
import UserProfile from '../components/userProfile/UserProfile';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const userName = router.query.username;
  const [userData, setUserData] = useState({});
  const [updateUserData, setUpdateUserData] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/user/userName?userName=${userName}`)
      .then(({ data }) => setUserData(data));
  }, [userName, updateUserData]);

  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="max-w-4xl mx-auto gap-4 bg-gray-100 dark:bg-zinc-900 pt-2 w-full ">
        <UserProfile user={userData} setUpdateUserData={setUpdateUserData} />
      </div>
    </>
  );
};

export default Profile;
