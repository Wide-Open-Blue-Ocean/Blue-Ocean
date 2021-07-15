import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Meals/Card.jsx'
import AddAMeal from '../Meals/AddAMeal.jsx'
import Food from '../Meals/Food.jsx'
import RemoveMeal from '../Meals/RemoveMeal.jsx'

function Meals (props) {
  const [meals, setMeals] = useState([])
  const [food, setFood] = useState([])
  const [mealParams, setMealParams] = useState({userId: 0,  date: props.date, mealName: 'Breakfast'});

  const getMeals = (() => {
    axios.get('/meal', {params: {userId: mealParams.userId, date: mealParams.date}})
    .then(result => {
      setMeals(result.data)
    })
  })

  useEffect(() => {
    axios.get('/meal', {params: {userId: mealParams.userId, date: mealParams.date}})
    .then(result => {
      setMeals(result.data)
    })
  }, [])

  const getFood = (() => {
    axios.get('/food', {params: {userId: mealParams.userId, date: mealParams.date, mealName: mealParams.mealName}})
    .then(result => {
      setFood(result.data);
    })
  })

  const cardOnClick = (mealObject) => {
    setMealParams(mealObject);
    axios.get('/food', {params: {userId: mealObject.userId, date: mealObject.date, mealName: mealObject.mealName}})
    .then(result => {
      setFood(result.data);
    })
  }

  const uglyDateString = props.date;
  const dateObj = new Date(uglyDateString.slice(0,4), parseInt(uglyDateString.slice(4, 6)) - 1, uglyDateString.slice(6, 8));
  const finalDate = dateObj.toDateString();

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession" style={{ fontSize:'30px' }}>{finalDate}
          <div className="cards">
          {meals.map((meal, i) => {
            return (<Card getMeals={getMeals} food={food} key={i} meal={meal} cardOnClick={cardOnClick}/>)
          })}
          <AddAMeal getMeals={getMeals} mealParams={mealParams} />
          </div>
        </div>
        <div className="exercises">
          <Food getFood={getFood} food={food} mealParams={mealParams}/>
        </div>
      </div>
    </div>
  )
}

export default Meals