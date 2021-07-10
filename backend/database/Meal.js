const mongoose = require('./index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const mealSchema = mongoose.Schema({
  userId: Number,
  mealName: String,
  timeRange: String,
  date: Number
});

let Meal = mongoose.model('Meal', mealSchema, 'meals');


module.exports.add = (entry) => {
  var newMeal = new Meal(entry);
  return newMeal.save();
}

module.exports.find = (userId, date) => {
  return Meal.find({
    userId: userId,
    date: date
  });
};

//inclusive
module.exports.findRange = (userId, startDate, endDate) => {
  return Meal.find({
    userId: userId,
    date: {
      $gte: startDate,
      $lte: endDate
    }
  });
};

//deleting a meal deletes associated food items
module.exports.delete = (mealName) => {
  const Food = require('./Food.js');
  var promises = [];
  promises.push(Meal.deleteOne({
    mealName: mealName
  }));
  promises.push(Food.deleteByMeal(mealName));
  return Promise.all(promises);
};