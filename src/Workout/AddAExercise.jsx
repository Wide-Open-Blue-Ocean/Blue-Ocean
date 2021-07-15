import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import customStyles from '../customStyles/customStyles.jsx';

function AddAExercise (props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [exercise, setExercise] = useState('');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const postExercise = () => {
    const exerciseDetail = {
      userId: props.sessionParams.userId,
      sessionName: props.sessionParams.sessionName,
      exercise: exercise,
      description: description,
      calories: calories,
      date: props.sessionParams.date,
      checked: false
    }
    axios.post('/workout', exerciseDetail)
    .then(res => console.log(res.data))
    .then(() => {
      props.getWorkouts();
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postExercise();
    closeModal();
  };
  return (
    <div className="buttonContainer1">
      <button className="sessionButton" onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
      <button className="sessionButton" style={{ fontSize: '16px', marginLeft: '330px' }} onClick={closeModal}>
      X
      </button>
      <form className="modalForm" onSubmit={handleSubmit}>
        <div className="formInput">
          <input className="inputGeneral"
            style={{ color: '#3f3f3f' }}
            type="text"
            required
            placeholder="Exercise"
            onChange={e => setExercise(e.target.value)}
          />
          <br/>
          <input className="inputGeneral"
            style={{ height: '120px', color: '#3f3f3f' }}
            type="text"
            required
            placeholder="Description"
            onChange={e => setDescription(e.target.value)}
          />
          <br/>
          <input className="inputGeneral"
            style={{ color: '#3f3f3f' }}
            type="text"
            required
            placeholder="Calories Burned"
            onChange={e => setCalories(e.target.value)}
          />
        </div>
        <input className="Add" style={{ marginLeft: '150px' }} type="submit" value="ADD"/>
      </form>
      </Modal>
    </div>
  )
}
export default AddAExercise;