
'use strict';
const numbers = [];
for (let i = 0;i < 5;i++){
  numbers[i] = prompt(`Enter your ${i+1} number`);
}

document.querySelector('#target').innerHTML = "<p>Numbers in reverse:</p>";
for (let i = 4; i >= 0; i--) {
  document.querySelector('#target').innerHTML += `${numbers[i]}`;
}
