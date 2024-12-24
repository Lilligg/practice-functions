//9. Написать функцию, которая на вход принимает массив и целое число
//Функция должна разбить массив(первый аргумент) на группы длиной size
//(второй аргумент) и вернуть их в виде двумерного массива.

const twoMerArray = (arr, n) =>{
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
    }
return result
}

arr = [1,3,5,6,7,8,9,9,7,7,6,5];
n = 5;

console.log(twoMerArray(arr, n))