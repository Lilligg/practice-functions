//5. Написать функцию, которая на вход принимает строку и возвращает эту строку в формате:
//каждое слово начинается с заглавной буквы, остальные в нижнем регистре

const upRegister = (value: string): string => {
    let arrayOfString: Array<string> = value.split(" ");
    let result: Array<string> = [];

    for (let word of arrayOfString) {
        result.push(word.slice(0, 1).toUpperCase() + word.slice(1));
    }

    return result.join(" ");
}

const str: string = "боже как я устала все это писать спаси и сохрани";

console.log(upRegister(str))