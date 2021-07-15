import React from 'react';
import RemoveSession from './RemoveSession.jsx'

const style = {
}

function Card (props) {
  return (
    <div className="session" onClick={() => {props.cardOnClick(props.session)}}>
      <div className="sessionContainer">
        <div className="sessionText" onClick={() => {props.cardOnClick(props.session)}}>
        <h2 style={{color: 'rgb(73, 73, 73)'}}>{(props.session.sessionName).toUpperCase()}</h2>
        </div>
        <RemoveSession getWorkSessions={props.getWorkSessions} sessionName={props.session.sessionName}/>
      </div>
    </div>
  )
}

export default Card;