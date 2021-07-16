import React, { Component, useState } from 'react'
import dateUtils from './utils/dateUtils.js';
import Button from '@material-ui/core/Button'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Calendar from './Calendar/calendar.jsx'
import MobileCalendar from './MobileCalendar/MobileCalendar.jsx'
import Workout from './components/workout'
import Meals from './components/meals'
import Journal from './Journal/journal.js'
import Navbar from './components/Navbar/navbar'
import SignIn from './SignIn'
import ChatEngineComponent from './ChatEngine'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  const history = useHistory();
  const [date, setDate] = useState(dateUtils.today());
  const [loadObject, setLoadObject] = useState(null);
  // tracks email
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [userID, setUserID] = useState(undefined);
  const [chatOpen, setChatOpen] = useState(false);

  //Workout and Meal Planner widgets need to call this function in componentWillUnmount!
  const resetDate = function() {
    setDate(dateUtils.today());
    setLoadObject(null);
  };
  return (
    <>
    <div className='open-chat' onClick={() => setChatOpen(!chatOpen)}>
      <p className={chatOpen ? "closeButtonText" : "openButtonText"}>{chatOpen ? 'Close' : 'Chat'}</p>
    </div>
      <div>
        {loggedIn && (
          <div>
          <GlobalProvider>
          <Navbar setLoggedIn={setLoggedIn}/>
            {chatOpen &&
              <div id="chatEngineContainer" onClick={() => {setChatOpen(false)}}>
                <div className='chatEngine-wrap' onClick={(e) => {e.stopPropagation()}}>
                  <ChatEngineComponent username={loggedIn} usersecret={userID}/>
                </div>
              </div>
            }
          </GlobalProvider>
          </div>
        )}
      </div>
      <Switch>
        {/* <div> */}
        {/* <Route exact path='/signin' component={SignIn}/> */}
        <Route exact path='/signin' >
        <GlobalProvider>
          <SignIn/>
        </GlobalProvider>
        </Route>
        <Route exact path='/' >
        <GlobalProvider>
          <Home setLoggedIn={setLoggedIn} setUserID={setUserID}/>
        </GlobalProvider>
        </Route>
        <Route exact path='/calendar'>
          <React.Fragment>
        <GlobalProvider>
            {window.screen.width <= 600 &&
              <MobileCalendar setDate={setDate} setLoadObject={setLoadObject} history={history}/>
            }
            {window.screen.width > 600 &&
              <Calendar setDate={setDate} setLoadObject={setLoadObject}/>
            }
        </GlobalProvider>
          </React.Fragment>
        </Route>
        <Route path='/workout'>
        <GlobalProvider>
            <Workout date={date} loadObject={loadObject} resetDate={resetDate}/>
        </GlobalProvider>
        </Route>
        <Route path='/meals' >
        <GlobalProvider>
          <Meals date={date} loadObject={loadObject} resetDate={resetDate}/>
        </GlobalProvider>
        </Route>
        <Route path='/journal' component={Journal}/>
        <Route exact path='/' component={Home}/>
      {/* </div> */}
      </Switch>
    </>
  )
}

export default App