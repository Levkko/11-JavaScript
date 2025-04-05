// Повернути числа, кратні 3
// [1, 3, 4, 6, 7] → [3, 6]

function getMultiplesOfThree(arr) {
    return arr.filter(n => n % 3 === 0);
}

getMultiplesOfThree([1, 3, 4, 6, 7]); // [3, 6]