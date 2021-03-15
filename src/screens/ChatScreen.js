import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../components/chat/Chat'
import { addMessage, readMessage } from '../actions/messageActions';
import { getAllUsers } from '../actions/allUsersActions'

function ChatScreen(props) {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const messageStore = useSelector(state => state.message);
  const { messages } = messageStore;

  // const users = useSelector(state => state.allUsers);



  
  let state = useSelector(state => state)


  useEffect(() => {
    dispatch(readMessage())
    // dispatch(getAllUsers())
  }, []);

 




  let sendMessage = (text) => {
    dispatch(addMessage(userInfo.name, text))
  }

  
  let compareTime = (t1, t2) => {
    if(t1.time > t2.time)
      return 1
   else
      return -1
  }


  let sortTime = (arr) => {
    let sortArr = arr

    if(arr === undefined)
      return []
    if(arr.length < 2)
      return sortArr
    else{
     return sortArr.sort(compareTime)
    }
  }

  return(
    <Chat title={'My Awesome Chat'} messages = {messageStore.loading ? [] : sortTime(messages)} user={userInfo} sendMessage={sendMessage}/>
  ) 
}

export default ChatScreen;