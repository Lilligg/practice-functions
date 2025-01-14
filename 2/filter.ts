const myFilter = (
  array: Array<unknown>,
  callback: (
    element: unknown,
    index?: number,
    array?: Array<unknown>,
  ) => boolean,
): Array<unknown> => {
  const result: Array<unknown> = [];

  for (let i: number = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};
