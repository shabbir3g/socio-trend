import React, { useEffect, useState } from "react";
import SingleFrends from "./SingleFrends";
import axios from "axios";

const AllFrends = () => {
  const [searchMember, setSearchMember] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/user/allUsers").then(({ data }) => {
      setUsers(data);
      setSearchMember(data);
    });
  }, []);

  const searchFiealdhandle = (e) => {
    const searchText = e.target.value;
    const metchedProduct = users.filter((member) =>
      member.userName.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchMember(metchedProduct);
  };

  return (
    <div className=" pb-20">
      <div className="mx-8 md:mx-18 sm:mx-11 xs:mx-8 lg:mx-1 pt-5">
        <div className="bg-white border my-5 flex flex-col xs:flex-col sm:flex-row justify-between justify-items-center py-8 px-8 rounded-md">
          <div
            style={{ color: "#1D4ED8" }}
            className="text-2xl font-bold pt-1.5 text-center mb-4 lg:mb-0 md:mb-0 sm:mb-0"
          >
            {" "}
            Friends{" "}
          </div>

          <div className="flex justify-center justify-items-center">
            <div className=" bg-gray-100 w-72 h-12 rounded-lg relative">
              <form>
                <input
                  onChange={searchFiealdhandle}
                  type="text"
                  placeholder="Search here."
                  className="w-full h-12 block rounded-lg pl-4 text-lg border-0 outline-0 bg-gray-100 dark:text-black"
                />
                <button className="absolute right-0 top-0 w-16 h-full rounded-full text-xl ">
                  <i className="fa-solid fa-magnifying-glass dark:text-black"></i>{" "}
                </button>
              </form>
            </div>
            <div className="text-center bg-gray-100 w-12 ml-4 rounded-lg">
              <h1 className="text-2xl pt-2.5">
                <i className="fa-solid fa-filter dark:text-black"></i>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-3">
          {searchMember.map((user) => (
            <SingleFrends key={user.id} user={user}></SingleFrends>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFrends;
