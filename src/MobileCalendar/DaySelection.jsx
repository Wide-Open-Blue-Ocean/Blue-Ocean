import React from 'react';
export default function DaySelection(props) {
  return (
    <p className={props.selected ? "mobileDaySelection mobileDaySelectionSelected": "mobileDaySelection"} onClick={() => {props.selectDay(props.date)}}>{props.date.slice(6, 8)}</p>
  );
}