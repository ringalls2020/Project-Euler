//Largest Prime Factor

//This function find the largest prime factor of a number, n.

let n = 600851475143;
function largestPrimeFactor(n){

  for(var i = 3; i <= Math.sqrt(n); i += 2){
    while(n%i===0){
      maxPrime = i;
      n /= i;
    }
  }
  return n;
}
console.log(largestPrimeFactor(n));
