'use strict';
console.log('else25.js');


// let isLoggedIn = true;
// let message = `You are currently${isLoggedIn ? '' : 'not'} logged to the system.`

// console.log(message);

let number = 23;

console.log(number % 2);

if(number % 2 === 0) {
  console.log('lyginis');
} else if (number % 2 === 1) {
  console.log('nelyginis');
} else {
  console.log('neveikia');
}


// gali buti parasomas kaip ternary: 

console.log(number, `${number % 2 === 0 ? 'lyginis' : 'nelyginis'}`);