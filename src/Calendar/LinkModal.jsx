import React from 'react';
export default function LinkModal(props) {

  var getCSS = () => {
    return {
      margin: '10% 5% 5% 5%',
      backgroundColor: '#ffffff',
      padding: '5%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '67%',
      width: '50%',
      border: '2px solid blue',
      borderRadius: 5
    };
  }
  return (
    <div id="calendarBackground">
      <div style={getCSS()}>

      </div>
    </div>
  );
}