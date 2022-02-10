import Image from "next/image";
import React from "react";

const SingleFrends = ({ friend }) => {
  const { img, name, userId, role } = friend;
  return (
    <div className=" md:col-span-3 lg:col-span-3 sm:col-span-4 xs:col-span-6 text-center rounded bg-white">
      <div className=" mt-5">
        <Image
          src={img}
          height="100px"
          width="100px"
          className="rounded-full"
        ></Image>
      </div>
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="text-sm text-slate-400">{userId}</p>
      <button
        className={`${
          role === "FRIEND" ? "bg-red-600" : "bg-green-500"
        } py-2.5 px-4 mt-4 mb-6 rounded-full text-white font-medium text-sm`}
      >
        {role}
      </button>
      {/* <p>whay you want to be a developer</p> */}
    </div>
  );
};

export default SingleFrends;
