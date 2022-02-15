import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faXmark, faBook } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import EmailTopBar from './EmailTopBar';


const xmark = <FontAwesomeIcon icon={faXmark} />
const bar =  <FontAwesomeIcon icon={faBars} />
const home = <FontAwesomeIcon icon={faHome} />

//fa-magnifying-glass "fa-solid fa-xmark"

const EmailLeftBar = () => {
    // sidebar open and colose state
    const [sidebar, setSidebar] = useState(false)

    const handleSidebar = ()=>{
        setSidebar(!sidebar)
    }


    return (
        <>

        <div className='hidden md:block lg:block'>
                  {/* navbar */}
            {/* side bar container */}
            <div>
                {/* sidebar overlay */}
                {/* <div className='bg-black cursor-pointer fixed inset-0 opacity-70 visible' >

                </div> */}
                {/* side bar */}
                <div className= 'bg-white fixed inset-y-0 py-4 left-0 w-64 mt-5 rounded-md' >
                   
                    <div className='w-56 mx-auto mb-5'>
                        <button className='text-white font-semibold bg-gradient-to-tr from-blue-600 to-blue-400 text-center p-5 w-full rounded-md'>Weite Message</button>
                    </div>
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
        </div>

                {/* small side bar */}
        <div className='block md:hidden lg:hidden'>
            {/* navbar */}
        {/* <EmailTopBar setSidebar sidebar/> */}
        {/* lg:hidden md:hidden */}
        <div className='bg-blue-500 fixed flex h-20 inset-x-0 items-center justify-between px-4 text-white top-0'>
            {/* navbar logo */}
            <div>
                no science lab
            </div>

            {/* nav open side bar logo */}
            <button className='p-2 rounded-full transition hover:bg-blue-400' onClick={handleSidebar}>{bar}</button>
        </div>


            {/* side bar container */}
            <div>
                {/* sidebar overlay */}
                <div className={ sidebar ? 'bg-black cursor-pointer fixed inset-0 opacity-70 visible ' : 'hidden opacity-0'} onClick={handleSidebar}>

                </div>
                {/* side bar */}
                <div className={sidebar ? 'bg-white duration-300 fixed inset-y-0 py-4 left-0 transition-left w-64' : 'bg-white duration-300 fixed inset-y-0 py-4 -left-full transition-left w-64'}>
                    {/* sidebar close btn */}
                    <button className='absolute text-3xl -right-8 p-1 rounded-full text-white top-4 transition hover:text-red-400 ' onClick={handleSidebar}>{xmark}</button>

                    {/* sidebar menue */}
                    <ul className='font-normal text-gray-500'>
                        <li  onClick={handleSidebar}>
                            <Link href='/'>
                                <a className='bg-gray-100 font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-gray-100'>
                                <FontAwesomeIcon icon={faHome} className="mr-3" />
                                    Home
                                    </a>
                            </Link>
                        </li>
                        <li  onClick={handleSidebar}>
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
        </div>
        </>
    );
};

export default EmailLeftBar;