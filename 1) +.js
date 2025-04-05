// Підрахунок літер:
// "banana" → { b:1, a:3, n:2 }

function countLetters(str) {
  let result = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
    n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
  };
  let detachedSymbols = str.split("");

  detachedSymbols.forEach((student) => {
    if (student in result) {
      result[student]++;
    }
  });

  for (let letter in result) {
    if (result[letter] === 0) {
      delete result[letter];
    }
  }

  return result;
}

countLetters("banana"); // { b:1, a:3, n:2 }
countLetters("apple"); // { a:1, p:2, l:1, e:1 }

//знаю, рішення таке собі, і я вже знайшов спрощене,
//без вказування всіх букв алфавіту, але мені так
//подобається цей варіант, що я вирішив його залишити