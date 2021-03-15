import React from 'react';
import Avatars from './Avatars';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
      
    chatSection: {
      width: '100%',
      height: '80vh'
    },
    
  });

  
function MessageList (props) {

    const classes = useStyles();
    

    return (
        <>
            <Grid container component={Paper} className={classes.chatSection}>
                <Avatars/>
            </Grid>
            <ul className="message-list">                 
                {props.messages.map(message => {
                    return (
                        <li key={message.id}>
                        <div>
                            {message.senderId}
                        </div>
                        <div>
                            {message.text}
                        </div>
                        </li>
                    )
                })}
        </ul>
        </>
    )
      
}
export default MessageList;