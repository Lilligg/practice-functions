const myFind = (
  array: Array<unknown>,
  callback: (
    element: unknown,
    index?: number,
    array?: Array<unknown>,
  ) => unknown,
): unknown => {
  let result: unknown;

  for (let i: number = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result = array[i];
      break;
    }
  }
  return result;
};
