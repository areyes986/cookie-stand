'use strict';

///////////////////////////Global////////////////////////////////

var cookieElement = document.getElementById('salmonCookies');

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ','5pm: ', '6pm: ', '7pm: '];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//////////Constructor for shops/////////////

var allShops = [];

function Shops (name, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForTheDay = 0;

  allShops.push(this);
}

Shops.prototype.calcCustomerEachHour = function(){
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(randomNumber(23,65));
  }
};

Shops.prototype.calcCookieEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    var cookies = Math.round(this.averageCookiesPerCustomer * this.customersEachHour[i]);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesForTheDay += this.cookiesEachHour[i];
  }
};

Shops.prototype.render = function(){
  this.calcCustomerEachHour();
  this.calcCookieEachHour();
  var h2El = document.createElement('h2');
  h2El.textContent = this.name;
  cookieElement.appendChild(h2El);
  var ulEl = document.createElement('ul');
  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]} ${this.cookiesEachHour[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li')
  liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
  ulEl.appendChild(liEl);
  cookieElement.appendChild(ulEl);
};

var seattleShop = new Shops('Seattle Shop', 23, 65, 6.3);
seattleShop.render();
var tokyoShop = new Shops('Tokyo Shop', 3, 24, 1.2);
tokyoShop.render();
var dubaiShop = new Shops('Dubai Shop', 11, 38, 3.7);
dubaiShop.render();
var parisShop = new Shops('Paris Shop', 20, 38, 2.3);
parisShop.render();
var limaShop = new Shops('Lima Shop', 2, 16, 4.6);
limaShop.render();


//////////////////////Table Code///////////////////////////
