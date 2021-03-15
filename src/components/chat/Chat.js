import React from 'react';
import Title from './Title'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

const DUMMY_DATA = [
    {
      senderId: "perborgen",
      text: "who'll win?"
    },
    {
      senderId: "janedoe",
      text: "who'll win?"
    }
  ]

  function Chat(props) {
      return (
        <div style={{backgroundColor:'white'}}>
            <Title title={props.title} />
            <MessageList messages={DUMMY_DATA}/>
            <SendMessageForm sendMessage={props.sendMessage}/>
       </div>
      )
    
  }

  export default Chat;