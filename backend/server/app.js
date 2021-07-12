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

app.get('/dummySessions', (req, res) => {
  res.json([
    {
      userId: 0,
      sessionName: 'sundayTest1',
      timeRange: '1200-1330',
      date: '20210711'
    },
    {
      userId: 0,
      sessionName: 'sundayTest2',
      timeRange: '1500-1700',
      date: '20210711'
    }
  ]);
});

app.get('/dummyMeals', (req, res) => {
  res.json([
    {
      userId: 0,
      sessionName: 'sundayMeal1',
      timeRange: '0800-0900',
      date: '20210711'
    },
    {
      userId: 0,
      sessionName: 'sundayMeal2',
      timeRange: '1730-1830',
      date: '20210711'
    },
    {
      userId: 0,
      sessionName: 'mondayMeal1',
      timeRange: '0600-0630',
      date: '20210712'
    },
    {
      userId: 0,
      sessionName: 'mondayMeal2',
      timeRange: '1430-1545',
      date: '20210712'
    },
    {
      userId: 0,
      sessionName: 'tuesdayMeal1',
      timeRange: '0500-0600',
      date: '20210713'
    },
    {
      userId: 0,
      sessionName: 'tuesdayMeal2',
      timeRange: '1200-1300',
      date: '20210713'
    },
    {
      userId: 0,
      sessionName: 'wednesdayMeal1',
      timeRange: '0800-0900',
      date: '20210714'
    },
    {
      userId: 0,
      sessionName: 'wednesdayMeal2reallylongname',
      timeRange: '1730-1830',
      date: '20210714'
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});