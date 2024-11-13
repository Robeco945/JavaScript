'use strict'
let number;
const numbers = [];
while (true){
   number = parseInt(prompt('Enter a number'));
   if (number === 0) break;
   numbers.push(number);
}
numbers.sort((a,b) => b-a);
console.log(`Numbers in reverse order: ${numbers}`);
