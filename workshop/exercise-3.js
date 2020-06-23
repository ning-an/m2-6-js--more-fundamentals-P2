// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

const printOrder = (arr) => {
  const newArr = [...arr];
  newArr.sort();
  newArr.forEach( elem => console.log(`${elem} (${arr.indexOf(elem) + 1})`));
}
printOrder(mostPopularFood);