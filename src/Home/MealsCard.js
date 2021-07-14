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
    <div className="mealSession" >
      <div className="homeSessionText">
        {`TODAY'S MEALS`}
      </div>
      <div className="workoutDisplay">
        <MealTile />
      </div>
    </div>
  )
}

export default MealsCard;