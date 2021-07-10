const express = require('express');
// const cors = require('cors');
// const db = require('../database');

const app = express();
const port = process.env.PORT || 3000;

// middleware
// app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../../dist'));

app.get('/', (req, res) => {
  res.send('Test: MR T');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});