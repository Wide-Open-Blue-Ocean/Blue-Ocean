import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { GlobalContext, GlobalMealContext } from '../context/GlobalState'
// import ImgMediaCard from '../components/card.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
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
   console.log('mealTileclick');
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
            image="/images/food3"
            title={item}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              Description Here
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {/* Share */}
          </Button>
          <Button size="small" color="primary">
            {/* Learn More */}
          </Button>
        </CardActions>
      </Card>
      </div>
    )})
  return (
    <>
      {todaysMeals}
    </>
  )
}
//     return (
//     <div
//       key={index}
//       className="mealTile"
//       onClick={() => mealTileClick()}
//     >
//       {item}
//     </div>
//   )})

//   return (
//     <>
//       {todaysMeals}
//     </>
//   )
// }

export default MealTile;