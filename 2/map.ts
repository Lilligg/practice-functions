const myMap = (
  array: Array<unknown>,
  callback: (
    element: unknown,
    index?: number,
    array?: Array<unknown>,
  ) => unknown,
): Array<unknown> => {
  const result: Array<unknown> = [];

  for (let i: number = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
};
