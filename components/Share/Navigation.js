import Head from "next/head";
import React, { useEffect } from 'react';

  const Navigation = () => {
    useEffect(() => {
    const navToggler = document.getElementById("nav-toggler");
  navToggler.addEventListener("click", navToggle);
  function navToggle() {
    const nav = document.getElementById("slider");
    nav.classList.toggle("show");

    if(nav.classList.contains("show")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }

  }
  }, [])
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="flex items-center ">
        <a
          href="#"
          className="font-bold text-4xl py-6 text-blue-700 pl-10 pr-16"
        >
          Sociala.
        </a>
        <input
          className="w-3/12 h-14  pl-12 rounded-full bg-gray-200 hidden lg:flex"
          placeholder="Start typing to search"
        ></input>
        <div className="xl:flex hidden ">
          <a
            href="#"
            className="w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full"
          >
            <i className="fas fa-home"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full"
          >
            <i className="fab fa-accessible-icon"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full"
          >
            <i className="fas fa-video"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full"
          >
            <i className="far fa-user"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center flex text-gray-400 hover:text-blue-500 text-2xl bg-gray-100 hover:bg-blue-100 ml-5 rounded-full"
          >
            <i className="far fa-clipboard"></i>
          </a>
        </div>
        <div className="flex ml-auto">
          <a
            href="#"
            className="w-14 h-14 items-center justify-center hidden lg:flex text-blue-500 text-2xl"
          >
            <i className="far fa-bell"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center hidden lg:flex text-blue-500 text-2xl"
          >
            <i className="far fa-comment-alt"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center hidden lg:flex text-blue-500 text-2xl"
            style={{ animation: "fa-spin 2s infinite linear" }}
          >
            <i className="far fa-sun"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full items-center justify-center hidden lg:flex mr-5 mt-1"
          >
            <img src="http://uitheme.net/sociala/images/profile-4.png" />
          </a>

          <a
            href="#"
            className="w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-2xl"
          >
            <i className="far fa-comment"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-2xl"
          >
            <i className="fas fa-video"></i>
          </a>
          <a
            href="#"
            className="w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-2xl"
          >
            <i className="fas fa-search"></i>
          </a>
          <a
            href="#"
             id="nav-toggler"
            className="w-14 h-14 items-center justify-center lg:hidden flex text-blue-500 text-2xl"
          >
            <i className="fas fa-bars bars"></i>
          </a>
        </div>
        <div className='z-50 w-full lg:hidden flex justify-between absolute bottom-0 left-0 right-0 px-5 bg-gradient-to-r from-blue-700 to-cyan-500'>
          <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fas fa-home"></i></a>
          <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fas fa-cube"></i></a>
          <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fas fa-table"></i></a>
          <a href='#' className='w-14 h-14 items-center justify-center flex text-white text-2xl'><i className="fab fa-hive"></i></a>
          <a href='#' className='w-10 h-10 rounded-full items-center justify-center mt-2'><img src='http://uitheme.net/sociala/images/profile-4.png' /></a>
        </div>
         <div id='slider' className='w-6/12 bg-gray-400 absolute -left-2/4 bottom-14  top-20 transition '>
           <h2>opi Barua</h2>
         </div>
      </div>
    </>
  );
};

export default Navigation;
