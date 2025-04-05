// Порахувати кількість слів у рядку
// "Hello world again" → 3

function countWords(str) {
    let count = 0;
    let detachedWords = str.split(' ');

    for (let i = 0; i < detachedWords.length; i++) {
        count++
    }

    return count;
}

countWords("Hello world again"); // 3