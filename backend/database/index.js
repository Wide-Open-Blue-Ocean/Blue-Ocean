const MONGO_USER = 'Heroku';
const PASSWORD = require('./config.js')
const CLUSTER = 'fullstack-review';

const uri = `mongodb+srv://Heroku:${PASSWORD}@fullstack-review.maljn.mongodb.net/ocean?retryWrites=true&w=majority`;

const mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } );
module.exports = mongoose;