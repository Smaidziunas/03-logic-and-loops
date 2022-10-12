'use strict';
console.log('daysSwitch.js');


// RANDOM SKAICIUS NUO VIENO IKI 5, su pavertimu i savaites diena naudojant switch

function random1or5(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = random1or5(1, 9)
console.log(rndInt)


switch(rndInt) {
  case 1:
    // jeigu salyga lygu 1
    console.log('Pirmadienis');
    // nebetikrina toliau
    break;
  case 2:
    // jeigu salyga lygu 2
    console.log('Antradienis');
    // nebetikrina toliau
    break;
  case 3:
    // jeigu salyga lygu 3
    console.log('Treciadienis');
    // nebetikrina toliau
    break;
  case 4:
    // jeigu salyga lygu 4
    console.log('Ketvirtadienis');
    // nebetikrina toliau
    break;
  case 5:
    // jeigu salyga lygu 5
    console.log('Penktadienis');
    // nebetikrina toliau
    break;
  case 6:
  case 7:
    // jeigu salyga lygu 6 arba 7
    console.log('Savaitgalis');
    // nebetikrina toliau
    break;
  default:
    console.log('ne darbo diena');
}


