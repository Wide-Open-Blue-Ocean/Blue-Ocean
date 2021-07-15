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
import 'bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router-dom'
const App = () => {
  const history = useHistory();
  const [date, setDate] = useState(dateUtils.today());
  const [loadObject, setLoadObject] = useState(null);
  const [loggedIn, setLoggedIn] = useState(undefined);

  //Workout and Meal Planner widgets need to call this function in componentWillUnmount!
  const resetDate = function() {
    setDate(dateUtils.today());
    setLoadObject(null);
  };
  return (
      <>
        <div>
          {loggedIn && <Navbar />}
        </div>
        <Switch>
          <Route exact path='/' >
            <Home setLoggedIn={setLoggedIn}/>
          </Route>
          <Route exact path='/calendar'>
            <React.Fragment>
              {window.screen.width <= 600 &&
                <MobileCalendar setDate={setDate} setLoadObject={setLoadObject} history={history}/>
              }
              {window.screen.width > 600 &&
                <Calendar setDate={setDate} setLoadObject={setLoadObject}/>
              }
            </React.Fragment>
          </Route>
          <Route path='/workout'>
              <Workout date={date} loadObject={loadObject} resetDate={resetDate}/>
          </Route>
          <Route path='/meals' >
            <Meals date={date} loadObject={loadObject} resetDate={resetDate}/>
          </Route>
          <Route path='/journal' component={Journal}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </>
  )


}

export default App