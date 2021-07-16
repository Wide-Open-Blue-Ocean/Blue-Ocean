import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Card from '../Home/WorkoutCard'
import MealTile from './MealTile'

function MealsCard (props) {

  const history = useHistory();

   const mealTileClick = () => {
    console.log('mealTileclick');
    history.push('/meals')
  }

  return (
    <div className="mealCard">
      {/* <div className="mealSession" > */}
        <div className="homeSessionText">
          {`TODAY'S MEALS`}
        </div>
        {/* <div className="mealTileContainer"> */}
        <div className="mealDisplay">
          <MealTile />
        </div>
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default MealsCard;

// <div className="workoutCard">
//       {/* <ImgMediaCard/> */}
//       {/* <div className="workoutSession"> */}
//         <div className="homeSessionText" >
//         {`TODAY'S WORKOUTS`}
//         </div>
//         {/* <div className="workoutTileContainer"> */}
//           <div className="workoutDisplay">
//           <WorkoutTile />
//          </div>
//           {/* <div className="workoutDisplay">
//           <WorkoutTile />
//          </div> */}
//          {/* </div> */}
//       </div>
//     // </div>