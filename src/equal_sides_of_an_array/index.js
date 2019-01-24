/**
 * find the first index where the sum of the integers to the left
 * of the index is equal to the sum of the integers to the
 * right of the index.
 *
 * Time complexity = O(n)
 * Additional space = O(1)
 *
 * @param	  {number[]} arr - list of integers
 * @returns	{number} Lowest index if both sides of index sums is
 * equal, otherwise -1
 */

function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((sum, num) => sum + num, 0);

  for(const [index, num] of arr.entries()) {
    rightSum -= num;

    if (leftSum === rightSum) {
      return index;
    }

    leftSum += num;
  }

  return -1;
}

module.exports = findEvenIndex;
