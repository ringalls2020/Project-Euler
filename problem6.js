//Sum Square Difference

//Difference of Squared Sum and Sum of Squares from 1-100.

function sumSqDiff() {
  var sumSq = 0;

  var sum = 0;
  for (var i = 1; i <= 100; i++) {
    sumSq += Math.pow(i, 2);
    sum += i;
  }
  var sqSum = Math.pow(sum, 2);
  var diff = sqSum - sumSq;
  return diff;
};

console.log(sumSqDiff());
