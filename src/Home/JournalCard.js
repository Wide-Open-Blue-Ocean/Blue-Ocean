import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

function JournalCard (props) {

  const [journal, setJournal] = useState(false)
  const history = useHistory()

  const handleClick = () => {
    history.push('/journal')
  }

  return (
    <div className="journalSession" onClick={() => {handleClick()}}>
      <div className="homeSessionText">
          {`TODAY'S JOURNAL`}
        <div className="journalDisplay">
          {journal? 'YOU COMPLETED YOUR DAILY JOURNAL' : 'YOU HAVE NOT JOURNALED TODAY'}
        </div>
      </div>
    </div>
  )
}

export default JournalCard;