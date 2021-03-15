import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link'
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const dispatch = useDispatch();
  
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);


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
  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return (
  <div className="form">
    <Card variant="outlined" className={classes.root}>
      <form className={classes.form} onSubmit={submitHandler} autoComplete="off">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <FormLabel color="primary">Sign In</FormLabel>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography  >
                New to Chatty?
              </Typography>
              <Typography  >
                <Link href={redirect === "/" ? "register" : "register?redirect=" + redirect} color="textSecondary">
                    Create your  account
                </Link>
              </Typography>
            </Grid>
          </Grid> 
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
              Sign In
          </Button> 
        </CardActions>
      </form>
    </Card>
  </div>
  )
}
export default SigninScreen;