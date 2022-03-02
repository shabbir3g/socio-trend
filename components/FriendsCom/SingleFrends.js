import Image from 'next/image';
import React from 'react';

const SingleFrends = ({user}) => {
    const {photoURL, displayName} = user
    return (
        <div className=" md:col-span-3 lg:col-span-3 sm:col-span-4 xs:col-span-6 text-center rounded bg-white">
             <div className=' mt-5'>
             <Image  src={
                    user.photoURL ||
                    "http://uitheme.net/sociala/images/profile-4.png"
                  } height="100px" width="100px" className='rounded-full' alt="Friends image"></Image>
             </div>
             <h1 className='text-lg font-semibold '>{user.displayName}</h1>
             {/* <p className='text-sm text-slate-400'>{userId}</p> */}
             <button className={`${displayName === 'FRIEND' ? "bg-red-600":"bg-green-500"} py-2.5 px-4 mt-4 mb-6 rounded-full text-white font-medium text-sm`}>Add to Friend</button>
             {/* <p>whay you want to be a developer</p> */}
        </div>
    );
};

export default SingleFrends;