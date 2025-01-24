//Написать функцию, которая суммирует все простые числа до n (аргумент функции)
const sumPrimeNumbers = (lastNumber: number): number => {
  let sum: number = 0;

  const primeNumbers = (num: number): boolean => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i: number = 2; i <= lastNumber; i++) {
    if (primeNumbers(i)) {
      sum += i;
    }
  }
  return sum;
};
