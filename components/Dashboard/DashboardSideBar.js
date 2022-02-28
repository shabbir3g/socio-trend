import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DashboardSideBar = () => {
  // sidebar open and colose state
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="hidden md:block lg:block">
        <div className="bg-white fixed py-4 w-64 h-full rounded-md">
          <div className="w-56 mx-auto mb-5">
            <button className="text-white font-semibold bg-gradient-to-tr from-blue-600 to-blue-400 text-center p-5 w-full rounded-md">
              Weite Message
            </button>
          </div>
          {/* sidebar menue */}
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
                <a className=" flex items-center gap-2 px-4 py-2 transition hover:bg-gray-200">
                  <i className="fa-solid fa-book"></i>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/admin">
                <a className="bg-gray-100 flex items-center gap-2 px-4 py-2 transition hover:bg-gray-200">
                  <i className="fa-solid fa-book"></i>
                  Admin
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* small side bar */}
      <div className="block md:hidden lg:hidden">
        <div className="bg-yellow-500 fixed flex h-20 inset-x-0 items-center justify-between px-4 text-white top-0">
          <div>
            <Image
              src="/logo.png"
              alt="Socio Trend"
              width="200px"
              height="66px"
            />
          </div>
          <button
            className="p-2 rounded-full transition hover:bg-blue-400"
            onClick={handleSidebar}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div>
          <div
            className={
              sidebar
                ? 'bg-black cursor-pointer fixed inset-0 opacity-70 visible '
                : 'hidden opacity-0'
            }
            onClick={handleSidebar}
          ></div>

          <div
            className={
              sidebar
                ? 'bg-white duration-300 fixed inset-y-0 py-4 left-0 transition-left w-64'
                : 'bg-white duration-300 fixed inset-y-0 py-4 -left-full transition-left w-64'
            }
          >
            <div className="bg-white fixed py-4 w-64 h-full rounded-md">
              <div className="w-56 mx-auto mb-5">
                <button className="text-white font-semibold bg-gradient-to-tr from-blue-600 to-blue-400 text-center p-5 w-full rounded-md">
                  Weite Message
                </button>
              </div>
              {/* sidebar menue */}
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
                <li>
                  <Link href="/dashboard/admin">
                    <a className="bg-gray-100 flex items-center gap-2 px-4 py-2 transition hover:bg-gray-200">
                      <i className="fa-solid fa-book"></i>
                      Admin
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;
