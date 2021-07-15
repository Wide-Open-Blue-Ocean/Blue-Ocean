const mongoose = require('../index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const userSchema = mongoose.Schema({
  userId: Number,
  name: String,
  email: String,
  palEmail: String,
  isTrainer: Boolean
});

let User = mongoose.model('User', userSchema, 'users');


module.exports.add = (entry) => {
  var newUser = new User(entry);
  return newUser.save();
};

module.exports.find = (userId) => {
  return User.find({
    userId: userId,
  });
};

//pass in the mongo created __id property
module.exports.delete = (_id) => {
  return User.deleteOne({
    _id: _id
  });
};