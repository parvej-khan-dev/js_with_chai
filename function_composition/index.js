function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

// other way

function compose1(functions) {
  return function (x) {
    for (const fn of functions.reverse()) {
      x = fn(x);
    }
    return x;
  };
}

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4)); // 9

// const fn1 = compose1([(x) => x + 1, (x) => 2 * x]);

// another example
function compose3(functions) {
  return function (...args) {
    let result = args;
    console.log(result);
    for (const fn of functions.reverse()) {
      result = [fn(...result)];
      console.log(result);
    }
    return result[0];
  };
}
// Example usage:
function add(x, y) {
  return x + y;
}

function multi(x, y) {
  return x * y;
}

//   let fns = compose3([square, add]);

// multiple arg
function compose4(functions) {
  return function (...args) {
    let result = args;
    console.log(result);
    for (const fn of functions) {
      result = [fn(...result)];
      console.log(result);
    }
    return result[0];
  };
}

let fns1 = compose4([multi, add]);

console.log(fns1(3, 2));
