var uniqueInOrder=function(iterable){
  let res = []
  for(const el of iterable) {
    if(res[res.length - 1] !== el) {
      res.push(el)
    }
  }
  return res
}

module.exports = uniqueInOrder
