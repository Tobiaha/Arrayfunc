'use strict';
let numbers = [];

for (let i = 0; i < 5; i++) {
  const num = parseInt(prompt('Give a number for array'));
  numbers.push(num);
}

console.log(numbers);

const search = parseInt(prompt('Enter a number to search: '));

if (numbers.includes(search)) {
  console.log(`Number ${search} is found in the array.`);
} else {
  console.log(`Number ${search} is not found in the array.`);
}

console.log(`updated numbers ${numbers}`);
numbers.sort((a, b) => a - b);
console.log(`sorted numbers: ${numbers}`);


