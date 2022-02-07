import React from "react";
import UserProfile from "../components/userProfile/UserProfile";

const userProfile = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 bg-gray-100">
        <div className="md:col-span-2 sm:col-span-0"> {/* side bar */}</div>
        <div className="md:col-span-8 sm:col-span-12 col-span-12 flex justify-center ">
          <div className="md:w-3/4 sm:w-full">
            <UserProfile />
          </div>
        </div>
        <div className="md:col-span-2 sm:col-span-0">{/* side bar */}</div>
      </div>
    </>
  );
};

export default userProfile;
