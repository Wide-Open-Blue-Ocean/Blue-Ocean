import React from 'react';
import RemoveMeal from './RemoveMeal.jsx'

const style = {
}

function Card (props) {
  return (
    <div className="session">
      <div className="sessionContainer">
        <div className="sessionText">
        <h2 onClick={() => {props.cardOnClick(props.meal)}} style={{color: 'rgb(73, 73, 73)'}}>{(props.meal.mealName).toUpperCase()}</h2>
        </div>
        <RemoveMeal getMeals={props.getMeals} mealName={props.meal.mealName}/>
      </div>
    </div>
  )
}

export default Card;