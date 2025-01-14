const myEvery = (
  array: Array<unknown>,
  callback: (element: any, index?: number, array?: Array<unknown>) => boolean,
): boolean => {
  for (let i: number = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false;
    }
  }
  return true;
};

export default myEvery;
