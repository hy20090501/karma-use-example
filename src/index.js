function isNum(num) {
  if (typeof num === 'number') {
    return true
  } else {
    return false
  }
}

function sum(x, y) {
  if(x<0) {
    return 0
  }
  return x+y
}

module.exports = {
  isNum,
  sum
}