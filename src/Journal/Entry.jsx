import React from 'react'

const Entry = (props) => {
    return (
        <div>
          <textarea value={props.mealInputs} onChange={props.mealOnChange} className="mealsEntry" placeholder="HOW WERE YOUR MEALS TODAY" />
          <textarea value={props.workoutInputs} onChange={props.workoutOnChange} className="workoutsEntry" placeholder="HOW WERE YOUR WORKOUTS TODAY" />
          <button onClick={props.onSubmitEntry}>+</button>
       </div>
    )
}

export default Entry