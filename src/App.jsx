
import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Calendar from './Calendar/calendar.jsx'
import Workout from './components/workout'
import Meals from './components/meals'
import Journal from './components/journal'
import Navbar from './components/Navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
      <>
        <div >
          <Navbar />
        </div>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route exact path='/calendar' component={Calendar}/>
          <Route path='/workout' component={Workout}/>
          <Route path='/meals' >
            <Meals />
          </Route>
          <Route path='/journal' component={Journal}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </>
    );
}

export default App;
