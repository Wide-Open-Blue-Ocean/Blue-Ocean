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
<<<<<<< HEAD:src/components/journal.js
    axios.get('/journal', {params: {email: 'tommmmmmriddle@gmail.com', date: dateUtils.today()}})
=======
    var today = dateUtils.today()
    var past = dateUtils.getFutureOrPast(today, -31)
    axios.get('/journal', {params: {userId: 0, startDate: past, endDate: today}})
>>>>>>> main:src/Journal/journal.js
    .then((result) => {
      console.log(result.data)
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
<<<<<<< HEAD:src/components/journal.js
    axios.post('/journal', {email: 'tommmmmmriddle@gmail.com', mealEntry: mealInputs, workoutEntry: workoutInputs, date: dateUtils.today()})
=======
    var today = dateUtils.today()
    axios.post('/journal', {userId: 0, mealEntry: mealInputs, workoutEntry: workoutInputs, date: today})
>>>>>>> main:src/Journal/journal.js
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
        <>
          <Form onSubmitEntry={onSubmit} mealInputs={mealInputs} workoutInputs={workoutInputs} workoutOnChange={workoutOnChange} mealOnChange={mealOnChange}  />
          <EntryList getEntries={getEntries} entries={entries}/>
        </>
      </div>
    </div>
  )
}

export default Journal
