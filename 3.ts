//3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых чисел
// и возвращает массив, состоящий из наибольшего числа каждого представленного подмассива.

const bigNumberInArrays = (array: Array<Array<number>>): Array<number> => {
    const newBigArrays: Array<number> = [];

    for (let i: number = 0; i < array.length; i++) {
        array[i].sort((a: number, b: number): number => b - a);
        newBigArrays.push(array[i][0]);
    }

    return (newBigArrays);
}

const array: Array<Array<number>> = [[1, 2, 3], [1, 4, 6, 8, 9], [4, 6, 8, 3, 1, 2, 4], [3, 6, 7, -1, -5, -11]];

console.log(bigNumberInArrays(array));