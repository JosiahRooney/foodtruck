const FoodTruckSchedule = require('../models/FoodTruckSchedule');
const getDate = require('../helpers/getDate');
const foodTruckSchedule = new FoodTruckSchedule();

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({
      status: 'success'
    });
  });

  // Must be YYYYMMDD
  app.get('/truck/:date', (req, res) => {
    let dateInput = req.params.date;
    let year = dateInput.substring(0, 4);
    let month = dateInput.substring(4, 6);
    let day = dateInput.substring(6);
    if (day.split('')[0] === '0') {
      day = day.split('')[1];
    }
    let date = getDate(`${month} ${day} ${year}`);
    let truck = foodTruckSchedule.getTruck(date);

    res.json({
      status: 'success',
      date,
      truck: truck
    });
  });

  app.post('/today', (req, res) => {
    const d = new Date();
    let utcDate = new Date(d.toUTCString());
    utcDate.setHours(utcDate.getHours() - 8);
    const usDate = new Date(utcDate);
    let date = getDate(`${usDate.getMonth() + 1} ${usDate.getDate()} ${usDate.getFullYear()}`);
    let truck = foodTruckSchedule.getTruck(date);
    let responseObj = {
      response_type: 'in_channel',
      text: 'There is no food truck today :slightly_frowning_face',
      date: usDate
    }
    let body = req.body;

    if (truck) {
      responseObj.text = `The food truck today is *${truck.name}*. See their menu at ${truck.website}`;
      responseObj.attachments = [
        {
          title: truck.name,
          image_url: truck.img.fileName
        }
      ]

      if (body && body.text) {
        // Add commands here

        // Menu
        if (body.text === 'menu') {
          if (truck.menu) {
            const menu = truck.menu.map((el) => {
              return el.price + ' ' + el.name;
            });
            responseObj.text = `*${truck.name}'s* menu (_subject to change_):`;
            responseObj.attachments = [{
              text: menu.join('\n')
            }];
          } else {
            responseObj.text = `*${truck.name}'s* menu isn't yet available!`
          }
        }
      }
    }
    res.status(200).json(responseObj);
  });
}