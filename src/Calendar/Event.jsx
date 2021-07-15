import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//column is 640 px!
export default function Event(props) {

  const history = useHistory();
  const [mouseIn, hover] = useState(false);

  var computeCSS = function() {
    var startHour = parseInt(props.event.timeRange.slice(0, 2));
    var startMinute = parseInt(props.event.timeRange.slice(2, 4));
    var startPixel = (startHour + startMinute / 60 - 5) / 16 * 640;

    var endHour = parseInt(props.event.timeRange.slice(5,7));
    var endMinute = parseInt(props.event.timeRange.slice(7, 9));

    var height = ((endHour * 60 + endMinute) - (startHour * 60 + startMinute)) / 960 * 640;

    var color = props.event.type === 'meal' ? 'lightgreen' : 'pink';

    var output = {
      position: 'absolute',
      height: mouseIn ? Math.max(40, height) : height,
      top: startPixel,
      width: '100%',
      backgroundColor: color,
      zIndex: mouseIn ? 4 : 3,
      border: mouseIn ? 'solid 2px fuchsia' :'solid 1px black',
      fontSize: 'small',
      paddingLeft: 4,
      overflow: 'hidden',
      cursor: 'pointer'
    };
    if (mouseIn) {
      output.minWidth = 'fit-content';
    }
    return output;
  };

  var css = computeCSS();

  const eventClick = (e) => {
    e.stopPropagation();
    // alert('linking to ' + props.event.date + ' ' + props.event.type + ' ' + (props.event.mealName ? props.event.mealName : props.event.sessionName));
    props.setLoadObject(props.event);
    props.setDate(props.event.date);
    history.push(props.event.sessionName ? '/workout' : '/meals');
  };

  return (
    <div style={css} onClick={eventClick} onMouseEnter={() => {hover(true)}} onMouseLeave={() => {hover(false)}}>
      <p className="eventInnerText">
        {props.event.sessionName ? props.event.sessionName : props.event.mealName}
      </p>
    </div>
  );
}