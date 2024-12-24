//3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых чисел 
// и возвращает массив, состоящий из наибольшего числа каждого представленного подмассива.

const bigNumberInArrays = (massiv) => {
    const newBigArrays = [];
    for (i=0; i<massiv.length; i++){
        massiv[i].sort((a, b) => b-a)
        newBigArrays.push(massiv[i][0])
    }
    return(newBigArrays)
}

const array = [[1,2,3],[1,4,6,8,9],[4,6,8,3,1,2,4],[3,6,7,-1,-5,-11]];

console.log(bigNumberInArrays(array));