import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '../components/chat/Chat'
import { addMessage } from '../actions/messageActions';

function ChatScreen(props) {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

 
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba(255,255,255,0.5)',
      marginLeft: '25%',
      marginTop: '10px',
      width: '50%'
    },
    form:{
      marginLeft: '25%',
      marginTop: '10px',
      width: '50%',
      marginBottom: '10px',
      backgroundColor: 'white',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  let sendMessage = (text) => {
    dispatch(addMessage(userInfo.name, text))
  }
  return(
    <Chat title={'My Awesome Chat'} user={props.userInfo} sendMessage={sendMessage}/>
  ) 
}

export default ChatScreen;