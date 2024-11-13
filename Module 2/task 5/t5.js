'use strict'
let number;
const numbers = [];
while (true){
   number = parseInt(prompt('Enter a number'));
   if (numbers.includes(number)) {
     break;
   }
   numbers.push(number);

}
numbers.sort((a,b) => a - b);
console.log(`Numbers in accending order: ${numbers}`);
