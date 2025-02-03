//Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки),
//и ‘(апостроф) в строке их соответствующим HTML - кодом.

const replacementSymbolHTML = (str: string): string => {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("‘", "&apos;");
};

console.log(
  replacementSymbolHTML(
    'Привет & скоро будут стрелочки <вот они> "кавычки" и ‘апостроф‘',
  ),
);

//Привет &amp; скоро будут стрелочки &lt;вот они&gt; &quot;кавычки&quot; и &apos;апостроф&apos;
