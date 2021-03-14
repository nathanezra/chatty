import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
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

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
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

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
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

  return (
  <div className="form">
    <Card variant="outlined" className={classes.root}>
      <form className={classes.form} onSubmit={submitHandler} autoComplete="off">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <FormLabel color="primary">Create Account</FormLabel>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="Name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
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
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="rePassword"
                label="RePassword"
                type="password"
                id="RePassword"
                autoComplete="current-password"
                onChange={(e) => setRePassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
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
             Register
          </Button> 
        </CardActions>
      </form>
    </Card>
  </div>)
}
export default RegisterScreen;