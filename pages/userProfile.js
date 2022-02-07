import React from "react";
import UserProfile from "../components/userProfile/UserProfile";

const userProfile = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"> {/* 1 */}</div>
        <div className="col-span-8 border-2 flex justify-center">
          <div className="w-3/4">
            <UserProfile />
          </div>
        </div>
        <div className="col-span-2">{/* 09 */}</div>
      </div>
    </>
  );
};

export default userProfile;
