/**
 * Find the outlier number in an array of integers.
 *
 * @param   {Number[]} integers
 * @returns {Number} return the only odd or even number
 */

function findOutlier(integers){
  // if array is comprised of mostly even numbers oddOrEven
  // will be a positive integer, otherwise a negative integer
  const oddOrEven = integers.slice(0, 3).reduce((sum, int) =>
    sum = int % 2 === 0 ? sum + 1 : sum - 1, 0);

  if(oddOrEven > 0) {
    return integers.find(int => int % 2 !== 0);
  }

  return integers.find(int => int % 2 === 0);
}

module.exports = findOutlier;
