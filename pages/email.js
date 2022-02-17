import Head from 'next/head';
import React from 'react';
import EmailLeftBar from '../components/Email/EmailLeftBar';
import EmailMiddle from '../components/Email/EmailMiddle';
import EmailRightBar from '../components/Email/EmailRightBar';
import Navigation from '../components/Share/Navigation';

const email = () => {
    return (
        <>
          
          <div className="bg-neutral-100">
            {/* <Navigation/> */}
            <div>
                <div className='bg-gray-400 '>
                    <EmailLeftBar className="border"/>
                    <div className='border-3'>
                        <EmailMiddle/>
                    </div>
                    <div className='hidden lg:block '> 
                        <EmailRightBar/>
                    </div> 
                </div>
            </div>
        
       </div> 
    </>


    );
};

export default email;