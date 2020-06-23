// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (early, late) => {
    const final = [...early];
    late.forEach( elem => final.push(elem) );
    final.forEach( elem => console.log(elem) );
}

printGuestOrder(earlyBirds, lateComers);