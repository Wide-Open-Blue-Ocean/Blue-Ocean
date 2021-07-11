const express = require('express');
// const cors = require('cors');
const db = require('../database');
const Models = require('../database/models.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../../dist'));
/*
  While writing your endpoints, please do not remove any of the mongo created
  _id properties
**/
app.get('/test', (req, res) => {
  // Models.User.add({userId: 0, name: 'Tom Marvolo Riddle'});
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});