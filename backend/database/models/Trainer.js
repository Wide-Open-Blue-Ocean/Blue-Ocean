const mongoose = require('../index.js');

//hhmm-hhmm time range
//yyyymmdd date format allows comparison of dates using numerical comparison operators like >= or <=
const trainerSchema = mongoose.Schema({
  userId: Number,
  name: String,
  email: String,
  clientEmails: [],
  isTrainer: true
});
//need to implement in chat a way to switch which client trainer is chatting with


let Trainer = mongoose.model('Trainer', userSchema, 'trainers');


module.exports.add = (entry) => {
  var newTrainer = new Trainer(entry);
  return newTrainer.save();
};

module.exports.find = (userId) => {
  return Trainer.find({
    userId: userId,
  });
};

//pass in the mongo created __id property
module.exports.delete = (_id) => {
  return Trainer.deleteOne({
    _id: _id
  });
};