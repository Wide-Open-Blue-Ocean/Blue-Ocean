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
  },
});

// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image="/images/img2"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }




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
            image="/images/img2"
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
      {todaysWorkouts.slice(0, 2)}
    </>
  )
}







// function WorkoutTile (props) {

//   const history = useHistory();
//   const workouts = useContext(GlobalWorkoutContext)

//   const workoutTileClick = () => {
//     history.push('/workout')
//   }

//   const todaysWorkouts = workouts.map((item, index) => {
//     return (
//     <div
//       key={index}
//       className="workoutTile"
//       onClick={() => workoutTileClick()}
//     >
//       {item}
//     </div>
//   )})

//   return (
//     <>
//       {todaysWorkouts.slice(0, 2)}
//     </>
//   )
// }

export default WorkoutTile;
















// function WorkoutTile (props) {

//   const history = useHistory();
//   const workouts = useContext(GlobalWorkoutContext)

//   const workoutTileClick = () => {
//     history.push('/workout')
//   }

//   const todaysWorkouts = workouts.map((item, index) => {
//     return (
//     <div
//       key={index}
//       className="workoutTile"
//       onClick={() => workoutTileClick()}
//     >
//       {item}
//     </div>
//   )})

//   return (
//     <>
//       {todaysWorkouts.slice(0, 2)}
//     </>
//   )
// }

// export default WorkoutTile;