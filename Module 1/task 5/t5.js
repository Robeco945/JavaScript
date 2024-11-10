'use strict';
const year = prompt('Enter the year you wish to check: ');
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    document.querySelector('#target').innerHTML = `<p>the year ${year} is a leap year</p>`;
  }
else(document.querySelector('#target').innerHTML = `<p>the year ${year} is not a leap year</p>`);