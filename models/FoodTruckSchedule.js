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
        website: 'http://www.cassaverestaurant.com/',
        menu: [
          { price: '', name: '_Choice of meat:_ Asada, Chicken, Carnitas, Pastor, Prawn, Salmon, Cod, Beef Tongue, Vegetarian (grilled veggies)' },
          { price: '', name: '*Tacos*' },
          { price: '$7.50', name: 'Tacos (3)' },
          { price: '$4.25', name: 'Prawn Taco (1)' },
          { price: '$4.25', name: 'Fish Taco (Salmon)' },
          { price: '$3.50', name: 'Vegetarian Taco (1)' },
          { price: '$8.25', name: 'Baja Fish Tacos (2)' },
          { price: '', name: '*Burritos*' },
          { price: '$9.50', name: 'Burrito Regular' },
          { price: '$10.25', name: 'Burrito Super' },
          { price: '$11.75', name: 'Prawn or Fish Burrito Regular' },
          { price: '$12.75', name: 'Prawn or Fish Burrito Super' },
          { price: '$10.95', name: 'Baja Fish Burrito Wild Cod Fish' },
          { price: '$10.95', name: 'South Cal Burrito' },
          { price: '', name: '*Specialties*' },
          { price: '$11.00', name: 'Burrito Bowl' },
          { price: '$8.50', name: 'Tortas' },
          { price: '$8.50', name: 'Sopes' },
          { price: '$8.50', name: 'Quesadillas' },
          { price: '$11.75', name: 'Quesadillas Prawn' },
          { price: '$8.50', name: 'Nachos' },
          { price: '$11.75', name: 'Super Nachos' },
          { price: '$7.00', name: 'Pupusas' },
          { price: '', name: '*Sides*' },
          { price: '$6.95', name: 'Platanos Fritos (Fried Plantains)' },
          { price: '', name: '*Specials*' },
          { price: '$13.00', name: 'Salmon Burrito Bowl' },
          { price: '$11.00', name: 'Cassave Baja Burrito Bowl' },
          { price: '$11.00', name: 'Chile Verde Bowl' },
          { price: '', name: '*Drinks*' },
          { price: '', name: 'Mexican Coke' },
          { price: '', name: 'Mexican Fanta Orange' },
          { price: '', name: 'Coke' },
          { price: '', name: 'Coke Zero' },
          { price: '', name: 'Cherry Coke' },
          { price: '', name: 'Diet Coke' },
          { price: '', name: 'Dasani Water' },
          { price: '', name: 'Jarritos: Lime, Mandarin, Pineapple' },
          { price: '', name: 'Yerba Mate' },
          { price: '', name: 'San Pellegrino: Lemonata, Aranciata Rossa' },
        ]
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
        website: 'http://thewaffleroost.com/',
        menu: [
          { name: '*Entrees*', price: '' },
          { name: '2 pc fried chicken, mac & cheese, collard greens', price: '$12' },
          { name: '1 pc fried chicken, waffle, mac & cheese, collard greens. Double chicken +$2.50', price: '$12' },
          { name: 'Chicken Bites', price: '$8' },
          { name: 'Waffle Sandwich, fried chicken, egg, bacon, side sweet potato chips', price: '$10' },
          { name: 'Waffle Sandwich, spicy fried chicken, cheddar, serrano peppers, side sweet potato chips', price: '$10' },
          { name: 'Bite size chicken + waffles. Add bacon +$1', price: '$8' },
          { name: 'Waffle sandwich with egg, cheese, serrano peppers, side chips', price: '$8' },
          { name: 'Sweet waffle', price: '$5' },
          { name: '*Sides*', price: '' },
          { name: 'Mac & Cheese', price: '$4' },
          { name: 'Collard Greens (w/ bacon)', price: '$3' },
          { name: 'French Fries', price: '$3' },
          { name: '*Drinks*', price: '' },
          { name: 'Coke', price: '' },
          { name: 'Diet Coke', price: '' },
          { name: 'Sprite', price: '' },
          { name: 'Lemonade', price: '' },
          { name: 'Water', price: '' },
          { name: 'Iced Tea', price: '' },
        ]
      },
      momo: {
        name: 'Momolicious',
        img: {
          fileName: 'https://i.imgur.com/9ZSUaqo.jpg'
        },
        website: 'http://www.momolicioussf.com/',
        menu: [
          { name: '*Momos (10)*', price: '' },
          { name: '_Choose filling:_ Chicken, Vegetable', price: '' },
          { name: 'Kathmandu Momo', price: '$9.50' },
          { name: 'The Ultimate Jhol Momo', price: '$10.50' },
          { name: 'Kothay Momo', price: '$10.50' },
          { name: 'Fiery Momo', price: '$11.50' },
          { name: '*Jr Momos (5)*', price: '' },
          { name: '_Choose filling:_ Chicken, Vegetable', price: '' },
          { name: 'Jr. Kathmandu Momo', price: '$6' },
          { name: 'Jr. The Ultimate Jhol Momo', price: '$7' },
          { name: 'Jr. Kothay Momo', price: '$7' },
          { name: 'Jr. Fiery Momo', price: '$7' },
          { name: '*Entrees*', price: '' },
          { name: 'Nepali Chicken Curry', price: '$11' },
          { name: '+ Combo', price: '$14' },
          { name: 'Nepali Chow Mein', price: '$11' },
          { name: '+ Combo', price: '$14' },
          { name: '*Drinks*', price: '' },
          { name: 'Mango Lassi', price: '$4' },
          { name: 'Snapple', price: '$4' },
          { name: 'Sparkling Water', price: '$3' },
          { name: 'Coconut Water', price: '$3' },
          { name: 'Water', price: '$2' },
          { name: 'Can Soda', price: '$2' },
        ]
      },
      steel: {
        name: 'Steel Smokin\' BBQ & Catering',
        img: {
          fileName: 'https://i.imgur.com/gfk8deq.png'
        },
        website: 'http://www.steelsmokinbbq.com/',
        menu: null
      },
      gyro: {
        name: 'Golden Gate Gyro',
        img: {
          fileName: 'https://i.imgur.com/VsOp4rD.png'
        },
        website: 'https://www.goldengategyro.com/',
        menu: [
          { name: '*Gyros*', price: '' },
          { name: 'Chicken Gyro', price: '' },
          { name: 'Lamb Gyro', price: '' },
          { name: 'Mixed Gyro (chicken and lamb)', price: '' },
          { name: '*Rice Plates*', price: '' },
          { name: 'Chicken Over Rice', price: '' },
          { name: 'Lamb Over Rice', price: '' },
          { name: 'Mixed Over Rice (chicken and lamb)', price: '' },
          { name: '*Salads*', price: '' },
          { name: 'Chicken Over Salad', price: '' },
          { name: 'Lamb Over Salad', price: '' },
          { name: 'Mixed Over Salad (chicken and lamb)', price: '' },
        ]
      },
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
      ],
      Sep: [
        {
          date: moment('2018-09-01').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-02').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-03').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-04').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-09-05').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-09-06').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-09-07').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-09-08').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-09').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-10').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-09-11').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-09-12').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-09-13').format('YYYY-MM-DD'),
          truck: this.trucks.steel
        },
        {
          date: moment('2018-09-14').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-09-15').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-16').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-17').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-09-18').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-09-19').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-09-20').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-09-21').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-09-22').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-23').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-24').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-09-25').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-09-26').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-09-27').format('YYYY-MM-DD'),
          truck: this.trucks.steel
        },
        {
          date: moment('2018-09-28').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-09-29').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-09-30').format('YYYY-MM-DD'),
          truck: null
        },
      ],
      Oct: [
        {
          date: moment('2018-10-01').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-10-02').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-10-03').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-10-04').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-10-05').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-10-06').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-07').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-08').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-10-09').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-10-10').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-10-11').format('YYYY-MM-DD'),
          truck: this.trucks.gyro
        },
        {
          date: moment('2018-10-12').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-10-13').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-14').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-15').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-10-16').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-10-17').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-10-18').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-10-19').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-10-20').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-21').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-22').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-10-23').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-10-24').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-10-25').format('YYYY-MM-DD'),
          truck: this.trucks.gyro
        },
        {
          date: moment('2018-10-26').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-10-27').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-28').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-10-29').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-10-30').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-10-31').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
      ],
      Nov: [
        {
          date: moment('2018-11-01').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-11-02').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-11-03').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-04').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-05').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-11-06').format('YYYY-MM-DD'),
          truck: this.trucks.momo          
        },
        {
          date: moment('2018-11-07').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-11-08').format('YYYY-MM-DD'),
          truck: this.trucks.steel
        },
        {
          date: moment('2018-11-09').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-11-10').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-11').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-12').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-11-13').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-11-14').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-11-15').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-11-16').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-11-17').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-18').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-19').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-11-20').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-11-21').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-11-22').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-23').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-24').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-25').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-11-26').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-11-27').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-11-28').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-11-29').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-11-30').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
      ],
      Dec: [
        {
          date: moment('2018-12-01').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-02').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-03').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-12-04').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-12-05').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-12-06').format('YYYY-MM-DD'),
          truck: this.trucks.steel
        },
        {
          date: moment('2018-12-07').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-12-08').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-09').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-10').format('YYYY-MM-DD'),
          truck: this.trucks.chairman
        },
        {
          date: moment('2018-12-11').format('YYYY-MM-DD'),
          truck: this.trucks.bombzies
        },
        {
          date: moment('2018-12-12').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-12-13').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-12-14').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-12-15').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-16').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-17').format('YYYY-MM-DD'),
          truck: this.trucks.waffle
        },
        {
          date: moment('2018-12-18').format('YYYY-MM-DD'),
          truck: this.trucks.momo
        },
        {
          date: moment('2018-12-19').format('YYYY-MM-DD'),
          truck: this.trucks.kenny
        },
        {
          date: moment('2018-12-20').format('YYYY-MM-DD'),
          truck: this.trucks.steel
        },
        {
          date: moment('2018-12-21').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-12-22').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-23').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-24').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-25').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-26').format('YYYY-MM-DD'),
          truck: this.trucks.india
        },
        {
          date: moment('2018-12-27').format('YYYY-MM-DD'),
          truck: this.trucks.soco
        },
        {
          date: moment('2018-12-28').format('YYYY-MM-DD'),
          truck: this.trucks.cassave
        },
        {
          date: moment('2018-12-29').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-30').format('YYYY-MM-DD'),
          truck: null
        },
        {
          date: moment('2018-12-31').format('YYYY-MM-DD'),
          truck: null
        },
      ],
      // Jan: [
      //   {
      //     date: moment('2018-11-01').format('YYYY-MM-DD'),
      //     truck: this.trucks.soco
      //   },
      //   {
      //     date: moment('2018-11-02').format('YYYY-MM-DD'),
      //     truck: this.trucks.cassave
      //   },
      //   {
      //     date: moment('2018-11-03').format('YYYY-MM-DD'),
      //     truck: this.trucks.india
      //   },
      //   {
      //     date: moment('2018-11-04').format('YYYY-MM-DD'),
      //     truck: this.trucks.soco
      //   },
      //   {
      //     date: moment('2018-11-05').format('YYYY-MM-DD'),
      //     truck: this.trucks.cassave
      //   },
      //   {
      //     date: moment('2018-11-06').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-07').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-08').format('YYYY-MM-DD'),
      //     truck: this.trucks.waffle
      //   },
      //   {
      //     date: moment('2018-11-09').format('YYYY-MM-DD'),
      //     truck: this.trucks.momo
      //   },
      //   {
      //     date: moment('2018-11-10').format('YYYY-MM-DD'),
      //     truck: this.trucks.kenny
      //   },
      //   {
      //     date: moment('2018-11-11').format('YYYY-MM-DD'),
      //     truck: this.trucks.gyro
      //   },
      //   {
      //     date: moment('2018-11-12').format('YYYY-MM-DD'),
      //     truck: this.trucks.cassave
      //   },
      //   {
      //     date: moment('2018-11-13').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-14').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-15').format('YYYY-MM-DD'),
      //     truck: this.trucks.chairman
      //   },
      //   {
      //     date: moment('2018-11-16').format('YYYY-MM-DD'),
      //     truck: this.trucks.bombzies
      //   },
      //   {
      //     date: moment('2018-11-17').format('YYYY-MM-DD'),
      //     truck: this.trucks.india
      //   },
      //   {
      //     date: moment('2018-11-18').format('YYYY-MM-DD'),
      //     truck: this.trucks.soco
      //   },
      //   {
      //     date: moment('2018-11-19').format('YYYY-MM-DD'),
      //     truck: this.trucks.cassave
      //   },
      //   {
      //     date: moment('2018-11-20').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-21').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-22').format('YYYY-MM-DD'),
      //     truck: this.trucks.waffle
      //   },
      //   {
      //     date: moment('2018-11-23').format('YYYY-MM-DD'),
      //     truck: this.trucks.momo
      //   },
      //   {
      //     date: moment('2018-11-24').format('YYYY-MM-DD'),
      //     truck: this.trucks.kenny
      //   },
      //   {
      //     date: moment('2018-11-25').format('YYYY-MM-DD'),
      //     truck: this.trucks.gyro
      //   },
      //   {
      //     date: moment('2018-11-26').format('YYYY-MM-DD'),
      //     truck: this.trucks.cassave
      //   },
      //   {
      //     date: moment('2018-11-27').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-28').format('YYYY-MM-DD'),
      //     truck: null
      //   },
      //   {
      //     date: moment('2018-11-29').format('YYYY-MM-DD'),
      //     truck: this.trucks.chairman
      //   },
      //   {
      //     date: moment('2018-11-30').format('YYYY-MM-DD'),
      //     truck: this.trucks.bombzies
      //   },
      // ],
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