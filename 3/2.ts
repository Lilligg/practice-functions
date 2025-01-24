//Написать функцию, которая на вход принимает два массива и возвращает новый массив
// с элементами найденными только в одном массиве, но не в обоих.

const uniqueElements = (arr1: Array<any>, arr2: Array<any>): Array<any> => {
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
