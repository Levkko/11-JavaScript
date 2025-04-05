// Перевернути слова в рядку
// "hello world" → "olleh dlrow"

function reverseWords(str) {
  let detachedWords = str.split(" ");
  let reversedWords = detachedWords.map((word) =>
    word.split("").reverse().join("")
  );
  return reversedWords.join(" ");
}

reverseWords("hello world"); // "olleh dlrow"
