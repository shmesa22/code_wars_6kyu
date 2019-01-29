/**
 * Sum the last 3 elements of a sequence numbers passed in as an array,
 * add that number to the signature, and repeat. Return the first n elements
 * of that array
 *
 * @param	  {Number[]} signature a list of numbers always containing 3 numbers
 * @param   {Number} n number of elements to be returned, always non-negative
 * number
 * @returns {Number[]} a sequence of numbers, of length n, where the last number
 * is the sum of the last 3. If the n is less than 3, then a partial signature is
 * returned
 */

function tribonacci(signature,n){
  if (signature.length >= n) {
    return signature.slice(0, n);
  }

  const sumOfLast3 = signature.slice(-3).reduce((sum, num) => sum + num, 0);

  return tribonacci([
    ...signature,
    sumOfLast3,
  ], n);
}

module.exports = tribonacci;
