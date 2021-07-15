import React, { createContext, useReducer, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LinkModal from '../Calendar/LinkModal.jsx';
import dateUtils from '../utils/dateUtils.js';

export const GlobalWorkoutContext = createContext();
export const GlobalMealContext = createContext();

export const GlobalProvider = ({children}) => {
  const [workouts, setWorkouts] = useState([])
  const [meals, setMeals] = useState([])

  useEffect(() => {
    loadSession();
    loadMeals()
    }, [])

  const loadSession = () => {
    axios.get('/workoutSession', {
      params: {
        email: 'tommmmmmriddle@gmail.com',
        date: dateUtils.today()
      }
    })
    .then((response) => {
      let todaysWorkouts = [];
      response.data.forEach((item) => {
        todaysWorkouts.push(item.sessionName)
      })
      setWorkouts(todaysWorkouts)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const loadMeals = () => {
    axios.get('/meal', {
      params: {
        email: 'tommmmmmriddle@gmail.com',
        date: dateUtils.today()
      }
    })
      .then((response) => {
        let todaysMeals = []
        response.data.forEach((item) => {
          todaysMeals.push(item.mealName)
        })
        setMeals(todaysMeals)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <GlobalWorkoutContext.Provider value={workouts}>
    <GlobalMealContext.Provider value={meals}>
      {children}
    </GlobalMealContext.Provider>
    </GlobalWorkoutContext.Provider>
  )
}

