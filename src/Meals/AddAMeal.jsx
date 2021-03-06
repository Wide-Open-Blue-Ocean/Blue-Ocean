import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import customStyles from '../customStyles/customStyles.jsx';

function AddAMeal (props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [mealName, setMealName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const newStart = (time) => {
    return time.slice(0, 2) + time.slice(3, 5)
  };
  const newEnd = (time) => {
    return time.slice(0, 2) + time.slice(3, 5)
  };
  const convertTime = (start, end) => {
    if (start.length !== 5 || end.length !== 5) {
      return {};
    }
    if (Number(start.slice(0, 2)) > 20 || Number(end.slice(0, 2)) > 20) {
      return {};
    }
    if (Number(start.slice(0, 2)) < 5 || Number(end.slice(0, 2)) < 5) {
      return {};
    }
    return `${newStart(start)}-${newEnd(end)}`
  };
  const postMeal = () => {
    const time = convertTime(startTime, endTime);
    const meal = {
      userId: props.mealParams.userId,
      mealName: mealName,
      timeRange: time,
      date: props.mealParams.date
    }
    axios.post('/meal', meal)
    .then(() => {
      props.getMeals();
    })
    .catch((err) => {
      const newWindow = window.open("", null, "height=200, width=400")
      newWindow.document.write("Meals must be booked between 5:00am - 8:59pm");
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postMeal();
    closeModal();
  };
  return (
    <div className="buttonContainer2">
      <button className="sessionButton" onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
      <button className="sessionButton" style={{ fontSize: '16px', marginLeft: '250px' }} onClick={closeModal}>
      X
      </button>
      <form className="modalForm" onSubmit={handleSubmit}>
        <div className="formInput">
          <input className="inputName"
            type="text"
            required
            placeholder='Meal Name'
            onChange={e => setMealName(e.target.value)}
          />
          <br/>
          <input className="timeStart"
            type="text"
            required
            placeholder='HH:MM'
            onChange={e => setStartTime(e.target.value)}
          />
          -
          <input className="timeEnd"
            type="text"
            required
            placeholder='HH:MM'
            onChange={e => setEndTime(e.target.value)}
          />
          <label className="label">Please use 24 hour format</label>
        </div>
        <input className="Add" type="submit" value="ADD"/>
      </form>
    </Modal>
   </div>
  )
}
export default AddAMeal;