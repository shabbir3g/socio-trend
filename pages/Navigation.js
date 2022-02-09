
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

const Navigation = () => {
    
    return (
                <div>
                <div className='flex items-center'>
                <a href='#' className='font-bold text-2xl md:text-4xl py-6 text-blue-700 pl-2 md:pl-10 md:pr-16'>Sociala.</a>
                <input className='w-3/12 h-14  pl-12 rounded-full bg-gray-200 hidden lg:flex' placeholder='Start typing to search'></input>
                <div className='xl:flex hidden '>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full'><i className="fas fa-home"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full'><i className="fab fa-accessible-icon"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full'><i className="fas fa-video"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full'><i className="far fa-user"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full'><i className="far fa-clipboard"></i></a>
                </div>
                <div className='flex ml-auto'>
                    <a href='#' className='w-14 h-14 items-center justify-center hidden lg:flex text-blue-500 text-2xl'><i className="far fa-bell"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center hidden lg:flex text-blue-500 text-2xl'><i className="far fa-comment-alt"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center hidden lg:flex text-blue-500 text-2xl' style={{animation: 'fa-spin 2s infinite linear'}} ><i className="far fa-sun"></i></a>
                    <a href='#' className='w-10 h-10 rounded-full items-center justify-center hidden lg:flex mr-5 mt-1'><img src='http://uitheme.net/sociala/images/profile-4.png' /></a>
    
                    <a href='#' className='w-10 sm:w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-xl md:text-2xl'><i className="far fa-comment"></i></a>
                    <a href='#' className='w-10 sm:w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-xl md:text-2xl'><i className="fas fa-video"></i></a>
                    <a href='#' className='w-10 sm:w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-xl md:text-2xl'><i className="fas fa-search"></i></a>
                    <a href='#' id="bars" className='w-10 sm:w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-xl md:text-2xl'><i className="fas fa-bars"></i></a>
                </div>
                <div className=' w-full lg:hidden flex justify-between absolute bottom-0 left-0 right-0 px-5 bg-gradient-to-r from-blue-700 to-cyan-500'>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fas fa-home"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fas fa-cube"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fas fa-table"></i></a>
                    <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fab fa-hive"></i></a>
                    <a href='#' className='w-10 h-10 rounded-full items-center justify-center mt-2'><img src='http://uitheme.net/sociala/images/profile-4.png' /></a>
                </div>
            </div>
            <div className='w-6/12 bg-gray-400 absolute -left-2/4 bottom-14 slider top-20'>
              <h2>opi Barua</h2>
            </div>
            <Script src="https://code.jquery.com/jquery-3.6.0.js"></Script>
            {/* <Script>
          $(document).ready(function)(){
            $('#bars').click(function(){
              // $console.log('click');
              $('.slider').toggleClass('show');
            })
          }
        </Script> */}
            </div>
    );
};

export default Navigation;