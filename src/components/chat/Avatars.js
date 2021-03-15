import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

function Avatars (props) {

    

    return (
        <List>
            {props.users ? props.users.map(u => 
            {return(
                <ListItem button >
                        <ListItemIcon>
                            <Avatar />
                        </ListItemIcon>
                        <ListItemText primary={u.name}></ListItemText>
                </ListItem>
            )}): null}
            <Divider />
            <Grid item xs={12} style={{padding: '10px'}}>
                <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
            </Grid>
            <Divider />
            <List>
                {props.users ? props.users.map(u => 
                {return(
                    <ListItem button >
                            <ListItemIcon>
                                <Avatar />
                            </ListItemIcon>
                            <ListItemText primary={u.name}></ListItemText>
                            <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                )}): null}
            </List>
        </List>
    )
      
}
export default Avatars;