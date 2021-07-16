import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { GlobalContext, GlobalWorkoutContext } from '../context/GlobalState'
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
    maxHeight: 400,
  },
});

const WorkoutTile = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const workouts = useContext(GlobalWorkoutContext);

  const workoutTileClick = () => {
    history.push('/workout')
  }

  const todaysWorkouts = workouts.map((item, index) => {

    return (
      <div key={index}
      onClick={() => workoutTileClick()}
      className='workoutCardBorder'
      >
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Workout"
            height="140"
            image={workoutImg[index].img}
            title={item}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align='center' component="h2">
              {item}
            </Typography>
            <Typography variant="body3" color="textSecondary"  component="p">

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          </Button>
          <Button size="small" color="primary">
          </Button>
        </CardActions>
      </Card>
      </div>
    )})
  return (
    <>
      {todaysWorkouts.slice(0, 2)}
    </>
  )
}

export default WorkoutTile;

const workoutImg = [
  {
    img: '/images/img8',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/images/img2',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: '/images/img3',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: '/images/img4',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: '/images/img5',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/images/img6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: '/images/img7',
    title: 'Fern',
    author: '@katie_wasserman',
  }
];