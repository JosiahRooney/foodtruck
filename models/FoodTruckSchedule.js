const moment = require('moment');

module.exports = class FoodTruckSchedule {
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
          { price: '', name: '*Sides*' },
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
        menu: [
          { price: '', name: 'Classic Sushi Burrito' },
          { price: '', name: 'Vegan Burrito' },
          { price: '', name: 'Sumo Burrito' },
          { price: '', name: 'Ahi Poke Burrito' },
          { price: '', name: 'Monster Burrito' },
          { price: '', name: 'Chicken Teriyaki Bento' },
          { price: '', name: 'Shrimp Tempura Donburi' },
          { price: '', name: 'Unagi Donburi' },
          { price: '', name: 'Poke Bowl' },
          { price: '', name: 'Lobster Crunch Roll' },
          { price: '', name: 'Wheel of Fire Roll' },
          { price: '', name: 'Sekiwake Roll' },
          { price: '', name: 'Crispy California Roll' },
          { price: '', name: 'Rainbow Roll' },
          { price: '', name: 'Vegan Roll' }
        ]
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
        website: 'http://www.hailthechairman.com/',
        menu: [
          { price: '', name: '*Entrees*' },
          { price: '$4.25', name: 'Pork Belly steamed bun' },
          { price: '$7.50', name: 'Pork Belly Baked bun' },
          { price: '$4.25', name: 'Braised Pork steamed bun' },
          { price: '$7.50', name: 'Braised Pork Baked bun' },
          { price: '$3.75', name: 'Spicy Chicken steamed bun' },
          { price: '$6.75', name: 'Spicy Chicken Baked bun' },
          { price: '$3.75', name: 'Crispy Tofu steamed bun (vegetarian)' },
          { price: '$6.75', name: 'Crispy Tofu Baked bun (vegetarian)' },
          { price: '', name: '*Sides*' },
          { price: '$2.75', name: 'Bao Chips' },
          { price: '', name: '*Drinks*' },
          { price: '$2.50', name: 'Coconut Juice' },
          { price: '$2', name: 'Bottled Water' },
          { price: '$2', name: 'Soda' }
        ]
      },
      bombzies: {
        name: 'Bombzies',
        img: {
          fileName: 'https://i.imgur.com/QgVCDUu.jpg'
        },
        website: 'http://www.bombziesbbq.com/',
        menu: [
          { price: '', name: '*Style*' },
          { price: '$11', name: 'Rice Bowl' },
          { price: '$10', name: 'Baguette' },
          { price: '', name: '*Flavor*' },
          { price: '', name: 'Korean BBQ Chicken' },
          { price: '', name: 'Teriyaki Chicken' },
          { price: '', name: 'Thai Coconut Chicken' },
          { price: '', name: 'Lemongrass Chicken' },
          { price: '', name: '*Toppings*' },
          { price: '', name: 'Napa Cabbage Kimchi' },
          { price: '', name: 'Tangy Daikon and Carrots' },
          { price: '', name: '*Sides*' },
          { price: '$4', name: 'Kimchi Queso Fries' },
          { price: '$4', name: 'Vietnamese Egg Rolls' },
          { price: '$6', name: 'Saigon Chicken Wings' },
          { price: '', name: '*Drinks*' },
          { price: '$3', name: 'Water' },
          { price: '$3', name: 'Coke' },
          { price: '$3', name: 'Diet Coke' },
        ]
      },
      india: {
        name: 'Munch India',
        img: {
          fileName: 'https://i.imgur.com/lANE8FO.jpg'
        },
        website: 'http://munchindia.com/',
        menu: [
          { price: '', name: '*Vegetarian Entrees*' },
          { price: '$7', name: 'Chana Masala' },
          { price: '$7', name: 'Aloo Gobi' },
          { price: '$7', name: 'Imli Biagan' },
          { price: '', name: '*Non-veggie Entrees*' },
          { price: '$9', name: 'Chicken Masala' },
          { price: '$10', name: 'Chicken Kebab' },
          { price: '', name: '*Combo*' },
          { price: '$10', name: 'Veg Combo' },
          { price: '$12', name: 'Non-veg Combo' },
          { price: '', name: '*Chef\'s Special*' },
          { price: '$10', name: 'Lamb Kofta' },
          { price: '$11', name: 'Goan Shrimp Curry' },
          { price: '', name: '*Drinks*' },
          { price: '', name: 'Sprite' },
          { price: '', name: 'Coke' },
          { price: '', name: 'Water' }
        ]
      },
      soco: {
        name: 'Southern Comfort Kitchen',
        img: {
          fileName: 'https://i.imgur.com/Sri9MVn.jpg'
        },
        website: 'http://southerncomfortkitchen.net/',
        menu: [
          { price: '', name: '*Entrees*' },
          { price: '$10', name: 'Chicken \'n Sausage Jambalaya' },
          { price: '$10', name: 'Seafood Gumbo' },
          { price: '$10', name: 'Southern Fried Chicken sandwich' },
          { price: '$10', name: 'Fried Shrimp Po\' Boy' },
          { price: '$10', name: 'Fried Catfish Po\' Boy' },
          { price: '$10', name: 'Crawfish Étouffée' },
          { price: '$10', name: 'Garlic Battered Cajun Fried Shrimp Fries' },
          { price: '', name: '*Sides*' },
          { price: '$6', name: 'Cajun French Fries' },
          { price: '', name: '*Drinks*' },
          { price: '$2', name: 'Coke' },
          { price: '$2', name: 'Diet Coke' },
          { price: '$2', name: 'Water' },
        ]
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
          date: moment('2018-08-01').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-08-02').format('YYYY-MM-DD'),
          truck: this.trucks.sushi
        },
        {
          date: moment('2018-08-03').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-08-04').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-05').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-06').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-08-07').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-08-08').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-08-09').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-08-10').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-08-11').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-12').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-13').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-08-14').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-08-15').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-08-16').format('YYYY-MM-DD'),
          truck: this.trucks.sushi
        },
        {
          date: moment('2018-08-17').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-08-18').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-19').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-20').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-08-21').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-08-22').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-08-23').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-08-24').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-08-25').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-26').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-08-27').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-08-28').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-08-29').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-08-30').format('YYYY-MM-DD'),
          truck: this.trucks.sushi
        },
        {
          date: moment('2018-08-31').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        }
      ]
    }
  }

  getTruck(input) {
    input = input.format('YYYY-MM-DD')
    let month = moment(input).format('MMM');

    if (this.schedule[month] === undefined) {
      return false;
    }

    let truck = null;

    this.schedule[month].forEach((day) => {
      if (day.date == input) {
        truck = day.truck;
      }
    });

    return truck;
  }

  getWeek() {
    const startOfWeek = moment().startOf('isoWeek');
    const endOfWeek = moment().endOf('isoWeek');
    let days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
      days.push(day.format('YYYY-MM-DD'));
      day = day.clone().add(1, 'd');
    }
    return days;
  }

  getTrucksOfWeek() {
    let daysOfWeek = this.getWeek();
    let month = moment().format('MMM');
    let trucks = [];

    if (this.schedule[month] === undefined) {
      return false;
    }

    this.schedule[month].forEach((day) => {
      daysOfWeek.forEach((dayOfWeek) => {
        if (dayOfWeek === day.date && day.truck !== null) {
          trucks.push(day);
        }
      });
    });
    return trucks;
  }
}