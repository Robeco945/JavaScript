'use strict';
const int1 = parseInt(prompt('enter the first integer: '));
const int2 = parseInt(prompt('enter the second integer: '));
const int3 = parseInt(prompt('enter the third integer: '));
const sum = int1 + int2 + int3;
const average = (int1 + int2 + int3)/3;
const product = int1 * int2 * int3;
document.querySelector('#target').innerHTML = `<p>the sum of the three integers are: ${sum}</p>` + `<p>the average of the three integers are: ${average}</p>` + `<p>the product of the three integers are: ${product}</p>`;