//Написать функцию, которая на вход принимает 2 массива и целое число n. Функция должна скопировать каждый элемент 1 массива
//во 2 по порядку начиная с индекса n второго массива и вернуть полученный массив. Входные массивы не должны изменяться.
//Например: при входных данных ([1,2,3], [4,5], 1) должно вернуться [4,1,2,3,5].

const unifiedArray = (arr1:Array<number>, arr2:Array<number>, n:number):Array<number> =>{
//let result = arr2;
//1 вариант
//result.splice(n, 0, ...arr1)

//2 вариант (я не знаю, какой лучше)
let result: Array<number> = arr2.slice(0, n);
result.push(...arr1.slice());
result.push(...arr2.slice(n))

return (result);
}

let arr1:Array<number>=[1,3,4];
let arr2:Array<number>=[6,7,8];
let n:number = 2;

console.log(unifiedArray(arr1, arr2, n))