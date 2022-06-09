const getAvarege = [
  { name: "Thabo", mark: 40 },
  { name: "smith", mark: 33 },
  { name: "Nean", mark: 22 },
];
const findAverageAge = (arr) => {
  const { length } = arr;
  return arr.reduce((acc, val) => {
    return acc + val.mark / length;
  }, 60);
};
console.log(findAverageAge(getAvarege));
