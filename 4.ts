//4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку(первый аргумент), если
//она длиннее заданной максимальной длины строки(второй аргумент) и возвращает обрезанную строку с "..." в конце.

const lengthWords = (string: string, numbers: number): string => {
    let result: string = string;

    if (string.length > numbers) {
        result = string.slice(0, numbers) + "...";
    }
    return (result)
}

let str: string = "Приветичек огромный";
let num: number = 10;

console.log(lengthWords(str, num))