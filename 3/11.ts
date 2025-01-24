//Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого,
// пока функция не вернет true, а затем возвращает оставшуюся часть массива.
// Например: dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) должна вернуть [3, 4].
const dropElements = (
  array: Array<unknown>,
  func: (element: unknown) => boolean,
): Array<unknown> => {
  const indexTrue: number = array.findIndex(func);
  if (indexTrue === -1) {
    return [];
  }
  return array.slice(indexTrue);
};
