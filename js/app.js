'use strict';

///////////////////////////Global////////////////////////////////
var cookieElement = document.getElementById('salmonCookies');

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Seattle Shop

var seattle = {
  name: 'Seattle Shop',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomerEachHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(randomNumber(23,65));
    }
  // console.log(this.customersEachHour);
  },

  calcCookieEachHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookies = Math.round(this.averageCookiesPerCustomer * this.customersEachHour[i]);
      this.cookiesEachHour.push(cookies);
      this.totalCookiesForTheDay += this.cookiesEachHour[i]
    }
    console.log(this.totalCookiesForTheDay);
  },

  render: function(){
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
    liEl.textContent = ` Total: ${this.totalCookiesForTheDay} cookies`;
    ulEl.appendChild(liEl);
    cookieElement.appendChild(ulEl);
  }
};

seattle.render(); 



