import Head from "next/head";
import React from "react";
import LeftSideBar from "../components/Home/LeftSideBar";
import RightSideBar from "../components/Home/RightSideBar";
import Navigation from "../components/Share/Navigation";
import UserProfile from "../components/userProfile/UserProfile";

const userProfile = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="grid grid-cols-12 gap-4 bg-gray-100 p-4">
        <div className="col-span-2  hidden xl:block">
          <LeftSideBar />
        </div>

        <div className="col-span-12 xl:col-span-10 2xl:col-span-8 sm:col-span-12 ">
          <div className="md:w-3/4 w-full mx-auto">
            <UserProfile />
          </div>
        </div>

        <div className="col-span-2 hidden 2xl:block">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default userProfile;
