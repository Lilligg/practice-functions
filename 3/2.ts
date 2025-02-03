//Написать функцию, которая на вход принимает два массива и возвращает новый массив
// с элементами найденными только в одном массиве, но не в обоих.

const uniqueElements = (
  arr1: Array<unknown>,
  arr2: Array<unknown>,
): Array<unknown> => {
  const result: Array<any> = [];
  for (const element of arr1) {
    if (!arr2.includes(element)) {
      result.push(element);
    }
  }
  for (const element of arr2) {
    if (!arr1.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

console.log(uniqueElements([1, 2, 3], [2, 3, 4])); //[1, 4]
console.log(
  uniqueElements(["яблоко", "банан", "арбуз"], ["банан", "вишня", "кукуруза"]),
); //[яблоко, арбуз, вишня, кукуруза]
