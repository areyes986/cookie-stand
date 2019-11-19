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
  // this.renderBody();

}


///////////////////////prototypes//////////
Shops.prototype.calcCustomerEachHour = function(){
  for (var i = 0; i < hours.length; i++) {
    var custEachHour = randomNumber(this.minCustomersEachHour,this.maxCustomersEachHour);
    this.customersEachHour.push(custEachHour);
  }
  // console.log(custEachHour);
};


Shops.prototype.calcCookieEachHour = function(){
  for (var i = 0; i < this.customersEachHour.length; i++){
    var cookieHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
    this.cookiesEachHour.push(cookieHour);
    this.totalCookiesForTheDay += this.cookiesEachHour[i];
    allTotal += cookieHour;
  }
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


function heading(){
  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length;i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  table.appendChild(trEl);
}

heading();

Shops.prototype.renderBody = function() {
  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for (var i = 0; i < this.cookiesEachHour.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i]
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdEl);
  table.appendChild(trEl);
};

for (var i =0 ; i < allShops.length; i++){
  allShops[i].renderBody();
}

function footer(){
  trEl = document.createElement('tr');
  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length;i++){
    var dayCookie = 0;
    tdEl = document.createElement('td');

    for (var j = 0; j < allShops.length; j++){
      dayCookie += allShops[j].cookiesEachHour[i];
      tdEl.textContent = dayCookie;
      trEl.appendChild(tdEl);
    }
  }
  
  tdEl = document.createElement('td');
  tdEl.textContent = allTotal;
  trEl.appendChild(tdEl);
  table.appendChild(trEl);
}

footer();

///////////Forms and Events/////////////

// var userForm = document.getElementById('user-form');
// userForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event){
//   event.preventDefault();



//   makeTr1();
//   for(var i = 0; i < allShops.length; i++){
//     allShops[i].makeTh2();
//   }
//   makeFooter();
// }

// makeTr1();
// for(var i = 0; i < allShops.length; i++){
//   allShops[i].makeTh2();
// }
// makeFooter();


