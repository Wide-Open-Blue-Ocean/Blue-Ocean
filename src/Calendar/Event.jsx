import React from 'react';

//column is 640 px!
export default function Event(props) {

  var computeCSS = function() {
    var startHour = parseInt(props.event.timeRange.slice(0, 2));
    var startMinute = parseInt(props.event.timeRange.slice(2, 4));
    var startPixel = (startHour + startMinute / 60 - 5) / 16 * 640;

    var endHour = parseInt(props.event.timeRange.slice(5,7));
    var endMinute = parseInt(props.event.timeRange.slice(7, 9));

    var height = ((endHour * 60 + endMinute) - (startHour * 60 + startMinute)) / 960 * 640;

    var color = props.event.type === 'meal' ? 'green' : 'red';

    return {
      position: 'absolute',
      height: height,
      top: startPixel,
      width: 150,
      backgroundColor: color,
      zIndex: 3,
      borderRadius: 8,
      border: 'solid 2px black',
      fontSize: 'small',
      paddingLeft: 4,
      overflow: 'hidden',
      cursor: 'pointer'
    };
  };

  var css = computeCSS();

  const eventClick = (e) => {
    e.stopPropagation();
    console.log(props.event.date + ' ' + props.event.type);
  };

  return (
    <div style={css} onClick={eventClick}>
      {props.event.sessionName}
    </div>
  );
}