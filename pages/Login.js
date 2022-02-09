import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from '../components/Share/Navigation';

const login = () => {
    return (
        <>
        <Navigation></Navigation>
        <div className="flex flex-wrap">
          <div className='md:w-2/5 relative'>
              <img src='http://uitheme.net/sociala/images/login-bg.jpg'></img>
              <a className='font-bold text-3xl text-blue-600 absolute top-10 left-10'>Sociala.</a>
          </div>
          <div className='md:w-3/5 w-full justify-center flex relative '>
              <div className='md:flex absolute md:top-5 top-3 md:right-5 right-1 hidden'>
                  <a href='#' className='md:w-28 w-20 md:h-14 h-9 flex justify-center items-center bg-gray-800 text-white font-semibold rounded-full'>login</a>
                  <a href='#' className=' ml-2 md:w-28 w-20 md:h-14 h-9 flex justify-center items-center bg-blue-700 text-white font-semibold rounded-full'>Register</a>
              </div>
              <div className='md:w-2/5 w-11/12 pt-10'>
                  <h2 className='md:text-4xl text-3xl text-gray-900 font-bold mb-4'>Login into <br/> your account</h2>
                  <input className='w-full border border-gray-400 h-14 py-4 pl-12 rounded-md' placeholder='Your Email address'></input>
                  <input className='w-full border border-gray-400 h-14 py-4 pl-12 rounded-md mt-5' placeholder='Password'></input>
                  <div className='flex py-3'>
                    <input type="checkbox" className="w-4 h-4 rounded mt-1"  />
                    <p className='text-gray-400 font-semibold pl-2'>Remember me</p>
                    <a className='text-gray-600 pl-6 font-semibold' href='#'>Forgot your Password?</a>
                  </div>
                  <button className='w-full h-14 py-4 rounded-md bg-gray-900 text-white '>Login</button>
                  <p className='text-gray-400 py-3 font-semibold'>Dont have account <a className='text-blue-600' href='#'>Register</a></p>
                  <p className='text-center text-gray-400 py-3 font-semibold'>Or, Sign in with your social account</p>
                  <a className='w-full h-14 py-4 rounded-md bg-blue-500 block text-center text-white' href='#'>sign in with google</a>
                  <a className='w-full h-14 py-4 rounded-md bg-blue-800 block text-center text-white mt-4' href='#'>sign in with facebook</a>
              </div>
          </div>
        </div>
        </>

    );
};

export default login;