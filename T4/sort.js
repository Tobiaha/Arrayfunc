'use strict';


function sortArray(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b);//ascending
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a); //descending
    } else {
        console.log('Invalid function parameter')
        return;
    }
    return numbers;
    //T4 ja T5
}

const numbers = [5, 1, 45, 13, 12, 7];
console.log(`original array: ${numbers}`);

console.log(sortArray([...numbers], "asc")); //ascending
console.log(sortArray([...numbers], "desc")); //descending