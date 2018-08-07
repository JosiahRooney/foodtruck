const getDate = require('../helpers/getDate');

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
          { price: '', name: 'Kimchi Queso Fries' },
          { price: '', name: 'Vietnamese Egg Rolls' },
          { price: '', name: 'Saigon Chicken Wings' },
          { price: '', name: '*Drinks*' },
          { price: '$3', name: 'Water' },
          { price: '$3', name: 'Coke' },
          { price: '$3', name: 'Diet Coke' },
        ]
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