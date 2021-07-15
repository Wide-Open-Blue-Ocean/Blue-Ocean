import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import SignIn from '.././SignIn';
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import WorkoutCard from '../Home/WorkoutCard'
import MealsCard from '../Home/MealsCard'
import JournalCard from '../Home/JournalCard'

function Home({setLoggedIn}) {

  const [workout, setWorkout] = useState([])
  const [meals, setMeals] = useState([])
  const [journal, setJournal] = useState(false)
  const [tiles, setTiles] = useState([`Today's Workout`, `Today's Meals`, `Journal`])

  // useEffect(() => {
  //   setSessions([{ sessionName: 'trainer x hit work out' }, { sessionName: 'yoga' }, { sessionName: 'weights' }])
  //   // axios.get('/workoutSession', {params: {userId : 0, date: 20210712}})
  //   //   .then((result) => {
  //   //     console.log('****', result.data);
  //   //   })
  // }, [])


  return (
 <>
    <div>
      <div className="homeContainer">
      <div className="home">
        <div className="cardHome">
          <div className="cards">
      <WorkoutCard />
      <MealsCard />
      <JournalCard journaled={false} />
          {/* {tiles.map((tile, i) => {
            return (
              <HomeCard key={i} title={tile} cardOnClick={cardOnClick}/>)
          })} */}
          </div>
        </div>
        <div className="excercises">
        </div>
      </div>
    </div>
    </div>
  <SignIn setLoggedIn={setLoggedIn}/>
 </>
  )
}

export default Home;