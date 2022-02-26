import Head from "next/head";
import Image from "next/image";
import React,  { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import Navigation from "../components/Share/Navigation";

let socket;
const CONNECTION_PORT = "https://quiet-temple-44909.herokuapp.com/";

const Chat = () => {

  const inputRef = useRef();

  const [message, setMessage] = useState("")
  const [messageList, setMessageList] = useState([]);
  console.log(messageList);

  const user = "Parvez"

  const users = useSelector((state) => state.states.user);
  console.log(users);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });

  const sendMessage = async () => {
    let messageContent = {
      content: {
        user,
        message,
      },
    };

    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage("");
    inputRef.current.value= '';
  }

  return (
    <div className="bg-neutral-100 dark:bg-gray-900">
     
        <Navigation />
      <div className="border p-5 bg-white rounded">
        <div
          style={{ height: "80vh" }}
          className=" p-3 overflow-y-scroll scrollbar-0"
        >
          {/* each-message-content */}
          <div className="flex justify-start mt-5">
            <div className="">
              {/* profile-section */}
              <div className="flex">
                <Image
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                  height={50}
                  width={60}
                  alt="img"
                />  

                <div className=" pl-4">
                  <p className="font-bold">Thomas hill</p>
                  <p className="text-slate-400 text-sm font-bold">1:35PM</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              {/* content-section */}
              <div className="mt-5 rounded w-5/6 p-2 bg-indigo-300 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                reiciendis impedit vero quae, vitae soluta nam nisi culpa
                quisquam eos.
              </div>
            </div>
          </div>

          {/* each-message-content */}
          <div className="flex justify-start mt-5">
            <div className="">
              {/* profile-section */}
              <div className="flex">
                <Image
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                  height={50}
                  width={60}
                  alt="img"
                />

                <div className=" pl-4">
                  <p className="font-bold">Thomas hill</p>
                  <p className="text-slate-400 text-sm font-bold">1:35PM</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              {/* content-section */}
              <div className="mt-5 rounded p-2 text-white">
                <Image
                  className=""
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg"
                  height={200}
                  width={400}
                  alt="img"
                />
              </div>
            </div>
          </div>

          {/* each-message-content */}
          <div className="flex justify-end mt-5">
            <div className="">
              {/* profile-section */}
              <div className="flex">
                <Image
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                  height={50}
                  width={60}
                  alt="img"
                />

                <div className=" pl-4">
                  <p className="font-bold">Thomas hill</p>
                  <p className="text-slate-400 text-sm font-bold">1:35PM</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              {/* content-section */}
              <div className="mt-5 rounded p-2 bg-indigo-700 text-white">
                something
              </div>
            </div>
          </div>

          {/* each-message-content */}
          <div className="flex justify-start mt-5">
            <div className="">
              {/* profile-section */}
              <div className="flex">
                <Image
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                  height={50}
                  width={60}
                  alt="img"
                />

                <div className=" pl-4">
                  <p className="font-bold">Thomas hill</p>
                  <p className="text-slate-400 text-sm font-bold">1:35PM</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              {/* content-section */}
              <div className="mt-5 rounded p-2 text-white">
                <Image
                  className=""
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg"
                  height={200}
                  width={400}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* message-sending-field */}
        <div className="pt-5">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 bg-slate-200 p-2 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>

            <input
              onChange={(e) => {setMessage(e.target.value)}}
              ref={inputRef}
              className="w-full bg-indigo-100 border-0  rounded-full pl-4 mx-3 outline-none text-black"
              type="text"
              placeholder="start typing ..."
            />

            <svg
              onClick={sendMessage}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 bg-indigo-700 p-2 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
