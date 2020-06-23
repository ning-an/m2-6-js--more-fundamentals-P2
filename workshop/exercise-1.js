// Exercise 1
// ----------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

const fixList = (arr, first, last) => {
  const newArr = [...arr];
  newArr.unshift(first);
  newArr.pop();
  newArr.push(last);
  return newArr;
}

// console.log(fixList(mostPopularFood, 'bean burritos', 'buffalo-flavored cauliflower'))

const printList = (arr) => {
  arr.forEach( (elem, i) => console.log(`${i+1}. ${elem}`) );
}

printList(fixList(mostPopularFood, 'bean burritos', 'buffalo-flavored cauliflower'));