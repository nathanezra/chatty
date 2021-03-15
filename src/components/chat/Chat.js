import React from 'react';
import Title from './Title'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import Avatars from './Avatars';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

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

const DUMMY_DATA = [
    {
      senderId: "perborgen",
      text: "who'll win?",
      time: "10:30"
    },
    {
      senderId: "janedoe",
      text: "I dont know",
      time: "10:35"
    }
  ]

  function Chat(props) {
    const classes = useStyles();


      return (
        <div >
            <Title title={props.title} />
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <Avatars users={[{name:'nathan'},{name:'paul'}]}/>
                </Grid>
                <Grid item xs={9}>
                    <MessageList messages={DUMMY_DATA}/>
                    <Divider />
                    <SendMessageForm sendMessage={props.sendMessage}/>
                </Grid>
                
            </Grid>
            
       </div>
      )
    
  }

  export default Chat;