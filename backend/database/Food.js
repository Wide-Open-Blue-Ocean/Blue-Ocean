const mongoose = require('./index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const foodSchema = mongoose.Schema({
  userId: Number,
  mealName: String,
  item: String,
  description: String,
  calories: Number,
  date: Number,
  checked: Boolean
});

let Food = mongoose.model('Food', foodSchema, 'foods');


module.exports.add = (entry) => {
  var newFood = new Food(entry);
  return newFood.save();
}

module.exports.find = (userId, date, mealName) => {
  return Food.find({
    userId: userId,
    date: date,
    mealName: mealName
  });
};

module.exports.findChecked = (userId, date) => {
  return Food.find({
    userId: userId,
    date: date,
    checked: true
  });
};
//pass in mongo created __id property
module.exports.delete = (__id) => {
  return Food.deleteOne({
    __id: __id
  });
};

module.exports.deleteByMeal = (mealName) => {
  return Food.deleteMany({
    mealName: mealName
  });
};