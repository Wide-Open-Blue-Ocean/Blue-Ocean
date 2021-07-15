import React from 'react';
import RemoveSession from './RemoveSession.jsx'

const style = {
}

function Card (props) {
  return (
    <div className="session">
      <div className="sessionContainer">
        <div className="sessionText">
        <h2 onClick={() => {props.cardOnClick(props.session)}} style={{color: 'rgb(73, 73, 73)'}}>{(props.session.sessionName).toUpperCase()}</h2>
        </div>
        <RemoveSession getWorkSessions={props.getWorkSessions} sessionName={props.session.sessionName}/>
      </div>
    </div>
  )
}

export default Card;