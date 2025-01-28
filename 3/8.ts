//Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений.
// Значения должны быть отсортированы по их первоначальному порядку.

const uniteUnique = (...arrays: Array<Array<any>>): Array<any> => {
  let allValues: Array<any> = [];
  allValues = allValues.concat(...arrays);

  const uniqueValues: Array<any> = [];

  for (const value of allValues) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues;
};

console.log(uniteUnique([1, 2, 3], [2, 3, 4], [5])); // [1, 2, 3, 4, 5]
console.log(uniteUnique(["a", "b"], ["b", "c"], ["c", "d"])); // [a, b, c, d]
console.log(uniteUnique([9, 2], [9, 4], [5])); // [9, 2, 4, 5]
