import React from 'react';
import axios from 'axios';
import Card from '../Workout/Card.jsx';
import AddASession from '../Workout/AddASession.jsx';
import Exercises from '../Workout/Exercises.jsx';

function Workout (props) {
  const [sessions, setSessions] = React.useState([]);
  const [excercises, setExcercises] = React.useState([]);

  React.useEffect(() => {
    axios.get('/workoutSession?userId=0&date=20210712')
      .then((result) => {
        console.log('****', result.data);
        setSessions(result.data);
      })
  }, []);

  const cardOnClick = () => {
    console.log('clicked');
    axios.get('/workoutSession?userId=0&date=20210712')
      .then((result) => {
        console.log('*****', result);
        setExcercises(result.data);
      })
  }

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession">
          <div className="cards">
          {sessions.map((session, i) => {
            return (<Card key={i} session={session} cardOnClick={cardOnClick}/>);
          })}
          <AddASession />
          </div>
        </div>
        <Exercises />
      </div>
    </div>
  )
}

export default Workout
