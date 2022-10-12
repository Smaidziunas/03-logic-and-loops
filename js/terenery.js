'use strict';
console.log('terenery.js');


/*
sukurti kintamaji isStudent (boolean), sukurti kintamaji Name - irasom varda, sukurti town ir irasyti miesta.

norim sugeneruoti sakini kintamajame sentence

<vardas> gyvena <mietas>  ir studijuoja/ ir dirba.

Mike gyvena London ir studijuoja.
James gyvena Barca ir dirba.
*/

// BE TERENERY:::

// #########################
// let isStudent = true;
// let name = 'Marc';
// let town = 'Barcelona';

// let result;

// switch(isStudent) {
//   case isStudent === true: 
//     result =('ir studijuoja');
//     break;
//   case isStudent === false: 
//     result =('ir studijuoja');
//     break;
//   default:
//     console.log('neveikia');
// }

// console.log(result);

// let sentence = `${name} gyvena ${town} ${result}`

// console.log(sentence);

// #############################



// su Terenery:


// Leidzia boolean tipo variables iskleisti ir pritaikyti jiems reiksmes pagal tai, ar jie yra TRUE ar FALSE; 


let sentence = '';
let name = 'Mike';
let town = 'Kaunas';

let isStudent = false;

sentence = `${name} gyvena ${town} ir ${isStudent ? 'studijuoja' : 'dirba'}`;

// let dirbaArStudijuoja = isStudent ? 'studijuoja' : 'dirba';
// sentence = `${name} gyvena ${town} ir ${dirbaArStudijuoja}`;


console.log(sentence);
