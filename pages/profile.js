import Head from "next/head";
import React from "react";
import LeftSideBar from "../components/Home/LeftSideBar";
import RightSideBar from "../components/Home/RightSideBar";
import Navigation from "../components/Share/Navigation";
import UserProfile from "../components/userProfile/UserProfile";

const userProfile = () => {
  return (
    <>
      <Head>
        <title>User Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
        <Navigation></Navigation>
      <div className="grid grid-cols-12 gap-4 bg-gray-100">
        <div className="md:col-span-2 sm:col-span-0">
           <LeftSideBar></LeftSideBar>
           </div>
        <div className="md:col-span-8 sm:col-span-12 col-span-12 flex justify-center ">
          <div className="md:w-3/4 sm:w-full">
            <UserProfile />
          </div>
        </div>
        <div className="md:col-span-2 sm:col-span-0">
          <RightSideBar></RightSideBar>
          </div>
      </div>
    </>
  );
};

export default userProfile;
