//Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений.
// Значения должны быть отсортированы по их первоначальному порядку.

const uniteUnique = (...arrays: Array<Array<any>>): Array<any> => {
  return [...new Set(([] as string[]).concat(...arrays))];
};

console.log(uniteUnique([1, 2, 3], [2, 3, 4], [5])); // [1, 2, 3, 4, 5]
console.log(uniteUnique(["a", "b"], ["b", "c"], ["c", "d"])); // [a, b, c, d]
console.log(uniteUnique([9, 2], [9, 4], [5, 5])); // [9, 2, 4, 5]

//решение, если уникальные - те, которые встречаются только один раз
const uniteOnlyUnique = (...arrays: Array<Array<any>>): Array<any> => {
  const allElements: Array<any> = ([] as string[]).concat(...arrays);
  const uniqueElements = new Set();
  const duplicate = new Set();

  for (const element of allElements) {
    if (!uniqueElements.has(element)) {
      uniqueElements.add(element);
    } else {
      duplicate.add(element);
    }
  }

  return [...uniqueElements].filter((element) => !duplicate.has(element));
};

console.log(
  "решение, если уникальные - те, которые встречаются только один раз:",
);
console.log(uniteOnlyUnique([1, 2, 3], [2, 3, 4], [5])); // [1, 4, 5]
console.log(uniteOnlyUnique(["a", "b"], ["b", "c"], ["c", "d"])); // [a, d]
console.log(uniteOnlyUnique([9, 2], [9, 4], [5, 5])); // [2, 4]
