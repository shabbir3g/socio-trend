import React from "react";

const RightSideBar = () => {
  return (
    <div className="bg-neutral-100">
      <div className="bg-white p-5 rounded">
        <p className="mb-3">Contacts</p>
        <ul>
          <li className="mb-3 flex"> 
          <img className="mr-3 w-12" src="/user-8.png" alt="user" />
            <a href="">Hurin Seary</a>
          </li>
          <li className="mb-3 flex">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
            <a href="">Victor Exrixon</a>
          </li>
          <li className="mb-3 flex">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
            <a href="">Goria Coast</a>
          </li>
          <li className="mb-3 flex">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
            <a href="">Hurin Seary</a>
          </li>
          <li className="mb-3 flex">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
            <a href="">David Goria</a>
          </li>
          <li className="mb-3 flex">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
            <a href="">Seary Victor</a>
          </li>
          <li className="mb-3 flex">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
            <a href="">Ana Seary</a>
          </li>
        </ul>
        <p className="mb-5 mt-5">Groupes</p>
        <ul>
          <li className="mb-7">
            <a href=""><span className="p-3 bg-blue-500 text-white rounded-full">UD</span> Studio Express</a>
          </li>
          <li className="mb-7">
            <a href=""><span className="p-3 bg-yellow-500 text-white rounded-full">AR</span> Armany Design</a>
          </li>
          <li className="mb-7">
            <a href=""><span className="p-3 bg-red-500 text-white rounded-full">UD</span> De fabous</a>
          </li>
        </ul>
        <p className="mb-5 mt-5">Pages</p>
        <ul>
        <li className="mb-7">
            <a href=""><span className="p-3 bg-blue-500 text-white rounded-full">AB</span> Armany Seary</a>
          </li>
          <li className="mb-7">
            <a href=""><span className="p-3 bg-yellow-500 text-white rounded-full">HD</span> Entropio Inc</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
