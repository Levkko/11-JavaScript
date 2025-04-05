// Видалити всі null/undefined. Але число 0, видалятись не має
// [1, null, 2, undefined, 0, 3] → [1, 2, 0, 3]

function removeNullUndefined(arr) {
    return arr.filter(n => n !== null && n !== undefined);
}

removeNullUndefined([1, null, 2, undefined, 0, 3]); // [1, 2, 0, 3]