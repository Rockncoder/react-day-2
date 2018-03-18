// Run this code from webstorm

function add(a, b) {
  return a + b;
}


console.info('10 + 5 = ', add(10, 5));

// a simple function factory
function old_addN(n) {
  // a function is returned!!!
  return function (x) {
    return n + x;
  }
}

// let's createElement two functions, add10 and add50
const add10 = old_addN(10);
const add50 = old_addN(50);

// they don't interfere with each other or share variable or state
console.info('10 + 1 = ', add10(1));
console.info('50 + 1 = ', add50(1));
console.info('10 + 5 = ', add10(5));

//const addN = (n) => (x) => n + x;
const addN = n => x => n + x;
const add100 = addN(100);
const add500 = addN(500);
console.info('100 + 1 = ', add100(1));
console.info('500 + 1 = ', add500(1));
console.info('100 + 5 = ', add100(5));

// Lets go one step farther
// f and g are both functions
const old_compose = function (f, g) {
  return function (x) {
    return g(f(x));
  }
};

const compose = (f, g) => (x) => g(f(x));

const stringFun = compose(
  x => x.toUpperCase(),
  x => x += " more"
);

const logStringFun = compose(
  x => {console.info(`${x} `)}
);


console.info('', stringFun('dog'));
