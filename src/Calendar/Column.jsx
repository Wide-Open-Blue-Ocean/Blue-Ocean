import React from 'react';
import Event from './Event.jsx';
export default function Column(props) {

  const _click = (e) => {
    e.date = props.date; //utilizing click event propogation
  };

  return (
    <div className="calendarColumn" onClick={_click}>
      {props.events.map(event =>
        <Event key={(event.sessionName ? event.sessionName : event.mealName) + event.date} event={event} setDate={props.setDate} setLoadObject={props.setLoadObject}/>
      )}
    </div>
  );
}