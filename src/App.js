import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/landingPage/landingPage";
import LoginPage from "./components/login/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import StudentForm from "./components/StudentForm/StudentForm";
import HallTicket from "./HallTicket/HallTicket";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path ='/' component={LoginPage}/>
              <Route exact path ='/main' component={LandingPage}/>
              <Route exact path = '/signup' component={Signup}/>
              <Route exact path = '/form' component={StudentForm}/>
              <Route exact path='/hallticket' component={HallTicket}/>

          </Switch>
      </BrowserRouter>
  );
}

export default App;
