'use strict';

///////////////////////////Global////////////////////////////////

var cookieElement = document.getElementById('salmonCookies');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm', '6pm', '7pm'];

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

//////////Constructor for shops/////////////

var allShops = [];
var allTotal = 0;

function Shops (name, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForTheDay = 0;

  allShops.push(this);

  this.calcCustomerEachHour();
  this.calcCookieEachHour();
}


///////////////////////prototypes//////////
Shops.prototype.calcCustomerEachHour = function(){
  for (var i = 0; i < hours.length; i++) {
    var calc = randomNumber(this.minCustomersEachHour,this.maxCustomersEachHour);
    this.customersEachHour.push(calc);
  }
};

Shops.prototype.calcCookieEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    var cookies = Math.round(this.averageCookiesPerCustomer * this.customersEachHour[i]);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesForTheDay += this.cookiesEachHour[i];
    allTotal += cookies;
    console.log(allTotal);
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
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesForTheDay} cookies`;
  ulEl.appendChild(liEl);
  cookieElement.appendChild(ulEl);
};

//////////////////////Instantiation////////////////////////
new Shops('Seattle Shop', 23, 65, 6.3);
new Shops('Tokyo Shop', 3, 24, 1.2);
new Shops('Dubai Shop', 11, 38, 3.7);
new Shops('Paris Shop', 20, 38, 2.3);
new Shops('Lima Shop', 2, 16, 4.6);


//////////////////////Table Code///////////////////////////

var table = document.getElementById('salmonCookies');

var thEl = document.createElement('th');
var tdEl = document.createElement('td');
var trEl = document.createElement('tr');


function makeTr1(){
  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  //hours to table
  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  //Total to table
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total Location';
  trEl.appendChild(thEl);
  table.appendChild(trEl);
}

Shops.prototype.makeTh2 = function() {

  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdEl);
  table.appendChild(trEl);
};

function makeFooter(){
  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length;i++){
    var storesHourlyTotals = 0;
    tdEl = document.createElement('td');

    for (var j = 0; j < allShops.length; j++){
      storesHourlyTotals += allShops[j].cookiesEachHour[i];
    }
    tdEl.textContent = storesHourlyTotals;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl. textContent = allTotal;
  trEl.appendChild(tdEl);
  table.appendChild(trEl);
}

///////////Forms and Events/////////////

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  document.getElementsByTagName('table')[0].innerHTML = '';
  var shopName = event.target.inputShopname.value;
  var minCust = parseInt(event.target.inputMinimumCustomers.value);
  var maxCust = parseInt(event.target.inputMaximumCustomers.value);
  var avgCookieSale = parseInt(event.target.inputAveCookieSale.value);


  // event.target.inputShopname.value = null;
  // event.target.nputMinimumCustomers.value = null;
  // event.target.inputMaximumCustomers.value = null;
  // event.target.inputAveCookieSale.value = null;

  new Shops(shopName, minCust , maxCust, avgCookieSale);
  makeTr1();
  for(var i = 0; i < allShops.length; i++){
    allShops[i].makeTh2();
  }
  makeFooter();
}

makeTr1();
for(var i = 0; i < allShops.length; i++){
  allShops[i].makeTh2();
}
makeFooter();


