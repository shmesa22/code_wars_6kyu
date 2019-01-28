/**
 * Sum all digits in n. If the result is a one digit number
 * return it, otherwise repeat sum.
 *
 * @param   {Number} n
 * @returns {Number} a single-digit number
 */

function digital_root(n) {
  if (`${n}`.length <= 1) {
    return n;
  }

  const sum = `${n}`.split('').reduce((sum, num) => sum + +num, 0);

  return digital_root(sum);
}

module.exports = digital_root;
