import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Workout/Card.jsx'
import AddASession from '../Workout/AddASession.jsx'
import Exercise from '../Workout/Exercise.jsx'
import RemoveSession from '../Workout/RemoveSession.jsx'

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CancelIcon from '@material-ui/icons/Cancel';


function Workout (props) {
  const [sessions, setSessions] = useState([])
  const [exercises, setExercises] = useState([])
  const [sessionParams, setSessionParams] = useState({userId: 0,  date: props.date, sessionName: 'TRAINER X\'S WEIGHT TRAINING'});
  const [clicked, setClicked] = useState(undefined);

  let customStyles = {
    scroll: {
    }
  }

  if (sessions.length > 6) {
    customStyles = {
      scroll: {
        height: "600px",
        overflow: "auto"
      }
    }
  }

  const getWorkSessions = (() => {
    axios.get('/workoutSession', {params: {userId: sessionParams.userId, date: sessionParams.date}})
    .then(result => {
      setSessions(result.data)
    })
  })

  useEffect(() => {
    axios.get('/workoutSession', {params: {userId: sessionParams.userId, date: sessionParams.date}})
    .then(result => {
      setSessions(result.data)
    })
  }, [])

  const getWorkouts = (() => {
    axios.get('/workout', {params: {userId: sessionParams.userId, date: sessionParams.date, sessionName: sessionParams.sessionName}})
    .then(result => {
      setExercises(result.data);
    })
  })

  const cardOnClick = (sessionObject) => {
    setSessionParams(sessionObject);
    axios.get('/workout', {params: {userId: sessionObject.userId, date: sessionObject.date, sessionName: sessionObject.sessionName}})
    .then(result => {
      setExercises(result.data);
    })
  }

  const uglyDateString = '' + props.date;
  const dateObj = new Date(uglyDateString.slice(0,4), parseInt(uglyDateString.slice(4, 6)) - 1, uglyDateString.slice(6, 8));
  const finalDate = dateObj.toDateString();

  const handleDelete = (sessionName) => {
    axios.delete('/workoutSession', {data: {sessionName: sessionName}})
    .then((result) => {
      getWorkSessions();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="workoutContainer">
      <div className="workout">
        <div className="cardSession" style={{ fontSize:'30px' }}>{finalDate}
          {/* <div className="cards"> */}
          {/* {sessions.map((session, i) => {
            return (<Card getWorkSessions={getWorkSessions} exercises={exercises} key={i} session={session} cardOnClick={cardOnClick}/>)
          })} */}
          <ImageList className="scroll" style={customStyles.scroll} sx={{ width: 1200, height: 450 }}>
              {sessions.map((session, i) => (
              <ImageListItem className="test" key={i}>
                {(i < itemData.length) ?
                  (<img srcSet={`${itemData[i].img}?w=248&fit=crop&auto=format&dpr=2 2x`} loading="lazy" />)
                  : (<img srcSet={`${itemData[0].img}?w=248&fit=crop&auto=format&dpr=2 2x`} loading="lazy" />)}
              <ImageListItemBar style={{border: 'solid 1px rgb(128,128,128)'}} title={session.sessionName} subtitle={session.timeRange}
              actionIcon={
              <IconButton className="Info" onClick={() => {cardOnClick(session); setClicked(i)}} sx={{ color: 'red' }} aria-label={`info about ${session.sessionName}`}>
              {(clicked === i) ?
              (<InfoIcon style={{color: 'yellow'}} className="Info"/>)
              : (<InfoIcon style={{color: 'white'}} className="Info"/>)}
              {/* <DeleteForeverIcon /> */}
              <CancelIcon className="cancel" onClick={() => handleDelete(session.sessionName)} style={{marginBottom: '250px'}}/>
              </IconButton>}/>
              </ImageListItem>))}
          </ImageList>
          <AddASession getWorkSessions={getWorkSessions} sessionParams={sessionParams} />
          {/* </div> */}
        </div>
        <div className="exercises">
          <Exercise getWorkouts={getWorkouts} exercises={exercises} sessionParams={sessionParams}/>
        </div>
      </div>
    </div>
  )
}

export default Workout


const itemData = [
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