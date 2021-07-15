const mongoose = require('../index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const journalSchema = mongoose.Schema({
  email: String,
  mealEntry: String,
  workoutEntry: String,
  date: Number,
});

let Journal = mongoose.model('Journal', journalSchema, 'journals');


module.exports.add = (entry) => {
  var newJournal = new Journal(entry);
  return newJournal.save();
};

module.exports.find = (email, date) => {
  return Journal.find({
    email: email,
    date: date
  });
};

//inclusive
module.exports.findRange = (email, startDate, endDate) => {
  return Journal.find({
    email: email,
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