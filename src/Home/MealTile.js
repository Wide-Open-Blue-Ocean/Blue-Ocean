import React, { useEffect, useState } from 'react'

function MealTile (props) {


  return (
    <div className="mealTile" onClick={() => mealTileClick()}>
      {/* <div> */}
        {'MTile'}
      {/* </div> */}
    </div>
  )
}

export default MealTile;