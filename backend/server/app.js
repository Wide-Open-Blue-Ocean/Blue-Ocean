const express = require('express');
// const cors = require('cors');
const db = require('../database');
const Models = require('../database/models/index.js');
const app = express();
const port = process.env.PORT || 3000;

// middleware
// app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../../dist'));


/*
  While writing your endpoints, please do not remove any of the mongo created
  _id properties
**/

app.get('/test', (req, res) => {
  // Models.User.add({userId: 0, name: 'Tom Marvolo Riddle'});
});

//ENDPOINTS

//format for dateRange query:
// yyyymmdd-yyyymmdd
app.get('/workoutSession', (req, res) => {

  let userId = req.query.userId

  if (req.query.date.length === 6) {
    let date = req.query.date;
    Models.WorkoutSession.find(userId, date)
  }
  res.sendStatus(200).json('success')
})



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});