//Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки),
//и ‘(апостроф) в строке их соответствующим HTML - кодом.

const replacementSymbolHTML = (str: string): string => {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("‘", "&#39;");
};
