'use strict';
console.log('main.js');

// logical operators
// && - AND  operatorius

console.group('&& AND operatorius')
console.log('true && true ===', true && true);
console.log('true && false ===', true && false);
console.log('false && true ===', false && true);
console.log('false && false ===', false && false);
console.groupEnd();

console.group('|| OR operatorius')
console.log('true || true ===', true || true);
console.log('true || false ===', true || false);
console.log('false || true ===', false || true);
console.log('false || false ===', false || false);
console.groupEnd();

console.log('!true', !true);
console.log('!false', !false);
console.log('!kazkas', !'kazkas');
// !! - bang bang ~ Boolean('kazkas')
console.log("!!'kazkas'", !!'kazkas');
console.log('!!""', !!'');