import React from 'react';
import axios from 'axios';

function FoodCheck (props) {
  const handleCheck = (value) => {
    let putBody = {
      _id: props._id,
      checked: value
    }
    axios.put('/food/checked', putBody)
    .then(() => {
      props.getFood()
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

export default FoodCheck;