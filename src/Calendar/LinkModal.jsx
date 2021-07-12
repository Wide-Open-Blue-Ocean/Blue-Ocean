import React from 'react';
export default function LinkModal(props) {

  var getCSS = () => {
    return {
      position: 'fixed',
      top: props.modal.y - 100,
      left: props.modal.x,
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100px',
      width: '150px',
      border: '2px solid orangered',
      borderRadius: 5
    };
  }

  var clickBackground = function(e) {
    e.stopPropagation();
    props.closeModal();
  }

  var linkToWorkoutSessions = function(e) {
    e.stopPropagation();
    alert('workout ' + props.modal.date);
    //pass to workout sessions widget props.modal.date
    //may also pass in null for session clicked on
    //
  }

  var linkToMeals = function(e) {
    e.stopPropagation();
    alert('meal ' + props.modal.date);
    //pass to workout sessions widget props.modal.date
    //may also pass in null for session clicked on
    //
  }

  return (
    <div id="calendarBackground" onClick={clickBackground}>
      <div style={getCSS()}>
        <img id="calendarModalX" onClick={clickBackground} src={'https://w7.pngwing.com/pngs/642/303/png-transparent-button-computer-icons-scalable-graphics-red-x-close-button-miscellaneous-text-rectangle.png'}/>
        <p onClick={linkToWorkoutSessions} className="calendarModalLink">New Workout Session</p>
        <p onClick={linkToMeals} className="calendarModalLink">New Meal Plan</p>
      </div>
    </div>
  );
}