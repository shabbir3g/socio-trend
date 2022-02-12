import React from "react";
import Navigation from "../components/Share/Navigation";
import AllFriends from "../components/FriendsCom/AllFriends";

const friends = () => {
  return (
    <div>
      <Navigation />
      <div>
        <AllFriends />
      </div>
    </div>
  );
};

export default friends;
