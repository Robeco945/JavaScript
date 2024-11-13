'use strict'
const dogs = [6];
for (let i = 0; i < 6; i ++){
   dogs[i] = prompt('Enter name of dogs');
}
dogs.sort()
document.querySelector('#target').innerHTML = "<p>Name of dogs in reverse alphabetical order:</p>";
for (let i = 5; i >= 0; i--) {
  document.querySelector('#target').innerHTML += `<p>${dogs[i]}</p>`;
}