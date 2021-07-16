import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import AddAFood from './AddAFood.jsx';
import RemoveFood from './RemoveFood.jsx';

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

function Food (props) {
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
    axios.put('/food/checked', putBody)
    .then(() => {
      props.getFood()
    })
  }

  return (
    <div>
    <div className={classes.root}>
      {props.food.map((foodItem, i) => {
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
            {foodItem.checked ?
              (<FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => {event.stopPropagation(); handleCheck(foodItem._id, false)}}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox checked={true}/>}
                label={foodItem.item.toUpperCase()}
              />)
              : (<FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => {event.stopPropagation(); handleCheck(foodItem._id, true)}}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox checked={false}/>}
                label={foodItem.item.toUpperCase()}
              />)}
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">
                <p>Description: {foodItem.description}</p>
                <p>Calories burned: {foodItem.calories}</p>
                <RemoveFood getFood={props.getFood} _id={foodItem['_id']}/>
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
      <AddAFood getFood={props.getFood} mealParams={props.mealParams}/>
    </div>
  )
}

export default Food;