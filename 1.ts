// 1. Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа

const factorial = (count: number): number | string => {
  let result: number | string = 1;

  if (count < 0) {
    result = "Нельзя посчитать факториал у отрицательного числа";
  } else {
    for (let i: number = 1; i <= count; i++) {
      result *= i;
    }
  }

  return result;
};
const num: number = 8;

console.log(factorial(num));
