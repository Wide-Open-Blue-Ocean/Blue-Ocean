import React from 'react';
import {ChatEngine} from 'react-chat-engine';



const ChatEngineComponent = ({username, usersecret}) => {
  return (
    <ChatEngine
        height="80vh"
        projectID="3e72f62a-bb4e-4bd5-9114-83cf23d2092d"
        userName={username}
        userSecret={usersecret}
        />
  )
}



export default ChatEngineComponent;