`use strict`
const l = prompt('Enter number of participants');
const names = [];
for (let i = 0; i < l; i ++){
   names[i] = prompt('Enter name of participant');
}
names.sort();
document.querySelector('#target').innerHTML = "<p>Name of participants in alphabetical order:</p>";
for (let i = 0; i < l; i++) {
  document.querySelector('#target').innerHTML += `<p>${names[i]}</p>`;
}