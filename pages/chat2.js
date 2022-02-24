import Image from "next/image";

const Chat2 = () => {

  return (
    <div className="chat">
  
  <div className="chat-texts">
    
    <div className="text">
      <div className="profile-pic"> 
      <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    />
    </div>
      <div className="text-content">
          <h5>Joannie</h5>
        Lorem ipsum dolor sit amet.<span className="timestamp">12:00hrs</span></div>
    </div>
    
    <div className="text sent">
      <div className="profile-pic"> <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    /></div>
      <div className="text-content"><h5>Laurie</h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, saepe?<span className="timestamp">12:00hrs</span></div>
    </div>
    
    <div className="text">
    <div className="profile-pic"> <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    /></div>
      <div className="text-content"><h5>Joannie</h5>Lorem ipsum dolor sit amet.<span className="timestamp">12:00hrs</span></div>
    </div>
    
    <div className="text">
    <div className="profile-pic"> <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    /></div>
      <div className="text-content"><h5>Joannie</h5> Lorem ipsum dolor sit amet.<span className="timestamp">12:00hrs</span></div>
    </div>
    
    <div className="text sent">
    <div className="profile-pic"> <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    /></div>
      <div className="text-content"><h5>Laurie</h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, saepe?<span className="timestamp">12:00hrs</span></div>
    </div>
    
    <div className="text">
    <div className="profile-pic"> <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    /></div>
      <div className="text-content"><h5>Joannie</h5>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.<span className="timestamp">12:00hrs</span></div>
    </div>
    <div className="text">
    <div className="profile-pic"> <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    /></div>
      <div className="text-content"><h5>Joannie</h5>Lorem ipsum dolor sit amet.<span className="timestamp">12:00hrs</span></div>
    </div>
    
    <div className="text sent">
    <div className="profile-pic"> <Image
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
        height={50}
        width={60}
        alt="img"
    /></div>
      <div className="text-content"><h5>Laurie</h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, saepe?<span className="timestamp">12:00hrs</span></div>
    </div>
    
  </div>
  
  <div className="send-message">
    <div className="message-text">
      <div className="smiley"><i className="lni lni-smile"></i></div>
       <input type="text" placeholder="Send Message" />
      <div className="attachment"><i className="lni lni-upload"></i></div>
    </div>
    <button><i className="lni lni-arrow-right-circle"></i></button>
  </div>
  
  
</div>
  );
};

export default Chat2;
