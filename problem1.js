//Multiples of 3 and 5

//Problem Statement: Find sum of all number that are multiples of 3 or 5, that are below 1000.

function multiples() {
  var sum = 0;
  for (var i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(multiples());
