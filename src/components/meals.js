import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Meals/Card.jsx'
import AddAMeal from '../Meals/AddAMeal.jsx'
import Food from '../Meals/Food.jsx'
import RemoveMeal from '../Meals/RemoveMeal.jsx'

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Meals (props) {
  const [meals, setMeals] = useState([])
  const [food, setFood] = useState([])
  const [mealParams, setMealParams] = useState({userId: 0,  date: props.date, mealName: 'Breakfast'});
  const [clicked, setClicked] = useState(undefined);

  const getMeals = (() => {
    axios.get('/meal', {params: {userId: mealParams.userId, date: mealParams.date}})
    .then(result => {
      setMeals(result.data)
    })
  })

  useEffect(() => {
    axios.get('/meal', {params: {userId: mealParams.userId, date: mealParams.date}})
    .then(result => {
      setMeals(result.data)
    })
  }, [])

  const getFood = (() => {
    axios.get('/food', {params: {userId: mealParams.userId, date: mealParams.date, mealName: mealParams.mealName}})
    .then(result => {
      setFood(result.data);
    })
  })

  const cardOnClick = (mealObject) => {
    setMealParams(mealObject);
    axios.get('/food', {params: {userId: mealObject.userId, date: mealObject.date, mealName: mealObject.mealName}})
    .then(result => {
      setFood(result.data);
    })
  }

  const uglyDateString = '' + props.date;
  const dateObj = new Date(uglyDateString.slice(0,4), parseInt(uglyDateString.slice(4, 6)) - 1, uglyDateString.slice(6, 8));
  const finalDate = dateObj.toDateString();

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession" style={{ fontSize:'30px' }}>{finalDate}
          <ImageList sx={{ width: 1200, height: 450 }}>
            {meals.map((meal, i) => (
          <ImageListItem key={i}>
          {(i < itemData.length) ?
            (<img srcSet={`${itemData[i].img}?w=248&fit=crop&auto=format&dpr=2 2x`} loading="lazy" />)
            : (<img srcSet={`${itemData[0].img}?w=248&fit=crop&auto=format&dpr=2 2x`} loading="lazy" />)}
          <ImageListItemBar title={meal.mealName} subtitle={meal.mealName}
          actionIcon={
            <IconButton onClick={() => {cardOnClick(meal); setClicked(i)}} sx={{ color: 'red' }} aria-label={`info about ${meal.mealName}`}>
            {(clicked === i) ?
            (<InfoIcon style={{color: 'yellow'}} className="Info"/>)
            : (<InfoIcon style={{color: 'white'}} className="Info"/>)}
            {/* <DeleteForeverIcon /> */}
            </IconButton>
          }/>
          </ImageListItem>))}
          </ImageList>

          <AddAMeal getMeals={getMeals} mealParams={mealParams} />
        </div>
        <div className="exercises">
          <Food getFood={getFood} food={food} mealParams={mealParams}/>
        </div>
      </div>
    </div>
  )
}

export default Meals

const itemData = [
  {
    img: '/images/food1',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/images/food2',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: '/images/food3',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: '/images/food4',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: '/images/food5',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  }
];