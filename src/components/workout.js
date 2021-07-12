import React from 'react'
import axios from 'axios'

function Workout (props) {
  React.useEffect(() => {
    axios.get('/workoutSession?userId=0&date=20210712')
      .then((result) => {
        console.log('***', result.data)
      })
  })
  return (
    <div>
      <div className="cardSession"></div>
      <div className="excercises"></div>
    </div>

  )
}

export default Workout
