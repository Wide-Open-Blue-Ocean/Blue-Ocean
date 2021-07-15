import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import SignIn from '.././SignIn';
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import WorkoutCard from '../Home/WorkoutCard'
import MealsCard from '../Home/MealsCard'
import JournalCard from '../Home/JournalCard'
import ChatEngineComponent from '../ChatEngine'
function Home({setLoggedIn, setUserID}) {

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
      {/* <div className='chat-engine'>
          <ChatEngineComponent/>
      </div> */}
    </div>
    </div>
  <SignIn setLoggedIn={setLoggedIn} setUserID={setUserID}/>
 </>
  )
}

export default Home;