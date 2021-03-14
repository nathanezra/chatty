import React, { useState, useEffect } from 'react';
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

function ProfileScreen(props) {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }


 
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba(255,255,255,0.5)',
      marginLeft: '25%',
      marginTop: '10px',
      width: '50%'
    },
    form:{
      marginLeft: '25%',
      marginTop: '10px',
      width: '50%',
      marginBottom: '10px',
      backgroundColor: 'white',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  return <Card variant="outlined" className={classes.root}>
          <form className={classes.form}  autoComplete="off">
            <FormLabel color="primary">User Profile</FormLabel>
            <CardActions>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                className={classes.submit}
                >
                  Logout
              </Button> 
            </CardActions>
          </form>
        </Card>
}

export default ProfileScreen;