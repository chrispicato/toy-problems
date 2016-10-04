var factorial = function(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return null;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(20));
console.log(factorial(8));
console.log(factorial(2));