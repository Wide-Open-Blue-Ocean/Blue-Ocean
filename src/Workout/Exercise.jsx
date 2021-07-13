import React from 'react';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';

// const AccordionSection = style.div``;
const Wrap = styled.div``;
const Dropdown = styled.div``;

function Exercise (props) {
  const [clicked, setClicked] = React.useState(false);
  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  }
  return (
    <div>
      {/* <div className="exerciseCard">
        <div className="eText">{props.excercise.excercise}</div>
        <div className="actions">
          <div className="check">check</div>
          <div className="remove">remove</div>
        </div>
      </div> */}
      <IconContext.Provider value={{color: '#00FFB9', size: '25px'}}>
        {props.excercises.map((excercise, i) => {
          return (
          <div className="exerciseCard">
            <Wrap onClick={() => {toggle(i)}} key={i}>
              <span>{clicked === i ? <FiMinus /> : <FiPlus />}</span>
              <h1 style={{color: "red"}}>{excercise.excercise}</h1>
            </Wrap>
            {clicked === i ? (
            <Dropdown>
              <p>{excercise.description}</p>
            </Dropdown>
            ) : null}
          </div>
          )
        })}
      </IconContext.Provider>
      <button>+</button>
    </div>
  )
}

export default Exercise;