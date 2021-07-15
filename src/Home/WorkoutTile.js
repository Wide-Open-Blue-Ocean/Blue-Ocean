import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { GlobalContext, GlobalWorkoutContext } from '../context/GlobalState'


function WorkoutTile (props) {

  const history = useHistory();
  const workouts = useContext(GlobalWorkoutContext)

  const workoutTileClick = () => {
    history.push('/workout')
  }

  const todaysWorkouts = workouts.map((item, index) => {
    return (
    <div
      key={index}
      className="workoutTile"
      onClick={() => workoutTileClick()}
    >
      {item}
    </div>
  )})

  return (
    <>
      {todaysWorkouts.slice(0, 2)}
    </>
  )
}

export default WorkoutTile;