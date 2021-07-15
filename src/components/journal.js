import React from 'react'
import EntryList from '../Journal/EntryList.jsx'

function Journal (props) {
  const [entries, setEntries] = React.useState([])

  React.useEffect(() => {
    setEntries([{}])
  }, [])

  return (
    <div className="journalContainer">
      <div className="formContainer">
        <div className="inputContainer">
          <input className="mealsEntry" placeholder="HOW WERE YOUR MEALS TODAY"></input>
          <input className="workoutsEntry" placeholder="HOW WERE YOUR WORKOUTS TODAY"></input>
        </div>
        <EntryList/>
      </div>
    </div>
  )
}

export default Journal
