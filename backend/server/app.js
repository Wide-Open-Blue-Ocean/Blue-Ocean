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





/****************************
 *
 *        USER
 *
 ****************************/
//USER
// userId: Number,
// name: String,

app.get('/user', (req, res) => {
  let userId = req.body.userId
  routeSpecs.handleBadRequest.getUser(userId)
  .then(_=> {
    return Models.User.find(userId);
  })
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.post('/user', (req, res) => {
  let entry = req.body;
  routeSpecs.handleBadRequest.postUser(entry)
  .then(_=> {
    Models.User.add(entry)
  })
  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/user', (req, res) => {
  let id = req.body.id
  routeSpecs.handleBadRequest.deleteUser(id)
  .then(_=> {
    Models.User.delete(id)
  })
  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})



/****************************
 *
 *    WORKOUT SESSIONS
 *
 ****************************/

//format for 'date' query: yyyymmdd
//format for 'dateRange' query: yyyymmdd-yyyymmdd

app.get('/workoutSession', (req, res) => {
  let {userId, date, startDate, endDate} = req.body
  routeSpecs.handleBadRequest.getWorkoutSession(userId, date, startDate, endDate)
  .then(() => {
    return date ? Models.WorkoutSession.find(userId, date) :  Models.WorkoutSession.findRange(userId, startDate, endDate);
  })
  .then((results) => {
    res.status(200).json(results)
  })
  .catch((err) => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  });
});

app.post('/workoutSession', (req, res) => {
  let entry = req.body
  routeSpecs.handleBadRequest.postWorkoutSession(entry)
  .then(_ => {
    entry.date = parseInt(entry.date);
    Models.WorkoutSession.add(entry)
  })
  .then(result => {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/workoutSession', (req, res) => {
  let sessionName = req.query.sessionName;
  routeSpecs.handleBadRequest.deleteWorkoutSession(sessionName)
  .then(_=> {
    Models.WorkoutSession.delete(sessionName)
  })
  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})


/****************************
 *
 *        WORKOUT
 *
 ****************************/

//  userId: Number,
//  sessionName: String,
//  exercise: String,
//  description: String,
//  calories: Number,
//  date: Number,
//  checked: Boolean


app.get('/workout', (req, res) => {
  let {userId, date, sessionName} = req.body;
  routeSpecs.handleBadRequest.getWorkout(userId, date, sessionName)
  .then(_=> {
    Models.Workout.find(userId, date, sessionName)
  })
  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.post('/workout', (req, res) => {
  let entry = req.body;
  routeSpecs.handleBadRequest.postWorkout(entry)
  .then(_=>{
    Models.Workout.add(entry)
  })
  .then(result => {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/workout', (req, res) => {
  let id = req.body.id;
  routeSpecs.handleBadRequest.deleteWorkout(id)
  .then(_=>{
    Models.Workout.delete(Number(id))
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500)
  })
})

app.get('/workout/checked', (req, res) => {
  let {userId, date} = req.body;
  routeSpecs.handleBadRequest.getWorkoutChecked(userId, date)
  .then(_=>{
    Models.Workout.findChecked(Number(userId), Number(date))
  })
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500)
  })
})

app.put('/workout/checked', (req, res) => {
  let {id, checked} = req.body;
  routeSpecs.handleBadRequest.putWorkoutChecked(id, checked)
  .then(_=>{
    Models.Workout.updateCheck(Number(id), checked)
  })
  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/workout', (req, res) => {
  let sessionName = req.query.sessionName;
  Models.Workout.deleteBySession(sessionName)
})
/****************************
 *
 *            FOOD
 *
 ****************************/

// userId: Number,
// mealName: String,
// item: String,
// description: String,
// calories: Number,
// date: Number,
// checked: Boolean

app.get('/food', (req, res) => {
  let {userId, date, mealName} = req.body;
  routeSpecs.handleBadRequest.getFood(userId, date, mealName)
  .then(_=> {
    Models.Food.find(userId, date, mealName)
  })
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.post('/food', (req, res) => {
  let entry = req.body;
  routeSpecs.handleBadRequest.postFood(entry)
  .then(_=> {
    Models.Food.add(entry)
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.get('/food/checked', (req, res) => {
  let {userId, date} = req.body;
  routeSpecs.handleBadRequest.getFoodChecked(userId, date)
  .then(_=> {
    Models.Food.findChecked(userId, date)
  })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.put('/food/checked', (req, res) => {
  let {id, checked} = req.body;
  routeSpecs.handleBadRequest.putFoodChecked(id, checked)
  .then(_=> {
    Models.Food.updateCheck(id, checked);
  })
  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/food', (req, res) => {
  let id = req.body.id;
  routeSpecs.handleBadRequest.deleteFood(id)
  .then(_=> {
    Models.Food.delete(id)
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/food', (req, res) => {
  let mealName = req.body.mealName;
  routeSpecs.handleBadRequest.deleteFoodByMeal(mealName)
  .then(_=> {
    Models.Food.deleteByMeal(mealName)
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
  Array.isArray ? res.json(err) : res.sendStatus(500)
})
})

/****************************
 *
 *            MEAL
 *
 ****************************/

// userId: Number,
// mealEntry: String,
// workoutEntry: String,
// date: Number,

app.post('/meal', (req, res) => {
  let entry = req.body;
  routeSpecs.handleBadRequest.postMeal(entry)
  .then(_=> {
    Models.Meal.add(entry)
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.get('/meal', (req, res) => {
  let {userId, date, startDate, endDate} = req.body;
  routeSpecs.handleBadRequest.getMeal(userId, date, startDate, endDate)
  .then(_=> {
    return date ? Models.Meal.find(userId, date) : Models.Meal.findRange(userId, startDate, endDate)
  })
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/meal', (req, res) => {
  let mealName = req.body.mealName;
  routeSpecs.handleBadRequest.deleteMeal(mealName)
  .then(_=> {
    Models.Meal.delete(mealName)
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})


/****************************
 *
 *        JOURNAL
 *
 ****************************/

// userId: Number,
// mealEntry: String,
// workoutEntry: String,
// date: Number,

app.get('/journal', (req, res) => {
  let {userId, date, startDate, endDate} = req.body;
  routeSpecs.handleBadRequest.getJournalEntry(userId, date, startDate, endDate)
  .then(_=> {
    return date ? Models.Journal.find(userId, date) : Models.Journal.findRange(userId, startDate, endDate);
  })
  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.post('/journal', (req, res) => {
  let entry = req.body
  routeSpecs.handleBadRequest.postJournalEntry(entry)
  .then(_=> {
    Models.Journal.find(entry)
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/journal', (req, res) => {
  let id = req.body.id
  routeSpecs.handleBadRequest.deleteJournalEntry(id)
  .then(_=> {
    Models.Journal.delete(id);
  })
  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})





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
      sessionName: 'saturdayMeal1',
      timeRange: '0900-1000',
      date: '20210710'
    },
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
    {
      userId: 0,
      sessionName: 'nextSundayMeal1',
      timeRange: '0800-0900',
      date: '20210718'
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});
