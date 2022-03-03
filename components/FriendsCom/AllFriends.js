import React, { useEffect, useState } from "react";
import SingleFrends from "./SingleFrends";
import axios from "axios";
import baseUrl from "../../utilities/baseUrl";


const friends = [
  {
    id: 1,
    name: "Omar Ali",
    userId: "@omarali234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "ADD FRIEND",
  },
  {
    id: 2,
    name: "Bepari Prantosh",
    userId: "@prantosh234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "FRIEND",
  },
  {
    id: 3,
    name: "Md. Mostafizur Rahman",
    userId: "@mostafizur234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "ADD FRIEND",
  },
  {
    id: 4,
    name: "Opi Barua",
    userId: "@opi234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "FRIEND",
  },
  {
    id: 5,
    name: "Parvez Islam Shuvo",
    userId: "@parvez234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: " ADD FRIEND",
  },
  {
    id: 6,
    name: "Saddaul Siam",
    userId: "@saddaul234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "ADD FRIEND",
  },
  {
    id: 7,
    name: "Opi Barua",
    userId: "@opi234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "FRIEND",
  },
  {
    id: 8,
    name: "Parvez Islam Shuvo",
    userId: "@parvez234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: " ADD FRIEND",
  },
  {
    id: 9,
    name: "Omar Ali",
    userId: "@omarali234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "ADD FRIEND",
  },
  {
    id: 10,
    name: "Bepari Prantosh",
    userId: "@prantosh234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "FRIEND",
  },
  {
    id: 11,
    name: "Md. Mostafizur Rahman",
    userId: "@mostafizur234",
    img: "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
    role: "ADD FRIEND",
  },
];

const AllFrends = () => {
  const [members, setMembers] = useState([]);
  const [searchMember, setSearchMember] = useState([]);

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/user/allUsers`)
      .then(({ data }) => setUsers(data));
  }, []);

  useEffect(() => {
    setMembers(friends);
    setSearchMember(friends);
  }, []);
  console.log("members", members);

  const searchFiealdhandle = (e) => {
    const searchText = e.target.value;

    const metchedProduct = members.filter((member) =>
      member.name.toLowerCase().includes(searchText.toLowerCase())
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
                  className="w-full h-12 block rounded-lg pl-4 text-lg border-0 outline-0 bg-gray-100"
                />
                <button className="absolute right-0 top-0 w-16 h-full rounded-full text-xl ">
                  <i className="fa-solid fa-magnifying-glass"></i>{" "}
                </button>
              </form>
            </div>
            <div className="text-center bg-gray-100 w-12 ml-4 rounded-lg">
              <h1 className="text-2xl pt-2.5">
                <i className="fa-solid fa-filter"></i>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-3">
          {users.map((user) => (
            <SingleFrends key={user.id} user={user}></SingleFrends>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFrends;
