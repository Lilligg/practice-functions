// 1. Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа

const factorial = (number: number): number | string => {
    let result: number | string = 1;
    if (number < 0) {
        result = "Нельзя посчитать факториал у отрицательного числа"
    } else {
        for (let i: number = 1; i <= number; i++) {
            result *= i;
        }
    }

    return (result)
}

let num: number = 8;

console.log(factorial(num));