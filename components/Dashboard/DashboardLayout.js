import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BsBarChart,
  BsPencilSquare,
  BsChatLeft,
  BsX,
  BsGear,
  BsSearch,
} from 'react-icons/bs';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { VscProject } from 'react-icons/vsc';
import Head from 'next/head';
import RenderThemeChanger from '../Share/RenderThemeChanger';

const navLinks = [
  {
    name: 'Dashboard',
    icon: <BsBarChart className="text-slate-100 mr-4 flex-shrink-0 h-6 w-6" />,
    href: '/admin/dashboard',
  },
  {
    name: 'Profile',
    icon: <BsGear className="text-slate-100 mr-4 flex-shrink-0 h-6 w-6" />,
    href: '/admin/profile',
  },
  {
    name: 'Users',
    icon: <FiUsers className="text-slate-100 mr-4 flex-shrink-0 h-6 w-6" />,
    href: '/admin/users',
  },
  {
    name: 'Projects',
    icon: <VscProject className="text-slate-100 mr-4 flex-shrink-0 h-6 w-6" />,
    href: '/admin/projects',
  },
  {
    name: 'Posts',
    icon: (
      <BsPencilSquare className="text-slate-100 mr-4 flex-shrink-0 h-6 w-6" />
    ),
    href: '/admin/posts',
  },
  {
    name: 'Reviews',
    icon: <BsChatLeft className="text-slate-100 mr-4 flex-shrink-0 h-6 w-6" />,
    href: '/admin/reviews',
  },
];

const DashboardLayout = ({
  children,
  title = 'Socio Trend | Admin Dashboard',
}) => {
  const router = useRouter();
  const [isMobileOffcanvasOpen, setIsMobileOffcanvasOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);
  const closeMobileOffcanvas = () => setIsMobileOffcanvasOpen(false);
  const openMobileOffcanvas = () => setIsMobileOffcanvasOpen(true);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 dark:bg-slate-900">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
      </Head>
      <div
        className={`${
          !isMobileOffcanvasOpen && 'pointer-events-none'
        } fixed inset-0 flex z-40 lg:hidden`}
      >
        <div
          onClick={closeMobileOffcanvas}
          className={`${
            isMobileOffcanvasOpen
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          } transition-opacity ease-linear duration-300 fixed inset-0 bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30`}
        ></div>
        <div
          className={`${
            isMobileOffcanvasOpen ? 'translate-x-0' : '-translate-x-full'
          } transition ease-in-out duration-300 transform border-r border-slate-600 relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-slate-800`}
        >
          <div className="absolute top-0 right-2 pt-3">
            <button
              onClick={closeMobileOffcanvas}
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400"
            >
              <BsX className="h-8 w-8 text-slate-300" />
            </button>
          </div>

          <Link href="/">
            <a className="flex gap-2 font-medium items-center flex-shrink-0 leading-none px-4 text-xl text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="h-8 w-8"
                x="0"
                y="0"
                viewBox="0 0 511.99921 511"
                style={{ 'enable-background': 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m428.53125 1.65625c-5.671875-2.351562-12.199219-1.050781-16.539062 3.289062l-364.277344 364.277344c-4.339844 4.339844-5.636719 10.867188-3.289063 16.539063 2.347657 5.671875 7.882813 9.367187 14.019531 9.367187h214.6875c4.023438 0 7.882813-1.601562 10.730469-4.445312l149.589844-149.589844c2.847656-2.847656 4.445313-6.707031 4.445313-10.734375v-214.683594c0-6.136719-3.699219-11.671875-9.367188-14.019531zm0 0"
                    fill="rgb(94 234 212)"
                    data-original="rgb(94 234 212)"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m411.992188 4.945312-75.035157 75.03125c-4.351562 4.355469-5.644531 10.902344-3.269531 16.585938 2.371094 5.675781 7.941406 9.363281 14.097656 9.324219l149.132813-.929688c4.070312-.027343 7.867187-1.679687 10.636719-4.449219 1.394531-1.394531 2.527343-3.070312 3.308593-4.964843 2.324219-5.660157 1.019531-12.167969-3.308593-16.496094l-74.101563-74.101563c-5.925781-5.925781-15.535156-5.925781-21.460937 0zm0 0"
                    fill="rgb(153 246 228)"
                    data-original="rgb(153 246 228)"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m411.992188 4.945312-161.015626 161.015626 128.804688 128.804687 53.671875-53.671875c2.84375-2.847656 4.445313-6.707031 4.445313-10.734375v-214.683594c0-6.136719-3.699219-11.671875-9.367188-14.019531-5.671875-2.351562-12.199219-1.050781-16.539062 3.289062zm0 0"
                    fill="rgb(45 212 191)"
                    data-original="rgb(45 212 191)"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m229.863281 22.324219h-214.683593c-7.089844 0-13.371094 4.933593-14.875 12.132812-1.0625 5.089844.722656 10.359375 4.398437 14.03125l310.675781 310.675781 118.074219-118.070312c5.925781-5.929688 5.925781-15.539062 0-21.464844l-192.859375-192.855468c-2.847656-2.847657-6.707031-4.449219-10.730469-4.449219zm0 0"
                    fill="rgb(45 212 191)"
                    data-original="rgb(45 212 191)"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m229.863281 22.324219h-122.519531l272.4375 272.441406 53.671875-53.671875c5.925781-5.925781 5.925781-15.535156 0-21.464844l-192.859375-192.855468c-2.847656-2.847657-6.707031-4.449219-10.730469-4.449219zm0 0"
                    fill="rgb(153 246 228)"
                    data-original="rgb(153 246 228)"
                  ></path>
                </g>
              </svg>
              <span className="-mt-1.5">
                Crowd <span className="text-teal-300">Bird</span>
              </span>
            </a>
          </Link>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-2">
              {navLinks.map((navLink, index) => (
                <Link key={index} href={navLink.href}>
                  <a
                    className={`${
                      router.pathname === navLink.href
                        ? 'bg-slate-700 text-white group flex items-center px-2 py-2 text-base rounded-md'
                        : 'text-slate-400 hover:bg-slate-700 hover:text-slate-100 group flex items-center px-2 py-2 text-base rounded-md'
                    }`}
                  >
                    {navLink.icon}
                    {navLink.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
        </div>
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-72">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col flex-grow border-r border-slate-700 pt-5 pb-4 bg-slate-800 bg-opacity-40 overflow-y-auto">
            <Link href="/">
              <a className="flex gap-2 font-medium items-center flex-shrink-0 leading-none px-4 text-xl text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="h-8 w-8"
                  x="0"
                  y="0"
                  viewBox="0 0 511.99921 511"
                  style={{ 'enable-background': 'new 0 0 512 512' }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m428.53125 1.65625c-5.671875-2.351562-12.199219-1.050781-16.539062 3.289062l-364.277344 364.277344c-4.339844 4.339844-5.636719 10.867188-3.289063 16.539063 2.347657 5.671875 7.882813 9.367187 14.019531 9.367187h214.6875c4.023438 0 7.882813-1.601562 10.730469-4.445312l149.589844-149.589844c2.847656-2.847656 4.445313-6.707031 4.445313-10.734375v-214.683594c0-6.136719-3.699219-11.671875-9.367188-14.019531zm0 0"
                      fill="rgb(94 234 212)"
                      data-original="rgb(94 234 212)"
                    ></path>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m411.992188 4.945312-75.035157 75.03125c-4.351562 4.355469-5.644531 10.902344-3.269531 16.585938 2.371094 5.675781 7.941406 9.363281 14.097656 9.324219l149.132813-.929688c4.070312-.027343 7.867187-1.679687 10.636719-4.449219 1.394531-1.394531 2.527343-3.070312 3.308593-4.964843 2.324219-5.660157 1.019531-12.167969-3.308593-16.496094l-74.101563-74.101563c-5.925781-5.925781-15.535156-5.925781-21.460937 0zm0 0"
                      fill="rgb(153 246 228)"
                      data-original="rgb(153 246 228)"
                    ></path>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m411.992188 4.945312-161.015626 161.015626 128.804688 128.804687 53.671875-53.671875c2.84375-2.847656 4.445313-6.707031 4.445313-10.734375v-214.683594c0-6.136719-3.699219-11.671875-9.367188-14.019531-5.671875-2.351562-12.199219-1.050781-16.539062 3.289062zm0 0"
                      fill="rgb(45 212 191)"
                      data-original="rgb(45 212 191)"
                    ></path>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m229.863281 22.324219h-214.683593c-7.089844 0-13.371094 4.933593-14.875 12.132812-1.0625 5.089844.722656 10.359375 4.398437 14.03125l310.675781 310.675781 118.074219-118.070312c5.925781-5.929688 5.925781-15.539062 0-21.464844l-192.859375-192.855468c-2.847656-2.847657-6.707031-4.449219-10.730469-4.449219zm0 0"
                      fill="rgb(45 212 191)"
                      data-original="rgb(45 212 191)"
                    ></path>
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m229.863281 22.324219h-122.519531l272.4375 272.441406 53.671875-53.671875c5.925781-5.925781 5.925781-15.535156 0-21.464844l-192.859375-192.855468c-2.847656-2.847657-6.707031-4.449219-10.730469-4.449219zm0 0"
                      fill="rgb(153 246 228)"
                      data-original="rgb(153 246 228)"
                    ></path>
                  </g>
                </svg>
                <span className="-mt-1.5">
                  Crowd <span className="text-teal-300">Bird</span>
                </span>
              </a>
            </Link>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-2">
                {navLinks.map((navLink, index) => (
                  <Link key={index} href={navLink.href}>
                    <a
                      className={`${
                        router.pathname === navLink.href
                          ? 'bg-slate-700 text-white group flex items-center px-2 py-2 text-base rounded-md'
                          : 'text-slate-400 hover:bg-slate-700 hover:text-slate-100 group flex items-center px-2 py-2 text-base rounded-md'
                      }`}
                    >
                      {navLink.icon}
                      {navLink.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 border-b border-slate-600 flex-shrink-0 flex h-14 md:h-16 bg-white dark:bg-slate-800 dark:bg-opacity-40 shadow">
          <button
            onClick={openMobileOffcanvas}
            className="px-4 border-r border-slate-700 text-slate-400 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400 lg:hidden"
          >
            <HiOutlineMenuAlt1 className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full flex items-center text-slate-200">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <BsSearch className="h-5 w-5" />
                  </div>
                  <input
                    id="search-field"
                    className="block bg-slate-700 border-slate-600 rounded-lg w-full pl-12 pr-3 py-1.5 border text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* <button className="rounded-full text-slate-400 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-teal-400"> */}
              <RenderThemeChanger />
              {/* </button> */}

              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleProfileMenu}
                    className="max-w-xs bg-transparent flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-teal-400"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  className={`${
                    isProfileMenuOpen
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }  transform transition-all duration-300 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg overflow-hidden bg-slate-900 ring-1 ring-slate-200 ring-opacity-50 focus:outline-none`}
                >
                  <div className="py-2">
                    <Link href="/">
                      <a
                        onClick={closeProfileMenu}
                        className="block px-4 py-2 text-slate-300 hover:text-slate-100 hover:bg-slate-800"
                      >
                        Return Home
                      </a>
                    </Link>
                    <Link href="/admin/profile">
                      <a
                        onClick={closeProfileMenu}
                        className="block px-4 py-2 text-slate-300 hover:text-slate-100 hover:bg-slate-800"
                      >
                        Profile
                      </a>
                    </Link>
                  </div>
                  <button
                    onClick={closeProfileMenu}
                    className="block px-4 py-2 border-t border-slate-700 w-full text-left text-slate-300 hover:text-slate-100 hover:bg-slate-800"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
