// 7. Написать функцию, которая на вход массив и удаляет в нем все "ложные значения"

const onlyTrueArray = (arr:Array<unknown>):Array<unknown> => {
    return arr.filter((item: unknown):boolean => !!item);
}

let array:Array<unknown> = [434, 0, , , , , 0, 34, "ff", 33];
console.log(onlyTrueArray(array))

//Вообще не поняла, как это делать (честно сперла где-то)
//Старалась решить через цикл и splice()