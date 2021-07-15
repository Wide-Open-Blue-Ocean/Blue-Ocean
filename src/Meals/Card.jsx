import React from 'react';

function Card (props) {
  return (
    <div className="session">
      <div className="sessionContainer">
        <div className="sessionText" onClick={() => {props.cardOnClick(props.meal)}}>
        <h2 style={{color: 'rgb(73, 73, 73)'}}>{(props.meal.mealName).toUpperCase()}</h2>
        </div>
        {/* <RemoveSession getWorkSessions={props.getWorkSessions} sessionName={props.session.sessionName}/> */}
      </div>
    </div>
  )
}

export default Card;