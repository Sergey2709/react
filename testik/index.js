const schemaData = [
  { name: 'Jou Doe', dob: '21-03-1991', favorite_animals: ['cat', 'dog'] },
  { name: 'Ivan Deshek', dob: '24-04-2005', favorite_animals: ['dog'] },
  { name: 'Denis Xevin', dob: '12-06-1951', favorite_animals: ['cat'] },
  { name: 'Jak Baed', dob: '02-09-1961', favorite_animals: ['cat', 'rabbit'] },
  { name: 'Lolla Nekson', dob: '14-01-1971', favorite_animals: ['rabbit', 'dog'] },
  { name: 'Mariya Arroka', dob: '21-12-1981', favorite_animals: ['rabbit', 'dog', 'rabbit'] },
];

// эта функция модифицирует объект к требованиям по выводу.
const getModifiedArr = () => {
  const result = schemaData.map(el => {
    const nameArr = el.name.split(' ');
    const [first_name, last_name] = nameArr;

    const ageValue = getAge(el.dob);

    return {
      first_name,
      last_name,
      age: ageValue,
      favorite_animals: el.favorite_animals,
    };
  });
  return result;
};

// эта функция выдает возраст человека на сегодняшний день для записи в модифицированный по требованиям вывода массив
const getAge = dateString => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const correctDobStr = dateString.split('-').reverse().join('-');
  const dob = new Date(correctDobStr);
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

  const age = today.getFullYear() - dob.getFullYear();

  if (today < dobnow) {
    return age - 1;
  }

  return age;
};

const getFilteredData = (a, b) => {
  const modifiedDataArr = getModifiedArr();

  const result = modifiedDataArr.reduce((acc, item) => {
    // Проверка на наличие аргументов для вызова ф-ции
    if (!a) {
      return 'Error - You entered too little data';
    }

    const filterArr = () => {
      if (Array.isArray(a) && a.length === item.favorite_animals.length) {
        const filterAnimalsArr = item.favorite_animals.filter(el => a.includes(el));
        if (filterAnimalsArr) {
          acc.push(item);
        }
      }
    };

    const filterObj = arg => {
      const { from, to } = arg;
      if (from <= item.age && item.age <= to) {
        acc.push(item);
      }
    };

    // проверяем если входят два параметра вызова функции.
    if ((a, b)) {
      filterArr();
      filterObj(b);
    }

    // проверяем если входит 1 параметр массив.
    filterArr();

    // проверяем если входит 1 параметр объект
    filterObj(a);

    return [...new Set(acc)]; // удаляем повторно записанные объекты в аккумулятор и выводим его
  }, []);

  return result;
};

// проверки вызова...
console.log(getFilteredData(['rabbit', 'dog', 'rabbit'], { from: 35, to: 64 }));
console.log(getFilteredData({ from: 15, to: 34 }));
console.log(getFilteredData(['rabbit', 'dog', 'rabbit']));
console.log(getFilteredData());
