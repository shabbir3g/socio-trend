import React  from "react";
import Navigation from "../components/Share/Navigation";
import AllFriends from "../components/FriendsCom/AllFriends";
import Head from "next/head";
import LeftSideBar from "../components/Home/LeftSideBar";
import RightSideBar from "../components/Home/RightSideBar";

const friends = () => {

  


  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="grid grid-cols-12 gap-4 bg-gray-100 dark:bg-slate-900 pt-2 w-full ">
        <div className="col-span-2  hidden xl:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default">
          <LeftSideBar />
        </div>

        <div className="col-span-12 xl:col-span-10 2xl:col-span-8 sm:col-span-12 h-[91vh] overflow-y-scroll scrollbar	">
          {/* scrollbar-hide hover:scrollbar-default */}
          <div className="md:w-3/4 w-full mx-auto">
            <AllFriends />
          </div>
        </div>

        <div className="col-span-2 hidden 2xl:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default friends;
