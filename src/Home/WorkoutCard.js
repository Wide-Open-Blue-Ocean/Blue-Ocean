import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Card from '../Home/WorkoutCard'
import WorkoutTile from '../Home/WorkoutTile'
import ImgMediaCard from '../components/card.js'


function WorkoutCard (props) {
  return (
    <div className="workoutCard">
      {/* <ImgMediaCard/> */}
      {/* <div className="workoutSession"> */}
        <div className="homeSessionText" >
        {`TODAY'S WORKOUTS`}
        </div>
        {/* <div className="workoutTileContainer"> */}
          <div className="workoutDisplay">
          <WorkoutTile />
         </div>
          {/* <div className="workoutDisplay">
          <WorkoutTile />
         </div> */}
         {/* </div> */}
      </div>
    // </div>
  )
}

export default WorkoutCard;