'use strict';

const name = prompt('enter your name');

const target = document.querySelector('#target');

const greeting = `Hello ${name}`;

target.innerHTML = greeting;