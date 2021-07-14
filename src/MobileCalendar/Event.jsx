import React from 'react';
import { useHistory } from 'react-router-dom';
export default function Event(props) {

  const history = useHistory();
  var click = function(e) {
    props.setDate(props.event.date);
    props.setLoadObject(props.event);
    history.push(props.event.sessionName ? '/workout' : '/meals');
  };

  var prettyTime = function() {
    var ugly = props.event.timeRange;
    var startH = parseInt(ugly.slice(0, 2));
    var startM = ':' + ugly.slice(2, 4);
    var start = startH > 12 ? (startH - 12) + startM + 'PM' : startH + startM + 'AM';
    var endH = parseInt(ugly.slice(5, 7));
    var endM = ':' + ugly.slice(7, 9);
    var end = endH > 12 ? (endH - 12) + endM + 'PM' : endH + endM + 'AM';
    return start + ' - ' + end + ' ';
  }

  return (
    <div className={'mobileCalendarEventBox ' + (props.event.sessionName ? 'mobileCalendarSessionBox' : 'mobileCalendarMealBox') } id={props.event.timeRange} onClick={click}>
      <p className="mobileEventDescription">{prettyTime() + (props.event.sessionName ? props.event.sessionName : props.event.mealName)}</p>
    </div>
  );
}