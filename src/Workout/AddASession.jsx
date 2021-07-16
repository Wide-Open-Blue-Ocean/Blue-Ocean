import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import customStyles from '../customStyles/customStyles.jsx';

function AddASession (props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sessionName, setSessionName] = useState('');
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
  const postSession = () => {
    const time = convertTime(startTime, endTime);
    const session = {
      userId: props.sessionParams.userId,
      sessionName: sessionName,
      timeRange: time,
      date: props.sessionParams.date
    }
    axios.post('/workoutSession', session)
    .then(() => {
      props.getWorkSessions();
    })
    .catch((err) => {
      const newWindow = window.open("", null, "height=200, width=400")
      newWindow.document.write("Sessions must be booked between 5:00am - 8:59pm");
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postSession();
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
            placeholder="Session Name"
            onChange={e => setSessionName(e.target.value)}
          />
          <br/>
          <input className="timeStart"
            type="text"
            required
            placeholder="HH:MM"
            onChange={e => setStartTime(e.target.value)}
          />
          -
          <input className="timeEnd"
            type="text"
            required
            placeholder="HH:MM"
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
export default AddASession;