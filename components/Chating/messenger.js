import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import Conversation from "./Conversations";
import Message from "./Message";
import ChatOnline from "./ChatOnline";

const Messenger = ({ data }) => {
  console.log(data);
  const [conversations, setConversations] = useState([]);
  console.log(conversations);
  const [currentChat, setCurrentChat] = useState(null);
  console.log(currentChat);
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const [newMessage, setNewMessage] = useState("");
  console.log(newMessage);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  console.log(arrivalMessage);
  const [onlineUsers, setOnlineUsers] = useState([]);
  console.log(onlineUsers);

  const socket = useRef();
  // const user = useSelector((state) => state.states.user);
  // console.log(user)

  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    socket.current.on("getMessage", (data) => {
      console.log(data);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", data._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        data.followings?.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [data._id]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user.userId);
        console.log(res);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [data._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?.userId);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: data._id,
      text: newMessage,
      conversationId: currentChat?.data._id,
    };

    const receiverId = currentChat?.members.find(
      (member) => member !== data._id
    );

    socket.current.emit("sendMessage", {
      senderId: data._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {/* <input placeholder="Search for friends" className="chatMenuInput" /> */}
            {conversations.map((c) => (
              <div key={c._id} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {/* {currentChat ? ( */}
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div key={m._id} ref={scrollRef}>
                    <Message message={m} own={m.sender === data._id} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </>
            {/* ) : ( */}
            {/* <span className="noConversationText">
                Open a conversation to start a chat.
              </span> */}
            {/* )} */}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={data._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
