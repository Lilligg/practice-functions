//Написать функцию, которая конвертирует строку в spinal-case регистр.

const convertSpinalCase = (str: string): string => {
  return str
    .replace(/[^\w\sа-яА-ЯёЁ-]+/g, "")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

console.log(
  convertSpinalCase(
    "Написать функцию, которая конвертирует строку в spinal-case регистр.",
  ),
);
//написать-функцию-которая-конвертирует-строку-в-spinal-case-регистр
