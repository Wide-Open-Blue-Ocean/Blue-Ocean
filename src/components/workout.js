import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import AddASession from '../Workout/AddASession.jsx'
import Exercise from '../Workout/Exercise.jsx'
import RemoveSession from '../Workout/RemoveSession.jsx'

function Workout (props) {
  const [sessions, setSessions] = useState([])
  const [exercises, setExercises] = useState([])
  const [sessionParams, setSessionParams] = useState({userId: 0,  date: 20210712, sessionName: 'TRAINER X\'S WEIGHT TRAINING'});
  // const [workoutParams, setWorkoutParams] = useState({userId: 0,  date: 20210712, sessionName: 'TRAINER X\'S WEIGHT TRAINING'})

  useEffect(() => {
    axios.get('/workoutSession', {params: {userId: sessionParams.userId, date: sessionParams.date}})
    .then(result => {
      setSessions(result.data)
    })
    // setSessions([{ sessionName: 'trainer x hit work out' }, { sessionName: 'yoga' }, { sessionName: 'weights' }])
  }, [])

  const cardOnClick = (sessionObject) => {
    setSessionParams(sessionObject);
    axios.get('/workout', {params: {userId: sessionObject.userId, date: sessionObject.date, sessionName: sessionObject.sessionName}})
    .then(result => {
      console.log('THIS IS CARD RESULT', result.data);
      setExercises(result.data);
    })
  }

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession">
          <div className="cards">
          {sessions.map((session, i) => {
            return (<Card exercises={exercises} key={i} session={session} cardOnClick={cardOnClick}/>)
          })}
          <AddASession sessionParams={sessionParams} />
          </div>
        </div>
        <div className="exercises">
          <Exercise exercises={exercises} sessionParams={sessionParams}/>
        </div>
      </div>
    </div>
  )
}

export default Workout