import React, { useState } from 'react';
import axios from 'axios';
import customStyles from '../customStyles/customStyles.jsx';

function RemoveAMeal (props) {

  const handleDelete = () => {
    axios.delete('/meal', {data: {sessionName: props.mealName}})
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <button>delete</button>
  )
}

export default RemoveAMeal;