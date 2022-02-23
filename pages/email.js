import React from "react";
import EmailLeftBar from "../components/Email/EmailLeftBar";
import EmailRightBar from "../components/Email/EmailRightBar";
import Navigation from "../components/Share/Navigation";

const email = () => {
  return (
    <div className="bg-neutral-100">
      <Navigation />

      <div className="bg-gray-400 ">
        <div className="text-center">
          <h1>This is email</h1>
        </div>

        <div>
          <EmailLeftBar />
        </div>

        <div className="hidden lg:block">
          <EmailRightBar />
        </div>
      </div>
    </div>
  );
};

export default email;
