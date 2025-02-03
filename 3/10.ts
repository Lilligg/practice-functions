//Написать функцию, которая суммирует все простые числа до n (аргумент функции)
const sumPrimeNumbers = (lastNumber: number): number => {
  let sum: number = 0;

  const isPrime = (num: number): boolean => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i: number = 2; i <= lastNumber; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumPrimeNumbers(10)); // 17 (2 + 3 + 5 + 7)
console.log(sumPrimeNumbers(20)); // 77 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19)
