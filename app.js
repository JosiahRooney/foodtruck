const express = require('express');
const app = express();
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
          fileName: 'kenny.jpg'
        },
        website: 'https://www.kennysheartandsoul.com/'
      },
      sushi: {
        name: 'We Sushi',
        img: {
          fileName: 'sushi.jpg'
        },
        website: 'http://www.wesushi.net/'
      },
      cassave: {
        name: 'Cassave',
        img: {
          fileName: 'cassave.jpg'
        },
        website: 'http://www.cassaverestaurant.com/'
      },
      chairman: {
        name: 'The Chairman',
        img: {
          fileName: 'chairman.jpg'
        },
        website: 'http://www.hailthechairman.com/'
      },
      bombzies: {
        name: 'Bombzies',
        img: {
          fileName: 'bombzies.jpg'
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
          fileName: 'soco.jpg'
        },
        website: 'http://southerncomfortkitchen.net/'
      },
      waffle: {
        name: 'The Waffle Roost',
        img: {
          fileName: 'waffle.jpg'
        },
        website: 'http://thewaffleroost.com/'
      },
      momo: {
        name: 'Momolicious',
        img: {
          fileName: 'momo.jpg'
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
console.log(foodTruckSchedule.getTruck(['Wed','Aug','1','2018']))

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
  let date = getDate(`${month} ${day} ${year}`); // [ 'Wed', 'Aug', '01', '2018' ]
  let truck = foodTruckSchedule.getTruck(date);
  console.log(truck)

  res.json({
    date,
    truck: truck
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
