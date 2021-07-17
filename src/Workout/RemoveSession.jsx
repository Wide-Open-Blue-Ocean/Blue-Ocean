import React from 'react';
import axios from 'axios';

const style = {
}

function RemoveSession (props) {

  const handleDelete = () => {
    axios.delete('/workoutSession', {data: {sessionName: props.sessionName}})
    .then((result) => {
      props.getWorkSessions();
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