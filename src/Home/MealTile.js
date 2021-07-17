import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { GlobalContext, GlobalMealContext } from '../context/GlobalState'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function MealTile (props) {
  const classes = useStyles();

  const history = useHistory();
  const meals = useContext(GlobalMealContext)

  const mealTileClick = () => {
   history.push('/meals')
 }

  const todaysMeals = meals.map((item, index) => {
    return (
    <div key={index}
      onClick={() => mealTileClick()}
      className='mealCardBorder'
      >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Workout"
            height="140"
            image={mealImg[index].img}
            title={item}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align='center'>
              {item}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">

            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
      </div>
    )})
  return (
    <>
      {todaysMeals}
    </>
  )
}


export default MealTile;

const mealImg = [
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

{/* <CardActions>
<Button size="small" color="primary">
</Button>
<Button size="small" color="primary">
</Button>
</CardActions> */}
