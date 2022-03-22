import React from 'react'
import EntryList from './EntryList.jsx'
import Form from './Form.jsx'
import axios from 'axios'
import dateUtils from '../utils/dateUtils.js'

function Journal (props) {
  const [entries, setEntries] = React.useState([])
  const [mealInputs, setMealInputs] = React.useState('')
  const [workoutInputs, setWorkoutInputs] = React.useState('')

  const mealOnChange = (e) => {
    setMealInputs(e.target.value);
  }

  const workoutOnChange = (e) => {
    setWorkoutInputs(e.target.value);
  }

  const getEntries = () => {
    var today = dateUtils.today()
    var past = dateUtils.getFutureOrPast(today, -31)
    axios.get('/journal', {params: {userId: 0, startDate: past, endDate: today}})
    .then((result) => {
      setEntries(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  React.useEffect(() => {
    getEntries();
  }, [])

  const onSubmit = () => {
    axios.post('/journal', {userId: 0, mealEntry: mealInputs, workoutEntry: workoutInputs, date: dateUtils.today()})
    .then(() => {
      setMealInputs('');
      setWorkoutInputs('');
      getEntries();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="journalParent">
      <div className="journalContainer">
        <div style={{marginTop: '30px', marginLeft: '30px'}}>
          <Form onSubmitEntry={onSubmit} mealInputs={mealInputs} workoutInputs={workoutInputs} workoutOnChange={workoutOnChange} mealOnChange={mealOnChange}  />
        </div>
        <div style={{marginTop: '30px', marginLeft: '30px'}}>
          <EntryList getEntries={getEntries} entries={entries}/>
        </div>
      </div>
    </div>
  )
}

export default Journal
