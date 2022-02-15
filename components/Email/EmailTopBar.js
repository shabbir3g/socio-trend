import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'

const bar =  <FontAwesomeIcon icon={faBars} />

const EmailTopBar = ({setSidebar, sidebar}) => {
    return (
        <>
            {/* navbar */}
        <div className='bg-blue-500 fixed flex h-20 inset-x-0 items-center justify-between px-4 text-white top-0'>
            {/* navbar logo */}
            <div>
                no science lab
            </div>

            {/* nav open side bar logo */}
            <button className='p-2 rounded-full transition hover:bg-blue-400' onClick={()=>setSidebar(!sidebar)}>{bar}</button>
        </div>
        </>
    );
};

export default EmailTopBar;