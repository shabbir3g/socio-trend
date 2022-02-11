import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faXmark, faBook } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const xmark = <FontAwesomeIcon icon={faXmark} />
const bar =  <FontAwesomeIcon icon={faBars} />
const home = <FontAwesomeIcon icon={faHome} />

const EmailRightBar = () => {
    return (
        <>
             {/* navbar */}
        {/* <EmailTopBar setSidebar sidebar/> */}
        {/* lg:hidden md:hidden */}
        <div className='bg-blue-500 fixed flex h-20 inset-x-0 items-center justify-between px-4 text-white top-0'>
            {/* navbar logo */}
            <div>
                no science lab
            </div>

            {/* nav open side bar logo */}
            <button className='p-2 rounded-full transition hover:bg-blue-400' >{bar}</button>
        </div>



            {/* side bar container */}
            <div>
                {/* sidebar overlay */}
                {/* <div className='bg-black cursor-pointer fixed inset-0 opacity-70 visible' >

                </div> */}
                {/* side bar */}
                <div className= 'bg-red-300 fixed inset-y-0 py-4 right-0 w-64' >
                    {/* sidebar close btn */}
                    {/* <button className='absolute text-3xl -left-8 p-1 rounded-full text-white top-4 transition hover:text-red-400 ' >{xmark}</button> */}

                    {/* sidebar menue */}
                    <ul className='font-normal text-gray-500'>
                        <li  >
                            <Link href='/'>
                                <a className='bg-gray-100 font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faHome} className="mr-3" />
                                    Home
                                    </a>
                            </Link>
                        </li>
                        <li  >
                            <Link href='/'>
                                <a className='inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faBook} className="mr-3" />
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