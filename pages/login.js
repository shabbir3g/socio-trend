import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../firebase/useFirebase";
import Head from "next/head";
import { useSelector } from "react-redux";

const Login = () => {
  const { signWithEmailPass, googleSign } = useFirebase();
  const [showPass, setShowPass] = React.useState(false);

  const emailLoginErrorMsg= useSelector((state) => state.states.emailPassLoginError);
  const googleLoginErrorMsg= useSelector((state) => state.states.googleLoginError);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signWithEmailPass(data.email, data.password);
  };

  const handleHidePass = () => {
    setShowPass(true);
  };

  const handleShowPass = () => {
    setShowPass(false);
  };

  return (
    <div className="">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="flex justify-center m-10 sm:mx-auto md:flex-row flex-col w-5/6">
        <div className="md:w-3/6">
          <Image
            src="http://uitheme.net/sociala/images/login-bg.jpg"
            height="700"
            width="700"
            alt="Login image"
          />
          <a className="font-bold text-3xl text-blue-600 absolute top-10 left-10">
            <Image alt="Socio Trend" width="300" height="100" src="/logo.png" />
          </a>
        </div>
        <div className="md:w-2/5 w-11/12 mx-auto pt-10">
          <h2 className="md:text-4xl text-3xl text-gray-900 dark:text-white font-bold mb-8">
            Login into your account
          </h2>
          {/* login-form */}

          <button
            onClick={googleSign}
            className="w-full flex justify-center align-center gap-3 py-2 border rounded-md bg-white border-black	text-center text-black hover:opacity-60"
          >
            <Image src="/google.png" height="35" width="35" alt="google logo" />
            <p className="text-xl font-bold pt-1 "> sign in with google</p>
          </button>
          <div className="or-separator text-center	 font-extrabold	 text-xl	my-4	">
            OR
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", { required: true })}
              className="w-full border border-gray-400 dark:bg-white dark:text-black h-14 py-4 pl-4 rounded-md"
              placeholder="Your Email address"
            ></input>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPass ? "text" : "password"}
                className="w-full border border-gray-400 dark:bg-white dark:text-black h-14 py-4 pl-4 rounded-md mt-5"
                placeholder="Password"
              ></input>
              <i
                onClick={showPass ? handleShowPass : handleHidePass}
                className={
                  showPass
                    ? "fa-solid  fa-eye absolute dark:text-black right-5 top-10 cursor-pointer"
                    : "fa-solid  fa-eye-slash absolute dark:text-black  right-5 top-10 cursor-pointer"
                }
              />
            </div>

            <div className="flex justify-between py-3">
              <span>
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded mt-1"
                />
                <label
                  htmlFor="remember"
                  className="text-gray-400 font-semibold pl-2"
                >
                  Remember me
                </label>
              </span>
              <span>
                <a className="text-gray-400 pl-6 font-semibold" href="#">
                  Forgot your Password?
                </a>
              </span>
            </div>
            <button
              type="submit"
              className="w-full h-14 py-4 font-bold rounded-md bg-gray-900 dark:bg-white dark:text-black text-white hover:opacity-75"
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 py-3 font-semibold text-center">
            Dont have account
            <Link passHref href="register">
              <a className="text-orange-500	pl-1">Register</a>
            </Link>
          </p>

          <div className="text-center">
            <p className="font-bold text-xl text-red-600">{emailLoginErrorMsg || googleLoginErrorMsg}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;