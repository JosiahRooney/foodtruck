class FoodTruck {
  constructor() {
    this.endpoint = 'https://emeryville-food-truck.herokuapp.com/today';
  }

  async getData() {
    let response = await fetch(this.endpoint, {
      method: 'POST'
    });
    let json = await response.json();
    let text = json.text.split('*');
    let output = `${text[0]}<strong>${text[1]}</strong>${text[2]}`;
    text = output.split('http://');
    output = `${text[0]}<a href="http://${text[1]}">${text[1]}</a>`;
    let htmlStr = `<div class="results">${output}</div>`;
    document.querySelector('.main').innerHTML = htmlStr;
  }
}

const foodTruck = new FoodTruck();
foodTruck.getData();