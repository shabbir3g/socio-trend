import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Share/Navigation";
import UserProfile from "../components/userProfile/UserProfile";
import { useRouter } from "next/router";

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
        <title>Message</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navigation />
      <div className="max-w-4xl mx-auto gap-4 bg-gray-100 dark:bg-zinc-900 pt-2 w-full ">
        <UserProfile
          userData={userData}
          setUpdateUserData={setUpdateUserData}
        />
      </div>
    </>
  );
};

export default Profile;
