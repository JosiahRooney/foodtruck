const moment = require('moment-timezone');
const FoodTruckSchedule = require('../models/FoodTruckSchedule');
const foodTruckSchedule = new FoodTruckSchedule();
moment.tz.setDefault('America/Los_Angeles');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({
      status: 'success'
    });
  });

  // Must be YYYYMMDD
  app.get('/truck/:date', (req, res) => {
    let dateInput = req.params.date;
    let date = moment(dateInput);
    let truck = foodTruckSchedule.getTruck(date);

    res.json({
      status: 'success',
      date,
      truck: truck
    });
  });

  app.post('/today', (req, res) => {
    const date = moment();
    let truck = foodTruckSchedule.getTruck(date);

    let responseObj = {
      response_type: 'in_channel',
      text: 'There is no food truck today :slightly_frowning_face',
      date
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
            responseObj.text = `*${truck.name}'s* menu isn't yet available! :sadpanda:`
            responseObj.attachments = [];
          }
        }

        if (body.text === 'week') {
          let week = foodTruckSchedule.getTrucksOfWeek();
          console.log('week:', week);
          responseObj.text = 'The trucks of the week:';
          responseObj.attachments = [];
          
          week.forEach((day) => {
            if (day.truck !== null) {
              responseObj.attachments.push({
                title: `${moment(day.date).format('dddd, MMMM Do')}`,
                text: `Truck: *${day.truck.name}* - Website: ${day.truck.website}`
              })
            }
          });
        }
      }
    }
    res.status(200).json(responseObj);
  });
}