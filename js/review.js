'use strict';

//////////Constructor/////////

//array to show store hours
//array to store all new cookie shops.
//document.getElement to store tables ID, access HTML DOM
//a counter to tally the all stores total
//constructos to create new instances of cookie shops


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm','5pm', '6pm', '7pm'];

CookieShop.allStores = [];
CookieShop.tableDataEl = document.getElementById('tableData');
CookieShop.allStoresTotal = 0;

function CookieShop (minCust, maxCust, avgCookie,locName){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.locName = locName;
  this.hourlyCookiesTotal = [];
  this.dailyCookies = 0; //always initialize at zero for counters

  CookieShop.allStores.push(this);

  //generate cookies upon instaniation
  this.generateHourlyCookies();
  //generate shop row upon instantaittion
  this.renderShopRow();
}

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

CookieShop.prototype.generateHourlyCookies = function(){
  for (var i = 0; i < hours.length; i++){
    var cookie = Math.ceil(this.avgCookie * randomNumber(this.minCust, this.maxCust));
    this.hourlyCookiesTotal.push(cookie);
    this.dailyCookies += cookie;
    CookieShop.allStoresTotal += cookie;
  }
};

//function to render header row

var renderHeaderTow = function(){
  //create elements
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  //give content
  thEl.textContent = 'Location';
  //append elements to the DOM
  trEl.appendChild(thEl);

  for(var i = 0; i < CookieShop.hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = CookieShop.hours[i];
    trEl.appendChild('tdEl');
  }
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);

  CookieShop.tableDataEl.appendChild(trEl);
};

renderHeaderTow();

//function to render shop rows

CookieShop.prototype.renderShopRow = function(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.locName;
  trEl.appendChild(thEl);

  for (var i = 0; i < CookieShop.hourlyCookiesTotal.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesTotal[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.dailyCookies;
  trEl.appendChild(tdEl);
  CookieShop.tableDataEl.appendChild(trEl);
};

//function to render footer with totals

var renderFooterRow = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals: ';
  trEl.appendChild(tdEl);

  for(var i = 0; i < CookieShop.hours.length; i++){
    var storesHourlyTotals = 0;
    var td = document.createElement('td');

    for ( var j = 0; j < CookieShop.allStores.length; j++){
      storesHourlyTotals += CookieShop.allStores[j].hourlyCookiesTotal[i];
    }
    td. textContent = storesHourlyTotals;
    trEl.appendChild(td);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = CookieShop.allStoresTotal;
  trEl.appendChild(tdEl);
  CookieShop.tableDataEl.appendChild(trEl);
};


new CookieShop(23,34,3.3,'seattle');
renderFooterRow();
