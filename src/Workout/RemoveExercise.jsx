import React from 'react';
import axios from 'axios';
import CancelIcon from '@material-ui/icons/Cancel';

const style = {
}

function RemoveExercise (props) {

  const handleDelete = () => {
    axios.delete('/workout', {data: {_id: props._id}})
    .then((result) => {
      props.getWorkouts();
      console.log('inside result');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <CancelIcon className="cancel" onClick={handleDelete}>delete</CancelIcon>
  )
}

export default RemoveExercise;