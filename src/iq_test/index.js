/**
 * Find the number that differs from the others in a numbers list. There
 * should be at least 3 numbers in the list.
 * If the first number is even and the second is odd, or vice-versa, then
 * it means that the different number is one of the first two. Checking
 * the third number will let us know if it is the first or the second one.
 * If both elements are equal, and they are even it means the different
 * element is odd, and if they are odd then the different number is even.
 *
 * @param   {String} numbers - list of numbers in form of a string
 * @returns {Number} the index (1 based) of the different number in the list
 */

function iqTest(numbers) {
  const numbersList = numbers.split(' ');

  if(numbersList.length < 3) {
    throw new Error('Not enough numbers in the list');
  }

  const firstModulo = numbersList[0] % 2;
  const secondModulo = numbersList[1] % 2;

  if(firstModulo !== secondModulo) {
    return firstModulo === numbersList[2] % 2 ? 2 : 1;
  }

  return +numbersList.findIndex(number => number % 2 !== firstModulo) + 1;
}

module.exports = iqTest;
