import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Card from '../Home/WorkoutCard'
import WorkoutTile from '../Home/WorkoutTile'

function WorkoutCard (props) {
  return (
    <div className="workoutCard">
      <div className="workoutSession">
        <div className="homeSessionText" >
        {`TODAY'S WORKOUTS`}
        </div>
          <div className="workoutDisplay">
          <WorkoutTile />
         </div>
      </div>
    </div>
  )
}

export default WorkoutCard;