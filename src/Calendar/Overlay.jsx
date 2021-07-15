import React from 'react';
export default function Overlay(props) {

  var getDivCSS = function(hour) {
    var startPoint = (hour - 1 - 5) / 16 * 640;
    return {
      position: 'relative',
      height: 40,
      border: 'solid 1px #DDDDDD',
      borderLeft: 'none',
      // paddingLeft: 10,
      // fontSize: 'small',
    };
  };

  var divs = [];

  for (var i = 6; i <= 21; i++) {
    divs.push(<div key={i - 1} style={getDivCSS(i)}>
      {(i - 1 > 12 ? i - 1 - 12 : i - 1) + ':00'}
      </div>)
  }

  return (
    <div id="overlay">
      {divs}
    </div>
  );
}