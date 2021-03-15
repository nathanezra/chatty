import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '../components/chat/Chat'
import { addMessage, readMessage } from '../actions/messageActions';
 

function ChatScreen(props) {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const messageRead = useSelector(state => state.messageRead);
  const { messages } = messageRead;
  let state = useSelector(state => state)


  useEffect(() => {
    dispatch(readMessage())
  }, []);

  // useEffect(() => {
  //   console.log('messages', messages, state)
  // }, [state, messages]);

  let sendMessage = (text) => {
    dispatch(addMessage(userInfo.name, text))
  }
  return(
    <Chat title={'My Awesome Chat'} messages = {messages} user={props.userInfo} sendMessage={sendMessage}/>
  ) 
}

export default ChatScreen;