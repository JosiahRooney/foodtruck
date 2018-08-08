class FoodTruck {
  constructor() {
    let d = this.getDate();
    this.endpoint = `/truck/${d}`;
  }

  getDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');
  }

  async getData() {
    let response = await fetch(this.endpoint, {
      method: 'GET'
    });
    let json = await response.json();
    let { truck } = json;
    let menu = '';

    if (truck.menu) {
      menu = truck.menu.map((el) => {
        if (el.name.includes('*')) {
          el.name = el.name.split('*');
          el.name = `<strong>${el.name[1]}</strong>`;
        }
        return `<p>${el.price} ${el.name}</p>`;
      });
    }

    menu = menu.join('');

    let htmlStr = `
      <div class="truck">
        <div class="truck__photo"><img src="${truck.img.fileName}" /></div>
        <div class="truck__name">
          <h1>${truck.name}</h1>
        </div>
        <div class="truck__website">
          <h2>Website</h2>
          <p><a href="${truck.website}">${truck.website}</a></p>
        </div>
        <div class="truck__menu">
          <h2>Menu</h2>
          <div class="menu__inner">${menu}</div>
        </div>
      </div>
    `;
    document.querySelector('.main').innerHTML = htmlStr;
  }
}

const foodTruck = new FoodTruck();
foodTruck.getData();