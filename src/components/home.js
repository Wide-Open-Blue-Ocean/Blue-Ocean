import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import SignIn from '.././SignIn';
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import WorkoutCard from '../Home/WorkoutCard'
import MealsCard from '../Home/MealsCard'
import JournalCard from '../Home/JournalCard'
import { GlobalProvider, GlobalWorkoutContext, GlobalMealContext } from '../context/GlobalState'

function Home() {

  const [workout, setWorkout] = useState([])
  const [meals, setMeals] = useState([])
  const [journal, setJournal] = useState(false)
  const [tiles, setTiles] = useState([`Today's Workout`, `Today's Meals`, `Journal`])

  const wContext = useContext(GlobalWorkoutContext);
  const mContext = useContext(GlobalMealContext);

  return (
 <>
   <div>
     <div className="homeContainer">
       <div className="home">
         <div className="cardHome">
           <div className="cards">
             <GlobalProvider>
               <WorkoutCard sessions={wContext}/>
               <MealsCard meals={mContext}/>
               <JournalCard journaled={false} />
             </GlobalProvider>
          </div>
         </div>
       </div>
     </div>
   </div>
  <SignIn/>
 </>
  )
}

export default Home;