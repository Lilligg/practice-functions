//Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно).
// Удалить из массива все элементы, которые имеют то же значение, что и эти аргументы.

const deleteElements = (
  arrElements: Array<unknown>,
  ...deleteEl: Array<unknown>
): Array<unknown> => {
  return arrElements.filter((element) => !deleteEl.includes(element));
};

console.log(deleteElements([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
console.log(deleteElements(["груша", "банан", "апельсин", "банан"], "банан")); //[груша, апельсин]
