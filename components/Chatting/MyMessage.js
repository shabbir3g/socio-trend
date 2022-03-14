import Image from "next/image";
const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <Image
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
        width={100}
        height={100}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
