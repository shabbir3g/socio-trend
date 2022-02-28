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

  const [room ,setRoom] = useState(0);
  const [message, setMessage] = useState("")
  const [messageList, setMessageList] = useState([]);



  const time = new Date().toLocaleString();
  const strTime = time.split(",")

   useEffect(() => {
    const userRoom = prompt("enter room number to chat")
    setRoom(userRoom)
   },[])


  const users = useSelector((state) => state.states.user);


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
      room: room,
      content: {
        user: users?.displayName,
        message,
        img: users?.photoURL  || "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Creative-Tail-People-man-2.svg/768px-Creative-Tail-People-man-2.svg.png",
        time: strTime[1],
      },
    };

    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage("");
    inputRef.current.value= '';
  }


  useEffect(() => {
    socket.emit("join_room", room);   
  },[room])

  console.log(messageList);
  return (
    <div className="bg-neutral-100 dark:bg-gray-900">
     
        <Navigation />
      <div className="p-5  rounded">
        <div className="chat-box-container font-mono">
        <div
          style={{ height: "80vh" }}
          className="p-3 bg-white overflow-y-scroll scrollbar-0">
          {messageList && messageList?.map((user,index)=>{return(
                <div key={index} className={users?.displayName==user.user?'flex justify-end mt-5':'flex justify-start mt-5'}>
                <div className="">
                  <div className="flex">
                    <Image
                      className="rounded-full"
                      src={user?.img}
                      height={50}
                      width={50}
                      alt="img"
                    />  

                    <div className=" pl-4">
                      <p className="font-bold">{user?.name}</p>
                      <p className="text-slate-400 text-sm font-bold">{user?.time}</p>
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
                
                  <div className={users?.displayName===user.user? "mt-5 rounded w-5/6 p-2 bg-blue-800 text-white font-sans": "mt-5 rounded w-5/6 p-2 bg-gray-200 text-black  font-serif"}>
                    {user.message}
                  </div>
                </div>
                </div>
            )})}
        </div>

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
    </div>
  );
};

export default Chat;
