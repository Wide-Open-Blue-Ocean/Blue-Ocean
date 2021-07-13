import React, { useState } from 'react';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import AddAExercise from './AddAExercise.jsx';

// const AccordionSection = style.div``;
const Wrap = styled.div``;
const Dropdown = styled.div``;

function Exercise (props) {
  const [clicked, setClicked] = useState(false);
  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  }
  return (
    <div>
      <IconContext.Provider value={{color: 'rgb(73, 73, 73)', size: '25px'}}>
        {props.excercises.map((excercise, i) => {
          return (
          <div key={i} className="exerciseCard">
            <Wrap onClick={() => {toggle(i)}} key={i} style={{'display' : 'flex'}}>
              <div className="exerciseItem">
                <div className="symbol1"><span>{clicked === i ? <FiMinus /> : <FiPlus />}</span></div>
                <div><h2 style={{color: 'rgb(73, 73, 73)'}}>{excercise.excercise}</h2></div>
              </div>
            </Wrap>
            <div>
            {clicked === i ? (
            <Dropdown>
              <hr/>
              <p>{excercise.description}</p>
            </Dropdown>
            ) : null}
            </div>
          </div>
          )
        })}
      </IconContext.Provider>
      <AddAExercise />
    </div>
  )
}

export default Exercise;