import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BsX,
  BsBell,
  BsGear,
  BsSun,
  BsChatSquare,
  BsChevronRight,
  BsChevronDown,
  BsBookmark,
  BsHouse,
  BsMoon,
} from 'react-icons/bs';
import { VscListSelection } from 'react-icons/vsc';
import { FiUsers, FiUser, FiLogOut } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useTheme } from 'next-themes';
import axios from 'axios';
import useFirebase from '../../firebase/useFirebase';
// import RenderThemeChanger from '../../utils/RenderThemeChanger';

const topCenterNavlinks = [
  {
    href: '/',
    icon: <BsHouse />,
    label: 'Home',
  },
  {
    href: '/friends',
    icon: <FiUsers />,
    label: 'Friends',
  },
  {
    href: '/messenger',
    icon: <BsChatSquare />,
    label: 'Messages',
  },
  {
    href: '/posts/bookmarked',
    icon: <BsBookmark />,
    label: 'Bookmarked posts',
  },
];

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [dbUser, setDbUser] = useState({});
  const { systemTheme, theme, setTheme } = useTheme();
  const { googleSingOut } = useFirebase();
  const reduxUser = useSelector((state) => state.states.user);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openMobileMenu = () => setIsMobileMenuOpen(true);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    axios
      .get(`/api/user?email=${reduxUser.email}`)
      .then(({ data }) => setDbUser(data));
  }, [reduxUser?.email]);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <button
          className="w-11 h-11 items-center justify-center flex text-2xl border border-gray-300 dark:border-zinc-600 rounded-full"
          onClick={() => setTheme('light')}
        >
          <BsSun className="p-0.5" />
        </button>
      );
    } else {
      return (
        <button
          className="w-11 h-11 items-center justify-center flex text-2xl border border-gray-300 dark:border-zinc-600 rounded-full"
          onClick={() => setTheme('dark')}
        >
          <BsMoon className="p-0.5" />
        </button>
      );
    }
  };

  return (
    <>
      <header className="px-2 md:px-4 lg:px-6 dark:bg-black bg-white sm:border-b border-gray-300 dark:border-zinc-800 mx-auto sticky top-0 w-full z-40">
        {/* Desktop menu */}
        <div className="flex gap-4 2xl:container mx-auto justify-between items-center py-2">
          {/* Menu open button */}
          <div className="lg:hidden">
            <button
              onClick={openMobileMenu}
              className="whitespace-nowrap text-xl md:text-xl p-2.5 flex items-center justify-center rounded-full border dark:border-zinc-600 border-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-900 dark:text-white"
            >
              <VscListSelection />
            </button>
          </div>
          {/* Logo & search */}
          <div className="flex gap-2 items-center justify-start">
            {/* Logo */}
            <Link href="/">
              <a className="relative flex gap-3 items-center">
                {currentTheme === 'dark' ? (
                  <Image
                    width="150"
                    height="55"
                    alt="Socio Trend"
                    src="/dark-logo.png"
                  />
                ) : (
                  <Image
                    width="150"
                    height="55"
                    alt="Socio Trend"
                    src="/logo.png"
                  />
                )}
              </a>
            </Link>
            {/* Search */}
            {/* <button className="lg:hidden whitespace-nowrap text-lg md:text-2xl p-3 flex gap-1.5 items-center justify-between rounded-lg dark:bg-zinc-700 dark:bg-opacity-50 dark:hover:bg-opacity-90 bg-white dark:text-white bg-opacity-50 hover:bg-opacity-90 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-teal-400">
              <FiSearch />
            </button>
            <div className="max-w-lg w-full lg:max-w-xs hidden lg:block">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-zinc-600 rounded-md leading-5 bg-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div> */}
          </div>
          {/* end of Logo & search */}
          {/* Navigations */}
          <nav className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center space-x-2">
            {topCenterNavlinks.map((navlink, index) => (
              <Link href={navlink.href} key={index}>
                <a
                  className={`${
                    navlink.href === router.pathname
                      ? 'text-2xl font-semibold dark:bg-zinc-800 bg-gray-100 py-3 px-7 rounded-lg'
                      : 'text-2xl dark:text-zinc-400 py-3 px-8 text-gray-600 dark:hover:bg-zinc-900 hover:bg-gray-100 rounded-lg dark:hover:text-white hover:text-gray-800'
                  } `}
                  title={navlink.label}
                >
                  {navlink.icon}
                </a>
              </Link>
            ))}
          </nav>
          {/* end of Navigations */}
          {/* right side */}
          <div className="flex items-center gap-1.5 md:gap-2.5">
            {/* theme button */}
            {renderThemeChanger()}
            {/* profile options */}
            <div className="relative">
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="whitespace-nowrap relative h-11 w-11 border border-gray-300 dark:border-zinc-600 dark:hover:bg-zinc-900 hover:bg-gray-100 rounded-full text-lg focus:outline-none focus:ring-offset-0"
                >
                  {dbUser.photoURL ? (
                    <Image
                      src={dbUser?.photoURL}
                      alt={dbUser?.displayName}
                      layout="fill"
                      objectFit="cover"
                      className="h-full w-full rounded-full"
                    />
                  ) : (
                    <div className="h-full w-full rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                  )}
                  <div className="absolute w-3 h-3 rounded-full bg-green-400 ring-2 ring-white dark:ring-black bottom-0"></div>
                </button>
              </div>
              {/* dropdowns */}
              <div
                className={`${
                  isProfileMenuOpen
                    ? 'opacity-100 translate-y-0 z-50'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }  transform transition-all divide-y divide-gray-300 dark:divide-zinc-600 duration-200 absolute z-50 right-4 mt-2 p-1 w-64 rounded-md shadow-lg overflow-hidden dark:bg-black bg-white ring-1 ring-gray-100 dark:ring-zinc-600 focus:outline-none`}
              >
                <Link href={`/${dbUser.userName}`}>
                  <a
                    onClick={closeProfileMenu}
                    className="relative p-3 mb-1 rounded-lg flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-zinc-800 focus-within:ring-1 focus-within:ring-inset focus-within:ring-white"
                  >
                    <div className="flex-shrink-0 relative w-11 h-11 rounded-full overflow-hidden">
                      {dbUser.photoURL ? (
                        <Image
                          src={dbUser?.photoURL}
                          alt={dbUser?.displayName}
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-200 dark:bg-zinc-800"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-sm">{dbUser?.displayName}</p>
                      <p className="text-sm text-gray-400 dark:text-zinc-400 truncate">
                        See profile
                      </p>
                    </div>
                  </a>
                </Link>
                <div className="py-1">
                  <Link href="/friends">
                    <a
                      onClick={closeProfileMenu}
                      className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
                    >
                      <p className="flex items-center gap-2">
                        <FiUsers />
                        <span>Friends</span>
                      </p>
                      <BsChevronRight />
                    </a>
                  </Link>
                  <Link href="/messenger">
                    <a
                      onClick={closeProfileMenu}
                      className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
                    >
                      <p className="flex items-center gap-2">
                        <BsChatSquare />
                        <span>Messenger</span>
                      </p>
                      <BsChevronRight />
                    </a>
                  </Link>
                  <Link href={`/${dbUser.userName}`}>
                    <a
                      onClick={closeProfileMenu}
                      className="flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
                    >
                      <p className="flex items-center gap-2">
                        <BsGear />
                        <span>Settings</span>
                      </p>
                      <BsChevronRight />
                    </a>
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => {
                      closeProfileMenu();
                      googleSingOut();
                    }}
                    className="mt-1 flex w-full items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
                  >
                    <p className="flex items-center gap-2">
                      <FiLogOut />
                      <span>Log out</span>
                    </p>
                    <BsChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 pointer-events-none -translate-x-10'
          } duration-300 z-50 absolute top-0 inset-x-0 p-2 transition transform lg:hidden`}
        >
          <div className="rounded-lg shadow-lg dark:bg-black bg-white border dark:border-zinc-600 divide-y dark:divide-zinc-600">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <a className="relative flex gap-3 items-center">
                    <Image
                      src="/dark-logo.png"
                      width="150"
                      height="55"
                      alt="Socio Trend"
                    />
                  </a>
                </Link>
                {/* close mobile menu button */}
                <div className="-mr-0.5">
                  <button
                    onClick={closeMobileMenu}
                    className="whitespace-nowrap text-xl md:text-xl p-3 flex gap-1.5 items-center justify-between rounded-full border dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-900 bg-transparent dark:hover:bg-opacity-90 dark:text-white"
                  >
                    <BsX />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-1">
                  {topCenterNavlinks.map((navlink) => (
                    <Link href={navlink.href} key={navlink.label}>
                      <a
                        className={`${
                          router.pathname === navlink.href
                            ? 'bg-gray-100 dark:bg-zinc-800'
                            : ''
                        } flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800`}
                      >
                        <p className="flex items-center gap-6 text-2xl">
                          {navlink.icon}
                          <span className="text-base">{navlink.label}</span>
                        </p>
                        <BsChevronRight />
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
