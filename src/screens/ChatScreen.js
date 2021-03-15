import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '../components/chat/Chat'
import { addMessage, readMessage } from '../actions/messageActions';
 

function ChatScreen(props) {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const messageStore = useSelector(state => state.message);
  const { messages } = messageStore;

  
  let state = useSelector(state => state)


  useEffect(() => {
    dispatch(readMessage())
  }, []);

  useEffect(() => {
    console.log('I changed')
  }, [messageStore]);

  let sendMessage = (text) => {
    dispatch(addMessage(userInfo.name, text))
  }
  return(
    <Chat title={'My Awesome Chat'} messages = {messages} user={userInfo} sendMessage={sendMessage}/>
  ) 
}

export default ChatScreen;