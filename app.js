const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = process.env.PORT || 3000;


require('./controllers/routes')(app, __dirname);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
