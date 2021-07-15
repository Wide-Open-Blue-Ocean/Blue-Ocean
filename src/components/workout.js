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

  const getWorkSessions = (() => {
    axios.get('/workoutSession', {params: {userId: sessionParams.userId, date: sessionParams.date}})
    .then(result => {
      setSessions(result.data)
    })
  })

  useEffect(() => {
    axios.get('/workoutSession', {params: {userId: sessionParams.userId, date: props.date}})
    .then(result => {
      setSessions(result.data)
    })
  }, [])

  const getWorkouts = (() => {
    axios.get('/workout', {params: {userId: sessionParams.userId, date: sessionParams.date, sessionName: sessionParams.sessionName}})
    .then(result => {
      setExercises(result.data);
    })
  })

  const cardOnClick = (sessionObject) => {
    setSessionParams(sessionObject);
    axios.get('/workout', {params: {userId: sessionObject.userId, date: sessionObject.date, sessionName: sessionObject.sessionName}})
    .then(result => {
      setExercises(result.data);
    })
  }

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession">
          <div className="cards">
          {sessions.map((session, i) => {
            return (<Card getWorkSessions={getWorkSessions} exercises={exercises} key={i} session={session} cardOnClick={cardOnClick}/>)
          })}
          <AddASession getWorkSessions={getWorkSessions} sessionParams={sessionParams} />
          </div>
        </div>
        <div className="exercises">
          <Exercise getWorkouts={getWorkouts} exercises={exercises} sessionParams={sessionParams}/>
        </div>
      </div>
    </div>
  )
}

export default Workout