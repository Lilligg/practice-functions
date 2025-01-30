//Написать функцию, которая на вход принимает последовательность букв и ищет пропущенные буквы.
//Если все буквы присутствуют в диапазоне, то возвращается undefined. Например: fearNotLetter("abce") должна вернуть "d"

const fearNotLetter = (str: string): string | undefined => {
  const arrElement: Array<string> = [];

  for (let i = 0; i < str.length - 1; i++) {
    const currentCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);

    if (nextCode - currentCode > 1) {
      for (let j = currentCode + 1; j < nextCode; j++) {
        arrElement.push(String.fromCharCode(j));
      }
    }
  }

  if (arrElement.length > 0) {
    return arrElement.join();
  }

  return undefined;
};

console.log(fearNotLetter("abce")); // d
console.log(fearNotLetter("abcdefghjklmno")); // i
console.log(fearNotLetter("абгдежк")); // в,з,и,й
