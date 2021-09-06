const autoArr = [];

for (let i = 10100; i < 12000; i += 2) {
  autoArr.push(i);
}

const summNumbers = number => {
  const numArr = number
    .toString()
    .split('')
    .reduce((acc, item) => {
      acc += +item;
      if (acc % 4 === 0) {
        return acc;
      }
    }, 0);

  return true;
};

const getNumbers = arr => {
  const result = arr.filter(el => {
    if (el.toString()[2] % 2 !== 0 && summNumbers(el)) {
      return el;
    };
  });
  return result;
};

console.log(getNumbers(autoArr));
