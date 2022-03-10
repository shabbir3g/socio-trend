import { format } from "timeago.js";
import Image from "next/image";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <Image
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">Hello{message.text}</p>
      </div>
      <div className="messageBottom">Hi{format(message.createdAt)}</div>
    </div>
  );
}
