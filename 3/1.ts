//Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел плюс сумму всех чисел между ними.
// Наименьшее число не всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)

const sumAll = (numbers: Array<number>): number => {
  numbers.sort((a, b) => a - b);
  let sum: number = 0;
  for (let i: number = numbers[0]; i <= numbers[1]; i += 1) {
    sum += i;
  }
  return sum;
};
