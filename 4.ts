//4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку(первый аргумент), если
//она длиннее заданной максимальной длины строки(второй аргумент) и возвращает обрезанную строку с "..." в конце.

const lengthWords = (value: string, count: number): string => {
    let result: string = value;

    if (value.length > count) {
        result = value.slice(0, count) + "...";
    }

    return (result)
}

const str: string = "Приветичек огромный";
const num: number = 10;

console.log(lengthWords(str, num))