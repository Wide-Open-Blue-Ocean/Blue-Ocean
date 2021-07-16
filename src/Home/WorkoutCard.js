import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Card from '../Home/WorkoutCard'
import WorkoutTile from '../Home/WorkoutTile'
import ImgMediaCard from '../components/card.js'

function WorkoutCard (props) {
  return (
    <div className="workoutCard">
        <div className="workoutText" >
        {`TODAY'S WORKOUTS`}
        </div>
          <div className="workoutDisplay">
          <WorkoutTile />
         </div>
      </div>
  )
}

export default WorkoutCard;