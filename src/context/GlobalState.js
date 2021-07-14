import React, { createContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [state, setState] = useState([ {dates: {
    20210711: []
  }}])


  useEffect(() => {
    loadSessions();
    loadMeals();
    loadDates();
    console.log('Global: ', state)
  }, [])



  const loadSessions = () => {
    axios.get('/workoutSession', {
      params: {
        userId: 0,
        startDate: Object.keys(state.dates)[0],
        endDate: Object.keys(state.dates)[6]
      }
    })
      .then((response) => {
        console.log(response.data);
        var dates = JSON.parse(JSON.stringify(state.dates));
        for (var i = 0; i < response.data.length; i++) {
          var session = response.data[i];
          session.type = 'session';
          if (dates[session.date]) {
            dates[session.date].push(session);
          }
        }
        setState({
          dates: dates
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const loadMeals = () => {
    axios.get('/meal', {
      params: {
        userId: 0,
        startDate: Object.keys(state.dates)[0],
        endDate: Object.keys(state.dates)[6]
      }
    })
      .then((response) => {
        var dates = JSON.parse(JSON.stringify(state.dates));
        for (var i = 0; i < response.data.length; i++) {
          var session = response.data[i];
          session.type = 'meal';
          if (dates[session.date]) {
            dates[session.date].push(session);
          }
        }
        setState({
          dates: dates
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const loadDates = (callback = ()=>{}) => {
    var dayofweek = new Date().getDay();
    var currentTime = new Date(Date.now());
    currentTime.setHours(12); //prevents any errors that could be caused by DST
    var sunday = new Date(currentTime.valueOf() - (24 * 3600 * 1000 * dayofweek));
    sunday = sunday.getFullYear() + (sunday.getMonth() + 1).toString().padStart(2, '0') + sunday.getDate().toString().padStart(2, '0');
    var newDateObject = {};
    newDateObject[sunday] = [];
    for (var i = 1; i <= 6; i++) {
      var nextDate = dateUtils.getFutureOrPast(sunday, i);
      newDateObject[nextDate] = [];
    }
    setState({
      dates: newDateObject,
    }, callback);
    console.log('global:', state)
    console.log('globalState:', state.dates);
  }

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  )

}