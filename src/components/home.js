import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import SignIn from '.././SignIn';
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import WorkoutCard from '../Home/WorkoutCard'
import MealsCard from '../Home/MealsCard'
import JournalCard from '../Home/JournalCard'

function Home() {
  const [journal, setJournal] = useState(false)

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
           </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    <SignIn/>
  </>
||||||| 4ce2e55
    </div>
  <SignIn/>
 </>
=======
    </div>
  <SignIn setLoggedIn={setLoggedIn}/>
 </>
>>>>>>> main
  )
}

export default Home;