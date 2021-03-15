import React, { useState, useEffect } from 'react';

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
      
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
      }
    
  });

function MessageList (props) {

    const classes = useStyles();
    

    return (
        <List className={classes.messageArea}>
            {props.messages.map(message => {
                return(
                    <ListItem>
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText 
                                    align = {message.senderId === props.user.name ? "right" : 'left'} 
                                    primary={message.text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText 
                                    align = {message.senderId === props.user.name ? "right" : 'left'} 
                                    secondary={message.senderId + ' ' + message.time}></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                )
            })}
        </List>
    )
      
}
export default MessageList;