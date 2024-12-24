//5. Написать функцию, которая на вход принимает строку и возвращает эту строку в формате:
//каждое слово начинается с заглавной буквы, остальные в нижнем регистре

const upRegistr = (string) =>{
  let Array = string.split(" ");
  let result = [];
  for(let word of Array){
    result.push(word.slice(0,1).toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

str = "боже как я устала все это писать спаси и сохрани";
console.log(upRegistr(str))