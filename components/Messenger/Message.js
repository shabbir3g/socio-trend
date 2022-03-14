import Image from "next/image";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <Image
          height="50"
          width="50"
          className="messageImg"
          src="https://i.ibb.co/Xz214Jt/user-8.webp"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
