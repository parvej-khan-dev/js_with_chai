
function compose1(functions) {
  return function (...args) {
    return functions.reduce((acc, fn) => {
      return fn(...acc);
    }, args);
  };
}

// Example usage:
function add(x, y) {
  return x + y;
}

function multi(x, y) {
  return x * y;
}

let composedFn = compose1([multi, add]);

console.log(composedFn(3,4))