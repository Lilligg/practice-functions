//Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого,
// пока функция не вернет true, а затем возвращает оставшуюся часть массива.
// Например: dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) должна вернуть [3, 4].
const dropElements = (
  array: Array<any>,
  func: (element: any) => boolean,
): Array<any> => {
  const indexTrue: number = array.findIndex(func);
  if (indexTrue === -1) {
    return [];
  }
  return array.slice(indexTrue);
};

console.log(dropElements([1, 2, 3, 4], (n) => n >= 3)); // [3, 4]
console.log(dropElements([1, 2, 3, 4], (n) => n > 5)); // []
console.log(dropElements([1, 2, 3, 4], (n) => n > 0)); // [1, 2, 3, 4]
