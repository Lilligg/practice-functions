//Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно).
// Удалить из массива все элементы, которые имеют то же значение, что и эти аргументы.

const deleteElements = (
  arrElements: Array<unknown>,
  ...deleteEl: Array<unknown>
): Array<unknown> => {
  return arrElements.filter((element) => !deleteEl.includes(element));
};
