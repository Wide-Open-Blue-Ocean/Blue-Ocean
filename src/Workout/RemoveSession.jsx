import React from 'react';
import axios from 'axios';

const style = {
}

function RemoveSession (props) {

  const handleDelete = () => {
    console.log(props.sessionName);
    axios.delete('/workoutSession', {data: {sessionName: props.sessionName}})
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

export default RemoveSession;