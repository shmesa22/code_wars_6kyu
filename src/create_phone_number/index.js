function createPhoneNumber(numbers){
  let phone = '('

  numbers.forEach((n, i) => {
    phone += n
    if(i === 2) phone += ') '
    if(i === 5) phone += '-'
  })

  return phone
}

module.exports = createPhoneNumber
