'use strict';
console.log('muzikineUzd.js');



// let isLoggedIn = true;
// let message = `You are currently${isLoggedIn ? '' : 'not'} logged to the system.`

// console.log(message);

let grupe = 5;

if(grupe <= 0) {
  console.log('ne grupe');
} else if (grupe === 1) {
  console.log('solo');
} else if (grupe === 2){
  console.log('duetas');
} else if (grupe === 3){
  console.log('trio');
} else if (grupe === 4){
  console.log('kvartetas');
} else if (grupe > 4){
  console.log('didele grupe');
}
