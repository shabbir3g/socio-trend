import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../firebase/useFirebase";

const Login = () => {
  const { registerWithEmailPass } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerWithEmailPass(data.email, data.password);
  };

  return (
    <div className="">
      <div className="flex justify-center m-10 sm:mx-auto md:flex-row flex-col w-5/6">
        <div className="md:w-3/6">
          <Image
            src="http://uitheme.net/sociala/images/login-bg.jpg"
            height="600"
            width="700"
            alt="Login image"
          />
          <a className="font-bold text-3xl text-blue-600 absolute top-10 left-10">
            Sociala.
          </a>
        </div>
        <div className="md:w-2/5 w-11/12 mx-auto pt-10">
          <h2 className="md:text-4xl text-3xl text-gray-900 font-bold mb-4">
            Login into <br /> your account
          </h2>
          {/* login-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", { required: true })}
              className="w-full border border-gray-400 h-14 py-4 pl-12 rounded-md"
              placeholder="Your Email address"
            ></input>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full border border-gray-400 h-14 py-4 pl-12 rounded-md mt-5"
              placeholder="Password"
            ></input>

            <div className="flex py-3">
              <input type="checkbox" className="w-4 h-4 rounded mt-1" />
              <p className="text-gray-400 font-semibold pl-2">Remember me</p>
              <a className="text-gray-600 pl-6 font-semibold" href="#">
                Forgot your Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-14 py-4 rounded-md bg-gray-900 text-white "
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 py-3 font-semibold">
            Dont have account
            <Link passHref href="register">
              <a className="text-blue-600 pl-1">Register</a>
            </Link>
          </p>
          <p className="text-center text-gray-400 py-3 font-semibold">
            Or, Sign in with your social account
          </p>
          <a
            className="w-full h-14 py-4 rounded-md bg-blue-500 block text-center text-white"
            href="#"
          >
            sign in with google
          </a>
          <a
            className="w-full h-14 py-4 rounded-md bg-blue-800 block text-center text-white mt-4"
            href="#"
          >
            sign in with facebook
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
