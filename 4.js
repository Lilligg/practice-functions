//4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку(первый аргумент), если
//она длиннее заданной максимальной длины строки(второй аргумент) и возвращает обрезанную строку с "..." в конце.

const lengthWords = (string, numbers) =>{
    let result = string;
    if(string.length>numbers){
        result = string.slice(0,numbers) + "...";
    }
    return(result)
}

let str = "Приветичек огромный";
let num = 10;

console.log(lengthWords(str,num))