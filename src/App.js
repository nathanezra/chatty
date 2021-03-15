import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { useSelector } from 'react-redux';
// import Home from './screens/Home';

import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import LogoutScreen from './screens/LogoutScreen';
import ChatScreen from './screens/ChatScreen';


import background from "./img/terre.jpg"
import ButtonAppBar from './components/AppBar';


function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  return  (
    <Router>
      <div style={{ backgroundImage: `url(${background})`, width: '100%', height:' 100%', margin: '0em',
      left: '0em', top: '0em',position: 'fixed' }}>
        <ButtonAppBar 
            title={'Chatty'}
            userInfo={userInfo} />
        <Switch>
          <Route path="/chat" component={ChatScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/logout" component={LogoutScreen}></Route>
        </Switch>
      </div>
      
    </Router>
  );

}

export default App;
