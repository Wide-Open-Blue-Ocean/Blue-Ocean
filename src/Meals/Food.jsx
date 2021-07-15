import React, { useState } from 'react';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import AddAFood from './AddAFood.jsx';
import RemoveFood from './RemoveFood.jsx';
import FoodCheck from './FoodCheck.jsx';

const Wrap = styled.div``;
const Dropdown = styled.div``;

function Food (props) {
  const [clicked, setClicked] = useState(false);
  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  }
  return (
    <div>
      <IconContext.Provider value={{color: 'rgb(73, 73, 73)', size: '25px', fontWeight: 'bold'}}>
        {props.food.map((foodItem, i) => {
          return (
          <div key={i} className="exerciseCard">
            <Wrap key={i} style={{'display' : 'flex'}}>
              <div className="eContainer">
              <div className="exerciseItem">
                <div onClick={() => {toggle(i)}} className="symbol1"><span>{clicked === i ? <FiMinus /> : <FiPlus />}</span></div>
                <div><h2 style={{color: 'rgb(73, 73, 73)'}}>{foodItem.item.toUpperCase()}</h2></div>
              </div>
              <div className="actionItems" style={{display: 'flex'}}>
                <div><FoodCheck getFood={props.getFood} _id={foodItem._id} checked={foodItem.checked} /></div>
                <div className="remove"><RemoveFood getFood={props.getFood} _id={foodItem['_id']}/></div>
              </div>
              </div>
            </Wrap>
            <div>
            {clicked === i ? (
            <Dropdown>
              <div className="dropDown">
                <hr/>
                <p>Description: {foodItem.description}</p>
                <p>Calories: {foodItem.calories}</p>
              </div>
            </Dropdown>
            ) : null}
            </div>
          </div>
          )
        })}
      </IconContext.Provider>
      <AddAFood getFood={props.getFood} mealParams={props.mealParams}/>
    </div>
  )
}

export default Food;