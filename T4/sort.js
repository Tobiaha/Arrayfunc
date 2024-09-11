'use strict';

const numbers = [5, 1, 45, 13, 12, 7];

function sortArray() {
    console.log(`original array: ${numbers}`);
    numbers.sort((a, b) => a - b);

    console.log(`ascending array: ${numbers}`);
}
sortArray();