import React from 'react';

const PostSkeleton = () => {
  return (
    <div className="py-6">
      <div className="relative">
        <div className="h-52 w-full object-cover animate-pulse lg:h-72 rounded-lg bg-gray-300 dark:bg-black"></div>
        <div className="absolute left-3 top-3 w-full">
          <div className="flex items-center gap-3">
            <div className="animate-pulse h-12 w-12 text-2xl flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800"></div>
            <div className="w-40 bg-gray-100 dark:bg-zinc-800 h-4 rounded-md "></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-2xl mt-2 w-full font-bold truncate flex gap-2 flex-col">
          <div className="w-full bg-gray-300 dark:bg-black h-4 rounded-md "></div>
          <div className="w-full bg-gray-300 dark:bg-black h-4 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
