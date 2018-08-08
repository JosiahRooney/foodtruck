class FoodTruck {
  constructor() {
    this.endpoint = 'https://emeryville-food-truck.herokuapp.com/today';
  }

  async getData() {
    let response = await fetch(this.endpoint, {
      method: 'POST'
    });
    let json = await response.json();
    let htmlStr = `<div class="results">${json.text}</div>`;
    document.querySelector('.main').innerHTML = htmlStr;
  }
}

const foodTruck = new FoodTruck();
foodTruck.getData();