'use strict';

const start = prompt('enter the starting year: ');
const end = prompt('enter the ending year: ');

for (let i = start; i <= end; i++) {
  if(i % 4 === 0 && i % 100 !== 0 || i % 400 === 0){
    document.querySelector('#target').innerHTML += `<li>${i}</li>`;
  }
}