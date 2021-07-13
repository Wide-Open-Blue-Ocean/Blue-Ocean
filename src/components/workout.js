import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import AddASession from '../Workout/AddASession.jsx'
import Exercise from '../Workout/Exercise.jsx'

function Workout (props) {
  const [sessions, setSessions] = useState([])
  const [excercises, setExcercises] = useState(
    [{ excercise: 'lift', description: 'lift 100 weights and such' },
    { excercise: 'pushup', description: '20 push ups' },
    { excercise: 'curl', description: '40 curls' }])

  useEffect(() => {
    setSessions([{ sessionName: 'trainer x hit work out' }, { sessionName: 'yoga' }, { sessionName: 'weights' }])
    // axios.get('/workoutSession', {params: {userId : 0, date: 20210712}})
    //   .then((result) => {
    //     console.log('****', result.data);
    //   })
  }, [])

  const cardOnClick = () => {
    setExcercises(
      [{ excercise: 'new1', description: 'lift 100 weights and such' },
        { excercise: 'new2', description: '20 push ups' },
        { excercise: 'nre4', description: '40 curls' }])
  }

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession">
          <div className="cards">
          {sessions.map((session, i) => {
            return (<Card key={i} session={session} cardOnClick={cardOnClick}/>)
          })}
          <AddASession />
          </div>
        </div>
        <div className="excercises">
          <Exercise excercises={excercises} />
        </div>
      </div>
    </div>
  )
}

export default Workout
