import React from 'react';

function Card (props) {
  return (
    <div className="session" onClick={props.cardOnClick}>
      <div className="sessionText">
        {(props.session.sessionName).toUpperCase()}
      </div>
    </div>
  )
}

export default Card;