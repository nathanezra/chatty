import React, { useState, useRef, useEffect } from 'react';

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
    const scrollRef = useRef(null);

  

    useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
      });

    const userName = props.user ? props.user.name : ''


    return (
        <List className={classes.messageArea}>
            {props.messages ? props.messages.map(message => {
                let date = message.time.toDate().toString()

                date = date.split(' ')
                date = [date[1], date[2], date[3], date[4]].join(' ')
                return(
                    <ListItem >
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText 
                                    align = {message.name === userName ? "right" : 'left'} 
                                    primary={message.text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText 
                                    align = {message.name === userName? "right" : 'left'} 
                                    secondary={message.name + ' ' + date}></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                )
            }): null}
             <ListItem ref={scrollRef}  ></ListItem>
        </List>
    )
      
}
export default MessageList;