import React from "react";
import Image from "next/image";

const RightSideBar = () => {
  return (
    <div className="bg-neutral-100">
      <div className="bg-white p-5 rounded">
        <p className="mb-3">Contacts</p>
        <ul>
          <li className="mb-3">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={45} height={45} alt="user" />{" "}
              <span className="ml-3">Hurin Seary</span>
            </a>
          </li>
          <li className="mb-3 flex">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={45} height={45} alt="user" />{" "}
              <span className="ml-3">Victor Exrixon</span>
            </a>
          </li>
          <li className="mb-3 flex">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={45} height={45} alt="user" />{" "}
              <span className="ml-3">Goria Coast</span>
            </a>
          </li>
          <li className="mb-3 flex">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={45} height={45} alt="user" />{" "}
              <span className="ml-3">Hurin Seary</span>
            </a>
          </li>
          <li className="mb-3 flex">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={45} height={45} alt="user" />{" "}
              <span className="ml-3">David Goria</span>
            </a>
          </li>
          <li className="mb-3 flex">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={45} height={45} alt="user" />{" "}
              <span className="ml-3">Seary Victor</span>
            </a>
          </li>
          <li className="mb-3 flex">
            <a href="" className="flex items-center">
              <Image src="/user-8.png" width={45} height={45} alt="user" />{" "}
              <span className="ml-3">Ana Seary</span>
            </a>
          </li>
        </ul>
        <p className="mb-5 mt-5">Groupes</p>
        <ul>
          <li className="mb-7">
            <a href="">
              <span className="p-3 bg-blue-500 text-white rounded-full">
                UD
              </span>
              <span className="ml-3">Studio Express</span>
            </a>
          </li>
          <li className="mb-7">
            <a href="">
              <span className="p-3 bg-yellow-500 text-white rounded-full">
                AR
              </span>
              <span className="ml-3">Armany Design</span>
            </a>
          </li>
          <li className="mb-7">
            <a href="">
              <span className="p-3 bg-red-500 text-white rounded-full">
                UD
                </span>
              <span className="ml-3">De fabous</span>
            </a>
          </li>
        </ul>
        <p className="mb-5 mt-5">Pages</p>
        <ul>
          <li className="mb-7">
            <a href="">
              <span className="p-3 bg-blue-500 text-white rounded-full">
                AB
              </span>
              <span className="ml-3">Armany Seary</span>
            </a>
          </li>
          <li className="mb-7">
            <a href="">
              <span className="p-3 bg-yellow-500 text-white rounded-full">
                HD
              </span>
              <span className="ml-3">Entropio Inc</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
