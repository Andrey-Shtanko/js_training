// Потрібно створити функцію яка буде приймати 2 параметра.
// 1)Масив студентів.
// 2)Ту мову програмування яку потрібно знайти.
// 3)Функція повинна повертати масив імен які вивчають цю мову.

const students = [
  {
    name: `Lika`,
    langunage: `html`,
  },
  {
    name: `Anton`,
    langunage: `css`,
  },
  {
    name: `Andriy`,
    langunage: `js`,
  },
  {
    name: `Vova`,
    langunage: `html`,
  },
  {
    name: `Alina`,
    langunage: `css`,
  },
  {
    name: `Egor`,
    langunage: `js`,
  },
  {
    name: `Aleksandr`,
    langunage: `html`,
  },
  {
    name: `Taras`,
    langunage: `css`,
  },
  {
    name: `Ivan`,
    langunage: `js`,
  },
  {
    name: `Make`,
    langunage: `html`,
  },
];
const fnA = function (array, lang) {
  const newArr = [];

  for (const { name, langunage } of array) {
    if (langunage === lang) {
      newArr.push(name);
    }
  }
  return newArr;
};
console.log(fnA(students, 'js'));
