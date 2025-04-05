// Порахувати кількість true в масиві
// [true, false, true, true] → 3

function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {  
        if (i === true) {
            count++;
        }
    }
}

countTrue([true, false, true, true]); // 3