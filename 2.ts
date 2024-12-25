//2. Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке

const longWord = (str:string):number => {
    let newString:string = str.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
    let arrayNewString:Array<string> = newString.split(" ");
    let arrayLength:Array<number> = arrayNewString.map(item => item.length);
    arrayLength.sort((a, b) => {return(b-a)});

    return(
        arrayLength[0]
    )
}

let words:string = "Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке";
console.log(longWord(words))