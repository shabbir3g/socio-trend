import React from "react";
import Link from "next/link";


const EmailRightBar = () => {
  return (
    <>
      <div className="hidden lg:block ">
        <div className="bg-white fixed py-4 w-64 h-full rounded-md right-0">
          <ul className="font-normal text-gray-500">
            <li>
              <Link href="/">
                <a className="bg-gray-100 flex items-center gap-2 px-4 py-2 transition hover:bg-gray-200">
                  <i className="fa-solid fa-house"></i>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="bg-gray-100 flex items-center gap-2 px-4 py-2 transition hover:bg-gray-200">
                  <i className="fa-solid fa-book"></i>
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmailRightBar;
