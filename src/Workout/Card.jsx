import React from 'react';

function Card (props) {
  return (
    <div className="session">
      {props.session.sessionName}
    </div>
  )
}

export default Card;