// given n number of stairs, output a number of solutions possible with 1, 2 and 3 stairs

var nStairs = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else if (n === 3) {
    return 4;
  } else {
    return nStairs(n - 3) + nStairs(n - 2) + nStairs(n - 1);
  }
};

console.log(nStairs(1));
console.log(nStairs(2));
console.log(nStairs(3));
console.log(nStairs(4));
console.log(nStairs(5));