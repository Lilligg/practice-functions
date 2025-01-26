//Написать функцию, которая на вход принимает последовательность букв и ищет пропущенные буквы.
//Если все буквы присутствуют в диапазоне, то возвращается undefined. Например: fearNotLetter("abce") должна вернуть "d"

const fearNotLetter = (str: string): string | undefined => {
  const startCode = str.charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    const currentCode = str.charCodeAt(i);

    if (currentCode !== startCode + i) {
      return String.fromCharCode(startCode + i);
    }
  }

  return undefined;
};
