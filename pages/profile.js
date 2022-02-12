import Head from "next/head";
import React from "react";
import LeftSideBar from "../components/Home/LeftSideBar";
import RightSideBar from "../components/Home/RightSideBar";
import Navigation from "../components/Share/Navigation";
import UserProfile from "../components/userProfile/UserProfile";

const userProfile = () => {
  return (
    <>
      <Navigation />
      <div className="grid grid-cols-12 gap-4 bg-gray-100 dark:bg-slate-900 pt-2 w-full ">
        <div className="col-span-2  hidden xl:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default">
          <LeftSideBar />
        </div>

        <div className="col-span-12 xl:col-span-10 2xl:col-span-8 sm:col-span-12 h-[91vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default">
          <div className="md:w-3/4 w-full mx-auto">
            <UserProfile />
          </div>
        </div>

        <div className="col-span-2 hidden 2xl:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default userProfile;
