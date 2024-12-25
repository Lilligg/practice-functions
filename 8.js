//8. Написать функцию, которая на вход принимает массив, состоящий из двух строк
//Функция должна вернуть true, если строка в первом элементе массива содержит
//все буквы строки во втором элементе массива (регистр игнорируется)

const boolArray = (arr) =>{
let firstArr = arr[0];
let seconsArr = arr[1];
firstArr = firstArr.toLowerCase();
seconsArr = seconsArr.toLowerCase();
for (let i = 0; i < firstArr.length; i++) {
    if (seconsArr.indexOf(firstArr[i]) === -1) {
        return false;
    }
}
return true;
}   

arr = ["Привет", "приветик"]
console.log(boolArray(arr))

//процентов на 45 сперла из интернета