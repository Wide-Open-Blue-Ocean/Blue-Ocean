const express = require('express');
// const cors = require('cors');
const db = require('../database');
const Models = require('../database/models/index.js');
const app = express();
const port = process.env.PORT || 3000;
const routeSpecs = require('../routeSpecs/tests.js')


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../../dist'));


/*
  While writing your endpoints, please do not remove any of the mongo created
  _id properties
**/
app.get('/test', (req, res) => {
  // Models.User.add({userId: 0, name: 'Tom Marvolo Riddle'});
});

//ENDPOINTS
//format for 'date' query: yyyymmdd
//format for 'dateRange' query: yyyymmdd-yyyymmdd

app.get('/workoutSession', (req, res) => {
  let {userId, date, dateRange} = req.query
  routeSpecs.handleBadRequest.workoutSession(userId, [date, dateRange])
  /*if a 400 is thrown, client side logic isn't adhering
  to requirements from the server.  This is a stand in for a jest test*/
  .then(() => {
    if (date) {
      Models.WorkoutSession.find(Number(userId), Number(date))
    } else {
      let [startDate, endDate] = dateRange.split('-');
      Models.WorkoutSession.findRange(Number(userId), Number(startDate), Number(endDate));
    }
  })
  .then((results) => {
    res.status(200).json(results)
  })
  .catch((err) => {
    //Delete this conditional when Jest test suite has replaced tests.js in routeSpecs
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  });
});





app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});






















//for either requiredParams or optionalParams, a single param per argument can be passed in as is, otherwise more than one param per argument should be passed in as an array
//tests are functions that determine whether or not a param is to be considered a 404 argument;
//if nothing is passed in for tests, all params will be tested by the default test: if param is undefined, throw a 404.
//if a single test is passed in, setting applyAll to true will apply the test to all params.
//leaving applyAll undefined will apply the test only to the first param
//if multiple different tests are to be applied to different params, they must be entered in as an array in the order of which each param has been entered in as an argument, first counting the requiredParams, then the optionalParams
//in this case, params without custom tests should be given a corresponidng null value for a test in the tests argument.

// const is404 = (requiredParams, optionalParams, tests, applyAll) => {
//   const defaultTest = (param) => {
//     return param ? false : true;
//   }
//   requiredParams = requiredParams === null ? [] : requiredParams;
//   optionalParams = optionalParams === null ? [] : optionalParams;
//   requiredParams = !Array.isArray(requiredParams) ? [requiredParams] : requiredParams;
//   optionalParams = !Array.isArray(optionalParams) ? [optionalParams] : optionalParams;
//   totalParams = requiredParams.concat(optionalParams);

//   for (let i = 0; i < totalParams; i++) {
//     let test = tests[i];
//     if (test === null) {

//     }
//     if test()
//   }
// }