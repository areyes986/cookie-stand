'use strict';

//store the html point of contact
var seattleElement = document.getElementById('seattle');


var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];
function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Seattle object

var seattle = {
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      //create element
      var liEl = document.createElement('li');
      //give element content
      liEl.textContent = `${hours[i]} ${randomNumber} cookies`;
      //append to DOM
      seattleElement.appendChild(liEl);
    }
  }

};

seattle.render();
seattle.randomNumber();

// Tokyo object
var tokyoElement = document.getElementById('tokyo');

var tokyo = {
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  render:  function() {
    for( var i = 0; i < hours.length; i++ ) {
      //create element
      var liEl = document.createElement('li');
      //give element content
      liEl.textContent = `${hours[i]} cookies`;
      //append to DOM
      tokyoElement.appendChild(liEl);
    }
  },

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

tokyo.render();
