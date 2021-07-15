const mongoose = require('../index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const foodSchema = mongoose.Schema({
  email: String,
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
};

module.exports.find = (email, date, mealName) => {
  return Food.find({
    email: email,
    date: date,
    mealName: mealName
  });
};

module.exports.findChecked = (email, date) => {
  return Food.find({
    email: email,
    date: date,
    checked: true
  });
};

module.exports.updateCheck = (_id, checked) => {
  return Food.findOneAndUpdate({
    _id: _id
  }, {
    checked: checked
  });
};

//pass in mongo created __id property
module.exports.delete = (_id) => {
  return Food.deleteOne({
    _id: _id
  });
};

module.exports.deleteByMeal = (mealName) => {
  return Food.deleteMany({
    mealName: mealName
  });
};