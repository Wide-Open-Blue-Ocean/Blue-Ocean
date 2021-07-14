import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

function WorkoutTile (props) {
  return (
    <div className="workoutTile" onClick={() => workoutTileClick()}>
      {/* <div> */}
        {'WTile'}
      {/* </div> */}
    </div>
  )
}

export default WorkoutTile;