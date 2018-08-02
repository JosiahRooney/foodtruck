const express = require('express');
const bodyParser = require('body-parser');
const FoodTruckSchedule = require('./src/FoodTruckSchedule');
const getDate = require('./src/getDate');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = process.env.PORT || 3000;

const foodTruckSchedule = new FoodTruckSchedule();

require('./src/routes')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
