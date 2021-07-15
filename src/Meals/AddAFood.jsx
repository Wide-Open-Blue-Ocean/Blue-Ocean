import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import customStyles from '../customStyles/customStyles.jsx';

function AddAFood (props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [foodItem, setFoodItem] = useState('');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const postFood = () => {
    const foodDetail = {
      email: props.mealParams.email,
      mealName: props.mealParams.mealName,
      item: foodItem,
      description: description,
      calories: calories,
      date: props.mealParams.date,
      checked: false
    }
    axios.post('/food', foodDetail)
    .then(res => console.log(res.data))
    .then(() => {
      props.getFood();
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postFood();
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
            placeholder='Type'
            onChange={e => setFoodItem(e.target.value)}
          />
          <br/>
          <input className="inputGeneral"
            style={{ height: '120px', color: '#3f3f3f' }}
            type="text"
            required
            placeholder='Description'
            onChange={e => setDescription(e.target.value)}
          />
          <br/>
          <input className="inputGeneral"
            style={{ color: '#3f3f3f' }}
            type="text"
            required
            placeholder='Calories'
            onChange={e => setCalories(e.target.value)}
          />
        </div>
        <input className="Add" style={{ marginLeft: '150px' }} type="submit" value="ADD"/>
      </form>
      </Modal>
    </div>
  )
}
export default AddAFood;