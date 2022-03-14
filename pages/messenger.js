import styles from "../styles/messenger.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import Conversation from "../components/Messenger/Conversation";
import Message from "../components/Messenger/Message";
import ChatOnline from "../components/Messenger/ChatOnline";
import { useSelector } from "react-redux";
import Navigation from "../components/Share/Navigation";

export default function Messenger() {
  const user = useSelector((state) => state.states.user);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [dbUser, setDbUser] = useState({});
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    // socket.current = io("https://dry-oasis-76334.herokuapp.com");
    socket.current.on("getMessage", (data) => {
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
    socket.current.emit("addUser", dbUser._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        allUsers.filter((f) => users.some((u) => u.userId === f._id))
      );
    });
  }, [allUsers, dbUser._id]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/messenger/conversations?userId=${dbUser._id}`
        );
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [dbUser._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/messenger/messages?conversationId=${currentChat?._id}`
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user?email=${user?.email}`)
      .then(({ data }) => setDbUser(data));
  }, [user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: dbUser._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== dbUser._id
    );

    socket.current.emit("sendMessage", {
      senderId: dbUser._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(
        "http://localhost:3000/api/messenger/messages",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/user/allUsers").then(({ data }) => {
      setAllUsers(data);
    });
  }, []);

  return (
    <>
      <Navigation />
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatMenuWrapper}>
            <input
              placeholder="Search for friends"
              className={styles.chatMenuInput}
            />
            {conversations?.map((c) => (
              <div onClick={() => setCurrentChat(c)} key={c._id}>
                <Conversation conversation={c} currentUser={dbUser} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>
            {currentChat ? (
              <>
                <div className={styles.chatBoxTop}>
                  {messages.map((m) => (
                    <div ref={scrollRef} key={m._id}>
                      <Message message={m} own={m.sender === dbUser._id} />
                    </div>
                  ))}
                </div>
                <div className={styles.chatBoxBottom}>
                  <textarea
                    className={styles.chatMessageInput}
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button
                    className={styles.chatSubmitButtonclassName}
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className={styles.noConversationText}>
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className={styles.chatOnline}>
          <div className={styles.chatOnlineWrapper}>
            {onlineUsers.map((user) => (
              <ChatOnline
                key={user._id}
                user={user}
                currentId={dbUser._id}
                setCurrentChat={setCurrentChat}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
