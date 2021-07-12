import React from 'react';
import Event from './Event.jsx';
export default function Column(props) {

  const _click = (e) => {
    e.date = props.date;
  };

  return (
    <div className="calendarColumn" onClick={_click}>
      {props.events.map(event =>
        <Event key={event.sessionName} event={event}/>
      )}
    </div>
  );
}