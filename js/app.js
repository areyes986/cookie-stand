'use strict';

//store the html point of contact
var seattleElement = document.getElementById('seattle');


// var hEl = document.createElement('h1'); //create element
// hEl.textContent = 'Seattle' //give element content
// cookieElement.appendChild(hEl); //append to DOM

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

//Seattle Shop

var seattle = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  average: function() {
    var ranNum = this.randomNumber(23, 65);
    var averagePerHour = Math.round(ranNum * 6.3);
    return averagePerHour;
  },

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li'); //create element
      liEl.textContent = `${hours[i]} ${this.average()} cookies`; //give element content
      seattleElement.appendChild(liEl); //append to DOM
    }
  },
};

seattle.render();

// Tokyo Shop
var tokyoElement = document.getElementById('tokyo');

var tokyo = {
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  average: function() {
    var ranNum = this.randomNumber(3, 24);
    var averagePerHour = Math.round(ranNum * 1.2);
    return averagePerHour;
  },

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li'); //create element
      liEl.textContent = `${hours[i]} ${this.average()} cookies`; //give element content
      tokyoElement.appendChild(liEl); //append to DOM
    }
  },
};

tokyo.render();

//Dubai Shop
var dubaiElement = document.getElementById('dubai');

var dubai = {
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  average: function() {
    var ranNum = this.randomNumber(11, 38);
    var averagePerHour = Math.round(ranNum * 3.7);
    return averagePerHour;
  },

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li'); //create element
      liEl.textContent = `${hours[i]} ${this.average()} cookies`; //give element content
      dubaiElement.appendChild(liEl); //append to DOM
    }
  },
};

dubai.render();

//Paris Shop
var parisElement = document.getElementById('paris');

var paris = {
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  average: function() {
    var ranNum = this.randomNumber(20,38);
    var averagePerHour = Math.round(ranNum * 2.3);
    return averagePerHour;
  },

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li'); //create element
      liEl.textContent = `${hours[i]} ${this.average()} cookies`; //give element content
      parisElement.appendChild(liEl); //append to DOM
    }
  },
};

paris.render();


//Lima Shop
var limaElement = document.getElementById('lima');

var lima = {
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesPerCustomer: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  average: function() {
    var ranNum = this.randomNumber(2,16);
    var averagePerHour = Math.round(ranNum * 4.6);
    return averagePerHour;
  },

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li'); //create element
      liEl.textContent = `${hours[i]} ${this.average()} cookies`; //give element content
      limaElement.appendChild(liEl); //append to DOM
    }
  },
};

lima.render();


