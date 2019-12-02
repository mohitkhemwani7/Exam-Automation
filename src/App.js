import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/landingPage/landingPage";
import LoginPage from "./components/login/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/Signup";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path ='/' component={LandingPage}/>
              <Route exact path ='/login' component={LoginPage}/>
              <Route exact path = '/signup' component={Signup}/>

          </Switch>
      </BrowserRouter>
  );
}

export default App;
