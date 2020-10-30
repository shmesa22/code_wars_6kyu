var countBits = function(n) {
  const ones = n.toString(2).match(/1/g) || []
  return ones.length
};

module.exports = countBits
