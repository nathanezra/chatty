import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'hsl(189deg 34% 52%);'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledLink = withStyles({
    root: {
      color: 'white',
      margin: '10px'
    },
   
  })(Link);


export default function ButtonAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root} >
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography  variant="h6" className={classes.title}>
                        <StyledLink href= {props.userInfo ? "/chat" : '/signin'} color="textSecondary">
                            {props.title}
                        </StyledLink>
                    </Typography>
                    <Typography  variant="h6" >
                        {props.userInfo ? (
                        <StyledLink href="/logout">{props.userInfo.name}</StyledLink>
                        ) : (
                        <StyledLink href="/signin">Sign In</StyledLink>
                        )}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
    }


