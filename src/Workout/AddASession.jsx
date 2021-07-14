import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import customStyles from '../customStyles/customStyles.jsx';
function AddASession (props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sessionName, setSessionName] = useState('Session Name');
  const [startTime, setStartTime] = useState('HH:MM');
  const [endTime, setEndTime] = useState('HH:MM');
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
    if (Number(start.slice(0, 2)) > 20 || Number(end.slice(0, 2)) > 20) {
      return `This is not a healthy time to work out`;
    }
    if (Number(start.slice(0, 2)) < 5 || Number(end.slice(0, 2)) < 5) {
      return `This is not a healthy time to work out`;
    }
    return `${newStart(start)}-${newEnd(end)}`
  };
  const postSession = () => {
    const time = convertTime(startTime, endTime);
    const session = {
      userId: 0,
      sessionName: sessionName,
      timeRange: time,
      date: 20210712
    }
    axios.post('/workoutSession', session)
    .then(res => console.log(res.data)) // delete later
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
      >
      <button className="sessionButton" style={{ fontSize: '16px', marginLeft: '250px' }} onClick={closeModal}>
      X
      </button>
      <form className="modalForm" onSubmit={handleSubmit}>
        <div className="formInput">
          <input className="inputName"
            type="text"
            required
            placeholder={sessionName}
            onChange={e => setSessionName(e.target.value)}
          />
          <br/>
          <input className="timeStart"
            type="text"
            required
            placeholder={startTime}
            onChange={e => setStartTime(e.target.value)}
          />
          -
          <input className="timeEnd"
            type="text"
            required
            placeholder={endTime}
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