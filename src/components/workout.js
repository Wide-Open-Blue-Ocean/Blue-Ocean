import React from 'react';
import axios from 'axios';
import Card from '../Workout/Card.jsx';
import AddASession from '../Workout/AddASession.jsx';

function Workout (props) {
  const [sessions, setSessions] = React.useState([]);
  React.useEffect(() => {
    axios.get('/workoutSession?userId=0&date=20210712')
      .then((result) => {
        console.log('****', result.data);
        setSessions(result.data);
      })
  }, []);

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession">
          {sessions.map((session, i) => {
            return (<Card key={i} session={session}/>);
          })}
          <AddASession />
        </div>
        <div className="excercises"></div>
      </div>
    </div>
  )
}

export default Workout
