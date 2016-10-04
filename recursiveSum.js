var sum = function(array) {
  var copyArray = Array.prototype.slice.call(array);
  if (copyArray.length === 0) {
    return 0;
  } else {
    return copyArray.shift() + sum(copyArray);
  }
};

console.log(sum([3, 4, 5, 6, 7]));
console.log(sum([3, 22, -19, 4, 2]));
console.log(sum([31, 14, 15, 16, 15]));