// 7. Написать функцию, которая на вход массив и удаляет в нем все "ложные значения"

const onlyTrueArray = (arr) => {
    return arr.filter(item => !!item);
}

let array = [434, 0, , , , , 0, 34, "ff", 33];
console.log(onlyTrueArray(array))

//Вообще не поняла, как это делать (честно сперла где-то)
//Старалась решить через цикл и splice()