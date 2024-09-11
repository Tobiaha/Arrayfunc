'use strict'
const numbers = [];
const evenNumbers = [];

function evenNumbersloop() {
    while (true) {
        const input = prompt("Give a number for an array or write 'done' to finish ");
        if (input.toLowerCase() === 'done') {
            break;
        } else {
            let number = parseFloat(input);
            if (!isNaN(number)) {
                numbers.push(number);
            } else {
                console.log('Not a valid number');
            }
        }
    }
    for (const n of numbers) {
        if (n % 2 === 0) {
            evenNumbers.push(n);
        }
    }
    console.log("Numbers entered: ", numbers); //testing to see if number went through

    const result = document.getElementById('result');
    let p = document.createElement("p");

    p.textContent = `Even numbers: [${evenNumbers.join(', ')}]`;
    result.appendChild(p);

}

evenNumbersloop();