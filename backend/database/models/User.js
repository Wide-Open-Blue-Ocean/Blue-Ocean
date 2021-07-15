const mongoose = require('../index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const userSchema = mongoose.Schema({
  name: String,
  email: String
});

let User = mongoose.model('User', userSchema, 'users');


module.exports.add = (entry) => {
  var newUser = new User(entry);
  return newUser.save();
};

module.exports.find = (email) => {
  return User.find({
    email: email,
  });
};

//pass in the mongo created __id property
module.exports.delete = (_id) => {
  return User.deleteOne({
    _id: _id
  });
};

module.exports.findAll = () => {
  return User.find()
}