import React from 'react';
import axios from 'axios';
import CancelIcon from '@material-ui/icons/Cancel';

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
    <CancelIcon className="cancel" onClick={handleDelete}>delete</CancelIcon>
  )
}

export default RemoveFood;