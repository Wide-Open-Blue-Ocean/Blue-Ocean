import React from 'react';
import RemoveMeal from './RemoveMeal.jsx'

const style = {
}

function Card (props) {
  return (
    <div className="session" onClick={() => {props.cardOnClick(props.meal)}}>
      <div className="sessionContainer">
        <div className="sessionText">
        <h2 style={{color: 'rgb(73, 73, 73)'}}>{(props.meal.mealName).toUpperCase()}</h2>
        </div>
        <RemoveMeal getMeals={props.getMeals} mealName={props.meal.mealName}/>
      </div>
    </div>
  )
}

export default Card;