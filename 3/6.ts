//Написать функцию, которая осуществляет поиск и замену в предложении. Первый аргумент - это строка,
// в которой осуществляется поиск и замена. Второй аргумент - это слово, которое нужно заменить,
// третий аргумент - слово, на которое нужно заменить. При замене сохраняйте регистр первого символа в исходном слове.

const changeWord = (str: string, oldWord: string, newWord: string): string => {
  if (oldWord[0] === oldWord.toLowerCase()) {
    newWord = newWord[0].toLowerCase() + newWord.slice(1);
  } else {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }
  return str.replace(oldWord, newWord);
};

console.log(changeWord("Привет, меня зовут Алиша", "Алиша", "лида")); // Привет, меня зовут Лида
