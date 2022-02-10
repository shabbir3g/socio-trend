import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearchPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const filter = <FontAwesomeIcon icon={faFilter} />
const search1 = <FontAwesomeIcon icon={faSearchPlus} />
const search = <FontAwesomeIcon icon={faMagnifyingGlass} />
//fa-magnifying-glass

const EmailLeftBar = () => {
    return (
        <>
        {/* navbar */}
        <div className='bg-blue-500 fixed flex h-14 inset-x-0 items-center justify-between px-4 text-white top-0'>
            {/* navbar logo */}
            <div>
                no science lab
            </div>

            {/* nav open side bar logo */}
            <button className='p-2 rounded-full transition hover:bg-blue-400'>{search}</button>
        </div>
            this is legft bar
        </>
    );
};

export default EmailLeftBar;