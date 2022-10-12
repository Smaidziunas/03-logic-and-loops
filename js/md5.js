'use strict';
console.log('md5.js');


// Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else (arba switch), kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam. VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche. BMW group priklauso: BMW, Mini, Rolls-Royce.

let car = 'bmw';

let result;

switch (car) {
  case 'VW':
  case 'Audi':
  case 'Bentley':
  case 'Bugatti':
  case 'Lamborghini':
  case 'Porsche':
    console.log('VW Group');
    result = 'VW Group';
  break;
  case 'BMW':
  case 'Mini':
  case 'Rolls-Royce':
    console.log('BMW Group');
    result = 'BMW Group';
  break;
  default:
    console.log('kita');
    result = 'kita';
}

//  su if atrodytu:

console.log(car);
console.log(result);

if(car === 'audi' || car == 'bmw') {
  console.log('good car');  
} else {
  console.log('wtf');
}