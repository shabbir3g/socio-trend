import { useState } from 'react';
import { BsEyeSlash, BsEye, BsGoogle } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFirebase from '../../firebase/useFirebase';
import { useSelector } from 'react-redux';

const Register = () => {
  const errorMsg = useSelector((state) => state.states.registerError);

  const { registerWithEmailPass, googleSign } = useFirebase();

  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmPass) {
      registerWithEmailPass(data?.email, data?.password, data?.displayName);
      toast('Wow password matched!');
      reset();
    } else {
      toast("Oops! password dosen't match");
    }
  };

  return (
    <section className="lg:py-10 lg:px-6">
      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden grid min-h-screen lg:grid-cols-5 grid-cols-2">
        <div className="hidden lg:flex col-span-2 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
          <div className="flex flex-col justify-start items-start py-10 pl-16">
            {/*  */}
          </div>
        </div>
        <div className="bg-white dark:bg-black col-span-3 flex flex-col pb-20">
          <div className="mt-8 mx-auto w-full max-w-md">
            <div className="flex flex-col justify-start items-start mb-10">
              <Link href="/">
                <a>
                  <Image src="/logo.png" alt="logo" width={300} height={100} />
                </a>
              </Link>
              <h1 className="text-gray-900 dark:text-white font-bold text-3xl font-title pl-4">
                Create an account
              </h1>
            </div>
            <div className="rounded-lg px-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="displayName"
                    className="block text-lg text-gray-900 dark:text-white"
                  >
                    Full name<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="displayName"
                      name="displayName"
                      {...register('displayName', { required: true })}
                      type="text"
                      autoComplete="given-name"
                      required
                      className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-900 dark:text-white"
                  >
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      {...register('email', { required: true })}
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-lg text-gray-900 dark:text-white"
                    >
                      Password<span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      className="mr-2"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <BsEye /> : <BsEyeSlash />}
                    </button>
                  </div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      {...register('password', { required: true })}
                      type={showPass ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="confirmPass"
                      className="block text-lg text-gray-900 dark:text-white"
                    >
                      Retype Password<span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      className="mr-2"
                      onClick={() => setShowPassConfirm(!showPassConfirm)}
                    >
                      {showPassConfirm ? <BsEye /> : <BsEyeSlash />}
                    </button>
                  </div>
                  <div className="mt-1">
                    <input
                      id="confirmPass"
                      name="confirmPass"
                      {...register('confirmPass', { required: true })}
                      type={showPassConfirm ? 'text' : 'password'}
                      required
                      className="appearance-none bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {/* {isLoading ? 'Loading...' : 'Sign in'} */}
                    Register
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 dark:bg-black text-gray-900 dark:text-white font-medium">
                      Or
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div>
                    <button
                      onClick={googleSign}
                      className="w-full inline-flex justify-center items-center py-2 px-4 rounded-md shadow-sm bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-600"
                    >
                      <BsGoogle className="w-6 h-6" />
                      &nbsp;Sign in with Google
                    </button>
                  </div>
                </div>
                <p className="mt-6 text-center text-base font-medium text-gray-900 dark:text-white">
                  Have an account?
                  <Link href="/login">
                    <a className="text-indigo-500 hover:text-indigo-600 font-medium">
                      &nbsp;&nbsp;Sign in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
