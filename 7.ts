// 7. Написать функцию, которая на вход массив и удаляет в нем все "ложные значения"

const onlyTrueArray = (arr: Array<unknown>): Array<unknown> => {
    return arr.filter((item: unknown): boolean => !!item);
}

const array: Array<unknown> = [434, 0, 1, 0, 34, "ff", 33];

console.log(onlyTrueArray(array));