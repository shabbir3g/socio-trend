import React, { useState } from 'react';
import Image from 'next/image';
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
    name: 'Posts',
    icon: (
      <BsPencilSquare className="text-slate-100 mr-4 flex-shrink-0 h-6 w-6" />
    ),
    href: '/admin/posts',
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
            <a className="relative h-6 w-2/3 flex gap-2 font-medium items-center flex-shrink-0 leading-none px-4 text-xl text-white">
              <Image
                layout="fill"
                src="/dark-logo.png"
                alt="logo"
                objectFit="cover"
              />
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
              <a className="relative h-6 w-2/3 flex gap-2 font-medium items-center flex-shrink-0 leading-none px-4 text-xl text-white">
                <Image
                  layout="fill"
                  src="/dark-logo.png"
                  alt="logo"
                  objectFit="cover"
                />
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
