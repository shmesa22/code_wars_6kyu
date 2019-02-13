function duplicateCount(text){
  const charMap = text.toLowerCase().split('').reduce((map, char) => {
    map[char] = map[char] + 1 || 1;
    return map;
  }, {});

  return Object.values(charMap).filter(count => count > 1).length;
}

module.exports = duplicateCount;
