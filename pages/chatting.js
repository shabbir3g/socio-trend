import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/Chatting/ChatFeed';

import LoginForm from '../components/Chatting/LoginForm';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Chatting = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="89vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default Chatting;
