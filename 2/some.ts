const mySome = (
  array: Array<unknown>,
  callback: (
    element: unknown,
    index?: number,
    array?: Array<unknown>,
  ) => boolean,
): boolean => {
  for (let i: number = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      return true;
    }
  }
  return false;
};
