import React from 'react';

const style = {
}

function Card (props) {
  return (
    <div className="session" onClick={props.cardOnClick}>
      <div className="sessionContainer">
        <div className="sessionText">
        <h2 style={{color: 'rgb(73, 73, 73)'}}>{(props.session.sessionName).toUpperCase()}</h2>
        </div>
        <div className="excerciseDisplay" style={{display: "flex"}}>
          {props.excercises.map((excercise, i) => {
            if (i < 5) {
              return (<div key={i} style={style}><div className="excerciseItem">{excercise.excercise}</div></div>)
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Card;