import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import firebase from 'firebase'

const SignInDB = ({loggedIn, setLoggedInDB, setLoggedIn}) => {

  let [userType, setUserType] = useState(null)
  let [submitIsDisabled, setSubmitIsDisabled] = useState(true)
  let [palEmail, setPalEmail] = useState('')

  const handleOnChangeRadio = (e) => {
    setUserType(e.target.value)
    setSubmitIsDisabled(false)
  }

  const onChangePalEmail = (e) => {
    setPalEmail(e.target.value)
  }

  const cancelHandler = (e) => {
    setLoggedIn(false)
    setLoggedInDB('loading')
    firebase.auth().signOut()
  }
  const onSubmitHandler = (e) => {
    e.preventDefault()
    let isTrainer = userType === 'trainer' ? true : false
    let data = {
        email: loggedIn,
        palEmail: palEmail,
        isTrainer: isTrainer
      }
    axios.post('/user', data)
    .then(() => {
      setLoggedInDB(true)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  return (
    <div>
      Using Workout Pal as:
      <form onSubmit={onSubmitHandler}>
        <label>
          Regular User
          <input type="radio" name="user-type" id="regular-user" value="regular-user" onChange={handleOnChangeRadio}></input>
        </label>
        <label>
          Trainer
          <input type="radio" name="user-type" vid="trainer" value="trainer" onChange={handleOnChangeRadio}></input>
        </label>
        <label>
          Workout Pal Email (optional)
          <input type="text" onChange={onChangePalEmail} value={palEmail}></input>
        </label>
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <input type="submit" disabled={submitIsDisabled}></input>
      </form>
    </div>
  )
}

export default SignInDB;