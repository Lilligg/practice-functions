//Написать функцию, которая на вход принимает 2 массива и целое число n. Функция должна скопировать каждый элемент 1 массива
//во 2 по порядку начиная с индекса n второго массива и вернуть полученный массив. Входные массивы не должны изменяться.
//Например: при входных данных ([1,2,3], [4,5], 1) должно вернуться [4,1,2,3,5].

const unifiedArray = (
  arr1: Array<number>,
  arr2: Array<number>,
  n: number,
): {
  result: Array<number>;
  arr2: Array<number>;
  arr1: Array<number>;
} => {
  const result: Array<number> = arr2.slice(0, n);

  result.push(...arr1.slice());
  result.push(...arr2.slice(n));

  return {
    result: result,
    arr2: arr2,
    arr1: arr1,
  };
};

const arr1: Array<number> = [1, 3, 4];
const arr2: Array<number> = [6, 7, 8];
const n: number = 2;

console.log(unifiedArray(arr1, arr2, n));
