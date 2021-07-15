import React from 'react'

const Form = (props) => {
    return (
        <div id="formContainer">
          <textarea className="inputForJournal" value={props.mealInputs} onChange={props.mealOnChange} placeholder="HOW WERE YOUR MEALS TODAY" />
          <textarea className="inputForJournal" value={props.workoutInputs} onChange={props.workoutOnChange} placeholder="HOW WERE YOUR WORKOUTS TODAY" />
          <button id="formButton" onClick={props.onSubmitEntry}>&nbsp;&nbsp;+&nbsp;&nbsp;</button>
       </div>
    )
}

export default Form