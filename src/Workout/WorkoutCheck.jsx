import React from 'react';
import axios from 'axios';

function WorkoutCheck (props) {
  const handleCheck = (value) => {
    let putBody = {
      _id: props._id,
      checked: value
    }
    axios.put('/workout/checked', putBody)
    .then(() => {
      props.getWorkouts()
    })
  }

  if (props.checked === false) {
    return  (
      <button onClick={() => {handleCheck(true)}} style={{backgroundColor: 'red'}}>check</button>
    )
  } else {
    return (<button onClick={() => {handleCheck(false)}} style={{backgroundColor: 'green'}}>check</button>)
  }
}

export default WorkoutCheck;