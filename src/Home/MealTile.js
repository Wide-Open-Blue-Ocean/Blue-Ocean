import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { GlobalContext, GlobalMealContext } from '../context/GlobalState'


function MealTile (props) {

  const history = useHistory();
  const meals = useContext(GlobalMealContext)

  const mealTileClick = () => {
   console.log('mealTileclick');
   history.push('/meals')
 }

  const todaysMeals = meals.map((item, index) => {
    return (
    <div
      key={index}
      className="mealTile"
      onClick={() => mealTileClick()}
    >
      {item}
    </div>
  )})

  return (
    <>
      {todaysMeals}
    </>
  )
}

export default MealTile;