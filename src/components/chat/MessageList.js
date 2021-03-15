import React from 'react';
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
      width: '100%',
      height: '80vh'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    
  });


function MessageList (props) {

    const classes = useStyles();
    

    return (
        <>
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <Avatars users={[{name:'nathan'},{name:'paul'}]}/>
                </Grid>
                
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