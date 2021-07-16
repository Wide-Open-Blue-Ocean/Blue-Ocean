import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import AddAExercise from './AddAExercise.jsx';
import RemoveExercise from './RemoveExercise.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Wrap = styled.div``;
const Dropdown = styled.div``;
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Exercise (props) {
  const [clicked, setClicked] = useState(false);
  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  }
  const classes = useStyles();

  const handleCheck = (id, value) => {
    let putBody = {
      _id: id,
      checked: value
    }
    axios.put('/workout/checked', putBody)
    .then(() => {
      props.getWorkouts()
    })
  }

  return (
    <div>
    <div className={classes.root}>
      {props.exercises.map((exercise, i) => {
        return (
          <Accordion
          style={{border: 'solid 2px black'}}
            defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-label="Expand"
              aria-controls="additional-actions1-content"
              id="additional-actions1-header"
            >
              {exercise.checked ?
              (<FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => {event.stopPropagation(); handleCheck(exercise._id, false)}}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox checked={true}/>}
                label={exercise.exercise.toUpperCase()}
              />)
              : (<FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => {event.stopPropagation(); handleCheck(exercise._id, true)}}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox checked={false}/>}
                label={exercise.exercise.toUpperCase()}
              />)}
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                <p>Description: {exercise.description}</p>
                <p>Calories burned: {exercise.calories}</p>
                <RemoveExercise getWorkouts={props.getWorkouts} _id={exercise['_id']} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
      <AddAExercise getWorkouts={props.getWorkouts} sessionParams={props.sessionParams}/>
    </div>
  )
}

export default Exercise;