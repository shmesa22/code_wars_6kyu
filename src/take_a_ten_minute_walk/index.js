/**
 * First, check if the walk takes you exactly ten minutes.
 * Create a Direction Map and count how many times you walk in each
 * direction. Check if the times you walked south are the same as the
 * times you walked north, and the times you walked west are the same
 * as the times you walked east.
 *
 * @param   {String[]} walk - list of consecutive directions you should
 * walk
 * @returns {boolean} true if the walk takes you exactly ten minutes and
 * returns you to your starting point, otherwise false
 */

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  debugger;
  const directionsMap = walk.reduce((dirsMap, dir) => {
    dirsMap[dir] = dirsMap[dir] + 1 || 1;
    return dirsMap;
  }, {});

  return directionsMap['s'] === directionsMap['n'] && directionsMap['w'] === directionsMap['e'];
}

module.exports = isValidWalk;
