// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function
const createRecommendations = obj => {
  const keys = Object.keys(obj);
  return keys.map( key => {
    return `With ${key}, it is best to have ${obj[key]}`;
  })
}
// printRecommendations function
const printRecommendations = arr => {
  arr.forEach( elem => console.log(` - ${elem}`));
}
// function call (done)
printRecommendations(createRecommendations(foodPairings));
