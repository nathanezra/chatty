import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { useSelector } from 'react-redux';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { auth } from './services/firebase';

function App() {

  const userSignin = useSelector((state) => state.userSignin);

  render{
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/chat" component={Chat}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
