/**
 * Replace al WUBs for a white space and then remove all white spaces at the
 * beginning or the end of the song lyrics.
 *
 * @param	  {String} song - Song lyrics
 * @returns {String} Original song lyrics (Without WUBs)
 */

function songDecoder(song) {
  return song.replace(/(WUB)+/gi, ' ').trim();
}

module.exports = songDecoder;
