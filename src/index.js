module.exports = function reverse (n) {
    let absoluteNumber = Math.abs(n)
  let i = absoluteNumber.toString().length
    let result = ''
    let numberStr = absoluteNumber.toString()
  while (i > 0) {
    result = `${result}${numberStr[i-1]}`
    i = i - 1
  }
    
    return result * 1
}
   


