import React, { Component, useState } from 'react'
import dateUtils from './utils/dateUtils.js';
import Button from '@material-ui/core/Button'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Calendar from './Calendar/calendar.jsx'
import MobileCalendar from './MobileCalendar/MobileCalendar.jsx'
import Workout from './components/workout'
import Meals from './components/meals'
import Journal from './components/journal'
import Navbar from './components/Navbar/navbar'
import SignIn from './SignIn.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router-dom'
const App = () => {

return (
<>
<div >

</div>
<Switch>
  <Route path='/' component={Home} exact/>
  <React.Fragment>
  <Navbar />

  <Route exact path='/calendar' component={window.screen.width <= 600 ? MobileCalendar : Calendar}/>
  <Route path='/workout' component={Workout}/>
  <Route path='/meals' >
    <Meals />
  </Route>
  <Route path='/journal' component={Journal}/>
  <Route exact path='/' component={Home}/>
</React.Fragment>
</Switch>
</>)
}


export default App
