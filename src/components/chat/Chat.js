import React, { useState, useEffect } from 'react';
import Title from './Title'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import Avatars from './Avatars';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
      
    chatSection: {
      width: '50%',
      height: '50%',
      marginLeft: '25%',
      marginTop: '10px',
      
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    
  });


  function Chat(props) {

    const classes = useStyles();

    

      return (
        <div >
            <Title title={props.title} />
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <Avatars users={[{name:'nathan', onLine:true},{name:'paul', onLine:false}]}/>
                </Grid>
                <Grid item xs={9}>
                    <MessageList messages={props.messages} user={props.user}/>
                    <Divider />
                    <SendMessageForm sendMessage={props.sendMessage}/>
                </Grid>
                
            </Grid>
            
       </div>
      )
    
  }

  export default Chat;