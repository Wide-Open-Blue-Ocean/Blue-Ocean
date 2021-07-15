import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Meals/Card.jsx';
import AddAMeal from '../Meals/AddAMeal.jsx';
import Food from '../Meals/Food.jsx';

function Meals (props) {
  const [meals, setMeals] = useState([])
  const [food, setFood] = useState([])
  const [mealParams, setMealParams] = useState({});

  useEffect(() => {
    axios.get('/meal', {params: {userId: 0, date: props.date}})
    .then(result => {
      console.log('***', result.data);
      setMeals(result.data)
    })
  }, [])

  const cardOnClick = (object) => {
    setMealParams(object);
    axios.get('/food', {params: {userId: object.userId, date: object.date, mealName: object.mealName}})
    .then(result => {
      setFood(result.data);
    })
  }

  return (
  <div className="workoutContainer">
    <div className="workout">
      <div className="cardSession">
        <div className="cards">
        {meals.map((meal, i) => {
          return (<Card cardOnClick={cardOnClick} key={i} meal={meal}/>)
        })}
        <AddAMeal />
        </div>
      </div>
      <div className="exercises">
        <Food food={food} mealParams={mealParams} />
      </div>
    </div>
  </div>
  )
}

export default Meals