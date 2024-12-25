//10. Используя рекурсию(без использования циклов). Написать функцию,
//которая принимает массив и целое число (n) и заполняет массив числами от n до 1

const fullArray = (arr, n) => {
    if(n<=1){
    arr.push(n);
    return fullArray(arr, n + 1)
    }
    else{return arr}
}

let arr = [];
let n = -3;

console.log(fullArray(arr, n));