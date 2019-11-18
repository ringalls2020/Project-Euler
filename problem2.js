//Even Fibonacci Numbers

//Sum of even Fibonacci Numbers less than or equal to 4 million

function evenFib() {
  var j = 1;
  var z = 0;
  var sum = 0;
  for (var i = 2; i <= 4000000; i) {
    z = i + j;
    j = i;
    i = z;
    if (j % 2 === 0) {
      sum += j;
    }
  }
  return sum;
};

console.log(evenFib());
