// Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += arraySum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
};

console.log(arraySum([1,[2,3],[[4]],5]));