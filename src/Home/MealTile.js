import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

function MealTile (props) {

  const history = useHistory();

  const mealTileClick = () => {
   console.log('mealTileclick');
   history.push('/meals')
 }

  return (
    <div className="mealTile" onClick={() => mealTileClick()}>
      {/* <div> */}
        {'MTile'}
      {/* </div> */}
    </div>
  )
}

export default MealTile;