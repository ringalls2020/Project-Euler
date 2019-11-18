//Smallest Multiple

//Find smallest postive number evenly divisible by all numbers 1-20.

function smallestMultiple() {
  for (var small = 2520; small>1; small++) {
    for (var i = 1; i <= 20; i++) {
      if (small % i !== 0) {
        break;
      }
    }
    if (small % i === 0) {
      return small;
      break;
    }
  }
};

console.log(smallestMultiple());
