'use strict';
console.log('laikas.js');


/*

6 - 12 = rytas
13 - 18 = diena
19 - 23 = vakaras
24 - 5 = naktis


10 > x > 0; 
programavime, reikia aprasyti atskirai
*/


let laikas = 10;

if (laikas >= 6 && laikas <= 12) {
  console.log('Labas Rytas!');
} else if(laikas >= 12 && laikas <= 18) {
  console.log('Laba diena!');
} else if(laikas >= 19 && laikas <= 23) {
  console.log('Labas vakaras');
} else {
  console.log('geros nakties!');
}
