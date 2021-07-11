const mongoose = require('./index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const journalSchema = mongoose.Schema({
  userId: Number,
  mealEntry: String,
  workoutEntry: String,
  date: Number,
});

let Journal = mongoose.model('Journal', journalSchema, 'journals');


module.exports.add = (entry) => {
  var newJournal = new Journal(entry);
  return newJournal.save();
}

module.exports.find = (userId, date) => {
  return Journal.find({
    userId: userId,
    date: date
  });
};

//inclusive
module.exports.findRange = (userId, startDate, endDate) => {
  return Journal.find({
    userId: userId,
    date: {
      $gte: startDate,
      $lte: endDate
    }
  });
};

//pass in the mongo created __id property
module.exports.delete = (_id) => {
  return Journal.deleteOne({
    _id: _id
  });
};