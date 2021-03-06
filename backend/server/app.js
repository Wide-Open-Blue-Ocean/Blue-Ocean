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

//images
app.use('/images/img1', express.static(__dirname + '/../../images/img1.jpeg'));
app.use('/images/img2', express.static(__dirname + '/../../images/img2.jpg'));
app.use('/images/img3', express.static(__dirname + '/../../images/img3.jpg'));
app.use('/images/img4', express.static(__dirname + '/../../images/img4.jpg'));
app.use('/images/img5', express.static(__dirname + '/../../images/img5.jpg'));
app.use('/images/img6', express.static(__dirname + '/../../images/img6.jpg'));
app.use('/images/img7', express.static(__dirname + '/../../images/img7.jpg'));
app.use('/images/img8', express.static(__dirname + '/../../images/img8.jpg'));

app.use('/images/food1', express.static(__dirname + '/../../images/food1.jpg'));
app.use('/images/food2', express.static(__dirname + '/../../images/food2.jpg'));
app.use('/images/food3', express.static(__dirname + '/../../images/food3.jpg'));
app.use('/images/food4', express.static(__dirname + '/../../images/food4.jpg'));
app.use('/images/food5', express.static(__dirname + '/../../images/food5.jpg'));

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
  let userId = req.query.userId

    return Models.User.find(Number(userId))

  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.post('/user', (req, res) => {
  let entry = req.body;

    Models.User.add(entry)

  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/user', (req, res) => {
  let id = req.body.id
    Models.User.delete(id)
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
  let {userId, date, startDate, endDate} = req.query
  return (date ? Models.WorkoutSession.find(userId, date) :  Models.WorkoutSession.findRange(userId, startDate, endDate))
  .then((results) => {
    res.status(200).json(results)
  })
  .catch((err) => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  });
});

app.post('/workoutSession', (req, res) => {
  let entry = req.body

    entry.date = parseInt(entry.date);
    Models.WorkoutSession.add(entry)

  .then(result => {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/workoutSession', (req, res) => {
  let sessionName = req.body.sessionName;

    Models.WorkoutSession.delete(sessionName)

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
  let {userId, date, sessionName} = req.query;

    return Models.Workout.find(userId, date, sessionName)

  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.post('/workout', (req, res) => {
  let entry = req.body;

    Models.Workout.add(entry)

  .then(result => {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/workout', (req, res) => {
  let _id = req.body._id;

    Models.Workout.delete(_id)

  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500)
  })
})

app.get('/workout/checked', (req, res) => {
  let {userId, date} = req.query;

    return Models.Workout.findChecked(Number(userId), Number(date))

  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500)
  })
})

app.put('/workout/checked', (req, res) => {
  let {_id, checked} = req.body;

    Models.Workout.updateCheck(_id, checked)

  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/workout', (req, res) => {
  let sessionName = req.body.sessionName;
  Models.Workout.deleteBySession(sessionName)
  .then(() => {
    res.sendStatus(201)
  })
  .catch(err => {
    res.sendStatus(500)
  })
})
/*****************************
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
  let {userId, date, mealName} = req.query;

    return Models.Food.find(userId, date, mealName)

  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.post('/food', (req, res) => {
  let entry = req.body;

    Models.Food.add(entry)

  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.get('/food/checked', (req, res) => {
  let {userId, date} = req.query;
  // routeSpecs.handleBadRequest.getFoodChecked(userId, date)
  // .then(_=> {
    return Models.Food.findChecked(userId, date)
  // })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.put('/food/checked', (req, res) => {
  let {_id, checked} = req.body;

    Models.Food.updateCheck(_id, checked)

  .then(_=> {
    res.sendStatus(201)
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/food', (req, res) => {
  let _id = req.body._id;

    Models.Food.delete(_id)

  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/food', (req, res) => {
  let mealName = req.body.mealName;

    Models.Food.deleteByMeal(mealName)

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

    Models.Meal.add(entry)

  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.get('/meal', (req, res) => {
  let {userId, date, startDate, endDate} = req.query;

    return (date ? Models.Meal.find(userId, date) : Models.Meal.findRange(userId, startDate, endDate))

  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    Array.isArray ? res.json(err) : res.sendStatus(500)
  })
})

app.delete('/meal', (req, res) => {
  let mealName = req.body.mealName;

    Models.Meal.delete(mealName)

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
  let {userId, date, startDate, endDate} = req.query;

    return (date ? Models.Journal.find(userId, date) : Models.Journal.findRange(userId, startDate, endDate))

  .then(result => {
    res.status(200).json(result)
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.post('/journal', (req, res) => {
  let entry = req.body

    Models.Journal.add(entry)

  .then(_=> {
    res.sendStatus(201);
  })
  .catch(err => {
    Array.isArray(err) ? res.json(err) : res.sendStatus(500);
  })
})

app.delete('/journal', (req, res) => {
  let id = req.body.id
    Models.Journal.delete(id)
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
      sessionName: 'sundayTest2',
      timeRange: '1500-1700',
      date: '20210711'
    },
    {
      userId: 0,
      sessionName: 'sundayTest1',
      timeRange: '1200-1330',
      date: '20210711'
    },
    {
      userId: 0,
      sessionName: 'sundayTest3',
      timeRange: '0900-1000',
      date: '20210711'
    },
    {
      userId: 0,
      sessionName: 'sundayTest4',
      timeRange: '2000-2100',
      date: '20210711'
    }
  ]);
});

app.get('/dummyMeals', (req, res) => {
  res.json([
    {
      userId: 0,
      mealName: 'saturdayMeal1',
      timeRange: '0900-1000',
      date: '20210710'
    },
    {
      userId: 0,
      mealName: 'sundayMeal1',
      timeRange: '0800-0900',
      date: '20210711'
    },
    {
      userId: 0,
      mealName: 'sundayMeal2',
      timeRange: '1730-1830',
      date: '20210711'
    },
    {
      userId: 0,
      mealName: 'mondayMeal1',
      timeRange: '0600-0630',
      date: '20210712'
    },
    {
      userId: 0,
      mealName: 'mondayMeal2',
      timeRange: '1430-1545',
      date: '20210712'
    },
    {
      userId: 0,
      mealName: 'tuesdayMeal1',
      timeRange: '0500-0600',
      date: '20210713'
    },
    {
      userId: 0,
      mealName: 'tuesdayMeal2',
      timeRange: '1200-1300',
      date: '20210713'
    },
    {
      userId: 0,
      mealName: 'wednesdayMeal1',
      timeRange: '0800-0900',
      date: '20210714'
    },
    {
      userId: 0,
      mealName: 'wednesdayMeal2reallylongname',
      timeRange: '1730-1830',
      date: '20210714'
    },
    {
      userId: 0,
      mealName: 'nextSundayMeal1',
      timeRange: '0800-0900',
      date: '20210718'
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});
