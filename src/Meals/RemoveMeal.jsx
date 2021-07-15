import React from 'react';
import axios from 'axios';

const style = {
}

function RemoveMeal (props) {

  const handleDelete = () => {
    axios.delete('/Meal', {data: {mealName: props.mealName}})
    .then((result) => {
      props.getMeals();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <button onClick={handleDelete}>delete</button>
  )
}

export default RemoveMeal;