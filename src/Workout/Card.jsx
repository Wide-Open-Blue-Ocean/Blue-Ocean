import React from 'react';
import RemoveSession from './RemoveSession.jsx'

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

function Card (props) {
  return (
    <div className="session">
        <div className="sessionText">
        <h2 onClick={() => {props.cardOnClick(props.session)}} style={{color: 'rgb(73, 73, 73)'}}>{(props.session.sessionName).toUpperCase()}</h2>
        </div>
        <RemoveSession getWorkSessions={props.getWorkSessions} sessionName={props.session.sessionName}/>
    </div>
  )
}


export default Card;