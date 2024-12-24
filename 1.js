
// 1. Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа

const factorial = (number) => {
let result = 1;   
    if(number<0){
        result = "Нельзя посчитать факториал у отрицательного числа"
    }
    else{
        for(i = 1; i<= number; i++){
            result *= i;
        }
    }
    
return(result)
}

console.log(factorial(8));