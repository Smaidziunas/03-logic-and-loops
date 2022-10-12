'use strict';
console.log('uzd1.js');


// RANDOM SKAICIUS NUO VIENO IKI 5, su pavertimu i savaites diena naudojant IF

function random1or5(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = random1or5(1, 5)
console.log(rndInt)


if (rndInt === 1) {
  console.log('Pirmadienis');
} else if (rndInt === 2) {
  console.log('Antradienis');
} else if (rndInt === 3) {
  console.log('Treciadienis');
} else if (rndInt === 4) {
  console.log('Ketvirtadienis');  
} else if (rndInt === 5) {
  console.log('Penktadienis');  
} else {
    console.log('kazkas blogai');
  } 
