//2. Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке

const longWord = (value: string): number => {
  const newString: string = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
  const arrayNewString: Array<string> = newString.split(" ");

  const arrayLength: Array<number> = arrayNewString.map(
    (item: string): number => item.length,
  );
  arrayLength.sort((a: number, b: number): number => b - a);

  return arrayLength[0];
};

const words: string =
  "Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке";

console.log(longWord(words));
