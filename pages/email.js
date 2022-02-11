import React from 'react';
import EmailLeftBar from '../components/Email/EmailLeftBar';
import EmailRightBar from '../components/Email/EmailRightBar';

const email = () => {
    return (
       <>
        <div className='bg-gray-200'>
            <EmailLeftBar/>
            <div className='h-full'>
            this is email
            </div>
            <div className='hidden lg:block '>
            <EmailRightBar/>
            </div>
        </div>
       </>
    );
};

export default email;