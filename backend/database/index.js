const MONGO_USER = 'Heroku';
const PASSWORD = '0hZkC0OutmdJxv8r';
const CLUSTER = 'fullstack-review';


const uri = `mongodb+srv://Heroku:${PASSWORD}@fullstack-review.maljn.mongodb.net/ocean?retryWrites=true&w=majority`;



const mongoose = require('mongoose');
mongoose.connect(uri);
module.exports = mongoose;