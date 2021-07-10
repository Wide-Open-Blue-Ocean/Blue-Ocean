const mongoose = require('./index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const workoutSchema = mongoose.Schema({
  userId: Number,
  sessionName: String,
  exercise: String,
  description: String,
  calories: Number,
  date: Number,
  checked: Boolean
});

let Workout = mongoose.model('Workout', workoutSchema, 'workouts');


module.exports.add = (entry) => {
  var newWorkout = new Workout(entry);
  return newWorkout.save();
}

module.exports.find = (userId, date, sessionName) => {
  return Workout.find({
    userId: userId,
    date: date,
    sessionName: sessionName
  });
};

module.exports.findChecked = (userId, date) => {
  return Workout.find({
    userId: userId,
    date: date,
    checked: true
  });
};
//pass in mongo generated __id
module.exports.delete = (__id) => {
  return Workout.deleteOne({
    __id: __id
  });
};

module.exports.deleteBySession = (sessionName) => {
  return Workout.deleteMany({
    sessionName: session
  });
};