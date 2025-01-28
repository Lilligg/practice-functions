//Написать функцию, которая принимает массив различной вложенности и возвращает одномерный массив.
// Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].

const unpackingArray = (arr: Array<unknown>): Array<unknown> => {
  const result: unknown[] = [];

  const flatten = (input: unknown[]) => {
    for (const item of input) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  };

  flatten(arr);
  return result;
};

// Честно, не поняла, как сделать, поэтому сперла
console.log(unpackingArray([1, [2], [3, [[4]]]])); //[1, 2, 3, 4]
