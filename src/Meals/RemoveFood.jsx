import React from 'react';
import axios from 'axios';

const style = {
}

function RemoveFood (props) {

  const handleDelete = () => {
    axios.delete('/food', {data: {_id: props._id}})
    .then((result) => {
      props.getFood();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <button onClick={handleDelete}>delete</button>
  )
}

export default RemoveFood;