//8. Написать функцию, которая на вход принимает массив, состоящий из двух строк
//Функция должна вернуть true, если строка в первом элементе массива содержит
//все буквы строки во втором элементе массива (регистр игнорируется)

const boolArray = (arr:Array<string>):boolean =>{
let firstArr:string = arr[0];
let secondArr:string = arr[1];
firstArr = firstArr.toLowerCase();
secondArr = secondArr.toLowerCase();
for (let i:number = 0; i < firstArr.length; i++) {
    if (secondArr.indexOf(firstArr[i]) === -1) {
        return false;
    }
}
return true;
}   

let arr:Array<string> = ["Привет", "приветик"]
console.log(boolArray(arr))

//процентов на 45 сперла из интернета