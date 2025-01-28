//Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов,
// имеющих совпадающие пары имя и значение (второй аргумент).
// Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 },
// { "bat":2 }], { "apple": 1, "bat": 2 })
// должен вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

type ObjectType = { [key: string]: any };

const whatIsInAName = (
  collection: ObjectType[],
  source: ObjectType,
): ObjectType[] => {
  const keys = Object.keys(source);

  return collection.filter((obj) => {
    return keys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key],
    );
  });
};

//сама не решила

const collection1 = [
  { apple: 1, bat: 2 },
  { apple: 1 },
  { apple: 1, bat: 2, cookie: 2 },
  { bat: 2 },
];
const source1 = { apple: 1, bat: 2 };
console.log(whatIsInAName(collection1, source1));
//[ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

const collection2 = [{ banana: 3 }, { orange: 4 }];
const source2 = { apple: 1 };
console.log(whatIsInAName(collection2, source2));
//[]
