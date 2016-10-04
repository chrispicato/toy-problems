// given a string, return true whether it's a palindrome
// do not use string.reverse

var palindrome = function (string) {
  var reversed = '';

  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string.charAt(i);
  }

  if (reversed === string) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome('dad'));
console.log(palindrome('spaceship'));