import React from 'react';
import axios from 'axios';

const style = {
}

function RemoveExercise (props) {

  const handleDelete = () => {
    axios.delete('/workout', {data: {_id: props._id}})
    .then((result) => {
      console.log('inside result');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <button onClick={handleDelete}>delete</button>
  )
}

export default RemoveExercise;