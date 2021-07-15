const mongoose = require('../index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const workoutSessionSchema = mongoose.Schema({

  email: String,
  sessionName: String,
  timeRange: String,
  date: Number
});

let WorkoutSession = mongoose.model('WorkoutSession', workoutSessionSchema, 'workoutSessions');


module.exports.add = (entry) => {
  var newSession = new WorkoutSession(entry);
  console.log(newSession)
  return newSession.save();
};

module.exports.find = (email, date) => {
  return WorkoutSession.find({
    email: email,
    date: date
  });
};

//inclusive
module.exports.findRange = (email, startDate, endDate) => {
  return WorkoutSession.find({
    email: email,
    date: {
      $gte: startDate,
      $lte: endDate
    }
  });
};

//deleting session deletes associated workouts
module.exports.delete = (sessionName) => {
  var promises = [];
  const Workout = require('./Workout.js');
  promises.push(WorkoutSession.deleteOne({
    sessionName: sessionName
  }));
  promises.push(Workout.deleteBySession(sessionName));
  return Promise.all(promises);
};