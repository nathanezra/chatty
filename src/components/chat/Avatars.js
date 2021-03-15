import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Avatars (props) {

    const classes = useStyles();

    return (
        <List>
            {props.users ? props.users.map(u => 
            {return u.onLine ? null : (
                <ListItem button >
                        <ListItemIcon>
                            <Avatar className={classes.orange}>{u.name.toUpperCase().charAt(0)}</Avatar>
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
                {return u.onLine ? (
                    <ListItem button >
                            <ListItemIcon>
                                <Avatar className={classes.purple}>{u.name.toUpperCase().charAt(0)}</Avatar>
                            </ListItemIcon>
                            <ListItemText primary={u.name}></ListItemText>
                            <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                ) : null }): null}
            </List>
        </List>
    )
      
}
export default Avatars;