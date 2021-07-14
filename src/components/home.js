import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import SignIn from '.././SignIn';
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import WorkoutCard from '../Home/WorkoutCard'
import MealsCard from '../Home/MealsCard'
import JournalCard from '../Home/JournalCard'
import {GlobalProvider} from '../context/GlobalState'
// import GlobalContext from '../context/GlobalState'

function Home() {

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

  // const gContext = useContext(GlobalContext);

  // console.log('gContext: ', gContext)

  return (
 <>

    <div>
      <div className="homeContainer">
      <div className="home">
        <div className="cardHome">
          <div className="cards">
            {/* <GlobalContext.Provider value={state}> */}
            <GlobalProvider>
      <WorkoutCard />
      </GlobalProvider>
      <MealsCard />
      <JournalCard journaled={false} />
      {/* </GlobalContext.Provider> */}
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
  <SignIn/>
 </>
  )
}

export default Home;