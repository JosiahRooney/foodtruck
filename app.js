const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = process.env.PORT || 3000;

function getDate(string) {
  let d = new Date(string);
  return String(d).split(' ').slice(0, 4);
}

class FoodTruckSchedule {
  constructor() {
    this.trucks = {
      kenny: {
        name: 'Kenny\'s Heart & Soul',
        img: {
          fileName: 'https://i.imgur.com/hxyv20F.jpg'
        },
        website: 'https://www.kennysheartandsoul.com/',
        menu: [
          { price: '', name: '*Entrees*' },
          { price: '$10', name: '5 Fried Chicken Wingettes' },
          { price: '$10', name: 'BBQ Pork Mac N Cheese' },
          { price: '$12', name: 'Fried Chicken Sandwich' },
          { price: '$12', name: 'BBQ Pulled Pork Sandwich' },
          { price: '$12', name: 'BBQ Fried Tofu Sandwich' },
          { price: '$14', name: 'BBQ Pulled Pork Mac n Cheese Sandwich' },
          { price: '', name: '*Sides*'},
          { price: '$4', name: 'Collard Greens with Smoked Turkey' },
          { price: '$4', name: 'Spicey BBQ Baked Beans' },
          { price: '$4', name: 'Black Eyed Peas with Smoked Turkey' },
          { price: '$2', name: 'Cornbread' },
          { price: '', name: '*Drinks*' },
          { price: '$2', name: 'Coke' },
          { price: '$2', name: 'Diet Coke' },
          { price: '$2', name: 'Sprite' },
          { price: '$2', name: 'Water' },
          { price: '$2', name: 'Red Kool Aid' },
          { price: '$2', name: 'Grape Kool Aid' }
        ]
      },
      sushi: {
        name: 'We Sushi',
        img: {
          fileName: 'https://i.imgur.com/H6Tenem.jpg'
        },
        website: 'http://www.wesushi.net/',
        menu: 'Classic Sushi Burrito\nVegan Burrito\nSumo Burrito\nAhi Poke Burrito\nMonster Burrito\nChicken Teriyaki Bento\nShrimp Tempura Donburi\nUnagi Donburi\nPoke Bowl\nLobster Crunch Roll\nWheel of Fire Roll\nSekiwake Roll\nCrispy California Roll\nRainbow Roll\nVegan Roll'
      },
      cassave: {
        name: 'Cassave',
        img: {
          fileName: 'https://i.imgur.com/6PHCZkq.jpg'
        },
        website: 'http://www.cassaverestaurant.com/'
      },
      chairman: {
        name: 'The Chairman',
        img: {
          fileName: 'https://i.imgur.com/LwVIbsL.jpg'
        },
        website: 'http://www.hailthechairman.com/'
      },
      bombzies: {
        name: 'Bombzies',
        img: {
          fileName: 'https://i.imgur.com/QgVCDUu.jpg'
        },
        website: 'http://www.bombziesbbq.com/'
      },
      india: {
        name: 'Munch India',
        img: {
          fileName: 'india.jpg'
        },
        website: 'http://munchindia.com/'
      },
      soco: {
        name: 'Southern Comfort Kitchen',
        img: {
          fileName: 'https://i.imgur.com/Sri9MVn.jpg'
        },
        website: 'http://southerncomfortkitchen.net/'
      },
      waffle: {
        name: 'The Waffle Roost',
        img: {
          fileName: 'https://i.imgur.com/oDWIv9w.jpg'
        },
        website: 'http://thewaffleroost.com/'
      },
      momo: {
        name: 'Momolicious',
        img: {
          fileName: 'https://i.imgur.com/9ZSUaqo.jpg'
        },
        website: 'http://www.momolicioussf.com/'
      }
    }
    this.schedule = {
      Aug: [
        {
          date: getDate('August 1 2018'),
          truck: this.trucks.kenny
        },
        {
          date: getDate('August 2 2018'),
          truck: this.trucks.sushi
        },
        {
          date: getDate('August 3 2018'),
          truck: this.trucks.cassave
        },
        {
          date: getDate('August 4 2018'),
          truck: null
        },
        {
          date: getDate('August 5 2018'),
          truck: null
        },
        {
          date: getDate('August 6 2018'),
          truck: this.trucks.chairman
        },
        {
          date: getDate('August 7 2018'),
          truck: this.trucks.bombzies
        },
        {
          date: getDate('August 8 2018'),
          truck: this.trucks.india
        },
        {
          date: getDate('August 9 2018'),
          truck: this.trucks.soco
        },
        {
          date: getDate('August 10 2018'),
          truck: this.trucks.cassave
        },
        {
          date: getDate('August 11 2018'),
          truck: null
        },
        {
          date: getDate('August 12 2018'),
          truck: null
        },
        {
          date: getDate('August 13 2018'),
          truck: this.trucks.waffle
        },
        {
          date: getDate('August 14 2018'),
          truck: this.trucks.momo
        },
        {
          date: getDate('August 15 2018'),
          truck: this.trucks.kenny
        },
        {
          date: getDate('August 16 2018'),
          truck: this.trucks.sushi
        },
        {
          date: getDate('August 17 2018'),
          truck: this.trucks.cassave
        },
        {
          date: getDate('August 18 2018'),
          truck: null
        },
        {
          date: getDate('August 19 2018'),
          truck: null
        },
        {
          date: getDate('August 20 2018'),
          truck: this.trucks.chairman
        },
        {
          date: getDate('August 21 2018'),
          truck: this.trucks.bombzies
        },
        {
          date: getDate('August 22 2018'),
          truck: this.trucks.india
        },
        {
          date: getDate('August 23 2018'),
          truck: this.trucks.soco
        },
        {
          date: getDate('August 24 2018'),
          truck: this.trucks.cassave
        },
        {
          date: getDate('August 25 2018'),
          truck: null
        },
        {
          date: getDate('August 26 2018'),
          truck: null
        },
        {
          date: getDate('August 27 2018'),
          truck: this.trucks.waffle
        },
        {
          date: getDate('August 28 2018'),
          truck: this.trucks.momo
        },
        {
          date: getDate('August 29 2018'),
          truck: this.trucks.kenny
        },
        {
          date: getDate('August 30 2018'),
          truck: this.trucks.sushi
        },
        {
          date: getDate('August 31 2018'),
          truck: this.trucks.cassave
        }
      ]
    }
  }

  getTruck(input) {
    let inputMonth = input[1]; // Aug

    if (this.schedule[inputMonth] === undefined) {
      return false;
    }

    let truck = null;

    this.schedule[inputMonth].forEach((day) => {
      if (day.date.join(' ') == input.join(' ')) {
        truck = day.truck;
      }
    });

    return truck;
  }
}

const foodTruckSchedule = new FoodTruckSchedule();

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
      if (body.text === 'menu' && truck.menu) {
        const menu = truck.menu.map((el) => {
          return el.price + ' ' + el.name;
        });
        responseObj.text = `*${truck.name}'s* menu (_subject to change_):`;
        responseObj.attachments = [{
          title: 'Menu',
          text: menu.join('\n')
        }];
      }
    }
  }
  res.status(200).json(responseObj);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
