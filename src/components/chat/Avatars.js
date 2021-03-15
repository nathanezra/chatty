import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


function Avatars (props) {

    

    return (
        <List>
            <ListItem button >
                    <ListItemIcon>
                        <Avatar alt="Remy Sharp"/>
                    </ListItemIcon>
                    <ListItemText primary="John Wick"></ListItemText>
            </ListItem>
        </List>
    )
      
}
export default Avatars;