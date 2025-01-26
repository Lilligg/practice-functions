//Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений.
// Значения должны быть отсортированы по их первоначальному порядку.

const uniteUnique = (...arrays: Array<Array<any>>): Array<any> => {
  const uniqueValues = new Set();

  arrays.forEach((array) => {
    array.forEach((value) => {
      uniqueValues.add(value);
    });
  });

  return Array.from(uniqueValues);
};
