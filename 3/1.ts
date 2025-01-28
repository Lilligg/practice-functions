//Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел плюс сумму всех чисел между ними.
// Наименьшее число не всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)

const sumAll = (numbers: Array<number>): number => {
  numbers.sort((a, b) => a - b);
  let sum: number = 0;
  for (let i: number = numbers[0]; i <= numbers[1]; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll([1, 4])); //10
console.log(sumAll([3, 7])); //25
console.log(sumAll([5, -2])); //12
console.log(sumAll([6, 6])); //6
