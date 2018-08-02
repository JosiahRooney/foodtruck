const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = process.env.PORT || 3000;

require('./src/routes')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
