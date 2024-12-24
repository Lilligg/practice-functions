//2. Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке

const longWord = (str) => {
    let newString = str.replaceAll(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
    let arrayNewString = newString.split(" ");
    let arrayLength = arrayNewString.map(item => item.length);
    let sortArray = arrayLength.sort((a, b) => {return(b-a)});

    return(
        sortArray[0]
    )
}

let words = "Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке";
console.log(longWord(words))